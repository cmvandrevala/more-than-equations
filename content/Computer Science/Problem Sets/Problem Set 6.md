---
title: Problem Set 6
tags: [csc-216]
description: This problem set is from week six of the course.
---

1. Suppose I have an initially empty stack data structure. I perform the following operations on the stack in the given order. What is the final state of the stack (i.e. what numbers are stored in the stack in which order)?

```text
push(1)
push(7)
pop()
pop()
pop()
push(7)
push(7)
pop()
push(9)
pop()
push(2)
pop()
push(5)
size()
push(6)
pop()
push(8)
```

---

2. Suppose I have an initially empty queue data structure. I perform the following operations on the queue in the given order. What is the final state of the queue (i.e. what numbers are stored in the queue in which order)?

```text
push(5)
push(3)
pop()
push(2)
push(8)
size()
pop()
push(9)
pop()
push(1)
pop()
push(7)
push(6)
pop()
push(5)
```

---

3. Suppose I have an initially empty dequeue data structure. I perform the following operations on the dequeue in the given order. What is the final state of the dequeue (i.e. what numbers are stored in the dequeue in which order)?

```text
push_front(3)
size()
push_back(8)
push_back(9)
push_front(1)
last()
push_front(2)
pop_back()
push_back(7)
first()
last()
push_back(4)
size()
pop_front()
pop_front()
```

---

4. You are writing code for a financial company that collects orders from customers to buy and sell stock on the NASDAQ. These transactions are going to be stored in some data structure as they come in and then executed one by one. The important thing is that the transactions be executed in the time order in which they come in. In other words, if Customer A buys 10 shares of AAPL at 10:00 AM and Customer B buys 10 shares of AAPL at 10:05 AM, the order for Customer A must happen before the order for Customer B. What data structure would you recommend to store these transactions and why?
