---
title: Shulkershell farm - first step into high efficiency
description: Shulkerbox allows us to store materials 27x more space efficient, which is essential in large machines where the efficiency is usually more than 100k per hour.
date: 2026-07-01T00:00:00.000Z
minecraftVersion: 26.1.2
phase: Early Survival
location: End
coordinates: "X: 192, Y: 48.5, Z: -55.5"
tags:
  - early-game
  - machine
  - supplementary
cover: /images/world/shulkershell-farm-7.1.jpg
gallery:
  - src: /images/world/shulkershell-farm-1.jpg
    caption: "The center of the shulkershell farm"
relatedArticles:
  - /articles/starter-base-layout/
draft: false
featured: false
---

## Overview

A shulkershell farm is essential in every world, because shulkerbox provides a lage storage space for the player, allowing us to prepare more building materials when building machines. It is also an important component in large machines at later periods, where more storage space is required to store the large yield of the machine. Therefore, I suggest building this as soon as possible.

## How do this machine works?

Shulkers have an interesting feature: it will duplicate itself under some circumstances when being hit by a shulker bullet. This feature gives us the underlying reason to build a shulkershell farm without additional input into the machine. Specifically, they will duplicate when all of these conditions are satisfied.
- The hit shulker must have its lid open.
- The shulker needs to actually take damage and survive.
- The shulker's health needs to be above 50% after taking damage from the hit
- The damage must be projectile damage and originate from a shulker bullet.
A shulker bullet can either come from its own or from another shulker

Another feature of the shulker is that they will teleport under specific circumstances, including:
- The shulker's position may no longer allow attaching to an adjacent block.
- The shulker took damage and is below half health.
- The shulker was hit by a shulker bullet and its lid was open.

After understanding the characteristics of shulkers, a shulkershell farm can be designed, and its processes are as follow:
1. A shulker is sent into the machine, starting from a scaffolding, which triggers teleportation as its position can no-longer support it.
2. It gradually teleports up the layers and reach the center of the machine, where it finally finds a block to stay. 
3. It spots snowman at the bottom of the machine, and it attacks the snowman using its shulker bullet. 
4. Snowman throws snowballs to retaliate, which rebounces the shulker bullet back to the shulker.
5. Shulker got hit by its own bullet and triggers duplication.
6. As more and more shulkers are duplicated, there is not enough space for them to stay, so they starts to die. When they die, they drops shulkershells. Shulkershells are collected by hopper and stored into chests.

## Key decisions

It is difficult to catch a shulker at the outer-end and transport it to the machine. I suggest using railway to transport it first into the end gateway, which will result in the shulker being at the center of the obsidian platform where you first enter the end dimension. Prepare an activated railway at that location, and the shulker (in minecart) will hopefully be successfully transported into the machine. 

The machine also have a function to prevent accident extinction of the shulkers in the machine, so you don't need to worry about if anything happens. 

The machine is always open and you cannot close it, but a large amount of bullets and shulkers will be loaded whenever you are near, so I suggest you building it somewhere far from the center of the end to prevent lagging. 

## Next steps

Start a large project of building wither skeleton farm, which requires a wither rose farm and a moss machine. It is a large project and will takes a long time.