---
title: Trap Cell
tags:
  - c-plus-plus
  - csc-122
  - csc-214
  - java
description: This portfolio has you expand on your previous game of tic-tac-toe by introducing a trap cell mechanic to your game of tic-tac-toe.
---

## 🔖 Background Information

Tic-tac-toe is a game for two players who take turns marking the spaces in a three-by-three grid with an "X" or "O". The player who puts three of their marks in a horizontal, vertical, or diagonal row is the winner. You can see a full writeup of the rules and a bit of game theory behind tic-tac-toe on its Wikipedia page [@Tictactoe2024].

## 🎯 Problem Statement

Add a new feature onto the existing game of tic-tac-toe that you wrote in [[Human vs Human]]. When a user starts a new game, they should have the option to include a "trap cell" on the board. If they decline, the game of tic-tac-toe proceeds like normal. However, if they accept, one random cell on the board should secretly be marked as a "trap" cell. The players should not know which cell is the trap. If either player takes the trap cell, they immediately lose their turn, and the cell remains unmarked.

## ✅ Acceptance Criteria

* The trap cell should be located in a new, random spot every time a new game is started.
* I should be able to choose if I want to play with or without a trap cell in the main menu.
* Computer players are affected by the trap cell, just like regular users.
* The computer players should not know the location of the trap cell. They should play as if they don't know where it is located.
* A draw game means that every cell on the board is filled without a winner, not including the trap cell.

Your program should not crash from user input!

## 📋 Dev Notes

How might you go about unit testing the trap feature in your code? You can't really test a random cell directly since it changes every time you start a new game. One idea you might consider is to fix the seed value in your tests and then write unit tests based on a single, unchanging location for the trap cell. Just be sure that your seed in your driver program is not fixed!

## 🖥️ Example Output

```bash
Welcome to Tic-Tac-Toe!

Would you like to include a trap cell in your game?

1. Yes
2. No

What is your selection? 1

Great! A trap has been hidden on the board.

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

What is your move?  3

    X  |  2  |  O
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  5

Oh no! You set off the trap! X loses their turn.

    X  |  2  |  O
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  2

    X  |  O  |  O
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  6

    X  |  O  |  O
  -----+-----+-----
    4  |  5  |  X
  -----+-----+-----
    7  |  8  |  9

What is your move?  7

    X  |  O  |  O
  -----+-----+-----
    4  |  5  |  X
  -----+-----+-----
    O  |  8  |  9

What is your move?  8

    X  |  O  |  O
  -----+-----+-----
    4  |  5  |  X
  -----+-----+-----
    O  |  X  |  9

What is your move?  5

Oh no! You set off the trap! O loses their turn.

    X  |  O  |  O
  -----+-----+-----
    4  |  5  |  X
  -----+-----+-----
    O  |  X  |  9

What is your move?  9

    X  |  O  |  O
  -----+-----+-----
    4  |  5  |  X
  -----+-----+-----
    O  |  X  |  X

What is your move?  4

    X  |  O  |  O
  -----+-----+-----
    O  |  5  |  X
  -----+-----+-----
    O  |  X  |  X

It's a draw...

Would you like to play again (yes/no)? no

Goodbye!
```

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/tic-tac-toe-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/tic-tac-toe-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
