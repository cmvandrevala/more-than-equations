---
layout: lab
title: Queue-Tee Pie
draft: true
---

## 🔖 Background Information

A queue is a data structure that follows a first-in first-out (FIFO) principle. Similar to the stack you can add elements to the queue (`enqueue`), remove elements from the queue (`dequeue`), and check if the queue is full.

## 🎯 Problem Statement

Write a queue data structure that stores "cute" objects. A cute object is an object that conforms to the `Cutie` interface (as outlined in the Dev Notes). You can use an array "under the hood", meaning that your queue will have a maximum size.

## ✅ Acceptance Criteria

* The queue data structure should be a Java object.
* The queue should use an array or `ArrayList` "under the hood" to store `Cutie` objects. You do not need to create a queue that resizes itself with new inputs.
* I should be able to `enqueue(...)` and `dequeue(...)` a `Cutie` object to the queue data structure.
* If I try to enqueue an object onto the queue while it is full, I should see a message telling me the queue is full. The queue should remain unchanged.
* I should be able to get the current size of the queue via a `size(...)` method (i.e. how many elements are in the queue).

## 📋 Dev Notes

* You cannot use the built-in queue from Java in this solution.
* You do not have to implement the `Cutie` interface from scratch. I have provided it here:

```java
interface Cutie {
  public String description();     // All cuties need to have a description of what makes them cute.
  public Integer cutenessRating(); // All cuties get a cuteness rating out of ten.
}
```

For example, I might create a cutie object like so:

```java
class Puppy implements Cutie {
  public String description() {
    return "A little puppy with big, sad eyes";
  }

  public Integer cutenessRating() {
    return 11; // This puppy gets an 11 / 10 for its cuteness. Such a good boy!
  }
}
```

This object (and others) can be added to your queue.

## 🖥️ Example Output

You could create a driver program that tests the queue data structure. Let's call our queue data structure `QueueTees`. Your driver program might look something like this:

```java
// Create a bunch of objects that conform to the Cutie interface
Puppy puppy = new Puppy();
Kitty kitty = new Kitty();
PygmyMarmoset marmoset = new PygmyMarmoset();

// Create a queue data structure
QueueTees queue = new QueueTees();

// The size of the queue should equal zero since there are no objects in it
queue.size();

// Add the cuties to the queue
queue.enqueue(puppy);
queue.enqueue(kitty);
queue.enqueue(marmoset);

// The size of the queue should equal three since there are three objects in it
queue.size();

// The first dequeue should return the puppy
queue.dequeue();

// The second dequeue should return the kitty
queue.dequeue();

// The first dequeue should return the pygmy marmoset
queue.dequeue();
```

## 📝 Thought Provoking Questions

1. How might you create a queue with no theoretical maximum size?
2. Right now, your queue is restricted to store `Cutie` objects only. How might you change your queue class to store a variety of different types of objects?

## 💼 Add-Ons For the Portfolio

### (One Credit) Clear Method

Create a method that clears all elements in the queue. The behavior of this method might look something like this in a driver program:

```java
QueueTees queue = new QueueTees();
Puppy puppy = new Puppy();

queue.enqueue(puppy);

// The queue size should equal one
queue.size();

queue.clear();

// The queue size should equal zero
queue.size();
```

### (Two Credits) Real-World Example of a Queue

Find a real-world example of where a queue data structure is used. This will require a bit of research!

Write a short description of the problem that needs to be solved and why a queue might be a good data structure to use for the problem at hand. I am looking for a paragraph or two of details. Be sure to cite all of your sources!

### (Three Credits) Generic Type for Queue

Update your queue class to allow the user to specify what type of object will be stored in the queue. You can use a class template to specify the type of object. The behavior of your queue should not change otherwise.

### (Four Credits) Queue on a Linked List

In the lab Links in a Chain, you implemented a linked list data structure. Replace the array data structure in your queue implementation with the linked list that you created in the other lab. You might need to create one or two helper methods on your linked list class to support the enqueue and dequeue operations.

The behavior of the queue should not change whether you use an array or linked list under the hood.

## 📘 Works Cited

N/A
