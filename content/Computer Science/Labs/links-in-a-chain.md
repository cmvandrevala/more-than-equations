---
layout: lab
title: Links in a Chain
draft: true
---

## 🔖 Background Information

A linked list is a data structure that consists of a number of nodes, each containing a piece of data. The nodes are linked together, one at a time, similar to the links in a chain. In a singly linked list, each node in the list points to the next one in the chain, but it does not point back to the previous one {% cite bitdegreeLearnHowUse2019 %}.

## 🎯 Problem Statement

Create a singly linked list data structure that stores a list of `ChainLink` objects. I should be able to append a new `ChainLink` object to the end of the list and view the `ChainLink` object at any point in the list.

## ✅ Acceptance Criteria

* Each `ChainLink` object in the data structure should be a Java object.
* I should be able to append a `ChainLink` object to the end of the linked list structure. There are many ways you might decide to do this - you decide!
* I should be able to view the details of the `ChainLink` object at some index. There are many ways you might decide to do this - you decide!

## 📋 Dev Notes

* You are not allowed to use any built-in containers from Java (i.e. no ArrayLists, no arrays, etc.). You must implement everything from scratch.
* You do not have to implement the `ChainLink` object from scratch. I have provided it here:

```java
class ChainLink {
    public String color;

    ChainLink(String color) {
      this.color = color;
    }
};
```

## 🖥️ Example Output

You do not have to structure your linked list in exactly this way. However, here is one possible solution that you might test in a driver program:

```cpp
ChainLink linkOne = new ChainLink("red");
Node nodeOne = new Node(linkOne);

ChainLink linkTwo = ChainLink("blue");
Node nodeTwo = new Node(linkTwo, nodeOne);

ChainLink linkThree = ChainLink("green");
Node nodeThree = new Node(linkThree, nodeTwo);

// Returns the second ChainLink in the list
Node retrievedNode = nodeOne.next();
ChainLink retrievedLink = retrievedNode.data();

// Returns the third ChainLink in the list
Node anotherRetrievedNode = nodeOne.next().next();
ChainLink anotherRetrievedLink = anotherRetrievedNode.data();
```

## 📝 Thought Provoking Questions

1. Does your linked list data structure have a maximum size? Why or why not?
2. What is your strategy for appending a `ChainLink` to the end of the list?

## 💼 Add-Ons For the Portfolio

### (Two Credits) Size Method

Given a node in your linked list, create a method that will tell the user how many links come after it. In other words, what is the size of the remaining list?

### (Two Credits) Prepend ChainLink

Update your code to allow users to prepend `ChainLink` objects to the list (i.e. add them to the beginning rather than the end). Be sure to test your implementation in your driver program.

### (Two Credits) Real-World Example of a Linked List

Find a real-world example of where a linked list data structure is used. This will require a bit of research!

Write a short description of the problem that needs to be solved and why a linked list might be a good data structure to use for the problem at hand. I am looking for a paragraph or two of details. Be sure to cite all of your sources!

### (Three Credits) Generic Type for Linked List

Update your classes to allow the user to specify what type of object will be stored in the stack (not just a `ChainLink`). You can use a class template to specify the type of object. The behavior of your linked list should not change otherwise.

## 📘 Works Cited

{% bibliography --cited %}
