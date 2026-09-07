---
title: 432k/h end portal sand duper with bulk collecting system
description: The ultimate solution to the lack of glass and concrete. A machine that opens for one hour and uses for entire life.
date: 2026-07-10
updated: 2026-07-10
tags:
  - redstone
  - farms
  - hardcore
category: Journals
cover: /images/articles/sand-duper-1.jpg
draft: false
featured: false
---
## System Definition

- Overworld sand duper
	- Input: the machine itself
	- Process:
		1. A tnt duper creates tnt from nowhere and ignites them at a very high speed in water
		2. Pistons use the game feature to push sand into the ender portal while duplicating another sand in the original position
		3. The tnt blows up in water and further pushes the sand into the ender portal at a higher speed
		4. Continued process
	- Output: infinite amount of sand in the 5x5 obsidian platform in the End dimension in game
	- Crucial variable: the rate of pistons pushing tnt and the rate of tnt duplication determines the speed of sand duplication

- Bulk collecting system
	- Input: sand accumulated on the 5x5 platform in End dimension
	- Process:
		1. If the duplicated material is concrete powders, the machine will immediately solidify and convert them into solid concretes as they enter the End dimension
		2. The presence of material triggers a series of signals, sending mining carts with hopper to collect the materials on the platform
		3. The mining carts is then destroyed. Mining carts are recycled and sent again, while the collected materials are dropped into the water channel
		4. The materials are accumulated at a 1x1 space, and mining carts are again sent to collect these materials, sending and sorting them into different shulker boxes.
		5. Once a shulker box is full, it is collected and sent to the bulk collection via water channel, where it is again sorted and placed into chests (shulker boxes with materials can be placed into normal chests, increasing its storage)
	- Output: a clean and highly dense storage with all the duplicated sand or powder.
	- Crucial variable: the process of sending materials into shulker boxes first, then into normal chests, which increase the storage space of the system.

## Observed Inefficiency

- Since the machine is not designed by myself, all I need to do is to first understand its logic and build it using the game’s mod Litematica
1. Unsure about whether a container need to be filled and what to be filled simply by inspecting the design’s blueprint
2. Hard to ensure my build in my world is correct and identical to the blueprint

## Optimization Hypothesis

Explore the mod Litematica and see if it have functions like these, or do I need to download more mods in order to reach my objective

## Implementation

- Kindly asked questions about the mod and the build in game community and online group chat, and achieved my objectives
1. Downloaded an extension of the mod Litematica, enabling it to show container information in the blueprint while I’m building
2. Changed the server setting so that it now allows client side access to the game data, so I can easily use the mod’s function to check if my build is correct.

## Result

The entire machine have a very high efficiency, and it is easy to use, though hard to fix if something goes wrong. With this machine, sand or concrete powders are now free goods.

## Reflection

For machines or models hard to understand or build, conform to every single detail mentioned by the author, the community, and the blueprint. Ensure a layer is correctly built before moving on to the next layer. Use efficiency tools wisely and correctly, prepare more to spend less time.

Once the machine is finished, carefully use it.

![Flowchart of the sand duper](/images/articles/sand-duper-flowchart.jpg)