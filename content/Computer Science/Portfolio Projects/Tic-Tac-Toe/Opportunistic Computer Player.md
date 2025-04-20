---
title: Opportunistic Computer Player
tags: [java, csc-214]
description: This portfolio has you expand on your previous game of tic-tac-toe by introducing an opportunistic computer player.
---

## 🔖 Background Information

Tic-tac-toe is a game for two players who take turns marking the spaces in a three-by-three grid with an "X" or "O". The player who puts three of their marks in a horizontal, vertical, or diagonal row is the winner. You can see a full writeup of the rules and a bit of game theory behind tic-tac-toe on its Wikipedia page [@Tictactoe2024].

## 🎯 Problem Statement

Add a new feature onto the existing game of tic-tac-toe that you wrote in [[Human vs Human]]. A player can choose if they want to play against another human player or an opportunistic computer player. They should also be able to choose whether the opportunistic computer player goes first or second.

## ✅ Acceptance Criteria

You should implement an opportunistic computer player in your game of tic-tac-toe with the following behavior. It should check these rules in the order that they are listed, on each of its turns.

1. If it is the first move of the game (i.e. the board is empty), the opportunistic computer player marks one of the four corner spaces.
2. If it is the second move of the game AND the center space is available, the opportunistic computer player marks the center space.
3. If the opportunistic player can move in a space where it would win the game, it takes tht spot.
4. If the opportunistic player can move in a space where it would block its opponent from winning, it takes that spot.
5. The opportunistic player moves in a random spot on the board.

As a player, when I start the program, I should see a menu asking if I want to play against a human or computer player. If I choose the computer option, I should be able to select if the computer goes first or second.

Your program should not crash from user input!

## 📋 Dev Notes

Keep the idea of an MVP (minimal viable product) in mind as you write your code. If you have to ask "should I include this feature?", the answer is probably "no" unless specifically outlined in the Acceptance Criteria.

You MUST build these new features on top of your previous submission. Thus, you might want to take some time to address any comments that I made before implementing new features.

## 🖥️ Example Output

```bash
$ gradle run

Welcome to Tic-Tac-Toe!

What kind of game would you like to play?

1. Human vs. Human
2. Human vs. Computer
3. Computer vs. Human

What is your selection? 3

Great! The computer will go first.

    1  |  2  |  3
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  X

What is your move?  3

    1  |  2  |  O
  -----+-----+-----
    X  |  5  |  6
  -----+-----+-----
    7  |  8  |  X

What is your move?  258

That is not a valid move! Try again.

What is your move?  2

    X  |  O  |  O
  -----+-----+-----
    X  |  5  |  6
  -----+-----+-----
    7  |  8  |  X

What is your move?  6

    X  |  O  |  O
  -----+-----+-----
    X  |  5  |  O
  -----+-----+-----
    X  |  8  |  X

Player X wins!

Would you like to play again (yes/no)? no

Goodbye!
```

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/tic-tac-toe-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
