---
id: opcode
title: OpCode
sidebar_position: 23
description: OpCode
---

# OpCode

An _opcode_ is an [_operation_](./operation.md) code, a numeric value specifying that a particular instruction should be performed.

Opcodes may be distinct bytes or words, possibly including an addressing mode indication, or they may be embedded within a larger instruction word.

For example, the byte $A4 (0xA4) is the 6502 opcode for "LDY zero-page" - an instruction to load the Y register using the zero-page addressing mode. Zero-page addressing requires a one-byte argument: the byte within the zero page from which the Y register should be loaded. Therefore, the entire instruction will be two bytes long: the opcode, and the argument. Other instructions will be longer or shorter.

On the other hand, the ARM AArch32 instruction 0xe3a00cff encodes the opcode for "mov" instruction, the register number (0), the [immediate value](./immediate-value.md) 0xff, and a 6-bit left shift into a single 32-bit [word](./word.md). All instructions in the AArch32 [ISA](./instruction-set-architecture.md) are the same length.
