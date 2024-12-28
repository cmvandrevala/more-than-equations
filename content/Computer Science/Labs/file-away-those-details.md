---
layout: lab
title: File Away Those Details
draft: true
---

## 🔖 Background Information

This lab focuses on a simple data processing problem. We want to calculate some basic statistics for some data in a file. However, the catch is that you don't know the amount of information in the file ahead of time.

This problem is available courtey of {% cite jamesEm2022 %}.

### Mean

The mean of a set of data points is given by:

$$
\bar{x} = \frac{1}{n} \sum_{i = 1}^n x_i
$$

In other words, we sum up all of the data points and then divide by the total number of data points in the set.

### Variance

The traditional formula for variance is the square root of the standard deviation:

$$
v = \frac{1}{n - 1} \sum_{i = 1}^n (x_i - \bar{x})^2
$$

But this formula has a problem in that it requires us to work out the average ($$\bar{x}$$) first and then run back through the data to find the variance. This might not be feasible or desired if the data set is very large.

Thus, we often use a reworked version of the formula:

$$
(n - 1)v = \sum_{i = 1}^n (x_i - \bar{x})^2
$$

$$
(n - 1)v = \sum_{i = 1}^n (x_i^2 + \bar{x}^2 - 2\bar{x}x_i)
$$

$$
(n - 1)v = \sum_{i = 1}^n x_i^2 + \sum_{i = 1}^n \bar{x}^2 - \sum_{i = 1}^n 2\bar{x}x_i
$$

Since $$\bar{x}$$ has no dependence on $$i$$, we can pull it out of each expression:

$$
(n - 1)v = \sum_{i = 1}^n x_i^2 + \bar{x}^2 \sum_{i = 1}^n 1 - 2 \bar{x} \sum_{i = 1}^n x_i
$$

From the definition of the mean, the sum over all $$x_i$$ can be rewritten in terms of $$\bar{x}$$.

$$
(n - 1)v = \sum_{i = 1}^n x_i^2 + \bar{x}^2(n) - 2 \bar{x} (n\bar{x})
$$

$$
(n - 1)v = \sum_{i = 1}^n x_i^2 + n \bar{x}^2 - 2n \bar{x}^2
$$

$$
(n - 1)v = \sum_{i = 1}^n x_i^2 + (n - 2n) \bar{x}^2
$$

$$
(n - 1)v = \sum_{i = 1}^n x_i^2 - n \bar{x}^2
$$

$$
v = \frac{1}{n - 1} \sum_{i = 1}^n x_i^2 - n \bar{x}^2
$$

With this expression, we don’t need the average until after we have summed the squares of the data points. We can add the squares at the same time we are adding the values themselves and then at the end calculate the average / variance.

### Standard Deviation

The standard deviation is given by the square root of the variance.

## 🎯 Problem Statement

Write a program that calculates some basic statistics for a set of numbers stored in a file.

* Count
* Mean
* Standard Deviation
* Maximum
* Minimum

## ✅ Acceptance Criteria

* The program should print a welcome message when the user executes it.
* The user should be able to enter the name of their file.
* If the file does not open successfully or is not found, print out a warning and exit gracefully.
* If the file is opened successfully and contains space-separated numerical data, calculate the following:
  * Count
  * Mean
  * Standard deviation
  * Maximum
  * Minimum
* If the file is empty, the program should print out a warning saying that there is no data in the file and exit gracefully.

## 📋 Dev Notes

* The data files will be a space-separated list of numbers.
* You can assume that there is one space in between each number and no newlines.
* You won't know the length of the list ahead of time. In such a situation, you should never try to read the entire file into memory. Process the file element-by-element without holding onto more than a single piece of data at a time.
* Test your program with a variety of files that you generate (0, 1, 10, 100, 1000+ data points)

## 🖥️ Example Output

```bash
$ ./statnumbs.out

Welcome to the Number Statistics Program!

Please enter the name of your data file:  does-not-exist.dat

I'm sorry, I could not open 'does-not-exist.dat'.

Please enter another name:  values

File 'values' opened successfully!

Reading data from 'values'...

Calculating...

Done processing data!

For your data, the statistics are as follows:

     Count:  10
   Minimum:  1
      Mean:  5.5
   Maximum:  10
    StdDev:  3.02765

Thank you for using the Number Statistics Program!
```

## 📝 Thought Provoking Questions

1. How did you handle the spaces between each number when reading in values?
2. Do the numbers in the file have to be in a specific order in order to calculate the mean, standard deviation, maximum, and minimum?
3. What type(s) did you use to store your numbers? Why?
4. What strategies might you use to make sure that your program does not run out of memory space as you read a large data file?
5. When finding the largest or smallest item in a list, what value should you start with as your assumed value?

## 💼 Add-Ons For the Portfolio

### (One Credit) Variable Number of Spaces

Update your program so that it can handle files with a variable number of spaces between each number. The output of the program should be identical to the original. For example, the data file might contain:

```text
1 2        3 4 5 6  7 8 9    0
```

### (One Credit) Newlines

Update your program so that it can handle files with newlines between numbers. The output of the program should be identical to the original. For example, the data file might contain:

```text
1 2 3 4
5 6 7 8
9 0
```

## 📘 Works Cited

{% bibliography --cited %}
