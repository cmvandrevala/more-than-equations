---
layout: lab
title: Growing Pains
draft: true
---

## 🔖 Background Information

A dynamic array (a.k.a. growable array, resizable array, or array list) is a random access data structure that can change its size to allow elements to be added or removed dynamically. In other words, it is an array that can grow when needed rather than being stuck at a fixed size. It is often included in the standard libraries of many modern programming languages.

## 🎯 Problem Statement

Implement a dynamic array data structure that can store integers. In this version of the dynamic array, the array should grow in size by one every time a user tries to add an integer to the array when it is already full.

## ✅ Acceptance Criteria

* Create a class called `DynamicArray` that implements the dynamic array data structure. It should have the following methods:
  * `append_element(int element)` - Add the element to the end of the array. If the array is already full, resize it by one and then add the element.
  * `get_element_at_index(int index)` - Retrieve the integer at the listed index. If the index is out of bounds, return a default value of zero.
  * `size()` - Return the number of elements in the dynamic array.
  * `reset()` - Reset the dynamic array back to zero elements and zero size.
* You are not allowed to use any built-in structures like `vector` under the hood. You need to implement the array yourself using dynamic memory management.

## 📋 Dev Notes

* The class discussions on the stack and dynamic memory allocation might be very useful when working through this problem.
* Think carefully about how you want to test this class. Are there some strategies that you can use to automate some of the tests rather than testing everything through a driver program?

## 🖥️ Example Output

```cpp
// This might be a sample usage of the DynamicArray
// class that you implement via a driver program.

DynamicArray array;
array.append_element(5);
array.append_element(7);

array.size(); // Returns 2
array.get_element_at_index(0); // Returns 5
array.get_element_at_index(1); // Returns 7
array.get_element_at_index(2); // Returns 0

array.reset();

for(int i = 0; i < 50; i++) {
  array.append_element(i);
}

array.size(); // Returns 50

array.get_element_at_index(37); // Returns 37
```

## 📝 Thought Provoking Questions

1. What is the advantage of implementing the `DynamicArray` as a class? Why can't we just define an array and then create a function to resize it whenever we want?
2. What exactly do you need to do when implementing the `reset()` method? Do you have to delete every element in the array? Or can you do something a bit more clever?
3. What do you think will happen if you construct a dynamic array object and then call `sizeof(array)`? Will it change over time or stay the same?
4. What are some downsides to using a dynamic array over a traditional array? Wouldn't it be better to use a dynamic array every place where we use a traditional one?
5. How did you test your code?

## 💼 Add-Ons For the Portfolio

### (One Credit) Arithmetic Growth

Not all dynamic arrays are created equal! There are different strategies that you can use to determine how much the array grows when it runs out of space as well as when you should actually resize the array. Each of these implementations has different pros and cons.

Create a new `ArithmeticDynamicArray` class that is almost identical to the original, but it takes an optional integer argument upon construction. When the dynamic array runs out of space, resize it by the given number rather than by one. To the end user, the behavior of the array should look pretty much the same as the original. But under the hood, your array will not be resizing itself on every call to `append_element(int element)` (unless the user inputted a value of one).

### (Two Credits) Geometric Growth

Not all dynamic arrays are created equal! There are different strategies that you can use to determine how much the array grows when it runs out of space as well as when you should actually resize the array. Each of these implementations has different pros and cons.

Create a new `GeometricDynamicArray` class that has the same constructor as the original with no arguments. When the dynamic array runs out of space, double its current size. To the end user, the behavior of the array should look pretty much the same as the original. But under the hood, your array will not be resizing itself on every call to `append_element(int element)`.

## 📘 Works Cited

N/A
