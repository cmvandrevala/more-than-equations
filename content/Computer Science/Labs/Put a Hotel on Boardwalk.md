---
title: Put a Hotel on Boardwalk
date: 2025-02-08
tags:
  - c-plus-plus
  - java
  - csc-216
  - linked-lists
description: In this lab you will implement a circular linked list and store data in it from the game Monopoly.
---

## 🔖 Background Information

According to Wikipedia [@MonopolyGame2025]:

> Monopoly is a multiplayer economics-themed board game. In the game, players roll two dice to move around the game board, buying and trading properties and developing them with houses and hotels. Players collect rent from their opponents and aim to drive them into bankruptcy.

The first half of the game where you buy up properties is mildly amusing. The second half of the game where you force players to pay massive fees when they land on your hotels is a great way to ruin friendships.

Your goal in this lab is to implement a Monopoly board using a circular linked list.

## 🎯 Problem Statement

Write a generic circular linked list that has the following functionality:

1. You can append a node to the "end" of the list (i.e. right before the head pointer).
2. You can retrieve the data stored at the current node in the list.
3. You can step forward by one node in the list. Eventually, you should loop back to the beginning and go around again.

Then, populate your circular linked list with the Monopoly board data that I provided in the templates. Test out your board by stepping through it and making sure that your spaces are in the correct order.

## ✅ Acceptance Criteria

* I should be able to initialize a generic circular linked list that can store different types of primitives / objects
* I should be able to append objects to the circular linked list
* I should be able to step through all of the spaces on the Monopoly board

> [!success]-Extra Credit Opportunity!
>
> Add a method to your circular linked list that "rolls two six sided dice" (i.e. generates two numbers between 1 and 6 and adds them up). It should then step the player forward that many nodes. Now you are one step closer to building your very own game of Monopoly in the console!

## 📋 Dev Notes

* If you are having trouble getting started with this lab, check out [this Programiz link](https://www.programiz.com/dsa/circular-linked-list) which gives an overview of circular linked lists as well as some code samples [@CircularLinkedList]. But remember, you are tasked with writing a generic circular linked list while their examples include integers, specifically!

## 🖥️ Example Output

> [!tip]- C++
>
> ```c++
> CircularLinkedList monopolyBoard = CircularLinkedList<string>();
>
> monopolyBoard.append("Go");
> monopolyBoard.append("Mediteranean Avenue")
> monopolyBoard.append("Community Chest")
> monopolyBoard.append("Baltic Avenue")
> monopolyBoard.append("Income Tax")
> // And so on for all of the spaces on the board...
>
> cout << monopolyBoard.currentNode; // This should print "Go" to the console
>
> monopolyBoard.step();
>
> cout << monopolyBoard.currentNode; // This should print "Mediteranean Avenue" to the console
>
> monopolyBoard.step();
> monopolyBoard.step();
> monopolyBoard.step();
>
> cout << monopolyBoard.currentNode; // This should print "Income Tax" to the console
>
> for(int i = 0; i < 37 i++) {
>   monopolyBoard.step();
> }
>
> cout << monopolyBoard.currentNode; // This should print "Mediteranean Avenue" to the console since we have looped back around
> ```

> [!tip]- Java
>
> ```java
> CircularLinkedList monopolyBoard = new CircularLinkedList<string>();
>
> monopolyBoard.append("Go");
> monopolyBoard.append("Mediteranean Avenue")
> monopolyBoard.append("Community Chest")
> monopolyBoard.append("Baltic Avenue")
> monopolyBoard.append("Income Tax")
> // And so on for all of the spaces on the board...
>
> System.out.println(monopolyBoard.currentNode); // This should print "Go" to the console
>
> monopolyBoard.step();
>
> System.out.println(monopolyBoard.currentNode); // This should print "Mediteranean Avenue" to the console
>
> monopolyBoard.step();
> monopolyBoard.step();
> monopolyBoard.step();
>
> System.out.println(monopolyBoard.currentNode); // This should print "Income Tax" to the console
>
> for(int i = 0; i < 37 i++) {
>   monopolyBoard.step();
> }
>
> System.out.println(monopolyBoard.currentNode); // This should print "Mediteranean Avenue" to the console since we have looped back around
> ```

## 📝 Thought Provoking Questions

1. How many pointers / indexes did you need to keep track of when implementing your Monopoly board?
2. What would you need to change in your code if you wanted players to be able to move forwards or backwards on the board?
3. What would you need to change in your code if you wanted players to be able to move directly to a specific node on the board (e.g. Go to Jail)?

## 💼 Add-Ons For the Portfolio

N/A

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/put-a-hotel-on-boardwalk-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/put-a-hotel-on-boardwalk-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
