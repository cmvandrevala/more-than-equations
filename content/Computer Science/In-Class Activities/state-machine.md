---
layout: activity
title: State Machine
draft: true
---

## 🔖 Background Information

A finite state machine (FSM) is a program where a system is described as being in one of a specific number of states. For example, if we wanted to code a coffee machine as a state machine, the coffee machine might be classified as "off", "brewing", "warming", and "standby". You can transition between these different states as per the rules encoded in the state machine.

In his blog, Hunter wrote a simple state machine example that controls a flashing LED light using function pointers {% cite hunterFunctionPointerBased2019 %}.

## 🎯 Problem Statement

Read through the code example linked in [Hunter's blog post](https://blog.mbedded.ninja/programming/general/control-methodology/a-function-pointer-based-state-machine) that gives an implementation of a state machine using function pointers. Then, answer the following questions with your group members:

1. Describe, at a high level, how the state machine works. In other words, how would you, as a developer, integrate this state machine into your existing code?
2. How are function pointers used in this example?
3. How might you change this code if you were re-writing it in C++ instead of C?
4. What are some of the benefits and downsides to modeling your system as a state machine?
5. Can you think of an alternative way of implementing the state machine without using function pointers?

## ✅ Acceptance Criteria

Answer the questions outlined above in the problem statement. Your group will share one or more of your answers with the class.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

N/A

## 📘 Works Cited

{% bibliography --cited %}
