---
title: A Stack of Dishes
tags: [c-plus-plus, java, csc-122, csc-214, stacks]
description: In this lab, you will write a stack data structure.
date: 2025-04-15
---

## 🔖 Background Information

A stack is a data structure that follows the last-in-first-out (LIFO) principle. This means that the last element added to the stack (via the push operation) will be the first one to be removed (via the pop operation).

## 🎯 Problem Statement

Write a stack data structure that stores `Dish` objects. Like the post linked above, you can use an array "under the hood", meaning that your stack will have a maximum size.

## ✅ Acceptance Criteria

* Encapsulate your stack data structure in a class.
* The stack should use an array structure "under the hood" to store `Dish` objects.
* I should be able to `push` and `pop` a `Dish` object to the stack data structure.
* If I try to push an object onto the stack while it is full, I should see a message telling me the stack is full, and the stack should remain unchanged.
* I should be able to `peek` at the stack structure (i.e. view the top object of the stack without removing it from the stack).
* I should be able to get the current size of the stack via a `size` method (i.e. how many elements are in the stack?).
* You do not have to implement a generic stack structure. You can instead have it store `Dish` objects directly. There is an extra credit opportunity to make the stack generic.

## 📋 Dev Notes

* You cannot use the built-in stack from Java in this solution.
* You do not have to implement the `Dish` object from scratch. I have provided it here:

> [!tip]- C++
>
> ```cpp
> class Dish {
>   private:
>     string description;
>
>   public:
>     Dish(string description) {
>       this->description = description;
>     }
>
>     string get_description() {
>       return this->description;
>     }
> }
> ```

> [!tip]- Java
>
> ```java
> public class Dish {
>   public String description;
>
>   Dish(String description) {
>     this.description = description;
>   }
> }
> ```

## 🖥️ Example Output

Your driver program that tests the stack data structure might look something like this:

> [!tip]- C++
>
> ```cpp
> DishStack stack;
> Dish one_dish = Dish("A dish with one fish pattern on it");
> Dish two_dish = Dish("A dish with two fish patterns on it");
> Dish red_dish = Dish("A dish with a red fish pattern on it");
> Dish blue_dish = Dish("A dish with a blue fish pattern on it");
>
> // The variable stack_size should equal zero.
> int stack_size = stack.size();
>
> stack.push(one_dish);
> stack.push(two_dish);
> stack.push(red_dish);
> stack.push(blue_dish);
>
> // The variable size_after_pushes should equal four.
> int size_after_pushes = stack.size();
>
> // The variable peeked_dish should have a description of "A dish with a blue fish pattern on it"
> Dish peeked_dish = stack.peek();
>
> // The variable popped_dish should have a description of "A dish with a blue fish pattern on it"
> Dish popped_dish = stack.pop();
>
> // The variable another_popped_dish should have a description of "A dish with a red fish pattern on it"
> Dish another_popped_dish = stack.pop();
>
> // The variable final_size should equal two.
> int final_size = stack.size();
> ```

> [!tip]- Java
>
> ```java
> DishStack stack = new DishStack();
> Dish oneDish = new Dish("A dish with one fish pattern on it");
> Dish twoDish = new Dish("A dish with two fish patterns on it");
> Dish redDish = new Dish("A dish with a red fish pattern on it");
> Dish blueDish = new Dish("A dish with a blue fish pattern on it");
>
> // The variable stack_size should equal zero.
> int stackSize = stack.size();
>
> stack.push(oneDish);
> stack.push(twoDish);
> stack.push(redDish);
> stack.push(blueDish);
>
> // The variable sizeAfterPushes should equal four.
> int sizeAfterPushes = stack.size();
>
> // The variable peekedDish should have a description of "A dish with a blue fish pattern on it"
> Dish peekedDish = stack.peek();
>
> // The variable poppedDish should have a description of "A dish with a blue fish pattern on it"
> Dish poppedDish = stack.pop();
>
> // The variable anotherPoppedDish should have a description of "A dish with a red fish pattern on it"
> Dish anotherPoppedDish = stack.pop();
>
> // The variable finalSize should equal two.
> int finalSize = stack.size();
> ```

## 📝 Thought Provoking Questions

1. Right now, your stack data structure is bounded by a maximum size since it is built on top of an array. How might you create a stack with no theoretical maximum size?
2. Right now, your stack is restricted to store `Dish` objects only. How might you change your stack class to select which type of object you want it to store?

## 💼 Optional Extra Credit

### (1/4 Point) Clear Method

Create a method that clears all elements in the stack.

### (1/2 Point) Generic Stack

Update your stack class to allow the user to specify what type of object will be stored in the stack. You can use generics to specify the type of object. The behavior of your stack should not change otherwise.

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/a-stack-of-dishes-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/a-stack-of-dishes-java-template)

## 📘 Works Cited

N/A
