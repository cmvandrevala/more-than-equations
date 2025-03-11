---
title: Battle Boats
tags: [c-plus-plus, csc-121]
description: This portfolio has you build your own miniaturized, console-based version of the game Battleship.
---

## 🔖 Background Information

Battleship is a "strategy" guessing game for two players. Each player has a grid of cells labeled with letters and numbers. At the start of the game, they place a number of ships of differing sizes around their grid, without their opponent seeing the pattern. Then, players take turns calling "shots" at the ships of the other player. If the player calls a spot where no ship is located, the opponent calls out "miss". Conversely, if the player names a spot where a ship is located, the opponent calls out "hit". The objective of the game is to hit all of your opponent's ships and destroy their fleet before they can destroy yours [@BattleshipGame2024].

You can play an online version of Battleship [here](https://www.calculators.org/games/battleship/) [@PlayBattleshipBoard].

We will create a miniature variation of Battleship that I will affectionately call "Battle Boats" ⛵️.

## 🎯 Problem Statement

Build a game of "Battle Boats" that fulfills all of the required attributes and two of the optional attributes listed in the Acceptance Criteria.

## ✅ Acceptance Criteria

### Required Attributes (Complete All)

We are going to implement a single player game where a human player plays against a "random" computer.

1. When I start the game, I should see a welcome message and a prompt to place my boat on my grid.
    * A grid should contain four rows (labeled A - D) and four columns (labeled 1 - 4).
    * I should be able to place a single boat on the grid which takes up one cell.
    * I get to choose the spot on the grid where my boat will be placed.
    * If I enter an invalid input, the program should tell me that I made a mistake and prompt me again.
    * The "random" computer player should secretly choose a spot for their boat as well without me knowing what it is.
2. At the start of my turn, I should see the current state of my grid and my guesses on my opponent's grid. Then, I should be prompted to select a cell on my opponent's grid.
    * If I enter a valid input which is a miss, the program should update the grids and allow the next player to move.
    * If I enter a valid input which is a hit, the program should end the game and display the exit messages since I have won.
    * If I enter an invalid input, the program should tell me that I made a mistake and prompt me again.
3. When the computer player makes a move, they should choose a random spot on the grid.
    * The same rules for hit and miss apply to the computer player.
4. When the game ends, the program should print out the final state of the grid as well as who is the winner.

### Optional Attributes (Complete Two)

#### Less Challenging

1. Allow the player to choose the character / symbol which represents their boat.
2. Prompt the user if they want to play again and start a new game if they do.

#### Moderately Challenging

1. Allow the player to place two or more boats on their grid rather than just a single boat (and update the win conditions accordingly).
2. Make the grid 10 x 10 rather than 4 x 4.
3. Introduce an optional computer AI where it tests cells in a spiral.
4. Introduce an optional computer AI where it tests cells row by row.
5. Introduce an optional computer AI where it tests cells column by column.

#### Most Challenging

1. Allow the player to place a 2 x 1 boat on their grid rather than just a 1 x 1 boat (and update the win conditions accordingly).
2. Introduce an optional "sore loser" computer AI which moves its boat to a new cell if the player hits it and then claims that the player missed.
3. Allow the player to choose if they want to play a human vs. human game or a human vs. computer game.

## 📋 Dev Notes

* You might notice that some of the optional attributes have unstated requirements. For example, if you choose to make a computer AI, you might also need to create a menu where the user selects which type of computer player they want to play against. Make sure you think about this as you build your code!
* You should always check for invalid inputs from the user. Your program should not crash!

## 🖥️ Example Output

Your game might look something like this:

```text
./battle_boats.out

Welcome to Battle Boats!

You:                Computer:

   1  2  3  4          1  2  3  4
A  _  _  _  _       A  _  _  _  _
B  _  _  _  _       B  _  _  _  _
C  _  _  _  _       C  _  _  _  _
D  _  _  _  _       D  _  _  _  _

Where would you like to hide your boat?

A4

Great! Let's begin!

You:                Computer:

   1  2  3  4          1  2  3  4
A  _  _  _  ⛵️      A  _  _  _  _
B  _  _  _  _       B  _  _  _  _
C  _  _  _  _       C  _  _  _  _
D  _  _  _  _       D  _  _  _  _

Pick a spot: B2

You:                Computer:

   1  2  3  4          1  2  3  4
A  _  _  _  ⛵️      A  _  _  _  _
B  _  _  _  _       B  _  ❌ _  _
C  _  _  ❌ _       C  _  _  _  _
D  _  _  _  _       D  _  _  _  _

You chose B2. You missed!
The computer chose C3. They missed!
Pick a spot: B3

You:                Computer:

   1  2  3  4          1  2  3  4
A  ❌ _  _  ⛵️      A  _  _  _  _
B  _  _  _  _       B  _  ❌ ❌ _
C  _  _  ❌ _       C  _  _  _  _
D  _  _  _  _       D  _  _  _  _

You chose B3. You missed!
The computer chose A1. They missed!
Pick a spot: F17

That is invalid!
Pick a spot: C3

You:                Computer:

   1  2  3  4          1  2  3  4
A  ❌ _  _  ⛵️      A  _  _  _  _
B  _  _  _  _       B  _  ❌ ❌ _
C  _  _  ❌ _       C  _  _  💥 _
D  _  _  _  _       D  _  _  _  _

You chose C3. Hit!

You win the game! Great job!
```

## 🔗 Useful Links

* [Play Battleship Online](https://www.calculators.org/games/battleship/)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
