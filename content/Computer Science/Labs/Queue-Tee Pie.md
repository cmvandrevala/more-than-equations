---
title: Queue-Tee Pie
tags: [c-plus-plus, java, csc-122, csc-214, queues]
description: In this lab, you will write a queue data structure.
date: 2025-04-18
---

## 🔖 Background Information

A queue is a data structure that follows a first-in first-out (FIFO) principle. Similar to the stack you can add elements to the queue (`enqueue`), remove elements from the queue (`dequeue`), and check if the queue is full.

## 🎯 Problem Statement

Write a queue data structure that stores "cute" objects. A cute object is an object that conforms to the `Cutie` interface / abstract base class (as outlined in the Dev Notes). You can use an array "under the hood", meaning that your queue will have a maximum size.

## ✅ Acceptance Criteria

* The queue data structure should be an object.
* The queue should use an array list "under the hood" to store `Cutie` objects. You do not need to create a queue that resizes itself with new inputs.
* I should be able to `enqueue(...)` and `dequeue(...)` a `Cutie` object to the queue data structure.
* If I try to enqueue an object onto the queue while it is full, I should see a message telling me the queue is full. The queue should remain unchanged.
* I should be able to get the current size of the queue via a `size(...)` method (i.e. how many elements are in the queue).
* You do not have to implement a generic queue structure. You can instead have it store `Cutie` objects directly. There is an extra credit opportunity to make the queue generic.

## 📋 Dev Notes

* You cannot use the built-in queue in this solution.
* You do not have to implement the `Cutie` interface / abstract base class from scratch. I have provided it here:

> [!tip]- C++
>
> ```cpp
> class Cutie {
>   private:
>     string description;
>     int cuteness_rating
>
>   public:
>     Cutie(string description, int cuteness_rating) {
>       this->description = description;
>       this->cuteness_rating = cuteness_rating;
>     }
>
>     virtual string get_description() = 0;
>     virtual int get_cuteness_rating() = 0;
> }
> ```

> [!tip]- Java
>
> ```java
> interface Cutie {
>   public String description();     // All cuties need to > have a description of what makes them cute.
>   public Integer cutenessRating(); // All cuties get a cuteness rating out of ten.
> }
> ```

## 🖥️ Example Output

Suppose you wrote a queue data structure called `QueueTees`. You then created `Puppy`, `Kitty`, and `PygmyMarmoset` which all conform to that interface / abstract base class. Your driver program might look something like this:

> [!tip]- C++
>
> ```cpp
> int main() {
>   // Create a bunch of objects that implement the Cutie base class
>   Puppy puppy;
>   Kitty kitty;
>   PygmyMarmoset marmoset;
>
>   // Create a queue data structure
>   QueueTees queue;
>
>   // The size of the queue should equal zero since there are no objects in it
>   cout << queue.size();
>
>   // Add the cuties to the queue
>   queue.enqueue(puppy);
>   queue.enqueue(kitty);
>   queue.enqueue(marmoset);
>
>   // The size of the queue should equal three since there are three objects in it
>   cout << queue.size();
>
>   // The first dequeue should return the puppy
>   queue.dequeue();
>
>   // The second dequeue should return the kitty
>   queue.dequeue();
>
>   // The third dequeue should return the pygmy marmoset
>   queue.dequeue();
> }
> ```

> [!tip]- Java
>
> ```java
> // Create a bunch of objects that conform to the Cutie interface
> Puppy puppy = new Puppy();
> Kitty kitty = new Kitty();
> PygmyMarmoset marmoset = new PygmyMarmoset();
>
> // Create a queue data structure
> QueueTees queue = new QueueTees();
>
> // The size of the queue should equal zero since there are no objects in it
> System.out.println(queue.size());
>
> // Add the cuties to the queue
> queue.enqueue(puppy);
> queue.enqueue(kitty);
> queue.enqueue(marmoset);
>
> // The size of the queue should equal three since there are three objects in it
> System.out.println(queue.size());
>
> // The first dequeue should return the puppy
> queue.dequeue();
>
> // The second dequeue should return the kitty
> queue.dequeue();
>
> // The third dequeue should return the pygmy marmoset
> queue.dequeue();
> ```

## 📝 Thought Provoking Questions

1. How might you create a queue with no theoretical maximum size?
2. Right now, your queue is restricted to store `Cutie` objects only. How might you change your queue class to store a variety of different types of objects?

## 💼 Optional Extra Credit

### (1/4 Point) Clear Method

Create a method that clears all elements in the queue.

### (1/2 Point) Generic Queue

Update your queue class to allow the user to specify what type of object will be stored in the queue. You can use a class template to specify the type of object. The behavior of your queue should not change otherwise.

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/queue-tee-pie-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/queue-tee-pie-java-template)

## 📘 Works Cited

N/A
