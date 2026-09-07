---
title: 32w/h froglight farm
description: Froglight is a valuable light source that is difficult to get. A farm that can effectively obtain froglight is crucial at the later period of game, where machines and buildings are high quality.
date: 2026-07-10
updated: 2026-07-10
tags:
  - redstone
  - farms
  - hardcore
category: Journals
cover: /images/articles/froglight-farm-1.jpg
draft: false
featured: false
---
## System definition

Overall flowchart: Magma cube (a creature) spawn in nether → Nether portal (send to Overworld) → Magma cube get damaged and split into small size → Frog eat small magma cube → Frog produce froglight → Froglight being collected by hopper and mining cart with hopper → Compiled into shulker boxes and sent to storage

- Nether:
	- Input: large platform for magma cube to spawn, and a player to load the area
	- Process: magma cube being sent to overworld
	- Output: magma cubes concentrated in one portal in overworld
	- Crucial variable: the amount and space of nether portal,

- Overworld:
	- Input: magma cube sent from nether
	- Process:
		1. Magma cube lose heart and split into smaller cubes, until split into minimal size
		2. Small sized magma cube can pass through the tunnel
		3. Magma cubes being eaten by 3 types of frogs
		4. Frogs give out 3 types of froglights
		5. Frog lights being collected via water pipelines and filled into shulker boxes
		6. Full shulker boxes are sent to storage
	- Output: Full shulker boxes of froglights sit in storage
	- Crucial variable: the amount of frogs
		- If there are not enough frogs: the rate of eating magma cubes will decline, so decrease efficiency
		- If there are too many frogs: some frogs are idle, and no magma cream can be collected

## Observed Inefficiency

During periods of testing, I found that a stack of 30 layers of portal in nether would cause significant lagging to the game, reducing the yield in another way. This is because 30 layers of portal would send too much magma cubes to the overworld, reaching more than 1000 entities. Every entity have its own collision box, so an interaction between the collision boxes of two entities would trigger a calculation. 1000 entities, each interacting with more than 10 entities would create an exponential lagging.

## Optimization Hypothesis

- Decrease the amount of portal in the nether
	- This would decrease the amount of magma cubes sent to overworld
- Clear the area of overworld
	- This would reduce extra calculation of other entities apart from the machine.

## Implementation

Decreased the amount of portal in the nether from 30 to 20, balancing yield and computation load.

Raise the entire machine in overworld up into the sky, so there will be no entities spawning on the ground because its too far from the player.

# Result

The entire machine have a very high efficiency and easy to use. The lagging is occasionally high but usually kept at the boundary of losing yield, so the machine efficiency is maximized.

## Reflection

The nether part requires placing 30000+ obsidian blocks, which would take a long time using traditional ways. I search online for a solution, and found a mod called litematica printer which can quickly and automatically build blocks around the player, increasing the efficiency by at least 20 times. Therefore, a good tool is essential.

![Flowchart of the froglight farm](/images/articles/froglight-farm-flowchart.jpg)