---
title: "Rock, Paper, Scissors: Part 1"
tags:
  - c-plus-plus
  - csc-121
  - random-numbers
  - conditionals
  - loops
description: This activity will give you some practice working with random numbers, conditionals, and loops.
---

## 🔖 Background Information

Rock, paper, scissors is a two-player game in which each player simultaneously forms one of three shapes with their hand - rock (a closed fist), paper (a flat hand), or scissors (a fist with the index and middle finger forming a "V"). Scoring works as follows:

* Rock beats scissors
* Paper beats rock
* Scissors beats paper
* Every other combination is a tie

## 🎯 Problem Statement

Write a game of rock, paper, scissors that a user can play on the computer against a "random" computer player. This computer player will make random moves of rock, paper, or scissors, regardless of what the user chooses.

## ✅ Acceptance Criteria

1. When I start the game, I should see a welcome message telling me that I am about to play a game of rock, paper, scissors against a random computer player.
2. Next, I should be able to provide an input (rock, paper, or scissors). The computer should make a random move as well.
3. The game should print both of our moves to the console and declare who is the winner or if the game is a tie.
4. Finally, the game will ask if I want to play again or exit.
    * If I choose to play again, the program will start over from the beginning.
    * If I choose to exit, the program will display a "goodbye" message and exit gracefully.

## 📋 Dev Notes

* You should handle erroneous input from the user. If the user enters an invalid option, your program should tell them that they made an error and prompt them again.
* As you write this code, think about how and where you can break up the code into small pieces. This will help organize your code and effectively convey the business logic.

## 🖥️ Example Output

```bash
./rps.out

Welcome to Rock, Paper, Scissors! You are going to play against a random computer player.

Pick a move:

1) Rock
2) Paper
3) Scissors

> 2

You chose Paper while the computer chose Rock. You win!

Play again?

1) Yes
2) No

> 2

Have a great day!
```

## 📘 Works Cited

N/A
