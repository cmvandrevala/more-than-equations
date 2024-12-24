import rehypeCitation from "rehype-citation"
import { PluggableList } from "unified"
import { visit } from "unist-util-visit"
import { QuartzTransformerPlugin } from "../types"
import { Element, Text, Root as HtmlRoot } from "hast"
import { processNodes } from "../../util/foo"

export interface Options {
  bibliographyFile: string
  suppressBibliography: boolean
  linkCitations: boolean
  csl: string
}

const defaultOptions: Options = {
  bibliographyFile: "./bibliography.bib",
  suppressBibliography: false,
  linkCitations: false,
  csl: "apa",
}

export const Citations: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Citations",
    htmlPlugins(ctx) {
      const plugins: PluggableList = []

      // Add rehype-citation to the list of plugins
      plugins.push([
        rehypeCitation,
        {
          bibliography: opts.bibliographyFile,
          suppressBibliography: opts.suppressBibliography,
          linkCitations: opts.linkCitations,
          csl: opts.csl,
          lang: ctx.cfg.configuration.locale ?? "en-US",
        },
      ])

      // Transform the HTML of the citattions; add data-no-popover property to the citation links
      // using https://github.com/syntax-tree/unist-util-visit as they're just anochor links
      plugins.push(() => {
        return (tree, _file) => {
          visit(tree, "element", (node, _index, _parent) => {
            if (node.tagName === "a" && node.properties?.href?.startsWith("#bib")) {
              node.properties["data-no-popover"] = true
            }
          })
        }
      })

      // Format external links correctly
      plugins.push(() => {
        return (tree: HtmlRoot, _file) => {
          visit(tree, "element", (node: Element, index, parent) => {
            if ((node.properties?.className as string[])?.includes("references")) {
              const sectionChildren: Element[] = []
              visit(node, "element", (entry) => {
                if ((entry.properties?.className as string[])?.includes("csl-entry")) {
                  sectionChildren.push({
                    type: "element",
                    tagName: "li",
                    properties: {
                      ...entry.properties,
                    },
                    children: processNodes(entry.children as (Element | Text)[], opts.prettyLinks!),
                  })
                }
              })
              parent!.children.splice(index as number, 1, {
                type: "element",
                tagName: "section",
                properties: {
                  "data-references": true,
                  className: ["bibliography"],
                },
                children: [
                  {
                    type: "element",
                    tagName: "h2",
                    properties: { id: "reference-label" },
                    children: [{ type: "text", value: "Bibliography" }],
                  },
                  {
                    type: "element",
                    tagName: "ul",
                    properties: {},
                    children: sectionChildren,
                  },
                ],
              })
            }
          })
        }
      })

      return plugins
    },
  }
}
