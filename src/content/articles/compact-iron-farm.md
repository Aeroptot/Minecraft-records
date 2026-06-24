---
title: "Compact Iron Farm Design"
description: "A survival-friendly iron farm that fits within a single chunk and produces steady output without complex villager mechanics."
date: 2026-06-20
updated: 2026-06-22
tags:
  - redstone
  - farms
  - tutorial
category: "Tutorial"
cover: "/images/articles/iron-farm-cover.svg"
draft: false
featured: true
---

## Overview

This article documents a compact iron farm I built in my single-player world. The design prioritizes simplicity over maximum throughput — perfect for mid-game survival when you need a steady supply of iron without building a massive villager trading hall first.

## What I built / learned

The farm uses a basic spawn platform with water streams pushing iron golems into a killing chamber. Key lessons:

- **Chunk alignment matters.** Keeping everything in one chunk prevents golems from spawning outside the collection area.
- **Villager placement** determines spawn rates. Three villagers in workstations is the sweet spot for this size.
- **Lava blade vs. fall damage** — I chose fall damage to avoid losing experience orbs.

## Screenshots

![Iron farm overview — placeholder image](/images/articles/iron-farm-cover.svg)

*Replace the placeholder above with your actual screenshot at `/public/images/articles/`.*

## Key decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Farm size | Single chunk | Easier to build and troubleshoot |
| Collection | Hopper minecart | Silent and reliable |
| Storage | Double chest | Enough buffer for AFK sessions |

## Problems and solutions

**Problem:** Golems spawning on the roof of the collection chamber.

**Solution:** Added half-slabs and lighting checks on all adjacent surfaces.

**Problem:** Villagers unlinking from workstations after sleep.

**Solution:** Ensured each villager has an unobstructed path to their workstation.

## Next steps

- Add an auto-smelting chain for iron blocks
- Connect output to the main base storage system
- Write a companion article on villager transport
