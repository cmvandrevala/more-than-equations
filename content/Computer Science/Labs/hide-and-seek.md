---
layout: lab
title: Hide and Seek
draft: true
---

## 🔖 Background Information

Back when I was in elementary school, my teacher taught our class about warm fuzzies and cold pricklies. Warm fuzzies are kind actions and words that uplift people, whereas cold pricklies are mean actions and words that make people feel bad. Warm fuzzies come in a variety of forms (i.e. helping clean the classroom, giving a compliment, finishing your homework), which will be represented in this lab using different colors.

## 🎯 Problem Statement

Given a list of colorful rainbow fuzzies, find the index of the golden fuzzy in the list.

## ✅ Acceptance Criteria

I have provided two functions that generate a sorted `ArrayList` of fuzzies and a random `ArrayList` of fuzzies:

* `FuzzyListGenerator#sortedRainbowFuzzies`
* `FuzzyListGenerator#randomizedRainbowFuzzies`

Your job is to implement a linear search function and a binary search function that will return the index of the golden fuzzy in a list of fuzzies (i.e. the fuzzy with a color of "gold").

You should test each of your functions with each list and report the results (i.e. four tests total).

I know what you are thinking - binary search won't work on a random list! You are correct. I still want you to try running binary search on the randomized list and report what happens in the Thought-Provoking Questions. Make sure you test your functions using JUnit before you report your final results!

## 📋 Dev Notes

* The `Fuzzy` class defines a simple warm fuzzy object. The color of a fuzzy is publicly accessible and can be used to search for specific fuzzies. Don't directly alter this class.
* The `FuzzyListGenerator` class defines a generator which will create a list of 7000 rainbow fuzzies along with one extra golden fuzzy when given no arguments in the constructor. Do not directly alter this class.
* You can specify the number of iterations the generator goes through when creating a list of fuzzies by adding an arguments to the the constructor.
* The golden fuzzy has a color of "gold".

## 🖥️ Example Output

Your functions might be utilized in a `main` method as follows:

```java
public static void main(String args[]) {
  FuzzyListGenerator generator = new FuzzyListGenerator();
  FuzzyFinder finder = new FuzzyFinder();

  ArrayList<Fuzzy> sortedFuzzies = generator.sortedRainbowFuzzies();
  ArrayList<Fuzzy> randomFuzzies = generator.randomizedRainbowFuzzies();

  int testOne = finder.linearSearch(sortedFuzzies);
  int testTwo = finder.binarySearch(sortedFuzzies);
  int testThree = finder.linearSearch(randomFuzzies);
  int testFour = finder.binarySearch(randomFuzzies);
}
```

## 📝 Thought Provoking Questions

1. What were the results of your four trials? Did the linear and binary algorithms work for each of the two lists?
2. Did you notice a difference in the speed of each search algorithm when the list was around 7000 fuzzies long? Why do you think that is?
3. Suppose the sorted list of fuzzies was one billion fuzzies big. Approximately how many iterations would you need to search for a specified fuzzy using linear search in the worst case scenario?
4. Suppose the sorted list of fuzzies was one billion fuzzies big. Approximately how many iterations would you need to search for a specified fuzzy using binary search in the worst case scenario?
5. How might you change your code if I asked you to search on multiple conditions? For example, I want you to find me the fuzzy that is blue in color, wears a red hat, and has a handlebar moustache.

## 💼 Add-Ons For the Portfolio

### (Two Credits) Linear Search Analysis

Write me a short analysis that calculates the worst-case scenario running time for linear search on a randomized list of fuzzies. It should include mathematical expressions that categorize your algorithm.

### (Two Credits) Binary Search Analysis

Write me a short analysis that calculates the worst-case scenario running time for binary search on a randomized list of fuzzies. It should include mathematical expressions that categorize your algorithm.

### (Four Credits) Cold Pricklies

Cold pricklies have gotten into the list of warm fuzzies, and it is your job to get rid of them! For this add-on, you are allowed to change any of the files in the project, including `Fuzzy` and `FuzzyListGenerator`.

1. Create an interface called `Feeling` with one method called `String description()`. Warm fuzzies and cold pricklies will both implement this interface.
2. Create a `Prickly` class that implements the `Feeling` interface. A cold prickly should always return a description of "Pokey!".
3. Update the `Fuzzy` class to implement the `Feeling` interface. A warm fuzzy will return its color when you call the `description()` method on it.
4. Update the `FuzzyListGenerator` to return a list of `Feeling` objects rather than tha list of `Fuzzy` objects. Update the generator functions to include one cold pricklies in addition to one golden fuzzy.
5. Write a new search function that finds the index of the cold prickly instead of the golden fuzzy.
6. Be sure to test your work using JUnit!

## 📘 Works Cited

N/A
