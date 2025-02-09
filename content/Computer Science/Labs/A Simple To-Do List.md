---
title: A Simple Todo List
date: 2025-01-31
tags: [c-plus-plus, java, csc-122, csc-214, object-oriented-design]
description: In this lab you will create a small todo list program that allows users to keep track of tasks.
---

## 🔖 Background Information

A to-do list is a list of items that you would like to complete. You can easily create a to-do list by writing out a list of items on a piece of paper and crossing them off as you finish them. However, to-do apps allow you to organize and track your items in a myriad of ways.

## 🎯 Problem Statement

Create a `TodoList` class that can manage tasks. A user should be able to add a new task, mark a task as complete, view complete / incomplete tasks, and clear the list.

## ✅ Acceptance Criteria

* Create a `TodoList` class that can store and manage a set of tasks for a user.

The class should have methods to add a task and mark it as complete.

* `add(...)` which adds a new task in the todo list. You can choose what the arguments should be.
* `complete(...)` which completes a task in the todo list. You can choose what the arguments should be.

The class should have a set of methods that allows a user to get their list of tasks.

* `all()` which shows all items in the list (both complete and incomplete)
* `complete()` which shows any completed items in the list
* `incomplete()` which shows any incomplete items in the list

The class should also have a method to clear the todo list.

* `clear()` which deletes all of the tasks in the todo list (both complete and incomplete)

## 📋 Dev Notes

* I am going to try to "break" your program by entering different types of invalid inputs. Be sure to handle unexpected inputs gracefully in your code.
* Think about how you might want to test this class. If you build your app correctly, you might be able to write some focused unit tests that cover each of the methods outlined above and then put it all together in a driver program.

## 🖥️ Example Output

You do not have to follow the exact format that I outline in the examples below. This is just to give you some inspiration for how your driver program might look.

I might create a driver program that utilizes the `TodoList` class as follows:

> [!tip]- C++
>
> ```cpp
> int main() {
>  TodoList list;
>
>  list.add("Buy milk");
>  list.add("Buy eggs");
>  list.add("Prepare a lesson for CSC 122");
>  list.add("Sow beet seeds");
>
>  list.complete("Buy eggs")
>
>   // Pretty prints a list of each of the four tasks above
>   list.all();
>
>   // Pretty prints the task "Buy eggs"
>   list.complete();
>
>   // Pretty prints the tasks "Buy milk",
>   // "Prepare a lesson for CSC 122", and "Sow beet seeds"
>   list.incomplete();
>
>   // Clears the to-do list
>   list.clear();
>
>   // Pretty prints a message saying that the list is empty
>   list.all();
> }
> ```

> [!tip]- Java
>
> ```java
> class Main {
>   public static void main(String[] args) {
>     TodoList list = new TodoList();
>
>     list.add("Buy milk");
>     list.add("Buy eggs");
>     list.add("Prepare a lesson for CSC 122");
>     list.add("Sow beet seeds");
>
>     list.complete("Buy eggs")
>
>     // Pretty prints a list of each of the four tasks above
>     list.all();
>
>     // Pretty prints the task "Buy eggs"
>     list.complete();
>
>     // Pretty prints the tasks "Buy milk",
>     // "Prepare a lesson for CSC 122", and "Sow beet seeds"
>     list.incomplete();
>
>     // Clears the to-do list
>     list.clear();
>
>     // Pretty prints a message saying that the list is empty
>     list.all();
>   }
> }
> ```

## 📝 Thought Provoking Questions

1. How did you handle invalid inputs to your program?
2. What was your testing strategy for this code? What did you test and how?

## 💼 Add-Ons For the Portfolio

### (One Credit) Reject Blank Tasks

Add a validation to your code that ensures that a user cannot enter a blank task. It is up to you to decide whether the method will reject the input silently or return an error message. Either way, the program should continue gracefully after the empty string input.

### (Two Credits) Reject Duplicate Tasks

Add a validation to your code that ensures that the following conditions are met:

* If a user tries to add a task that is a duplicate of an incomplete task, it should fail
* If a user tries to add a task that is a duplicate of a complete task, it should pass

It is up to you whether the method will reject the input silently or return an error message. Either way, the program should continue gracefully after the input.

### (Three Credits) Tagged Tasks

Update your code so that users can associate one or more tags with a task. Then, a user should be able to filter tasks by tag.

Your driver program might look like this:

> [!tip]- C++
>
> ```cpp
> int main() {
>   TodoList list;
>
>   vector<string> milkTags = { "food" };
>   list.add("Buy milk", milkTags);
>
>   vector<string> eggTags = { "food" };
>   list.add("Buy eggs", eggTags);
>
>   // No tags for this item!
>   list.add("Prepare a lesson for CSC 122");
>
>   vector<string> beetTags = { "food", "garden", "spring" };
>   list.add("Sow beet seeds", beetTags);
>
>   // Pretty prints "Buy milk", "Buy eggs",
>   // and "Sow beet seeds"
>   list.taggedWith("food")
>
>   // Pretty prints a message saying that this list is empty
>   list.taggedWith("music")
> }
> ```

> [!tip]- Java
>
> ```java
> class Main {
>   public static void main(String[] args) {
>     TodoList list = new TodoList();
>
>     ArrayList<String> milkTags = new ArrayList<String>();
>     milkTags.add("food");
>     list.add("Buy milk", milkTags);
>
>     ArrayList<String> eggTags = new ArrayList<String>();
>     eggTags.add("food");
>     list.add("Buy eggs", eggTags);
>
>     // No tags for this item!
>     list.add("Prepare a lesson for CSC 122");
>
>     ArrayList<String> beetTags = new ArrayList<String>();
>     beetTags.add("food");
>     beetTags.add("garden");
>     beetTags.add("spring");
>     list.add("Sow beet seeds", beetTags);
>
>     // Pretty prints "Buy milk", "Buy eggs",
>     // and "Sow beet seeds"
>     list.taggedWith("food")
>
>     // Pretty prints a message saying that this list is empty
>     list.taggedWith("music")
>   }
> }
> ```

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/a-simple-todo-list-java-template)

## 📘 Works Cited

N/A
