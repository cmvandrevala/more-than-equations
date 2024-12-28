---
layout: activity
title: "Old Faithful: Part 1"
draft: true
---

## 🔖 Background Information

Old Faithful is a geyser in Yellowstone National Park which has the uncommon characteristic that its eruption schedule can be predicted with regularity. It has only lengthed the time between eruptions by about 30 minutes in the last 30 years {% cite yellowstonenationalparkOldFaithfulYellowstone2024 %}.

## 🎯 Problem Statement

Write a C++ program that reads in data about Old Faithful from a CSV file. The program should calculate the average eruption length and average eruption wait time for the geyser.

## ✅ Acceptance Criteria

* Use [this dataset]({{ "/assets/csv/faithful.csv" | absolute_url }}) for this activity.
* Print the average eruption length and average eruption wait time for the geyser to the console.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

```bash
./faithful.out

Enter the path to the file: ./faithful.csv

The average eruption length is XXX minutes.
The average eruption wait time is XXX minutes.
```

## 📘 Works Cited

{% bibliography --cited %}
