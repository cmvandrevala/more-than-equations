---
title: Itty Bitty Kitties
date: 2024-12-27
tags: [c-plus-plus, csc-121, string-manipulation]
description: In this lab you write a program that replaces substrings within a string.
---

## 🔖 Background Information

An emoticon (short for emotion icon) is a pictorial representation of an action or expression using characters. Emoticons can express feelings, moods, or reactions without needing to write any text.

For example, the following emoticon might suggest that someone is feeling happy:

```text
:-)
```

Conversely, the following emoticon might suggest that someone is feeling slightly frustrated:

```text
(╯°□°）╯︵ ┻━┻
```

## 🎯 Problem Statement

Write a program that will read in a user's input and then print it back to the console with certain words replaced by emoticons. For this problem, you only need to change the first instance of the word in the sentence.

## ✅ Acceptance Criteria

For this version of the word processor, we are going to find and replace cat-related words with different emoticons.

* When I start the program, I should see a prompt to enter a sentence.
* After I enter my sentence, the program should then print back my original sentence as well as the sentence with substitutions given below.
* The program should then display a message and exit gracefully

| Original Word  | Substituted Emoticon |
| -------------- | -------------------- |
| cat            | /ᐠ｡ꞈ｡ᐟ\              |
| kitty / kitten | (•ㅅ•)                |
| yarn           | o~                   |
| angry          | (=ಠᆽಠ=)          |
| dance          | ~( ˘▾˘ ~)          |

## 📋 Dev Notes

* The user's input might be a single character or a full sentence with many words separated by spaces.
* The last character of the cat emoticon is a `\`. If you follow the `\` with a double quote character, the compiler might think that you want to escape the double quote character. Thus, you might have to escape the `\` character.
* You only need to change the first instance of each word in each sentence. There is an add-on to the portfolio where you can handle multiple copies of each word.

## 🖥️ Example Output

```bash
$ ./word_processor.out

Welcome to the Cat Word Processor! Please enter a sentence:

My cat is pretty angry with me right now.

Your sentence is:

My cat is pretty angry with me right now.

Your catified sentence is:

My /ᐠ｡ꞈ｡ᐟ\ is pretty (=ಠᆽಠ=) with me right now.

Have a cat-tastic day!
```

## 📝 Thought Provoking Questions

1. Did you define functions for substituting emoticons for words? If so, which values did you pass by value versus reference?
2. As you write this code, you might notice that there is a lot of repeated business logic. How might you encapsulate this logic in functions?

## 💼 Add-Ons For the Portfolio

### (One Credit) More Emoticons

Add the following emoticons to your program.

| Original Word  | Substituted Emoticon |
| -------------- | -------------------- |
| love           | (₌♥ᆽ♥₌)              |
| happy          | (=^ ◡ ^=)            |
| painful        | (˃ᆺ˂)                |
| surprised      | ／(=๏ x ๏=)＼         |
| mouse          | …ᘛ⁐̤ᕐᐷ                |

### (Two Credits) Case-Insensitive Matches

Right now, your code will replace "cat" with an emoticon, but it will not replace "Cat" with a capital "C". Update your code to replace the first instance of each word, regardless of its capitalization. The program should run identical to before, otherwise.

### (Three Credits) Multiple Instances of Each Word

A user might enter a sentence with multiple instances of each word. Update your program to convert all instances of a word to the emoticon. For example:

```text
$ ./word_processor.out

Welcome to the Cat Word Processor! Please enter a sentence:

cat... I'm a kitty cat... and I dance dance dance, and I
dance dance dance...

Your sentence is:

cat... I'm a kitty cat... and I dance dance dance, and I
dance dance dance...

Your catified sentence is:

/ᐠ｡ꞈ｡ᐟ\... I'm a (•ㅅ•) /ᐠ｡ꞈ｡ᐟ\... and I ~( ˘▾˘ ~) ~( ˘▾˘ ~) ~( ˘▾˘ ~),
and I ~( ˘▾˘ ~) ~( ˘▾˘ ~) ~( ˘▾˘ ~)...

Have a cat-tastic day!
```

Note: if you don't get this reference, let me introduce you to the [internet circa 2007](https://www.youtube.com/watch?v=SaA_cs4WZHM) [@steveibsenKittyCatDance2007].

## 🔗 Useful Links

* [C++ String Replace](https://cplusplus.com/reference/string/string/replace/)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
