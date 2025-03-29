---
title: Magazine Clippings
date: 2025-03-29
tags: [c-plus-plus, java, csc-216, hashmaps]
description: In this lab you will write a program that assesses whether you can construct a string using the characters from another string.
---

## 🔖 Background Information

An old TV trope is the "cut and paste" ransom note. A scoundrel would cut out letters from a magazine or newspaper and paste them together into a note which would be sent to some victim. The idea was that the note is untraceable since they are not using their own handwriting. For example:

<p align="center">
  <img src="https://static.tvtropes.org/pmwiki/pub/images/ransom_note_2433.jpg">
</p>

## 🎯 Problem Statement

Write a function that can efficiently determine if you can create a note given one or more articles of text.

## ✅ Acceptance Criteria

Write a function that takes two arguments - a string which is the note that you want to write as well as an array of  strings which represent all of the magazine articles that you have to cut and paste letters from. The function should return `true` if the note can be constructed by using the letters from magazine articles and `false` otherwise.

* Each letter from the magazine articles can only be used once in the note.
* You do NOT have to worry about whitespace.
* You do NOT have to worry about the case of the characters (it is fine to use an upper case or lower case character interchangeably).
* You DO need to worry about special characters and punctuation (e.g. periods, semicolons, question marks, etc.).

## 📋 Dev Notes

* You could technically brute force this solution with some nested for loops. However, the goal of this lab is to implement an __efficient__ solution. Use the hashmap data structure to your advantage!
* You are allowed to use the built-in hashmap data structures in the language that you are working in.

## 🖥️ Example Output

Here are some sample inputs and outputs for a function `bool canCreateNote(string note, string[] articles)`:

| Note | Articles | Output |
|-----|------|-----|
| a | ["a"] | true |
| a | ["ab"] | true |
| a | ["a", "b"] | true |
| abc | ["a", "b", "c"] | true |
| The bird is red! | ["I write a lot.", "To and fro.", "Here be deadly dragons!"] | true |
| a | ["b"] | false |
| a | ["bc"] | false |
| a | ["b", "c"] | false |
| abc | ["a", "b", "d"] | false |
| The bird is red | ["I write a lot.", "To and fro."] | false |
| The bird is red! | ["I write a lot.", "To and fro.", "Here be deadly dragons"] | false |

## 📝 Thought Provoking Questions

1. What steps did you take to prepare your data? For example, did you combine the articles in some way? Did you filter out certain characters or whitespace?
2. How did you efficiently compare the articles to the note? In other words, how did you utilize the hashmap data structure?
3. Estimate the time complexity of your solution. Explain your reasoning.

## 💼 Add-Ons For the Portfolio

N/A

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/magazine-clippings-java-template)

## 📘 Works Cited

N/A
