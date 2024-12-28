---
layout: activity
title: "Hangman: Part 1"
draft: true
---

## 🔖 Background Information

Hangman is a two-player game where one player thinks of a word and another player tries to guess it letter by letter. However, the guessing player only has a certain number of guesses available before they lose. It is called Hangman because traditionally, every time player two misses a guess, player one draws another part of a dead stick figure. Side note, it is really morbid to explain the rules of this kid's game...

## 🎯 Problem Statement

Create a simplified version of this game that can be played in the console. When you start the program, it will prompt player one to enter a word. Then, it will ask player two to guess single letter characters, one by one. After each guess, it will print out the current guesses, the number of guesses remaining, and the current status of the word.

The goal of this activity is to get a "full vertical slice" working - in other words, we want player two to be able to play a game of Hangman from start to finish. We will worry about validation and improving the game in a followup activity.

## ✅ Acceptance Criteria

* When I start the game, I should see a welcome message.
* Then, the game should prompt player one to enter a word.
* After player one enters a word, it should tell player two how many letters are in the word and prompt them to guess a letter.
  * If player two guesses a correct letter, it should display which letters have been filled in thus far, how many guesses they have remaining, and prompt them again.
  * If player two guesses an incorrect letter, it should do the same thing as if they had guessed correctly, but it should first decrement the number of guesses remaining.
* The game ends when player two either guesses the correct word or runs out of guesses. The program should display a message and exit gracefully at this point.

## 📋 Dev Notes

* It might be helpful to use one or more arrays in this solution.
* You do NOT need to worry about validating player two's inputs or hiding player one's input. We will take care of that in a followup activity.

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

Player two! What is your guess?  c

You have guessed: e, c
You have 8 guesses remaining.
Your current status: c _ c _ _ _

Player two! What is your guess?  r

You have guessed: e, c, r
You have 7 guesses remaining.
Your current status: c _ c _ _ _

# And so on...
```

## 📘 Works Cited

N/A
