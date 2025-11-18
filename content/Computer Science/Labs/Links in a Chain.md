---
title: Links in a Chain
date: 2025-11-18
tags: [linked-lists, csc-122, csc-214, data-structures]
description: In this lab, you will implement a singly linked list data structure. Then, you will populate and traverse the linked list using some simple operations.
---

## 🔖 Background Information

A singly linked list data structure consists of a set of nodes, each carrying a piece of data. The nodes are linked together, one after another, such that each node has exactly one parent and potentially one child. The HEAD node is the exception in that it does not have a parent node.

## 🎯 Problem Statement

Write a singly linked list data structure that stores `Link` objects.

## ✅ Acceptance Criteria

* The nodes of the linked list data structure should be objects.
* I should be able to create a node and attach it to an existing node in the list.
* I should be able to traverse the list, starting from the HEAD and moving to the end.

## 📋 Dev Notes

* You cannot use any built-in classes from the standard library that implement nodes or lists. You need to implement this data structure from scratch.
* You do not have to implement the `Link` object from scratch. I have provided it here:

> [!tip]- C++
>
> ```cpp
> class Link {
>   private:
>     string material;
>
>   public:
>     Link(string material) {
>       this->material = material;
>     }
>
>     string get_material() {
>       return this->material;
>     }
> }
> ```

> [!tip]- Java
>
> ```java
> public class Link {
>   private String material;
>
>   Link(string material) {
>     this.material = material;
>   }
>
>   String getMaterial() {
>     return this.material;
>   }
> }
> ```

## 🖥️ Example Output

A driver program might look something like this:

> [!tip]- C++
>
> ```cpp
> Link gold = Link("Gold");
> Node node_one = new Node(&gold);
>
> Link silver = Link("Silver");
> Node node_two = new Node(&silver, &gold);
>
> Link bronze = Link("Bronze");
> Node node_three = new Node(&bronze, &silver);
>
> Node retrieved_node_two = node_one.next();
> Node retrieved_node_three = node_two.next();
> ```

> [!tip]- Java
>
> ```java
> Link gold = new Link("Gold");
> Node nodeOne = new Node(gold);
>
> Link silver = new Link("Silver");
> Node nodeTwo = new Node(silver, gold);
>
> Link bronze = new Link("Bronze");
> Node nodeThree = new Node(bronze, silver);
>
> Node retrievedTwo = nodeOne.next();
> Node retrievedThree = nodeTwo.next();
> ```

## 📝 Thought Provoking Questions

1. Does your linked list data structure have a maximum size?
2. What is your strategy for appending a `Link` to the end of the list?

## 💼 Add-Ons For the Portfolio

### (Three Credits) Generic Type for the Linked List

Update your `Node` class to allow the user to specify what type of object will be stored in the list. You can use a template to specify the type of object. The behavior of your singly linked list should not change otherwise.

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/links-in-a-chain-cpp-template)

## 📘 Works Cited

N/A
