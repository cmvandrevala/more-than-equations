---
title: Game Log for Tic-Tac-Toe
tags: [java, csc-214]
description: This portfolio has you expand on your previous game of tic-tac-toe by introducing a running log of which player won the game. Based on this log, you will shuffle the turn order of the tic-tac-toe players.
---

## 🔖 Background Information

Tic-tac-toe is a game for two players who take turns marking the spaces in a three-by-three grid with an "X" or "O". The player who puts three of their marks in a horizontal, vertical, or diagonal row is the winner. You can see a full writeup of the rules and a bit of game theory behind tic-tac-toe on its Wikipedia page [@Tictactoe2024].

## 🎯 Problem Statement

Add new features onto the existing game of tic-tac-toe that you wrote in [[Human vs Human]]. At the end of each round, display the number of wins for each player as well as tie games (i.e. the game log). If the user decides that they want to play again, rearrange the turn order so that the loser of the recently completed round goes first. Finally, save the game log to disk after the user exits the program.

## ✅ Acceptance Criteria

Implement a game log for your game of tic-tac-toe.

* When a round of tic-tac-toe ends, I should see nicely formatted statistics printed out to the screen.
* The statistics should contain information about the number of wins for each player and ties thus far.

When a user exits your program, write the game log to the disk in a nicely formatted manner.

* You do NOT need to "load" the saved file when you start the program again. It is sufficient to keep a running tally of all of the games played during ONE execution of the problem and then just save it to disk.

If a user decides to play again, the player that just lost the game will be the first to move.

* For example, if X just lost to O, then X goes first in the next game. If O just lost to X, then O goes first in the next game.
* You do NOT need to include information about which player went first or second in your game log.

Your program should not crash from user input!

## 📋 Dev Notes

Keep the idea of an MVP (minimal viable product) in mind as you write your code. If you have to ask "should I include this feature?", the answer is probably "no" unless specifically outlined in the Acceptance Criteria.

You MUST build these new features on top of your previous submission. Thus, you might want to take some time to address any comments that I made before implementing new features.

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

What is your move?  4

    1  |  2  |  X
  -----+-----+-----
    O  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move?  6

    1  |  2  |  X
  -----+-----+-----
    O  |  5  |  X
  -----+-----+-----
    7  |  8  |  9


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

Player X wins! The current log is:

Player X Wins   1
Player O Wins   0
Ties            0

Would you like to play again (yes/no)? yes

Great! This time O will go first!

    1  |  2  |  3
  -----+-----+-----
    4  |  5  |  6
  -----+-----+-----
    7  |  8  |  9

What is your move? 7

# Players play another full game...
# Jumping formward to the end of the game...

    O  |  2  |  3
  -----+-----+-----
    O  |  5  |  X
  -----+-----+-----
    O  |  8  |  X

Player O wins! The current log is:

Player X Wins   1
Player O Wins   1
Ties            0

Would you like to play again (yes/no)? no

Writing the game log to disk. Please see game.txt for the final statistics!
```

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/tic-tac-toe-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
