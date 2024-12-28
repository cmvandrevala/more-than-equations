---
layout: activity
title: "Hangman: Part 2"
draft: true
---

## 🔖 Background Information

Hangman is a two-player game where one player thinks of a word and another player tries to guess it letter by letter. However, the guessing player only has a certain number of guesses available before they lose. It is called Hangman because traditionally, every time player two misses a guess, player one draws another part of a dead stick figure. Side note, it is really morbid to explain the rules of this kid's game...

## 🎯 Problem Statement

The goal of this activity is to improve on the work that we completed in [Hangman: Part 1]({{ "/teaching/csc/121/activities/hangman-part-1.html" | absolute_url }}). We are going to add:

* Validations to the input for player two
* Blank space to hide the word that player one entered

## ✅ Acceptance Criteria

Update your code with the following features:

* After player one enters a word, print out many new line characters to effectively "hide" the input from player two as the cursor scrolls down the terminal.
* Add validations to make sure that player two only enters one character that has not been guessed before.

## 📋 Dev Notes

* It might be helpful to use one or more arrays in this solution.

## 🖥️ Example Output

```bash
./hangman.out

Welcome to Hangman!

Player one! Enter a word:  cactus

Player two! Guess a word with 6 letters:

Player two! What is your guess?  e

You have guessed: e
You have 9 guesses remaining.
Your current status: _ _ _ _ _ _

Player two! What is your guess?  abcd

That is not a valid guess!

Player two! What is your guess?  c

You have guessed: e, c
You have 8 guesses remaining.
Your current status: c _ c _ _ _

Player two! What is your guess?  c

That guess has already been taken!

Player two! What is your guess?  r

You have guessed: e, c, r
You have 7 guesses remaining.
Your current status: c _ c _ _ _

# And so on...
```

## 📘 Works Cited

N/A
