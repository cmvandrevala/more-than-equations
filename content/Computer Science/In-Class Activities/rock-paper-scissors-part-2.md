---
layout: activity
title: Rock, Paper, Scissors - Part 2
draft: true
---

## 🔖 Background Information

Rock, paper, scissors is a two-player game in which each player simultaneously forms one of three shapes with their hand - rock (a closed fist), paper (a flat hand), or scissors (a fist with the index and middle finger forming a "V"). Scoring works as follows:

* Rock beats scissors
* Paper beats rock
* Scissors beats paper
* Every other combination is a tie

## 🎯 Problem Statement

Update your code from the activity [Rock, Paper, Scissors: Part 1]({{ "/teaching/csc/121/activities/rock-paper-scissors-part-1.html" | absolute_url }}) to include another option for a computer player. This computer player should be a "cheating" computer player that always picks the winning move against whatever the user chooses.

## ✅ Acceptance Criteria

1. When I start the game, I should see a menu that asks if I want to play against a random computer player or a cheating computer player.
2. If I choose a random computer player, I should be able to provide an input (rock, paper, or scissors). The computer will make a random move.
3. If I choose a cheating computer player, I should be able to provide an input (rock, paper, or scissors). The game should take my input and have the computer make a move that will always beat me.
4. The game should print both of our moves to the console and declare who is the winner or if the game is a tie.
5. Finally, the game will ask if I want to play again or exit.
    * If I choose to play again, the program will start over from the beginning.
    * If I choose to exit, the program will display a "goodbye" message and exit gracefully.

## 📋 Dev Notes

* You do not need to handle erroneous input from the user. You can assume that the user will always choose one of the options that you specified.
* As you write this code, think about how and where you can break up the code into functions. This will help organize your code and effectively convey the business logic.

## 🖥️ Example Output

```bash
./rps.out

Welcome to Rock, Paper, Scissors! Which type of computer would you like to play against?

1) Random computer player
2) Cheating computer player

> 2

You are going to play against a cheating computer player.

Pick a move:

1) Rock
2) Paper
3) Scissors

> 2

You chose Paper while the computer chose Scissors. The computer wins!

Play again?

1) Yes
2) No

> 2

Have a great day!
```

## 📘 Works Cited

N/A
