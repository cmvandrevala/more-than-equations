---
layout: activity
title: "Old Faithful: Part 2"
draft: true
---

## 🔖 Background Information

Old Faithful is a geyser in Yellowstone National Park which has the uncommon characteristic that its eruption schedule can be predicted with regularity. It has only lengthed the time between eruptions by about 30 minutes in the last 30 years {% cite yellowstonenationalparkOldFaithfulYellowstone2024 %}.

## 🎯 Problem Statement

The goal of this activity is to expand on your code from [Old Faithful: Part 1]({{ "/teaching/csc/121/activities/old-faithful-part-1.html" | absolute_url }}).

Write a C++ program that reads in data about Old Faithful from a CSV file. The program should then create a new CSV file which includes all of the original columns plus one new calculated column.

## ✅ Acceptance Criteria

* Use [this dataset]({{ "/assets/csv/faithful.csv" | absolute_url }}) for this activity.
* Create a new file called `faithful_updated.csv` that adds another column to the original CSV file.
  * The new column should be called "Short Wait Time".
  * If the eruption wait time is less than or equal to 60 minutes, the value should be T.
  * If the eruption wait time is greater than 60 minutes, the value should be F.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

In addition to the output below, the program should write a new CSV file to disk as per the Acceptance Criteria.

```bash
./faithful.out

Enter the path to the file: ./faithful.csv

The average eruption length is XXX minutes.
The average eruption wait time is XXX minutes.

Writing a new CSV file called faithful_updated.csv.
```

## 📘 Works Cited

{% bibliography --cited %}
