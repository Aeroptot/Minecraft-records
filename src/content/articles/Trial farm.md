---
title: Automated Trial Chamber spawner activation and loot collecting system
description: One of the most complicated and integrated machine in the game that can generates abundant loot and treasure.
date: 2026-07-09
updated: 2026-07-09
tags:
  - redstone
  - farms
  - hardcore
category: Tutorial
cover: /images/articles/trial-farm-1.jpg
draft: false
featured: true
---
## System Definition

- Trial spawner cycle:
	- Input: ominous bottle + existence of player around the spawner
	- Process:
		1. quick death of spawning mob once spawner is activated
		2. transportation of player between spawners to ensure all spawners are activated
		3. transportation of loot from the spawner to storage
	- Output: loot from trial spawner
	- Crucial variables: the number of existing player affects the amount of loot gained from the trial spawner

- Vault cycle:
	- Input: trial key (a type of loot gained from the trial spawner)
	- Process:
		1. player use trial key to open vault and gain loot
		2. a timer that will give one key at a set interval
	- Output: high valued loot from vault
	- Crucial variables: the interval of the timer must be set to ensure the player always have 0 key in the inventory (every key is used)

- Storage system:
	- Input: loot from trial spawner or vault
	- Process:
		1. an automated crafting system that will convert iron into iron block, emerald into emerald block, and diamond into diamond block
		2. a sorting system that will sort loot into different chests
		3. items that are un-stackable (which means they are un-sortable in step 2) are sent to un-stackable item sorter
		4. the rest are disposed and burnt
	- Output: a well sorted storage room
	- Crucial variable: to design a well-designed sorting system that can sort everything and visually clean

## Observed Inefficiency

1. The efficiency of this whole system is restricted by the number of existing players, less player = lower efficiency
2. Un-stackable items cannot be sorted (in the beginning), so the storage system is collecting too many useless items, losing space to collect useful un-stackable items.



## Optimization Hypothesis

1. Send mining car with player inside one by one manually, and stop them using a lever that can control the speed of rail
2. Design a sorting system for un-stackable items so that useful items can be collected effectively



## Implementation

1. Designed a mining car departure system that can send mining cars one by one at an interval, and stop them if required. By expanding this departure system, multiple players can be used in this trial chamber system
2. Used a sorting system from an online designer and optimized water channel that can transport loot to the sorting system.



## Result

The entire trial chamber system is successful, with every module interlocked with each other and can be easily used.

The only issue is that the entire system is still restricted by the underlying game rule of maximum mob spawn, which can only be solved by emptying the whole loading area to ensure no mob outside the system can be spawn.

## Reflection

No system can be designed very clear at the beginning, must involve multiple optimization steps. During the process of design, one must fully grasp the underlying theory of every component, otherwise a perfect system cannot be found. During the process of optimization, one must be perfectionism enough to spot every detail that requires improvement, and improve one by one.

![Flowchart of the trial farm](/images/articles/trial-farm-flowchart.png)