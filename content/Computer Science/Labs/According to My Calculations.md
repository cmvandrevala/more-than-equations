---
title: According to My Calculations...
date: 2025-02-14
tags: [csc-216, stacks, queues]
description: In this lab, you will write a simple calculator that interprets expressions using Reverse Polish Notation. Then, you will implement the Shunting Yard Algorithm and connect them together to evaluate infix notation expressions.
---

## 🔖 Background Information

Generally, when we write mathematical expressions we use what is called "infix notation". This means that the operators appear in-between the numbers. Check out the following examples of infix notation:

$$
2 + 5
$$

$$
3 + 6 * 5
$$

$$
4 * (2 + 3)
$$

$$
(7 + 9) / 8
$$

The problem with infix expressions is that they are difficult for computers to parse and evaluate. It can be tedious to write the code that makes sure that operations are done in a particular order. Parentheses are especially annoying...

Thus, we often use Reverse Polish Notation (a.k.a. postfix notation) when working with computers. In this notation, operators follow the arguments. The examples from above translate to the following postfix expression:

$$
2 \> 5 \> +
$$

$$
6 \> 5 \> * 3 \> +
$$

$$
2 \> 3 + 4 \> *
$$

$$
7 \> 9 \> + 8 \> /
$$

Postfix notation can be easily evaluated using a stack data structure. See [this link](https://www.youtube.com/watch?v=QM_RsQ9Yeio) for a nice overview of how it works [@garyexplainsWhatReversePolish2024].

Thus, mathematical software will often take infix expressions, convert them to postfix expressions, and then evaluate them. The [Shunting Yard Algorithm](https://www.youtube.com/watch?v=1VjJe1PeExQ) is often used to convert from infix expressions to postfix expressions [@garyexplainsShuntingYardAlgorithm2024].

## 🎯 Problem Statement

Build me a calculator! I want you to implement a console calculator that takes an infix mathematical expression and evaluates it. The strategy we will use is:

1. Use the Shunting Yard Algorithm to convert the infix expression to a postfix expression.
2. Evaluate the postfix expression using a stack

## ✅ Acceptance Criteria

* Implement a `Calculator` class which has an `evaluate` method that takes an infix mathematical expression as a `string` and returns a `double` as its output.
  * Under the hood, the `evaluate` method will first call some sort of "infix to postfix" method that performs the Shunting Yard Algorithm.
  * Then, it will call an "evaluate postfix" method that performs the calculations of the postfix expression.

## 📋 Dev Notes

A full implementation of an infix expression calculator which takes into account edge cases and invalid inputs can be thousands of lines long. The goal here is to get a working prototype. Thus, there are a number of items that you do __NOT__ need to worry about:

* You do __NOT__ need to implement all of the possible mathematical operators. You only need to include addition, subtraction, multiplication, division, and grouping by parentheses.
* You do __NOT__ need to validate if the mathematical expression is valid (e.g. check if the parentheses match). You can assume that the expressions are always valid.
* You do __NOT__ need to implement your own stacks / queues from scratch. Feel free to use the stacks and queues from the C++ and Java libraries.
* You do __NOT__ need to handle different types of whitespace. Do whatever is easiest for you - for example, you assume that there are no spaces between each character in the string and code accordingly.

You __ARE__ allowed to make assumptions / simplifications when implementing this calculator to get a prototype working. You can tell me what those are in the Thought-Provoking Questions.

## 🖥️ Example Output

In your driver program / unit tests, I might expect to see something like this:

> [!tip]- C++
>
> ```cpp
> #include <iostream>
>
> int main() {
>  Calculator calculator;
>
>   // Prints out the number 7
>   std::cout << calculator.evaluate("2 + 5");
>
>   // Prints out the number 33
>   std::cout << calculator.evaluate("3 + 6 * 5");
>
>   // Prints out the number 20
>   std::cout << calculator.evaluate("4 * (2 + 3)");
>
>   // Prints out the number 2
>   std::cout << calculator.evaluate("(7 + 9) / 8");
> }
> ```

> [!tip]- Java
>
> ```java
> class Main {
>   public static void main(String[] args) {
>     Calculator calculator = new Calculator();
>
>     // Prints out the number 7
>     System.out.println(calculator.evaluate("2 + 5"));
>
>     // Prints out the number 33
>     System.out.println(calculator.evaluate("3 + 6 * 5"));
>
>     // Prints out the number 20
>     System.out.println(calculator.evaluate("4 * (2 + 3)"));
>
>     // Prints out the number 2
>     System.out.println(calculator.evaluate("(7 + 9) / 8"));
>   }
> }
> ```

## 📝 Thought Provoking Questions

1. What assumptions / simplifications did you make to get a prototype of the calculator working?

## 💼 Add-Ons For the Portfolio

N/A

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/counting-cards-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
