---
title: Speed of a Point Charge Repelled from Another
tags:
  - phy-122
  - phy-202
  - electric-potential-energy
  - electromagnetism
  - algebra
description: A positive charge (Q = +5.0 $$\mu C$$ and m = 0.5 kg) is fixed in place at the origin. Another positive charge (q = +1.0 $$\mu C$$ and m = 2.0 kg) is free to move and starts at rest at the point (1.0 m, 0.0 m). What is the speed of q when it is very far away from Q?
---

## Problem Statement

A positive charge (Q = +5.0 $\mu C$ and m = 0.5 kg) is fixed in place at the origin. Another positive charge (q = +1.0 $\mu C$ and m = 2.0 kg) is free to move and starts at rest at the point (1.0 m, 0.0 m). What is the speed of q when it is very far away from Q?

<details class="details-section">
  <summary class="details-section-summary">I Need a Hint!</summary>
  <p>The Coulomb force between the two point charges will change as q moves away from Q. This is because the magnitude of the force is inversely proportional to the square of the distance between the particles. Solving this problem using electric force would involve some calculus to take this changing force into account.</p>

  <p>But there is a simpler way to do it with some algebra! Think about how the change in electric potential energy of the system relates to kinetic energy. In other words, think about the Conservation of Energy!</p>
</details>

<details class="details-section">
  <summary class="details-section-summary">I Need Another Hint!</summary>
  <p>If the two point charges are "very far away" from each other, we will often make the assumption that they are infinitely far apart from each other. This simplifies our analysis because the electric potential energy of two charged particles that are infinitely far apart is equal to zero.</p>
</details>

<details class="details-section">
  <summary class="details-section-summary">Solution</summary>
  <p>We can use the law of Conservation of Energy to solve this problem. Originally, the two point charges are separated by a distance of 1.0 m and are at rest. Thus, the total energy of the system is the electric potential energy of the two point charges:</p>

  $$
  \begin{align}
  U &= \frac{kQq}{r} \\
  &= \frac{(8.99 \times 10^9 \: N m^2 / C^2)(+5.0 \: \mu C)(+1.0 \: \mu C)}{1.0 m} \\
  &= 0.04495 \: J
  \end{align}
  $$

  <p>When the point charges are "very far apart", the electric potential energy between them is equal to zero since the energy is inversely proportional to the distance between the charges. Thus, all of the initial potential energy gets converted into kinetic energy. Since only q is free to move:</p>

  $$
  0.04495 \: J = KE_q = \frac{1}{2} (2.0 \:kg) v^2
  $$

  Thus, we get that:

  $$
  v = 0.21 \: m/s
  $$
</details>
