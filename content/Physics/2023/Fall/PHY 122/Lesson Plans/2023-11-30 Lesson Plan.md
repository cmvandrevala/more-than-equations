---
aliases: 
tags:
  - phy-122-fall-2023
timestamp: 2023-11-24 13:12
---
## 📣 Announcements

* There are two SmartBook assignments and one homework assignment due this week
* Course surveys are now live (you should have received an email). Please leave your feedback via the survey.
* All assignments are due on Sunday, December 10 at midnight
* The final exam will take place on Thursday, December 14

## ✅ Sequence

* (Finish from last Tuesday) Relativistic velocity transformation: $v_{PA} = \frac{v_{PB} + v_{BA}}{1 + v_{PB} v_{BA} / c^2}$
	* Example: Suppose a spaceship heading directly toward Earth at half the speed of light sends a signal to us on a laser-produced beam of light. Given that the light leaves the ship at speed c as observed from the ship, calculate the speed at which it approaches Earth.
	* Example: Suppose a spaceship heading directly toward Earth at half the speed of light sends a signal to us via a probe traveling at 0.5c. Calculate the speed at which it approaches Earth.
* Where are we at? 
	* We just threw a huge monkey wrench into Newtonian mechanics through our study of special relativity.
	* Length and time depend on your reference frame. From dimensional analysis, other quantities that come from length and time are thrown into question.
	* What can we rely on?
	* The Correspondence Principle - the new theory of relativity must make the same predictions as Newtonian / Galilean theories when we use the approximation that $v \ll c$.
* Relativistic momentum
	* When you are moving slowly compared to the speed of light, your momentum needs to be $p = mv$. But you cannot use $p = mv$ for momentum because $v$ could be any value - even if that value is greater than $c$.
	* Through a bit of trial and error, we found that $p =\gamma m v$
	* When a mass is moving relative to an observer, the only way that its mass can be determined is through collisions or other means in which momentum is involved. Since the mass of a moving object cannot be determined independently of momentum, the only meaningful mass is rest mass. Thus, when we use the term mass, assume it to be identical to rest mass.
* Relativistic kinetic energy
	* When you are moving slowly compared to the speed of light, your kinetic energy needs to be $K = \frac{1}{2}mv^2$. But you cannot use $K = \frac{1}{2}mv^2$ for momentum kinetic energy because $v$ could be any value - even if that value is greater than $c$.
	* Units of electron volts - the energy of an electron as it is accelerated over one volt of electric potential

### Derivation
$$
E = K + E_o
$$
$$
E^2 = (K + E_o)^2
$$
$$
E^2 = K^2 + E_o^2 + 2 K E_o
$$
Start with the expression for $K$.

$$
K = (\gamma - 1)E_o
$$

Solve for $K^2$ and $2KE_o$ separately
$$
K^2 = (\gamma - 1)^2E_o^2
$$
$$
2KE_o = (\gamma - 1)E_o E_o = (\gamma - 1)E_o^2
$$
Add them together:

$$
K + 2KE_o = (\gamma - 1)^2 E_o^2 + 2(\gamma - 1)E_o^2
$$
$$
K + 2KE_o = E_o^2 \left [(\gamma - 1)^2 + 2(\gamma - 1) \right ]
$$
$$
K + 2KE_o = E_o^2 \left [\gamma^2 - 2\gamma +1 + 2\gamma - 2 \right ]
$$
$$
K + 2KE_o = E_o^2 \left [\gamma^2 - 1 \right ]
$$
$$
K + 2KE_o = E_o^2 \frac{\beta^2}{1 - \beta^2}
$$
$$
K + 2KE_o = E_o^2 \gamma^2 \beta^2
$$
$$
K + 2KE_o = E_o^2 \gamma^2 \frac{v^2}{c^2}
$$
Square both sides of relativistic momentum:

$$
p^2 = \gamma^2 m^2 v^2
$$
$$
\frac{p^2}{m^2 c^2} = \frac{\gamma^2 v^2}{c^2}
$$
$$
K + 2KE_o = E_o^2 \frac{p^2}{m^2 c^2}
$$
Putting it all together:

$$
E^2 = E_o^2 \frac{p^2}{m^2c^2} + E_o^2
$$

Dimensional analysis: Let $E_o^2 = m^2 c^4$

$$
E^2 =  p^2 c^2 + m^2 c^4
$$

## ✏️ Practice Problems

1. Two spaceships travel at a high speed in the same direction. An observer on a nearby planet measures the speed of ship 1 as 0.80c and the speed of ship 2 as 0.75c. The observer, ship 1, and ship 2 are all along a straight line, in that order. How fast is ship 2 traveling according to ship 1? If you are having trouble, check out Example 26.3 in the textbook.
2. An electron has a momentum of $2.4 \times 10^{-22} \: kg \cdot m/s$ and a mass of $9.11 \times 10^{-31}$ kg.
		a. What is the speed of the electron if we are using the Newtonian approximation?
		b. What is the speed of the electron if we are using the theory of special relativity?
3. A chunk of debris in space with a mass of 1.0 kg is moving with a speed of 0.707c. A constant force of magnitude $1.0 \times 10^8$ N acts in a direction opposite to the motion of the chunk. How long must the force act to bring the chunk to rest?
4. How much energy is released by a nuclear reactor if the total mass of a fuel rod decreases by 1.0 g?
5. A beam of electrons is accelerated to a kinetic energy of 150 keV. How fast are these electrons moving?
6. Two lumps of putty, each with a mass of 1.0 kg and a speed of 30 m/s, are moving in opposite directions. They collide and stick together, with the final lump of putty at rest. If no energy was lost to the environment, what is the change in mass of the system due to the collision?

## Partial Solutions

1. -0.125c (i.e. coming towards it at 12.5% the speed of light)
2. (a) 263,446,762 m/s (b) 0.66c = 198,000,000 m/s
3. 3.0 seconds
4. $9 \times 10^{13}$ J (a lot...)
5. 0.63c
6. It increased by $1.00 \times 10^{14}$ kg