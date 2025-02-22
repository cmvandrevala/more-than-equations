---
title: Tic-Tac-Toe
tags: [c-plus-plus, csc-214]
description: This portfolio has you build your own console-based tic-tac-toe game that supports human versus human play.
---

## 🔖 Background Information

Tic-tac-toe is a game for two players who take turns marking the spaces in a three-by-three grid with an "X" or "O". The player who puts three of their marks in a horizontal, vertical, or diagonal row is the winner. You can see a full writeup of the rules and a bit of game theory behind tic-tac-toe on its Wikipedia page [@Tictactoe2024].

## 🎯 Problem Statement

Implement a human versus human game of tic-tac-toe that can be played on the console.

Note: You will expand on this codebase multiple times throughout the semester in different portfolios.

## ✅ Acceptance Criteria

You should implement a human vs human game of tic-tac-toe.

* Computer players are not required for this submission.
* Player 1 is “X” and Player 2 is “O”.
* The game is played on a 3 x 3 board.
* This game of tic-tac-toe should implement all the “classic” rules – e.g. players take turns marking the board, three marks in a row wins, etc.

As a tic-tac-toe player, when I start the program, I should see:

* A welcome message for the game.
* A nicely formatted board consisting of a 3 x 3 square grid of cells. The cells should be numbered 1 – 9.
* A prompt to take a move.

As a tic-tac-toe player, after I make a valid move, I should see:

* The board in its updated state with all of the moves taken thus far
* A prompt for the next player to make a move.
* Details for the end of the game if the game is over (see below).

As a tic-tac-toe player, after I make an invalid move, I should see:

* The board in its current state with no additional moves made
* A prompt telling me that my move was invalid and to try again.

When the game ends:

* It should tell me which player won or if the game ended in a draw.
* It should prompt me to play again.
* If I choose to play the game again, it should start a brand new game with a cleared board.

The program should warn a user when an input is invalid. This applies when a user enters a cell position and when a user decides to play again. Some validations include:

* A cell is already taken.
* A string or char input instead of an integer (or vice versa).
* Random or unexpected symbols.
* Random whitespace.
* A decimal number instead of an integer for the cell input.
* No input (just pressing enter).

Your program should not crash from user input!

## 📋 Dev Notes

Keep the idea of an MVP (minimal viable product) in mind as you write your code. If you have to ask "should I include this feature?", the answer is probably "no" unless specifically outlined in the Acceptance Criteria.

The goal of the tic-tac-toe project is to build on previous submissions. For portfolios 2 and 3, you will build on this same submission to implement more features. You CANNOT rewrite tic-tac-toe from scratch in future submissions.

## 🖥️ Example Output

```bash
$ gradle run

Welcome to Tic-Tac-Toe!

    1  |  2  |  3
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  3

    1  |  2  |  X
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  258

That is not a valid move! Try again.

What is your move?  4

    1  |  2  |  X
  -----+-----+-----
    O  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  4

That is not a valid move! Try again.

What is your move?  6

    1  |  2  |  X
  -----+-----+-----
    O  |  5  |  X
  -----+-----+-----
    7  |  8  |  9

What is your move?  $

That is not a valid move! Try again.

What is your move? 7

    1  |  2  |  X
  -----+-----+-----
    O  |  5  |  X
  -----+-----+-----
    O  |  8  |  9

What is your move? 9

    1  |  2  |  X
  -----+-----+-----
    O  |  5  |  X
  -----+-----+-----
    O  |  8  |  X

Player X wins!

Would you like to play again (yes/no)? foobar

That is not a valid entry!

Would you like to play again (yes/no)? no

Goodbye!
```

## 📘 Works Cited

N/A
