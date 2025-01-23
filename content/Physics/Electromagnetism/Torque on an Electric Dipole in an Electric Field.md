---
title: Torque on an Electric Dipole in an Electric Field
tags:
  - phy-202
  - electric-dipoles
  - electromagnetism
  - calculus
  - torque
description: An electric dipole is a pair of opposite electric charges that are separated by a fixed distance. If a dipole were to be placed in an electric field, each of those charges would feel an electric force. Thus, the energy of the dipole in the field depends on its orientation.
---

Suppose I place an electric dipole into an electric field as shown in the diagram below.

<div class="center-svg">
  <svg id="dataviz_area" async>
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" />
      </marker>
    </defs>
  </svg>
</div>
<script src="https://d3js.org/d3.v4.js"></script>
<script type="text/javascript" src="/assets/torque-on-an-electric-dipole-in-an-electric-field.js"></script>

We see that the positive charge feels an electric force in one direction whereas the negative charge feels an equal force in the opposite direction. The charges are attached to each other and cannot escape. Thus, the dipole can rotate, but not translate.

In the example titled [[Torque on an Electric Dipole in an Electric Field]], we determined the torque on this example dipole. The torque is in the opposite direction from increasing $\theta$. Thus, we need a negative sign.

$$
W = \int _{\theta_i}^{\theta_f} - | \vec{p} \times \vec{E} | d\theta
$$

In this case, I am going to express the dot product as the product of the magnitudes of the two vectors and the sine of the angle between them.

$$
W = \int _{\theta_i}^{\theta_f} -pE sin\theta d\theta
$$

The magnitudes of $p$ and $E$ are constant in this problem. Thus, we can pull them out of the integral.

$$
W = -pE \int _{\theta_i}^{\theta_f} sin\theta d\theta
$$

Now, we can take the integral of the sine function:

$$
W = pE (cos\theta_f - cos\theta_i)
$$

The change in potential energy between $\theta_i$ and $\theta_f$ is the negative of the work done. Thus:

$$
\Delta U = -W = pE (cos\theta_i - cos\theta_f)
$$

Remember that with potential energy, we are allowed to choose a baseline where the energy is equal to zero. To keep things simple, let's take a baseline of the electric potential energy equal to zero Joules when $\theta_i = 90^\circ$.

$$
U = -pE cos\theta_f
$$

But this is just the magnitude of two vectors multiplied by the cosine of the angle between them. That is simply the dot product! Thus, we can simplify one more time and get our final answer.

$$
U = -\vec{p} \cdot \vec{E}
$$
