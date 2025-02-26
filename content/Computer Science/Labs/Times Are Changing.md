---
title: Times Are Changing
date: 2025-02-25
tags: [c-plus-plus, csc-121]
description: In this lab you write a program that calculates the difference between two times in 24 hour format.
---

## 🔖 Background Information

In 24 hour time notation (a.k.a. military time):

* The day begins at 00:00
* The last minute of the day begins at 23:59
* When the clock strikes 24:00, the day changes. Thus, 24:00 and 00:00 are equivalent.

This lab is available courtest of Professor Jason James [@jamesTimesTheyAre2023].

## 🎯 Problem Statement

Write a program that allows the user to enter two times in 24 hour format. The program should tell the user the time interval between the two times in a few different ways.

## ✅ Acceptance Criteria

* When I start the program, I should see a welcome message.
* The program should allow me to enter two times, each in 24-hour format
* The program should then calculate the time interval between the two times and display it in three different ways:
  * Number of minutes
  * Number of hours and minutes
  * Number of hours (expressed as a decimal)
* Finally, the program should print out an exit message and exit gracefully.

You must put your business logic for calculating times into one or more functions outside of `main()`. I don't care, specifically, what functions you use or how they are structured, but you cannot include the business logic calculating times in `main()`.

## 📋 Dev Notes

* You do not need to worry about times on two different days. You can assume that the two given times are on the same day (i.e. the second time is always bigger than the first time).

## 🖥️ Example Output

```bash
$ ./time.out

Welcome to the Time Interval Calculation Program!

What is your first time?  12:40

What is your second time?  18:24

The time interval can be written as:

  * 344 minutes
  * 5 hours and 44 minutes.
  * 5.73 hours

Thank you for using the Time Interval Calculation Program.
```

```bash
$ ./time.out

Welcome to the Time Interval Calculation Program!

What is your first time?  13:20

What is your second time?  18:24

The time interval can be written as:

  * 304 minutes
  * 5 hours and 4 minutes.
  * 5.07 hours

Thank you for using the Time Interval Calculation Program.
```

## 📝 Thought Provoking Questions

1. The goal of functions is to encapsulate small chunks of behavior to make it easier to read, understand, and reuse code. How many functions did you write for this program? What does each of your functions do in the program?
2. Suppose you wanted to allow a user to give inputs in AM / PM time as well as 24 hour time. How might you change your program to allow this? Think about your program as a series of data transformations. You do NOT need to implement this feature - I just want you to think about it for now.

## 💼 Add-Ons For the Portfolio

### (One Credit) Inclusive Versus Exclusive Time Interval

Update your program to allow a user to decide if they want to include the starting time in the final output (inclusive) or omit it (exclusive). If a user chooses "exclusive", the program should return the same calculation as before. However, if the user chooses "inclusive" the final answer should be the time interval plus one minute (since it includes the starting time).

Remember, this additional logic cannot live in `main()`. It must live in one or more functions outside of `main()`.

```bash
$ ./time.out

Welcome to the Time Interval Calculation Program!

Do you want the time interval to be:

(1) Inclusive
(2) Exclusive

1

What is your first time?  13:20

What is your second time?  18:24

The inclusive time interval can be written as:

  * 305 minutes
  * 5 hours and 5 minutes.
  * 5.08 hours

Thank you for using the Time Interval Calculation Program.
```

### (Two Credits) Validation of Times

Update your code to ensure that a time entered by a user is a valid 24 hour time. For example, a user could not enter "26:99" as a time.

```bash
$ ./time.out

Welcome to the Time Interval Calculation Program!

What is your first time?  99:00

That is not a valid time!

What is your first time?  00:99

That is not a valid time!

What is your first time?  13:20

What is your second time?  99:00

That is not a valid time!

What is your second time?  00:99

That is not a valid time!

What is your second time?  18:24

The inclusive time interval can be written as:

  * 304 minutes
  * 5 hours and 4 minutes.
  * 5.07 hours

Thank you for using the Time Interval Calculation Program.
```

### (Three Credits) Times on Two Different Days

Update your program to allow a user to enter times on two different days. This might look something like this:

```bash
$ ./time.out

Welcome to the Time Interval Calculation Program!

What is your first time?  23:59

What is your second time?  00:02

The time interval can be written as:

  * 3 minutes
  * 3 minutes.
  * 0.05 hours

Thank you for using the Time Interval Calculation Program.
```

### (Four Credits) AM / PM Format

Update your code to allow a user to enter the times in AM / PM format or in 24 hour format. Your program might look something like this:

```bash
$ ./time.out

Welcome to the Time Interval Calculation Program!

What is your first time?  11:20 AM

What is your second time?  18:24

The time interval can be written as:

  * 424 minutes
  * 7 hours and 4 minutes.
  * 7.07 hours

Thank you for using the Time Interval Calculation Program.
```

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
