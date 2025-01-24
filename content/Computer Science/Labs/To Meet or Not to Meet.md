---
title: To Meet or Not to Meet
date: 2025-01-24
tags:
  - c-plus-plus
  - csc-121
  - conditionals
description: In this lab, you will work with a conditional statement to determine what message gets printed to the console.
---

## 🔖 Background Information

The maximum occupancy of a room is defined as the maximum number of people that are allowed to be in the room at a given time. If there are too many people in a room, it becomes difficult for everyone to get out in a timely manner in case of a fire.

This problem is available courtesy of Professor Jason James [@jamesMeetNotMeet2017].

## 🎯 Problem Statement

Write a program that determines whether a room being used for a meeting is in violation of fire law regulations regarding maximum occupancy.

## ✅ Acceptance Criteria

* When I execute the program, I should see a welcome prompt.
* Then, I should see prompts for the number of people a room can hold and how many people have arrived for the meeting.
* After I enter my inputs, the program should print the percentage of the maximum occupancy that is currently being used. Round the percentage to the nearest whole percent.
* Then, the program should print out how many more people can enter the room before maximum occupancy is reached.
* Then, the program should print a message to the console describing if the meeting is legal or not legal. A meeting is legal if the current number of people is less than or equal to the maximum occupancy of the room.
* Finally, the program should print an goodbye message and exit gracefully.

## 📋 Dev Notes

You do not need to handle invalid inputs from the user in your code in the initial solution to this problem. However, there are add-ons that have you validate user input.

## 🖥️ Example Output

```bash
$ ./room.out

Welcome to the Room Capacity Program!

How many people can this room hold? 32
How many people have arrived for the meeting? 22

You have used up 69% of your room's capacity.
You still have room for 10 more people.

This meeting is LEGAL - proceed with the congregation!

Thank you for using the Room Capacity Program!
```

```bash
$ ./room.out

Welcome to the Room Capacity Program!

How many people can this room hold? 32
How many people have arrived for the meeting? 52

You have used up 163% of your room's capacity.
Some people have to leave.

This meeting is NOT LEGAL - you need to break it up!

Thank you for using the Room Capacity Program!
```

## 📝 Thought Provoking Questions

1. How many if / else if / else statements are required for your program?
2. How many tests would be required to make sure your program works for all cases?
3. Are there any edge cases where the code will crash or give a weird output? Note, you do not need to fix these edge cases at this time. You just need to think through them here.

## 💼 Add-Ons For the Portfolio

### (One Credit) Check for Zero / Negative Inputs

If the user enters a value of zero or less, this causes issues later in the execution. A maximum occupancy of zero will result in an infinitely high percentage. A maximum occupancy or current number of people less than zero will result in a negative percentage. Both of these are non-physical.

Update your code to check the input of a user to ensure that the maximum occupancy is greater than zero. If the occupancy is not greater than zero, re-prompt the user for an input. Your output might look something like this:

```bash
$ ./room.out

Welcome to the Room Capacity Program!

How many people can this room hold? 0

That is not a valid value.

How many people can this room hold? -10

That is not a valid value.

How many people can this room hold? 32
How many people have arrived for the meeting? -2

That is not a valid value.

How many people have arrived for the meeting? 22

You have used up 69% of your room's capacity.
You still have room for 10 more people.

This meeting is LEGAL - proceed with the congregation!

Thank you for using the Room Capacity Program!
```

### (One Credit) Check for Non-Numeric Inputs

If the user enters a non-numeric character for the maximum occupancy or current number of people, the program is going to crash or display some strange behavior.

Update your code to check the inputs of the user to ensure that the maximum occupancy and the current number of people are numerical inputs. If either of these inputs are not numbers, re-prompt the user for an input. Your output might look something like this:

```bash
$ ./room.out

Welcome to the Room Capacity Program!

How many people can this room hold? a

That is not a valid value.

How many people can this room hold? !!!

That is not a valid value.

How many people can this room hold? 32
How many people have arrived for the meeting? @

That is not a valid value.

How many people have arrived for the meeting? 22

You have used up 69% of your room's capacity.
You still have room for 10 more people.

This meeting is LEGAL - proceed with the congregation!

Thank you for using the Room Capacity Program!
```

### (Three Credits) Real-Time Updates

It would be nice to be able to track people as they enter the room. Implement a loop that allows a user to keep a tally of the number of people who have entered the meeting thus far. The user can exit the loop by typing "exit". Your output might look something like this:

```bash
$ ./room.out

Welcome to the Room Capacity Program!

How many people can this room hold? 100

There are currently 0 people in the room.
You have used up 0% of your room's capacity.
You still have room for 100 more people.
This meeting is LEGAL - proceed with the congregation!

How many people have arrived for the meeting? 12

There are currently 12 people in the room.
You have used up 12% of your room's capacity.
You still have room for 88 more people.
This meeting is LEGAL - proceed with the congregation!

How many people have arrived for the meeting? 10

There are currently 22 people in the room.
You have used up 22% of your room's capacity.
You still have room for 78 more people.
This meeting is LEGAL - proceed with the congregation!

How many people have arrived for the meeting? 100

There are currently 122 people in the room.
You have used up 122% of your room's capacity.
Some people have to leave.
This meeting is NOT LEGAL - you need to break it up!

How many people have arrived for the meeting? exit

Thank you for using the Room Capacity Program!
```

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
