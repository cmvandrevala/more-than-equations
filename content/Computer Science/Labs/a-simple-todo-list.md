---
layout: lab
title: A Simple Todo List
draft: true
---

## 🔖 Background Information

N/A

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

You MUST use C++ iterators for any `for` loops in this submission.

## 📋 Dev Notes

* Be sure to include a little bit of documentation on how to use your `TodoList` class in the README.
* Think about the best way to test this class. Should you use unit tests? A driver program? Both?

## 🖥️ Example Output

I might create a driver program that utilizes the `TodoList` class as follows:

```cpp
int main() {
  TodoList list;

  list.add("Buy milk");
  list.add("Buy eggs");
  list.add("Prepare a lesson for CSC 122");
  list.add("Sow beet seeds");

  list.complete("Buy eggs")

  list.all(); // Pretty prints a list of each of the four tasks above
  list.complete(); // Pretty prints the task "Buy eggs"
  list.incomplete(); // Pretty prints the tasks "Buy milk",
                     // "Prepare a lesson for CSC 122", and "Sow beet seeds"

  list.clear();

  list.all(); // Pretty prints a message saying that the list is empty
}
```

## 📝 Thought Provoking Questions

1. What are some of the similarities between using an iterator versus a standard for loop with indexes when iterating over an array or vector in C++?
2. What are some of the differences between using an iterator versus a standard for loop with indexes when iterating over an array or vector in C++?
3. Which method do you prefer - iterators or for loops? Why?

## 💼 Add-Ons For the Portfolio

### (One Credit) Reject Blank Tasks

Add a validation to your code that ensures that a user cannot enter a blank task. It is up to you to decide whether the method will reject the input silently or return an error message. Either way, the program should continue gracefully after the empty string input.

Your driver program might look something like this:

```cpp
int main() {
  TodoList list;

  list.add(""); // May or may not return an error message,
                // depending on what you decide

  list.all(); // Pretty prints a message saying that the list is empty
  list.complete(); // Pretty prints a message saying that the list is empty
  list.incomplete(); // Pretty prints a message saying that the list is empty
}
```

### (Two Credits) Reject Duplicate Tasks

Add a validation to your code that ensures that the following conditions are met:

* If a user tries to add a task that is a duplicate of an incomplete task, it should fail
* If a user tries to add a task that is a duplicate of a complete task, it should pass

It is up to you whether the method will reject the input silently or return an error message. Either way, the program should continue gracefully after the input.

Your driver program might look something like this:

```cpp
int main() {
  TodoList list;

  list.add("Walk the dog");
  list.add("Walk the dog"); // May or may not return an error message,
                            // depending on what you decide

  list.all(); // Pretty prints the task "Walk the dog"
  list.complete(); // Pretty prints a message saying that the list is empty
  list.incomplete(); // Pretty prints the task "Walk the dog"

  list.complete("Walk the dog");
  list.add("Walk the dog"); // This should now work

  list.all(); // Pretty prints the task "Walk the dog" two times
  list.complete(); // Pretty prints the task "Walk the dog"
  list.incomplete(); // Pretty prints the task "Walk the dog"
}
```

### (Two Credits) Tagged Tasks

Update your class so that users can associate one or more tags with a task. Then, a user should be able to filter tasks by tag. Again, for this lab, you must use iterators rather than for loops whenever appropriate.

Your driver program might include a section that looks like this:

```cpp
int main() {
  TodoList list;

  vector<string> milk_tags = { "food" };
  list.add("Buy milk", milk_tags);

  vector<string> egg_tags = { "food" };
  list.add("Buy eggs", egg_tags);

  // No tags for this one!
  list.add("Prepare a lesson for CSC 122");

  vector<string> beet_tags = { "food", "garden", "spring" };
  list.add("Sow beet seeds", beet_tags);

  list.tagged_with("food") // Pretty prints "Buy milk", "Buy eggs",
                           // and "Sow beet seeds"
  list.tagged_with("music") // Pretty prints a message saying that
                            // the list is empty

  list.complete("Buy eggs")

  list.tagged_with("food") // Pretty prints "Buy milk", "Buy eggs",
                           // and "Sow beet seeds" - no changes
  list.tagged_with("music") // Pretty prints a message saying that
                            // the list is empty - no changes
}
```

### (Three Credits) Merging Two Lists

Create a method called `TodoList#merge(TodoList list)` that takes another todo list as an argument and merges the tasks in that list into the original. It should leave the list that you passed in as an argument unchanged.

If you completed the "Reject Duplicate Tasks" add-on, it should also make sure that there are no duplicate incomplete items.

Your driver program might include a section that looks like this:

```cpp
int main() {
  TodoList list_one;

  list_one.add("Buy milk");
  list_one.add("Buy eggs");
  list_one.add("Prepare a lesson for CSC 122");
  list_one.add("Sow beet seeds");

  TodoList list_two;

  list_two.add("Buy chicken");
  list_two.add("Buy bread");
  list_two.add("Prepare a lesson for CSC 121");
  list_two.add("Sow carrot seeds");

  list_one.merge(list_two);

  list_one.all() // Pretty prints all eight tasks
  list_two.all() // Only prints the four tasks originally associated with list_two
}
```

## 📘 Works Cited

N/A
