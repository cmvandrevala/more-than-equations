---
title: Adjacent Computer Player
tags:
  - c-plus-plus
  - csc-122
  - csc-214
  - java
description: This portfolio has you expand on your previous game of tic-tac-toe by introducing a computer player that marks a cell adjacent to an existing move.
---

## 🔖 Background Information

Tic-tac-toe is a game for two players who take turns marking the spaces in a three-by-three grid with an "X" or "O". The player who puts three of their marks in a horizontal, vertical, or diagonal row is the winner. You can see a full writeup of the rules and a bit of game theory behind tic-tac-toe on its Wikipedia page [@Tictactoe2024].

## 🎯 Problem Statement

Add a new feature to the existing game of tic-tac-toe that you wrote in [[Human vs Human]]. In this feature, a player can choose if they want to play against an "adjacent" computer player (in addition to any of the previous options that were available). The goal of the adjacent computer player is to make moves in cells that are adjacent to the previous move.

## ✅ Acceptance Criteria

A move for the adjacent computer player should follow this algorithm:

* Figure out where the previous move was made.
* If the cell directly to the right of the previous move exists and is available, take that cell. Otherwise, move onto the next step.
* If the cell directly to the left of the previous move exists and is available, take that cell. Otherwise, move onto the next step.
* If the cell directly above the previous move exists and is available, take that cell. Otherwise, move onto the next step.
* If the cell directly below the previous move exists and is available, take that cell. Otherwise, move onto the next step.
* Take a random available cell on the board.

Your program should not crash from user input!

## 📋 Dev Notes

Keep the idea of an MVP (minimal viable product) in mind as you write your code. If you have to ask "should I include this feature?", the answer is probably "no" unless specifically outlined in the Acceptance Criteria.

You MUST build these new features on top of your previous submission. Thus, you might want to take some time to address any comments that I made before implementing new features.

## 🖥️ Example Output

```bash
Welcome to Tic-Tac-Toe!

Would you like to play against a human or an "adjacent" computer player?

1. Human
2. Adjacent Computer Player

What is your selection? 2

Great! Let's begin!

    1  |  2  |  3
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  1

    X  |  2  |  3
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

The computer moved in spot 2.

    X  |  O  |  3
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  6

    X  |  O  |  3
  -----+-----+-----
    4  |  5  |  X
  -----+-----+-----
    7  |  8  |  9

The computer moved in spot 5.

    X  |  O  |  3
  -----+-----+-----
    4  |  O  |  X
  -----+-----+-----
    7  |  8  |  9

What is your move?  3

    X  |  O  |  X
  -----+-----+-----
    4  |  O  |  X
  -----+-----+-----
    7  |  8  |  9

The computer moved randomly in spot 7.

    X  |  O  |  X
  -----+-----+-----
    4  |  O  |  X
  -----+-----+-----
    O  |  8  |  9

What is your move?  8

    X  |  O  |  X
  -----+-----+-----
    4  |  O  |  X
  -----+-----+-----
    O  |  X  |  9

The computer moved randomly in spot 9.

    X  |  O  |  X
  -----+-----+-----
    4  |  O  |  X
  -----+-----+-----
    O  |  X  |  O

What is your move?  4

    X  |  O  |  X
  -----+-----+-----
    X  |  O  |  X
  -----+-----+-----
    O  |  X  |  O

It's a draw...

Would you like to play again (yes/no)? no

Goodbye!
```

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/tic-tac-toe-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/tic-tac-toe-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
