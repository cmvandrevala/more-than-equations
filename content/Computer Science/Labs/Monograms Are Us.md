---
title: Monograms Are Us
date: 2025-01-29
tags: [c-plus-plus, csc-121, strings]
description: In this lab you will write a program manipulates C++ strings.
---

## 🔖 Background Information

A monogram is a decorated motif of two or more letters that can be used as a logo or to identify a personal possession.

Consider a western-style full name including a middle name (i.e. first name, middle name, and surname). One style of monogram places the middle initial (capitalized) first, then the first initial (lower case), and finally the last initial (capitalized). For example, the full name "Grace Brewster Hopper" would have the monogram:

```text
B.g.H
```

This problem is available courtesy of Professor Jason James [@jamesMonogramsUs2017].

## 🎯 Problem Statement

Write a program that prints out the monogram of some initials provided by a user.

## ✅ Acceptance Criteria

* When I execute the program, I should see a welcome prompt.
* Then, the program should ask me to enter my three initials corresponding to my first, middle, and last name. This can be done on one line or separately via multiple prompts.
* Then, the program should print out the monogram of the initials, formatted with correct case and punctuation.
* Finally, I should see an exit message as the program gracefully exits.

## 📋 Dev Notes

You do not need to handle random inputs from the user in your code. However, there is one thought-provoking question where I ask you what sorts of erroneous inputs you might expect to encounter from a user.

## 🖥️ Example Output

```bash
$ ./monogram.out

Welcome to the Monogram Program!

What are your initials (first, middle, and last)? A B C

Your monogram will be B.a.C.

Thank you for using the Monogram Program!
```

## 📝 Thought Provoking Questions

1. Does it matter if the user types in the initials in uppercase or lowercase characters?
2. How are you going to test this program to make sure that it works as expected? Specifically, how many sets of initials do you need to test?
3. What sorts of erroneous inputs might a user enter in your program? Reminder: you do not need to actually handle these inputs in your code.

## 💼 Add-Ons For the Portfolio

### (One Credit) Optional Punctuation

Update your program to ask the user if they want to separate their monogram by periods or spaces. Then, output the monogram with the given option. Your output might look something like this:

```bash
$ ./monogram.out

Welcome to the Monogram Program!

What are your initials (first, middle, and last)? A B C

Do you want to use (s)paces or (p)eriods? s

Your monogram will be B a C

Thank you for using the Monogram Program!
```

```bash
$ ./monogram.out

Welcome to the Monogram Program!

What are your initials (first, middle, and last)? A B C

Do you want to use (s)paces or (p)eriods? p

Your monogram will be B.a.C.

Thank you for using the Monogram Program!
```

You do not need to validate random inputs - you can always assume that the user will provide a valid input for the option of spaces versus periods.

### (Two Credits) Validate Initials

Sometimes, a user might mess up and enter two characters instead of one for one of their initials. Update your program to check the inputs provided by the users. If the input is a single character, proceed with the program as before. However, if the input is two or more characters, display a helpful error message and gracefully exit the program. Your output might looks something like this:

```bash
$ ./monogram.out

Welcome to the Monogram Program!

What are your initials (first, middle, and last)? AA B C

Invalid input - an initial can only be one letter!
```

### (Three Credits) Different Styles of Monogram

Another common monogram form places the middle initial first, then the first initial, and finally the last initial. The middle and last initials are placed on one line and the first initial is placed lower down.

Update your program to print both the original style of the monogram as well as this new "2D" style. Your output might looks something like this:

```bash
$ ./monogram.out

Welcome to the Monogram Program!

What are your initials (first, middle, and last)? A B C

Your monogram can be one of two choices:

B.a.C.

or

B C
 A

Thank you for using the Monogram Program!
```

Remember, your whitespace matters! The first initial must be centered between the middle and last initials.

## 🔗 Useful Links

N/A

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
