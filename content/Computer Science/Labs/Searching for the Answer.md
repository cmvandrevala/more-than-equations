---
title: Searching for the Answer
date: 2025-04-03
tags: [c-plus-plus, java, csc-216, inverted-file-index]
description: In this lab, you will implement a program that creates an inverted file index for a document.
---

## 🔖 Background Information

An inverted file index is a data structure similar to the index of a book. Given a document $D$, which can be viewed as an unordered, numbered list of words, an inverted file index is an ordered list of words, $L$, such that, for each word $w$ in $L$, we store the indices of the places in $D$ where $w$ appears. These indexes are critical in the implementation of search engines.

## 🎯 Problem Statement

Write a program that reads a text file from disk and then writes an inverted file index back to the disk.

## ✅ Acceptance Criteria

* Your program should read a text file from disk and create an inverted file index based on the contents of the file.
* Your program should save the inverted file index to the disk.
* The inverted file index should contain all of the unique words in the document as well as every index where they appear.
* You do NOT need to index so called "common words" - a, and, the, they, to, for, they, you, your, etc.
* You should ignore punctuation like periods and commas when you index the words.
* You should ignore capitalization - the words Apple and apple should be counted as the same word.
* Hyphenated words like well-known or high-quality count as one word.
* Your inverted index should list terms in alphabetical order.

## 📋 Dev Notes

I am going to test your code with a short essay, so make sure that it is an efficient implementation!

## 🖥️ Example Output

Suppose my file on disk contains the text:

> The brown cat and the blue rat live in the brown house. They enjoy live music concerts.

Then, the inverted word index might look like this.

```json
{
  "blue": [5],
  "brown": [1, 10],
  "cat": [2],
  "concerts": [16],
  "enjoy": [13],
  "house": [11],
  "live": [7, 14],
  "music": [15],
  "rat": [6]
}
```

Note that I start indexing words from zero.

## 📝 Thought Provoking Questions

1. Describe your algorithm for implementing the inverted file index in a few sentences.
2. Benchmark the runtime of your algorithm using some different sized inputs. Visualize yur results using an appropriate graph and post it in the discussion board.
3. What is the time complexity of your algorithm based on your benchmarks?
4. Estimate the space complexity of your algorithm. Explain your reasoning.

## 💼 Add-Ons For the Portfolio

N/A

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/searching-for-the-answer-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/searching-for-the-answer-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
