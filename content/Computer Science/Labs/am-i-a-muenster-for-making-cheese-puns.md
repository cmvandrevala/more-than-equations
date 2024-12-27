---
title: Am I a Muenster for Making Cheese Puns?
date: 2024-12-27
tags: [java, csc-214, file-io]
description: In this lab you will read in data from a CSV file and analyze its contents.
---

## 🔖 Background Information

In this lab, we are going to use a data dump from a comprehensive database dedicated solely to Canadian cheeses made from cow, goat, sheep, or buffalo milk.

> Canada produces more than 1450 cheeses that are listed in the Canadian Cheese Directory. The several varieties of cheese have been established according to guidelines including the type of milk, the cheese category, the milk treatment, the fat content, the ripening period, and the production method. The Canadian Cheese Directory was compiled by the Canadian Dairy Information Centre (CDIC) in collaboration with the Ministère de l'Agriculture, des Pêcheries et de l'Alimentation du Québec (MAPAQ).

This description and dataset are available courtesy of Kaggle [@janesCanadianCheeseDirectory2024].

## 🎯 Problem Statement

Write a Java program that reads in cheese data from a CSV file and then performs the calculations outlined in the Acceptance Criteria. Write the answers to the calculations in a new file called `output.txt`.

## ✅ Acceptance Criteria

Read in the cheese dataset and then perform the following calculations. Write the answers to each of these calculations in a new file called `output.txt`.

* Calculate the number of cheeses that use pasteurized milk and the number of cheeses that use raw milk. The column containing this informatioin is `MilkTreatmentTypeEn`.
* Calculate the number of organic cheeses that have a moisture percentage greater than 41.0%. The columns representing these two pieces of information are `Organic` and `MoisturePercent`. In this dataset, 0 means not organic while 1 means organic.
* Calculate which type of animal milk do most of the cheeses come from in Canada (cow, goat, ewe, or buffalo). The column representing this information is `MilkTypeEn`.

## 📋 Dev Notes

* This dataset does not start from ID 1. Instead, it skips a couple hundred IDs and starts in the middle. And even then, it skips over IDs for cheeses that are no longer in production or are unreported.
* Some of the values are missing for rows in the dataset. You can omit those rows when you are performing the calculations.
* Feel free to open up this dataset in Excel and manually perform the calculations outlined in the Acceptance Criteria if you want to double check your work. Just make sure that your Java program explicitly performs the calculations and saves the relevant results to a file called `output.txt`.

## 🖥️ Example Output

I am not expecting any specific output on the console. Rather, I want to see the results of your calculations written in a file called `output.txt`. That being said, feel free to print any output to the console that will help you write and debug your program.

## 📝 Thought Provoking Questions

1. This is a real dataset compiled by real people. Thus, mistakes will naturally pop up. For example, the cheese with ID 1588 has a flavor profile of a "Delicat milk taste" (note the typo). How might you handle typos like this as you are processing a dataset?
2. How many times does your program have to read through the dataset in order to calculate everything in the Acceptance Criteria? How might you alter your code so that it only has to read through the dataset once?
3. Suppose that the cheese dataset was way too big to store all at once in memory or in a single variable. In other words, you could only read the file, one line at a time. What strategy might you use to calculate the number of organic cheese that have a moisture percentage greater than 41.0%?

## 💼 Add-Ons For the Portfolio

### (One Credit) Remove Headers

Copy the cheese data into a new file called `cheese_without_headers.csv`. This new CSV file should not have any headers. In other words, copy everything except the first row.

### (Two Credits) Remove Ids

Copy the cheese data into a new file called `cheese_without_ids.csv`. This CSV file should have all of the information from the original except for the first column. There should be no `CheeseId` column in this new file.

### (Two Credits) Average Moisture Percent

Calculate the average moisture percent of all of the cheeses listed in the dataset. Include this new piece of information in the `output.txt` file from before. The column representing this information is `MoisturePercent`.

### (Two Credits) Missing IDs

This cheese dataset does not start from ID 1. Instead, it skips a couple hundred cheeses and starts from ID 200 onwards. Even from there, some IDs are still missing. Calculate which IDs are missing and write that information to a new file called `missing_ids.txt`. The column that contains this data is `CheeseId`.

### (Five Credits) Lactic Cheeses

Calculate the number of cheeses which are described as "lactic" and include this new piece of information in the `output.txt` file from before. The column that contains this data is `FlavourEn`.

You might be wondering why this is a five credit add-on. The problem is, we cannot just search for any values that are equal to "lactic" in the `FlavourEn` column. Some cheeses are described as "Sharp, lactic" while others are described as having a "Mild and lactic flavor with a touch of hazelnut". You are going to have to do a bit of research on your own to figure out how to match the word "lactic" within any arbitrary sentence. Might I recommend looking into regular expressions in Java?

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/am-i-a-muenster-for-making-cheese-puns-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
