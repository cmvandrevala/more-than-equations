import { Element, Text } from "hast"

const URL_PATTERN = /https?:\/\/[^\s<>)"]+/g

const arxivPatterns = [
  /arxiv.org\/abs\/(\d+\.\d+)/,
  /arxiv.org\/pdf\/(\d+\.\d+)(\.pdf)?/,
  /arxiv.org\/\w+\/(\d+\.\d+)/,
]

function extractArxivId(url: string): string | null {
  try {
    const urlObj = new URL(url)
    if (!urlObj.hostname.includes("arxiv.org")) {
      return null
    }

    for (const pattern of arxivPatterns) {
      const match = url.match(pattern)
      if (match) {
        return match[1]
      }
    }
    return null
  } catch (e) {
    return null
  }
}

function processTextNode(node: Text, prettyLinks: boolean): (Element | Text)[] {
  const text = node.value
  const matches = Array.from(text.matchAll(URL_PATTERN))

  if (matches.length === 0) {
    return [node]
  }

  const result: (Element | Text)[] = []
  let lastIndex = 0

  matches.forEach((match) => {
    const url = match[0]
    const startIndex = match.index!

    // Add text before URL if exists
    if (startIndex > lastIndex) {
      result.push({
        type: "text",
        value: text.slice(lastIndex, startIndex),
      })
    }

    const isArxiv = extractArxivId(url)
    const isTransformerCircuit = url.toLowerCase().includes("transformer-circuits.pub")
    const isAF = url.toLowerCase().includes("alignmentforum.org")
    const isGitHub = url.toLowerCase().includes("github.com")

    if (prettyLinks) {
      if (isArxiv !== null) {
        // Add the formatted text
        result.push({
          type: "text",
          value: `arXiv preprint arXiv:${isArxiv} `,
        })
      }
    }

    // Add anchor element for URL
    result.push({
      type: "element",
      tagName: "a",
      properties: {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: ["csl-external-link"],
      },
      children: [
        {
          type: "text",
          value: prettyLinks
            ? isArxiv
              ? "[arxiv]"
              : isGitHub
                ? "[GitHub]"
                : isTransformerCircuit
                  ? "[link]"
                  : isAF
                    ? "[post]"
                    : url
            : url,
        },
      ],
    })
    lastIndex = startIndex + url.length
  })

  // Add remaining text after last URL if exists
  if (lastIndex < text.length) {
    result.push({
      type: "text",
      value: text.slice(lastIndex),
    })
  }

  return result
}

export function processNodes(nodes: (Element | Text)[], prettyLinks: boolean): (Element | Text)[] {
  return nodes.flatMap((node) => {
    if (node.type === "text") {
      return processTextNode(node, prettyLinks)
    }
    if (node.type === "element") {
      return {
        ...node,
        children: processNodes(node.children as (Element | Text)[], prettyLinks),
      }
    }
    return [node]
  })
}
