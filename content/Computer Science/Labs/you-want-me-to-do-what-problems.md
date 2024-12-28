---
layout: lab
title: You Want Me to Do What Problems?
draft: true
---

## 🔖 Background Information

Oftentimes, instructors write out assignments using a shorthand like "L6" or "L4-10". Some students find reading these lists of problems difficult. They might interpret "L4-10" as "do problem 4 and problem 10", but the instructor meant for them to do all problems between, and including, 4 - 10.

This problem is available courtey of {% cite jamesYouWantMe2022 %}.

## 🎯 Problem Statement

Write a program that accepts an assignment list and prints back a list of all problems assigned.

## ✅ Acceptance Criteria

* The returned list of problems should be sorted in ascending order
* The returned list of problems should contain no duplicate values
* If the outputted problem list is longer than a line, wrap it gracefully. Don't let the terminal window wrap it for you.
* Spaces around the input should be optional (e.g. "L1-3" should result in the same answer as "L 1 - 3")

## 📋 Dev Notes

* You can assume the assignment name is a single alphabetic character (e.g. the "L" in "L5")
* You can assume that all problem numbers are whole numbers
* All problems are to be comma separated (e.g. "L1,2,5" is okay but "L1 2 5" is not)

|If the User Types In...|The Program Should Display...|
|---|---|
|L6|Do problem 6 of L.|
|M1-3|Do problems 1, 2, and 3 of M.|
|N1,2,5|Do problems 1, 2, and 5 of N.|
|P1-3,5|Do problems 1, 2, 3, and 5 of P.|
|Q1-3,5-7|Do problems 1, 2, 3, 5, 6, and 7 of Q.|
|R1-1,3-3,5-8|Do problems 1, 3, 5, 6, 7, and 8 of R.|
|S4-5,1-3,7-10|Do problems 1, 2, 3, 4, 5, 7, 8, 9, and 10 of S.|
|T4-5,1-3,7-10,8-12|Do problems 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, and 12 of T.|

## 🖥️ Example Output

```bash
$ ./problems.out

Please enter the assignment: M1-3

Do problems 1, 2, and 3 of M.
```

```bash
$ ./problems.out

Please enter the assignment: T1-10, 15-20, 30-40

Do problems 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19
20, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, and 40 of T.
```

## 📝 Thought Provoking Questions

1. How might you handle the case where the separator between problems is a semicolon instead of a comma? You don't have to implement a solution, just describe what you might do.
2. How might you handle the case where the assignment name is a word rather than a single character (i.e. the "L" in "L1-5")? You don't have to implement a solution, just describe what you might do.
3. When placing problem numbers into a list, what are some strategies that you can use to keep those items sorted at all times? In other words, how do you keep them sorted as you insert them into the list rather than running a sort on the list afterwards?
4. How can you avoid placing a duplicate item into a list? To clarify, I am not asking how you can remove duplicate items from a list, but rather how can you avoid having any duplicates in the list in the first place.
5. What strategy did you use to wrap the problem list to multiple lines if the output was too long?

## 💼 Add-Ons For the Portfolio

### (One Credit) Support Additional Separators

Sometimes, the assignments use commas as a separator. Other times, instructors will use a different type of separator like a semicolon or a period. Update your code to support assignments that are separated by commas, semicolons, and periods. The output should be identical otherwise.

```bash
$ ./problems.out

Please enter the assignment: M1-3,4-6

Do problems 1, 2, 3, 4, 5, and 6 of M.
```

```bash
$ ./problems.out

Please enter the assignment: M1-3;4-6

Do problems 1, 2, 3, 4, 5, and 6 of M.
```

```bash
$ ./problems.out

Please enter the assignment: M1-3.4-6

Do problems 1, 2, 3, 4, 5, and 6 of M.
```

### (Two Credits) Support Longer Assignment Names

Assignment names are generally more than one character long. Update your code to support assignment names that are any number of alphabetic characters. The output should be identical otherwise.

```bash
$ ./problems.out

Please enter the assignment: Math 1-3, 4-6

Do problems 1, 2, 3, 4, 5, and 6 of Math.
```

### (Three Credits) Evens and Odds

Sometimes, an instructor wants students to complete only the even or odd problems in a range. Update the program to allow assignments to specify only even or odd problems in a range. The output should be identical otherwise.

```bash
$ ./problems.out

Please enter the assignment: M 1-4 evens, 5-9 odds, 10-12

Do problems 2, 4, 5, 7, 9, 10, 11, and 12 of M.
```

## 📘 Works Cited

{% bibliography --cited %}
