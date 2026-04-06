---
title: First Available Spot Computer Player
tags:
  - c-plus-plus
  - csc-122
  - csc-214
  - java
description: This portfolio has you expand on your previous game of tic-tac-toe by introducing a computer player that always takes the first available spot.
---

## 🔖 Background Information

Tic-tac-toe is a game for two players who take turns marking the spaces in a three-by-three grid with an "X" or "O". The player who puts three of their marks in a horizontal, vertical, or diagonal row is the winner. You can see a full writeup of the rules and a bit of game theory behind tic-tac-toe on its Wikipedia page [@Tictactoe2024].

## 🎯 Problem Statement

Add a new feature onto the existing game of tic-tac-toe that you wrote in [[Human vs Human]]. A player can choose if they want to play against another human player or a computer player that takes the first available spot on the board. They should also be able to choose whether the computer player goes first or second.

## ✅ Acceptance Criteria

You should implement a computer player that takes the first available spot in your game of tic-tac-toe. As a player, when I start the program, I should see a menu asking if I want to play against a human or computer player. If I choose the computer option, I should be able to select if the computer goes first or second.

Your program should not crash from user input!

## 📋 Dev Notes

Keep the idea of an MVP (minimal viable product) in mind as you write your code. If you have to ask "should I include this feature?", the answer is probably "no" unless specifically outlined in the Acceptance Criteria.

You MUST build these new features on top of your previous submission. Thus, you might want to take some time to address any comments that I made before implementing new features.

## 🖥️ Example Output

```bash
Welcome to Tic-Tac-Toe!

What kind of game would you like to play?

1. Human vs. Human
2. Human vs. Computer
3. Computer vs. Human

What is your selection? 3

Great! The computer will go first.

    X  |  2  |  3
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  3

    X  |  X  |  O
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  258

That is not a valid move! Try again.

What is your move?  9

    X  |  X  |  O
  -----+-----+-----
    X  |  5  |  6
  -----+-----+-----
    7  |  8  |  O

What is your move?  6

    X  |  X  |  O
  -----+-----+-----
    X  |  5  |  O
  -----+-----+-----
    7  |  8  |  O

Player O wins!

Would you like to play again (yes/no)? no

Goodbye!
```

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/tic-tac-toe-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/tic-tac-toe-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
