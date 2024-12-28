---
layout: activity
title: LRU Cache
draft: true
---

## 🔖 Background Information

Caching is the strategy of storing and accessing specific items in memory rather than from disk in order to speed up an app. In a perfect world, we might want to cache every asset served from our app. However, it is impossible to store everything that we might want to access directly in memory since the size of our disk drives are generally orders of magnitude larger than the amount of RAM memory in our systems. Thus, we have to decide what items should be cached, and how do we keep track of those items in memory?

Least Recently Used (LRU) is a cache replacement algorithm that updates the cache when the space is full. As its name implies, it removes the least recently used values, clearing up space for other items in the cache {% cite ahmedvLRUCache2021 %}.

## 🎯 Problem Statement

Read through the code example given in [this blog post](https://www.topcoder.com/thrive/articles/lru-cache) that gives an implementation of the LRU cache. Then, answer the following questions with your group members:

1. Describe, at a high level, how the LRU cache adds an item when the cache has available space.
2. Describe, at a high level, how the LRU cache replaces an item when the cache is full.
3. Which data structures do you see implemented in the LRU cache?
4. What is the purpose of each data structure implemented in the LRU cache?
5. What are some of the benefits and downsides to caching data in this way?

## ✅ Acceptance Criteria

Answer the questions outlined above in the problem statement. Your group will share one or more of your answers with the class.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

N/A

## 📘 Works Cited

{% bibliography --cited %}
