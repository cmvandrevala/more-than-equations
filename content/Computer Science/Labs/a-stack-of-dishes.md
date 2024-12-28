---
title: A Stack of Dishes
draft: true
---

## 🔖 Background Information

Muzaffar does a nice job summarizing the idea of a stack in her Educative post {% cite muzaffarStackImplementation %}:

> A stack is a linear data structure that follows the last-in-first-out (LIFO) principle, which means that the last element added to the stack will be the first one to be removed.

Her post does a nice job reviewing some of the concepts that we learned in class as well as providing an example of a stack of integers.

## 🎯 Problem Statement

Write a stack data structure that stores `Dish` objects. Like the post linked above, you can use an array "under the hood", meaning that your stack will have a maximum size.

## ✅ Acceptance Criteria

* The stack data structure should be a Java object.
* The stack should use an array or `ArrayList` "under the hood" to store `Dish` objects.
* I should be able to `push` and `pop` a `Dish` object to the stack data structure.
* If I try to push an object onto the stack while it is full, I should see a message telling me the stack is full, and the stack should remain unchanged.
* I should be able to `peek` at the stack structure (i.e. view the top object of the stack without removing it from the stack).
* I should be able to get the current size of the stack via a `size` method (i.e. how many elements are in the stack?).

## 📋 Dev Notes

* You cannot use the built-in stack from Java in this solution.
* You do not have to implement the `Dish` object from scratch. I have provided it here:

```java
class Dish {
  public String description;

  Dish(String description) {
    this.description = description;
  }
}
```

## 🖥️ Example Output

You could create a driver program that tests the stack data structure (call it `DishStack`). It might look something like this:

```java
DishStack stack = new DishStack();
Dish oneDish = new Dish("A dish with one fish pattern on it");
Dish twoDish = new Dish("A dish with two fish patterns on it");
Dish redDish = new Dish("A dish with a red fish pattern on it");
Dish blueDish = new Dish("A dish with a blue fish pattern on it");

// The variable stack_size should equal zero.
int stackSize = stack.size();

stack.push(oneDish);
stack.push(twoDish);
stack.push(redDish);
stack.push(blueDish);

// The variable sizeAfterPushes should equal four.
int sizeAfterPushes = stack.size();

// The variable peekedDish should have a description of "A dish with a blue fish pattern on it"
Dish peekedDish = stack.peek();

// The variable poppedDish should have a description of "A dish with a blue fish pattern on it"
Dish poppedDish = stack.pop();

// The variable anotherPoppedDish should have a description of "A dish with a red fish pattern on it"
Dish anotherPoppedDish = stack.pop();

// The variable finalSize should equal two.
int finalSize = stack.size();
```

## 📝 Thought Provoking Questions

1. How might you create a stack with no theoretical maximum size? Does your stack have a maximum size?
2. Right now, your stack is restricted to store `Dish` objects only. How might you change your stack class to select which type of object you want it to store?

## 💼 Add-Ons For the Portfolio

### (One Credit) Clear Method

Create a method that clears all elements in the stack. The behavior of this method might look something like this in a driver program:

```java
DishStack stack = new DishStack();
Dish dishOne = new Dish("Dish 1");
Dish dishTwo = new Dish("Dish 2");

stack.push(dishOne);
stack.push(dishTwo);

// The variable stackSize should equal two.
int stackSize = stack.size();

stack.clear();

// The variable finalSize should equal zero.
int finalSize = stack.size();
```

### (Two Credits) Real-World Example of a Stack

Find a real-world example of where a stack data structure is used. This will require a bit of research!

Write a short description of the problem that needs to be solved and why a stack might be a good data structure to use for the problem at hand. I am looking for a paragraph or two of details. Be sure to cite all of your sources!

### (Three Credits) Generic Type for Stack

Update your stack class to allow the user to specify what type of object will be stored in the stack. You can use a class template to specify the type of object. The behavior of your stack should not change otherwise.

### (Four Credits) Stack on a Linked List

In the lab Links in a Chain, you implemented a linked list data structure. Replace the array data structure in your stack implementation with the linked list that you created in the other lab. You might need to create one or two helper methods on your linked list class to support pushing and popping data on a stack.

The behavior of the stack should not change whether you use an array or linked list under the hood.

## 📘 Works Cited

{% bibliography --cited %}
