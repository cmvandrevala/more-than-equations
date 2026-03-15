---
title: Meet in the Middle
date: 2025-11-02
tags: [c-plus-plus, csc-122, streams, dynamic-memory]
description: In this lab you will practice reading in data from a file and performing calculations on the dataset.
---

## 🔖 Background Information

One statistic of interest to many researchers is the median of a data set. The median is the value located in the "middle" of the data. That is to say, there are an equal number of data points greater than and less than the median. Note that this is not the same as the average or mean.

If there are an odd number of data points, the median is found by sorting the data and then picking the point which has an equal number of points greater than and less then it. If there are an even number of data points, you should take the average of the two middle values after sorting the data set.

This problem is provided courtesy of Professor Jason James [@jamesSmackMiddleNowhere2022].

## 🎯 Problem Statement

Find the median of a set of pre-sorted numbers from a CSV file. You will not know how many data points are in the file beforehand, so you will have to read in the data, count the number of data points, find the median, and print it out to the console.

## ✅ Acceptance Criteria

* The data file will be a comma-separated list of integers.
* Your `main` program should allow a user to specify a filename. Then, the program will read in the data from the file and calculate the median of the data points.
* Your `main` program should print the median to the console.
* You cannot use containers from the C++ standard library (e.g. `vector`, `array`, etc.). Instead, you must implement your own dynamic data structure and / or use heap memory (e.g. a dynamic array).

## 📋 Dev Notes

* You can assume that the data in the file is sorted beforehand - your function does not have to sort data before finding the median.
* Note that even though the data points are all integers, the median itself might not be an integer.
* You do NOT need to write any unit tests for this lab.

## 🖥️ Example Output

In the following example, suppose I have a file on disk called `data.csv` that is a sibling to `median.out`. The `data.csv` file contains:

```text
1,2,6,8,9,11,27,45,71,90,104
```

Then, the median program might look something like this:

```bash
$ ./median.out

Enter the filename: data.csv

The median of the dataset is 11.
```

## 📝 Thought Provoking Questions

1. How do you keep track of the number of items in the file?
2. When might your program fail to allocate memory on the heap?
3. What is `nullptr` and how might it be used in your program?
4. Does it matter if the data points are sorted in ascending or descending order when calculating the median? Why or why not?

## 💼 Add-Ons For the Portfolio

### (One Credit) Mean

Update your `main` program to calculate the mean (average) of the data set in addition to the median. As you write this code, think about how you can refactor the functionality of median to reuse shared behavior.

### (Two Credits) Mode

Update your `main` program to calculate the mode of the data set in addition to the median. As you write this code, think about how you can refactor the functionality of median to reuse shared behavior.

### (Three Credits) Median Plus Bubble Sort

In the original problem, you made the assumption that the values in the data file were pre-sorted. Now, we will drop that assumption. Update your `main` function to sort the data before doing any calculations. You should implement bubble sort as the sorting function on your data set (don't use a built-in sorting function). Otherwise, the output of your `main` program should not change.

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/meet-in-the-middle-cpp-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
