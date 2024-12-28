---
layout: lab
title: A Stack of Dishes
draft: true
---

## 🔖 Background Information

Muzaffar does a nice job summarizing the idea of a stack in her Educative post {% cite muzaffarStackImplementation %}:

> A stack is a linear data structure that follows the last-in-first-out (LIFO) principle, which means that the last element added to the stack will be the first one to be removed.

Her post does a nice job reviewing some of the concepts that we learned in class as well as providing an example of a stack of integers in C++.

## 🎯 Problem Statement

Write a stack data structure that stores `Dish` objects. Like the post linked above, you can use an array "under the hood", meaning that your stack will have a maximum size.

## ✅ Acceptance Criteria

* The stack data structure should be a C++ object.
* The stack should use an array "under the hood" to store `Dish` objects. You are allowed to use `std::array` from C++.
* I should be able to `push` and `pop` a `Dish` object to the stack data structure.
* If I try to push an object onto the stack while it is full, I should see a message telling me the stack is full, and the stack should remain unchanged.
* I should be able to `peek` at the stack structure (i.e. view the top object of the stack without removing it from the stack).
* I should be able to get the current size of the stack via a `size` method (i.e. how many elements are in the stack?).

## 📋 Dev Notes

* You cannot use `std::stack` or `std::vector` in this solution.
* You do not have to implement the `Dish` object from scratch. I have provided it here:

```cpp
class Dish {
  private:
    string description;

  public:
    Dish(string description) {
      this->description = description;
    }

    string get_description() {
      return this->description;
    }
}
```

## 🖥️ Example Output

You could create a driver program that tests the stack data structure (call it `DishStack`). It might look something like this:

```cpp
DishStack stack;
Dish one_dish = Dish("A dish with one fish pattern on it");
Dish two_dish = Dish("A dish with two fish patterns on it");
Dish red_dish = Dish("A dish with a red fish pattern on it");
Dish blue_dish = Dish("A dish with a blue fish pattern on it");

// The variable stack_size should equal zero.
int stack_size = stack.size();

stack.push(one_dish);
stack.push(two_dish);
stack.push(red_dish);
stack.push(blue_dish);

// The variable size_after_pushes should equal four.
int size_after_pushes = stack.size();

// The variable peeked_dish should have a description of "A dish with a blue fish pattern on it"
Dish peeked_dish = stack.peek();

// The variable popped_dish should have a description of "A dish with a blue fish pattern on it"
Dish popped_dish = stack.pop();

// The variable another_popped_dish should have a description of "A dish with a red fish pattern on it"
Dish another_popped_dish = stack.pop();

// The variable final_size should equal two.
int final_size = stack.size();
```

## 📝 Thought Provoking Questions

1. Right now, your stack data structure is bounded by a maximum size since it is built on top of an array. How might you create a stack with no theoretical maximum size?
2. Right now, your stack is restricted to store `Dish` objects only. How might you change your stack class to select which type of object you want it to store?
3. According to a C++ reference, the library `std::stack` implements stacks as a "container adapter". In other words, they are classes that encapsulate another object called the "underlying object" {% cite cplusplus.comStdStack %}. How does this relate to your implementation of a stack in this lab?

## 💼 Add-Ons For the Portfolio

### (One Credit) Clear Method

Create a method that clears all elements in the stack. The behavior of this method might look something like this in a driver program:

```cpp
DishStack stack;
Dish dish_one = Dish("Dish 1");
Dish dish_two = Dish("Dish 2");

stack.push(dish_one);
stack.push(dish_two);

// The variable stack_size should equal two.
int stack_size = stack.size();

stack.clear();

// The variable final_size should equal zero.
int final_size = stack.size();
```

### (Two Credits) Real-World Example of a Stack

Find a real-world example of where a stack data structure is used. This will require a bit of research!

Write a short description of the problem that needs to be solved and why a stack might be a good data structure to use for the problem at hand. I am looking for a paragraph or two of details. Be sure to cite all of your sources!

### (Three Credits) Generic Type for Stack

Update your stack class to allow the user to specify what type of object will be stored in the stack. You can use a class template to specify the type of object. The behavior of your stack should not change otherwise.

### (Four Credits) Stack on a Linked List

In the lab [Links in a Chain]({{ "/teaching/csc/122/labs/links-in-a-chain.html" | absolute_url }}), you implemented a linked list data structure. Replace the array data structure in your stack implementation with the linked list that you created in the other lab. You might need to create one or two helper methods on your linked list class to support pushing and popping data on a stack.

The behavior of the stack should not change whether you use an array or linked list under the hood.

## 📘 Works Cited

{% bibliography --cited %}
