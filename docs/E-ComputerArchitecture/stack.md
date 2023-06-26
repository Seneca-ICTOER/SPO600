---
id: stack
title: Stack
sidebar_position: 28
description: Stack
---

# Stack

A _stack_ is an area of memory where values are added (pushed) or removed (pulled) to/from the end of the stack only. Most CPU designs incorporate one or more hardware-managed stacks which are used to store and restore state information during subroutine calls, exceptions, and interrupts.

On some architectures, the stack grows downward in memory; in others, it grows upward. Hardware stacks are implemented through the use of a [stack pointer](./register.md#stack-pointer) register, which is used for indirect read/writes, with the stack pointer automatically incremented or decremented on each access.

In a few historical cases (e.g., old Intel 4004 and 8008 processors) the stack was implemented in registers internal to the CPU rather than in general address space.
