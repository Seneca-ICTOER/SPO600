---
id: register
title: Register
sidebar_position: 26
description: Register
---

# Register

A register is a high-speed memory location within a CPU.

## Common Types of CPU Registers

Various types of registers are used in combination in computer architecture. The set of all registers present in a processor is called the Register Set or Register File.

The types of registers present will vary by processor family, but in general consist of some combination of:

### General-purpose registers

Used to temporarily store values. Most modern architectures have several dozen general-purpose registers.

### Accumulator

A special designation of general-purpose register, used to hold the results of mathematical operations (originally add/subtracts, but now any numerical operation).

### Index Register

A special designation of general-purpose register, used to hold an index (offset) into an array or memory space. The x86_64 Source Index (SI) and Destination Index (DI) registers are examples of this. Similarly, the [6502](/G-6502/6502.md) Y and X registers are Index registers.

### Status Register

A _status register_ (or _Flag register_, or _Condition code register_) contains [flag](./flags.md) [bits](./word.md#bit), which are set/cleared/tested either explicitly (by instructions) or implicitly (as the result of other operations). For example, the ARM AArch32 "Z" flag is set ("1") if an operation has a zero result, and cleared ("0") if an operation has a non-zero result. This flag is one bit within the Application Processor Status Register (APSR).

### Control Registers

_Control registers_ contain control [flags](./flags.md) which alter some aspect of the operation of the processor, such as enabling binary coded decimal ([BCD](./bcd.md)) math or toggling [little-endian/big-endian](./endian.md) mode.

### Stack Pointer

A _stack pointer_ is a register used for indirect access to the _stack_, and is automatically incremented or decremented on each access.

### Program Counter

The _program counter_ or _instruction pointer_ keeps track of the address of the currently-executing instruction.

A jump is performed by writing the destination address to the program counter.

A subroutine (function) call is performed by pushing the program counter onto the [stack](./stack.md) or saving it in a designated _Link Register_ and then writing the subroutine address to the program counter. Upon completion of the subroutine, the return address is popped from the stack or retrieved from the Link Register and written to the program counter.

Relative [addressing modes](./addressing-mode.md) add a signed value to the program counter to calculate the effective address.

## Other Uses of the Term "Register"

The term _register_ may also be used to refer to an IO port or a memory address within a memory-mapped input/output device, used to set/read device status and parameters or send/receive small amounts of data.

## References

- [6502 Registers](/G-6502/6502.md#registers)
- [AArch64 Register and Instruction Quick Start](/F-AssemblyLanguage/aarch64-register-and-instruction-quick-start.md)
- [x86_64 Register and Instruction Quick Start](/F-AssemblyLanguage/x86-64-register-and-instruction-quick-start.md)
