---
title: Capacitor Plate Separation Versus Energy
tags:
  - phy-122
  - phy-202
  - capacitors
  - algebra
description: There are approximately $2.85 \times 10^{22}$ copper atoms in a 3.00 g sample. What is the total charge of all of the electrons in the sample?
articleType: example-problem
date: 2025-04-27
---

## Problem Statement

Suppose I charge an ideal parallel plate capacitor with a capacitance $C$ to a voltage $V$ and charge $Q$. The initial energy stored in this capacitor is $E$. If I carefully isolate the capacitor from any circuit and then double the distance between its plates, how does the energy change?

> [!question]- I Need a Hint!
> If the capacitor is isolated from any circuit, the charge on the plates will not change.

> [!example]- Solution
> If the capacitor is isolated from any circuit, the charge on the plates will not change. Thus, the new total charge on the capacitor will remain $Q$ while the distance between the plates is doubled. We know that the capacitance of a parallel plate capacitor is given by:
>
> $$
> C = \frac{A \kappa \epsilon_o}{d}
> $$
>
> where $d$ is the distance between the plates of the capacitor. Since the distance is doubled, the capacitance of the capacitor will become $C_{new} = C/2$. This means that the voltage drop across the capacitor will become:
>
> $$
> V_{new} = \frac{Q_{new}}{C_{new}} = \frac{Q}{C / 2} = 2 \frac{Q}{C} = 2 V
> $$
>
> We know that the energy stored in a capacitor is given by:
>
> $$
> E = \frac{1}{2} CV^2
> $$
>
> Thus, the new energy stored in the capacitor will be:
>
> $$
> E_{new} = \frac{1}{2} C_{new} V_{new}^2 = \frac{1}{2} \left ( \frac{C}{2} \right ) (2 V)^2
> $$
>
> $$
> E_{new} = CV^2 = 2 E
> $$
>
> The energy in the capacitor doubles when you double the separation between the plates. This is because you are doing work to pull the plates apart against the attractive force between the opposite charges. That mechanical work you do goes into increasing the electrical energy stored in the capacitor.
