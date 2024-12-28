---
layout: lab
title: What Runs All Day But Has No Legs?
draft: true
---

## 🔖 Background Information

During the process of benchmarking, we want to determine how long a block of code takes to run (among other things like memory usage). In this lab, we are going to create a basic benchmarking utility that users can utilize to time the execution of their code.

You are going to write a class which wraps the C++ time library and gives users an easy interface to create timers. When the programmer wants to use the `Timer` object to time 'something', they can call the `start(...)` method before the 'something' executes and then call the `stop(...)` method after the 'something' finishes. To determine how long the 'something' took, they can call the `elapsed(...)` method which will return the number of seconds that have elapsed.

This problem is available courtey of {% cite jamesWhatRunsAll2022 %}.

## 🎯 Problem Statement

Create a `Timer` object that allows a user to start a timer, stop a timer, and return the elapsed time.

## ✅ Acceptance Criteria

* Create a `Timer` class with `start(...)`, `stop(...)`, and `elapsed(...)` methods. These methods will start and stop a timer via the system clock as well as return the elapsed time.
* When you first create a `Timer` object, it should be in the 'stopped' state and the elapsed time should be zero.
* The `elapsed(...)` method should return the elapsed time, reported in whole seconds.
* Do not call the functions `localtime` or `asctime` from the standard C library `ctime` in this problem.
* Write a driver program and / or set of unit tests that test the `Timer` class. Note, you might find it difficult (impossible?) to unit test every method in your class at the moment. That's ok! Test what you can and then reflect on your strategy in the Thought Provoking Questions below.

## 📋 Dev Notes

* There are a number of edge cases that you need to consider when writing your code and tests. The design of this code is largely up to you.
* Put your `Timer` class in a separate file from the driver program / tests.
* One way to test your `Timer` class in an end-to-end fashion might be:
  1. Initialize a `Timer` object.
  2. Get the current system time.
  3. Execute `start()` on the `Timer` object
  4. Pause for a few seconds.
  5. Stop the timer
  6. Get both the `elapsed(...)` number of seconds and the current system time.
  7. Programatically compare the two times.

## 🖥️ Example Output

We might write a driver program called `timer.cpp` that tests the `Timer` class that we wrote using the algorithm above. The driver program might look something like:

```cpp
#include <iostream>
using namespace std;

int main() {
  Timer timer;
  get_the_system_time();
  timer.start()
  wait_for_a_few_seconds();
  timer.stop();
  get_the_system_time();
  compare_the_times();
  return 0;
}
```

Comparing the times might check that they are within some tolerance of each other.

## 📝 Thought Provoking Questions

1. What should the behavior be if you try to start your timer twice? Should it start from zero again or continue where it left off? Notice how I did not specify this in the acceptance criteria - you need to make a judgement call here!
2. You might have noticed that you are unable to unit test all of the methods in your `Timer` class. Which methods are not tested or indirectly tested? Why was it difficult (impossible?) to test them?
3. How will you store the elapsed time?
4. How will you handle the case when a user tries to call `elapsed(...)` on an object which has never been started?
5. How will you handle the case when a user tries to `stop(...)` a `Timer` object which has not been started?

## 💼 Add-Ons For the Portfolio

### (One Credit) Pretty Print the Time

Create a `pretty_print(...)` method on the `Timer` class that prints the elapsed time to the console in a nice format. This time should be printed using hours, minutes, and seconds as follows in the table below.

| Elapsed Time (Seconds) | pretty_p_rint(...) |
|------------------------|------------------|
| 0 | No time has passed. |
| 1 | 1 second has passed. |
| 59 | 59 seconds have passed. |
| 60 | 1 minute has passed. |
| 62 | 1 minute and 2 seconds have passed. |
| 125 | 2 minutes and 5 seconds have passed. |
| 3600 | 1 hour has passed. |
| 9623 | 2 hours, 40 minutes, and 23 seconds have passed. |

Your program should remain unchanged, otherwise.

### (Two Credits) Addition and Subtraction

In this add-on, you are going to give users the ability to add or subtract the elapsed times from two timers. The return value will be a new timer with a new elapsed time.

* Create an `add(...)` method on the `Timer` object that allows a user to take the sum of two times. The argument to `add(...)` should be another `Timer` object, and the return value of the method should be a `Timer` object where the elapsed time is the sum of the two times.
* Create a `subtract(...)` method on the `Timer` object that allows a user to take the difference of two times. The argument to `subtract(...)` should be another `Timer` object, and the return value of the method should be a `Timer` object where the elapsed time is the difference of the two times.

Your program should remain unchanged, otherwise.

### (Four Credits) Rolling Your Own Mocks

You might have noticed that it was difficult to fully test the `Timer` object using an automated test suite because you did not directly control the system clock. One way that we can test our code is to wrap the components that we do not have control over in another object and then inject them into the `Timer` class. For example, you could wrap the C++ time library in a new class called `CPlusPlusTime` and then inject an instance of `CPlusPlusTime` into the `Timer` class in the constructor. This allows you to create a test implementation of `CPlusPlus` time which can be used for testing.

Write unit tests for the `Timer` class that leverage some hand-rolled mocks.

## 📘 Works Cited

{% bibliography --cited %}
