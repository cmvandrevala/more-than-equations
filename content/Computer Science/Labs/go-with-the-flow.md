---
layout: lab
title: Go With the Flow
draft: true
---

## 🔖 Background Information

Linear heat flow in a rod can be approximated in a straightforward way. Assume that we have a thin rod with some length. We can break the rod up into little sections, each having a local temperature that is approximately constant.

Suppose that each section of the rod begins at the same temperature, determined by the user. If we hold certain positions of the rod at a constant temperature, we are creating a set of heat sources and heat sinks which will cause the temperature throughout the rod to change with time. This is analogous to holding a match or an ice cube to certain positions of the rod.

From here, we can calculate the temperature at some time in the future by taking a weighted average temperature of the positions on each side of a section from the previous time step, as well as the section itself. The exact details of the derivation are not important for this lab, but you will end up with something like this:

$$
T^{n+1}_i = T^n_i + K \left ( T_{i+1}^n - 2T^n_i + T^n_{i-1} \right )
$$

In this equation, the superscript \\( n \\) represents the time step and the subscript \\( i \\) represents the section. The constant \\( K \\) is a constant that you can choose (generally less than one).

For example, suppose I create a rod where each section starts at \\( 10^\circ \\) C and I choose a value of 0.1 for my constant \\( K \\):

```text
+------+------+------+------+------+------+------+------+
|  10  |  10  |  10  |  10  |  10  |  10  |  10  |  10  |
+------+------+------+------+------+------+------+------+
```

Then, I specify that there is a single heat source at the far left of the rod at \\( 100^\circ \\) C:

$$
T_1^0 = 100
$$

```text
+------+------+------+------+------+------+------+------+
| 100  |  10  |  10  |  10  |  10  |  10  |  10  |  10  |
+------+------+------+------+------+------+------+------+
```

If I move forward one step in time, the temperature at the far left would remain at \\( 100^\circ \\) C since that is my source.

$$
T_1^1 = 100
$$

However, the temperature of the second cell would become:

$$
T_2^1 = 10 + 0.1(10 - 2*10 + 100) = 19
$$

The temperature of the third cell would become:

$$
T_3^1 = 10 + 0.1(10 - 2*10 + 10) = 10
$$

And so on...

```text
+------+------+------+------+------+------+------+------+
| 100  |  19  |  10  |  10  |  10  |  10  |  10  |  10  |
+------+------+------+------+------+------+------+------+
```

If I move forward another step in time, the temperatures in the rod would now become:

$$
T_2^2 = 19 + 0.1(10 - 2*19 + 100) = 26.2
$$

The temperature of the third cell would become:

$$
T_3^2 = 10 + 0.1(10 - 2*10 + 19) = 10.9
$$

And so on...

```text
+------+--------+--------+------+------+------+------+------+
| 100  |  26.2  |  10.9  |  10  |  10  |  10  |  10  |  10  |
+------+--------+--------+------+------+------+------+------+
```

After infinitely many time steps have passed, the temperature of this rod would be \\( 100^\circ \\) C uniformly throughout.

This lab is available courtesy of {% cite jamesWhewItGetting2018 %}.

## 🎯 Problem Statement

Write a class called `HeatFlow` which will simulate the one-dimensional flow of heat in a thin rod. A user should be able to specify different parameters of the simulation including the initial temperature of the rod, the length of the rod, the constant K, and any number of sources / sinks.

## ✅ Acceptance Criteria

* Create a class called `HeatFlow`. In the constructor, I should be able to specify the initial temperature of the rod, the number of sections in the rod, the constant K, and any number of sources or sinks at any locations that I wish. The specific form this should take is up to you.
* Create a method called `tick(...)` which will calculate the temperatures in the rod at the next time step of the simulation.
* Create a method called `pretty_print(...)` which will print out the temperatures to the console in a nicely formatted way.

## 📋 Dev Notes

* You may or may not need to use dynamic memory allocation for this lab. You may or may not want to use structures from the standard library like `vector`. The nitty-gritty details of how you implement this simulation are totally up to you!
* You can test your `HeatFlow` class using either a driver program or unit tests. This program works especially well with unit testing:
  1. Set up a rod with some temperature distribution
  2. Call tick
  3. Assert that the temperatures are what you expect

## 🖥️ Example Output

A driver program for my class might look something like this:

```cpp
map<int, float> sources_and_sinks;
sources_and_sinks[0] = 100.0;
initial_temperature = 10;
number_of_sections = 5;
K = 0.1

HeatFlow h(initial_temperature, number_of_sections, K, sources_and_sinks);
h.pretty_print();

// Prints out:
// +------+------+------+------+------+
// | 100  |  10  |  10  |  10  |  10  |
// +------+------+------+------+------+

h.tick();
h.pretty_print();

// Prints out:
// +------+------+------+------+------+
// | 100  |  19  |  10  |  10  |  10  |
// +------+------+------+------+------+

h.tick();
h.pretty_print();

// Prints out:
// +------+--------+--------+------+------+
// | 100  |  26.2  |  10.9  |  10  |  10  |
// +------+--------+--------+------+------+
```

## 📝 Thought Provoking Questions

1. How do you calculate temperatures at each end of the rod since the end has only one neighbor instead of two?
2. Do you need dynamic memory allocation in this problem? If so, how do you use it?
3. Do you need to create a destructor for your `HeatFlow` class? If so, what needs to be cleaned up?
4. How do you verify that the sources and the sinks never change temperature?
5. What does your output look like when there is a single source or sink in the middle of the rod rather than at the end?
6. What does your output look like when there is a source or sink at each end of the rod?

## 💼 Add-Ons For the Portfolio

### (One Credit) Dynamic Memory Allocation from Scratch

Reimplement your code so that you do not use any data structures from the C++ standard library (e.g. you cannot use `vector`). Instead, you need to dynamically allocate the memory for each time step of the simulation from scratch. Your output should be identical to what you had before.

### (Two Credit) Discretized Thermal Equation

The equation that I gave you at the beginning of the lab is just an approximation of the full time-dependent heat equation, discretized by the finite difference method. The full equation has the form:

$$
T^{n+1}_i = T^n_i + \kappa \Delta t \left ( \frac{T_{i+1}^n - 2T^n_i + T^n_{i-1}}{(\Delta x)^2} \right )
$$

where \\( \kappa \\) is the thermal conductivity of the material \\( \Delta x \\) is the distance between each section of the rod, and \\( \Delta t \\) is the length of time between each time step in the simulation. Update your code to replace the single constant K with \\( \kappa \\), \\( \Delta x \\), and \\( \Delta t \\).

### (Three Credits) Insulating Layer

We are often curious about how heat moves between layers of material with different thermal conductivities. Update your code so that you can specify a thermal conductivity \\( \kappa \\) for each section, individually. Then, write a simulation that shows how heat flows between two metal rods with large \\( \kappa \\), separated by a small insulating layer with small \\( \kappa \\).

## 📘 Works Cited

{% bibliography --cited %}
