---
id: addressing-mode
title: Addressing Mode
sidebar_position: 3
description: Addressing Mode
---

# Addressing Mode

_Addressing modes_ specify how the data/arguments for an [instruction](./instruction.md) are retrieved/stored.

Addressing modes may include:

- Implicit - Any arguments are implied by the instruction (e.g., a return-from-subroutine instruction, which will pop a value off the stack or retrieve it from a Link Register and place it in the [program counter](./register.md#program-counter) - no additional arguments are required to complete the [operation](./operation.md)).
- Register - Data is read from (or written to) a register.
- Absolute - An exact memory address is specified.
- Immediate - An [immediate value](./immediate-value.md) is used used as an argument.
- Indirect - A memory address is specified, which contains the address of the memory for reading/writing. Effectively, the argument in this addressing mode is the address of a pointer to the actual data.
- Base plus offset - An absolute or indirect memory address is specified as a base address along with a register (or immediate value) that contains an offset value. The base and offset values are added together, and the resulting address is used to read/write data. This is useful for accessing arrays (where the base is the start of the array and the offset is the array index multiplied by the element size) or a device such as a memory-mapped video display (where the base is the start of the display and the offset is the character or pixel within the display). In some cases, the computed address may be written back to a register, so that as you iterate through a loop, successive data locations are accessed.
- Relative - A [signed or unsigned](./signed.md) offset is added to the current [program counter](./register.md#program-counter) to obtain a new address. This is most often used for branches or jumps but is also used for some kinds of data access. Code that uses relative addresses can be easily relocated in memory and is therefore sometimes called position-independent code (PIC).
- Stack - Values are pushed to or popped from the [stack](./stack.md).

(There are many other modes available on some architectures).

The addressing modes available, and the valid combinations of operations and addressing modes, are significant features of an [Instruction Set Architecture](./instruction-set-architecture.md).
