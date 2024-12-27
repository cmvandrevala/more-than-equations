---
title: Tic-Tac-Toe Board
date: 2024-12-17
tags: [c++, csc-121]
description: In this lab you write a program that displays a tic-tac-toe board on the console. Users will be able to mark the board with a single symbol, but there will be no rules or win conditions implemented just yet.
---

## 🔖 Background Information

Tic-tac-toe is a game for two players who take turns marking the spaces in a three-by-three grid with an "X" or "O". The player who puts three of their marks in a horizontal, vertical, or diagonal row is the winner. You can see a full writeup of the rules and a bit of game theory behind tic-tac-toe on its wiki page [@Tictactoe2024].

## 🎯 Problem Statement

Write a program that prints a tic-tac-toe board to the console and allows a user to mark cells with an "X".

## ✅ Acceptance Criteria

For this lab, we are going to create a bare-bones version of a tic-tac-toe board. You will be able to add in a number of features through the Add-Ons for the Portfolio.

* When I run the program, I should see a nicely formatted tic-tac-toe board with the cells labeled 1 - 9.
* The program should prompt me for the cell I want to fill in.
  * If I choose a number between 1 - 9, the program will mark the cell and prompt me again.
  * If I choose a number outside of the cell range, the program will not change the board, display an error message, and prompt me again.
  * If I type in the word "exit", the program will print a goodbye message and exit gracefully.
* I should see the current state of the board at each prompt.

To clarify the acceptance criteria:

* You do NOT need to swap markers between X and O.
* You do NOT need to check if a cell is already taken before marking it.
* You do NOT need to determine if the game is a win / loss / tie.
* You do NOT need to end the game after a win / loss / tie.
* You do NOT need to validate the user's input - you can assume it is an integer (though it might be outside the 1 - 9 range)

Right now, we are just looking to create a board in the console which a player can mark with an "X".

## 📋 Dev Notes

This lab is a great example of the KISS principle in action [@naorKeepItSimple2020]. We want to isolate and implement one specific part of a larger tic-tac-toe game - printing output to the console and getting a user's input. Try to come up with the simplest and most expressive design for this solution. Don't overcomplicate your code with features you don't need!

## 🖥️ Example Output

Your program should display a nicely formatted tic-tac-toe board and prompt the user for a move.

```bash
$ ./tic_tac_toe

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

    1  |  2  |  X
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  4

    1  |  2  |  X
  -----+-----+-----
    X  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  4

    1  |  2  |  X
  -----+-----+-----
    X  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move? exit

Goodbye!
```

## 📝 Thought Provoking Questions

1. What structure are you using to store the cell coordinates (i.e. array, vector, etc.)?
2. How might you translate a numeric position (1 - 9) into a zero-based position like in a vector or array?

## 💼 Add-Ons For the Portfolio

### (One Credit) Header File

Move any business logic to print a board into a separate file from `main()` and create a corresponding header file. Then, `#include` the header file for your code in `main()`. This should not change the functionality of your code.

### (Two Credits) Prevent Overwriting Taken Cells

Right now, your program does not check to see if a cell is taken before marking it with an "X". In this add-on, check to make sure that the cell is not taken before marking it. If a cell is already taken, prompt the user for another mark.

The output might look something like this:

```bash
$ ./tic_tac_toe

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

What is your move?  3

That space is already taken!

What is your move?  4

    1  |  2  |  X
  -----+-----+-----
    X  |  5  |  6
  -----+-----+-----
    7  |  8  |  9
```

### (Two Credits) Swapping Marks

You need to complete "Prevent Overwriting Taken Cells" before attempting this add-on.

Update your code so that the computer swaps the mark from "X" to "O" on each turn. If a player enters an invalid move (i.e. out of bounds or cell already taken), they should be prompted again and the mark should not change.

Your output might look something like this:

```bash
$ ./tic_tac_toe

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

    1  |  2  |  X
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  4

    1  |  2  |  X
  -----+-----+-----
    O  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  5

    1  |  2  |  X
  -----+-----+-----
    O  |  X  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  5

    1  |  2  |  X
  -----+-----+-----
    O  |  X  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move? exit

Goodbye!
```

### (Three Credits) Choosing a Mark

Update your code to allow a user to choose a one character long mark for the board. If you implemented the "Swapping Marks" add-on from above, they should be able to choose a one character long mark for both player one and player two. The game should display the player's choice for mark instead of X and O. Also, the game should prompt the player to choose another mark if it is not exactly one character.

### (Four Credits) Random Computer Player

Update your code so that player two is a computer player that makes random moves on the board. You do not have to ask the user if they want to play against a human or a computer; you can assume that they will always play against the random computer player.

### (Five Credits) Win, Lose, or Draw

Update your code so that the game ends when a player gets three in a row. You should print out which player won the game (player one or player two) or if the game ended in a tie.

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/tic-tac-toe-board-cpp-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
