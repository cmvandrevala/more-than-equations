---
title: It's Raining Strings
date: 2025-01-02
tags: [c-plus-plus, csc-121, csc-122, loops, sorting]
description: In this lab you write a program that continuously accepts input from a user, sorts it, and displays it on the console.
---

## 🔖 Background Information

This problem is available courtey of Professor Jason James [@jamesItRainingStrings2017].

## 🎯 Problem Statement

Allow a user to enter the names of any number of local businesses. When a user enters a name, sort the current list of business names and display the results. Continue this process until the user exits the program.

## ✅ Acceptance Criteria

* The program should print a welcome message when the user executes it.
* The user should be able to enter a business name that contains alphanumeric characters and special characters.
* You are allowed to use methods from the standard library (e.g. `std::sort` or `std::vector`)
* The user should be able to enter "y", "Y", "yes", or "Yes" to confirm that they want to enter another business name. Other inputs should exit the program gracefully.
* The program should print a goodbye message when the user exits.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

```bash
$ ./busisort.out

Welcome to the Business Sorting Program!

Please enter the name of a business:  WalMart

Your business is:

    WalMart

Another business?  y

Please enter the name of a business:  JC Penney

Your businesses are:

    JC Penney
    WalMart

Another business?  Y

Please enter the name of a business:  Merlin Muffler

Your businesses are:

    JC Penney
    Merlin Muffler
    WalMart

Another business?  yes

Please enter the name of a business:  Appleby's

Your businesses are:

    Appleby's
    JC Penney
    Merlin Muffler
    WalMart

Another business?  Yes

Please enter the name of a business:  Zippy's

Your businesses are:

    Appleby's
    JC Penney
    Merlin Muffler
    WalMart
    Zippy's

Another business?  no

Thank you for using the Business Sorting Program!
```

## 📝 Thought Provoking Questions

1. What are some strategies that you can use to handle spaces in the business names?
2. How might you store multiple strings / c-strings in a single variable?
3. How might you sort strings / c-strings?
4. How would you access a single row of a 2D array?

## 💼 Add-Ons For the Portfolio

### (One Credit) C-strings Versus String Class

When completing this lab, you probably used c-strings or the C++ string class to store the business names. Refactor your code to use c-strings if you used the string class and vice versa. The output of the program should be identical to what you had before.

## 🔗 Useful Links

N/A

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
