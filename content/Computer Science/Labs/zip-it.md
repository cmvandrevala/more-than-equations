---
title: Zip It!
date: 2024-12-26
tags: [csc-214, generics, java-lists]
description: In this lab, you will take two generic list data structures and interleave their contents. This will give you practice working with lists and generics.
---

## 🔖 Background Information

N/A

## 🎯 Problem Statement

Write a Java method called `zip(...)` that takes two `List`s containing elements of the same type and merges them into a single `List`. The outputed `List` should alternate between elements of each original `List` - e.g. an element from the first, then the second, then the first, then the second, etc.

## ✅ Acceptance Criteria

* Your `zip(...)` method must merge two Java `List`s containing elements of the same type into one `List` that alternates between elements of each.
* If one `List` has more elements than the other, the leftover elements should all be placed at the end of the outputed `List`, in their original order.
* The `zip(...)` function must use generics so that I can pass in a `List` containing any type of value - e.g. a list of strings, a list of objects, a list of integers, etc.

## 📋 Dev Notes

* Although it might seem a bit abstract, you can test generics using JUnit. Be sure to write a set of JUnit tests that ensure that your `zip(...)` function works as expected with a variety of different value types.

## 🖥️ Example Output

I might use the `zip(...)` method in a driver program as shown below:

```java
public static void main(String[] args) {
  List<Integer> nums1 = List.of(1, 3, 5, 7);
  List<Integer> nums2 = List.of(2, 4, 6, 8);
  List<Integer> mergedNumbers = zip(nums1, nums2);
  System.out.println(mergedNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

  List<String> colors1 = List.of("Red", "Green", "Blue");
  List<String> colors2 = List.of("White", "Black", "Orange", "Pink", "Fuschia");
  List<String> mergedWords = zip(colors1, colors2);
  System.out.println(mergedWords); // ["Red", "White", "Green", "Black", "Blue", "Orange", "Pink", "Fuschia"]
}
```

## 📝 Thought Provoking Questions

1. How would your code change if you decided to use method overloading rather than generics in this problem?
2. What happens if you try to zip a `List<String>` and `List<Integer>` in your code?

## 💼 Add-Ons For the Portfolio

### (Three Credits) Lists to HashMap

Create a new method called `hashmapify(...)` that takes two arguments. The first argument should be a `List<String>` and the second should be a `List` of elements, all having some generic type. The method should create a `HashMap` where the keys come from the first argument and the values come from the second. If the two list arguments do not have the same size, throw an exception.

```java
public static void main(String[] args) {
  List<String> colors = List.of("White", "Black", "Orange", "Pink");
  List<Integer> nums = List.of(1, 3, 5, 7);

  // This should create {"White" => 1, "Black" => 3, "Orange" => 5, "Pink" => 7}
  HashMap<String, Integer> map = hashmapify(colors, nums);
}
```

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/zip-it-java-template)

## 📘 Works Cited

N/A
