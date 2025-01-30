---
title: And Bingo Was His Name-O!
tags: [c-plus-plus, csc-121, random-numbers, looping]
description: This activity will give you some practice working with looping in C++ as well as random numbers.
---

## 🔖 Background Information

The US / Canadian version of Bingo is a game where players mark numbers on cards as they are called out by a caller. Each player has a card with a 5 x 5 grid. The columns are labeled B-I-N-G-O from left to right. The center square is usually marked as a "free space". A caller randomly draws numbered balls from 1 - 75 and announces each number to the crowd. Players then mark the corresponding numbers on their cards. You can win by marking off a complete horizontal, vertical, or diagonal line, or by covering all numbers on the card (known as a full house). When a player completes a winning pattern, they shout "Bingo" to alert the caller. The caller then verifies the win.

In 75-ball Bingo, the numbers are:

| Letter | Number Range |
| ------ | ------------ |
| B      | 1 - 15       |
| I      | 16 - 30      |
| N      | 31 - 45      |
| G      | 46 - 60      |
| O      | 61 - 75      |

Some of the valid numbers that the caller might announce are "B7", "G46", or "O74".

## 🎯 Problem Statement

Write a program that generates random numbers for 75-ball Bingo.

## ✅ Acceptance Criteria

* When I start the program, I should see a welcome message.
* The program should ask the user if they want to generate a number.
  * If the user responds "yes", the program should print out a valid number and then prompt the user again
  * If the user responds "no", the program should print out an exit message and then gracefully close

## 📋 Dev Notes

* You do NOT need to worry about removing duplicate numbers at the moment.

## 🖥️ Example Output

When I start the program, I expect to see an output like the following:

```text
Welcome to the Bingo Number Generator!

Would you like to generate a number?
1. Yes
2. No

1

Your number is B2!

Would you like to generate a number?
1. Yes
2. No

1

Your number is G47!

Would you like to generate a number?
1. Yes
2. No

2

Goodbye!
```

## 📘 Works Cited

N/A
