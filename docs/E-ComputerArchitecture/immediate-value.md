---
id: immediate-value
title: Immediate Value
sidebar_position: 17
description: Immediate Value
---

# Immediate Value

An immediate value in [machine code](./machine-language.md) is a constant or literal value argument. For example, the [6502 assembly](/G-6502/6502-emulator.md) instruction:

```text
LDA #$80
```

...will load the literal value 0x80 (128) into the accumulator (A register).

Note that the value to be loaded comes from an argument within the instruction stream; this contrasts with loading a value from a memory location in a data area, or from another register.
