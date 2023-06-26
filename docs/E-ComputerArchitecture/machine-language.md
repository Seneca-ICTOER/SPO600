---
id: machine-language
title: Machine Language
sidebar_position: 21
description: Machine Language
---

# Machine Language

_Machine language_, _machine code_, or _object code_ is code that is directly executable by a CPU. It consist of a sequence of binary instructions encoded in a machine's [Instruction Set Architecture](./instruction-set-architecture.md) (ISA) and is therefore very [specific](./portable.md) to a particular [architecture](./computer-architecture.md).

## General Format

Machine code consists of a series of instructions, each of which specifies an operation and zero or more arguments. Each argument may indicate a [register](./register.md), a [memory address](./address.md), or an [immediate value](./immediate-value.md).

Many early computers encoded the [operation](./operation.md) and [addressing mode](./addressing-mode.md) as a distinct [byte](./word.md#byte) or [word](./word.md) called an [opcode](./opcode.md), followed by zero or more additional bytes for the arguments, where the number of additional bytes is implied by the opcode.

Other processors encode instructions as bit values packed with a instruction field. For example, specific bits within an instruction word specify the operation, other bits specify the addressing mode, and still other bits specify the register(s) and other arguments.

Thus, the length of each instruction may be variable (6502, x86_64) or fixed (ARM) -- a design decision which affects code density, execution speed, and [memory prefetch](./memory-prefetch.md) operations.

## Relationship to Assembly Language

Machine language is very hard to write and read, although it can be hand-coded on simple processors (it was not uncommon for 6502 programmers to memorize the complete instruction set, for example). It is particularly difficult to write and read when the [ISA](./instruction-set-architecture.md) uses bit-packing.

[Assembly Language](/F-AssemblyLanguage/assembly-language.md) (or just "Assembly") is closely related to machine language, but uses a [symbolic](/F-AssemblyLanguage/symbol.md) representation of instructions and memory locations and is therefore easier to write and read. A compiler for assembly language is called an [assembler](./assembler.md), and a tool to convert machine code to assembly is called a [disassembler](./disassembler.md).

Assembly is [architecture-specific](./portable.md) but allows precise control over the exact instructions which will be executed by the CPU. It is therefore used for the most basic functions of the bootloader and operating system kernel, the lowest-level operating system devices drivers, and code where performance is critical. However, assemblers do not usually perform [optimizations](/D-ExtraResources/compiler-optimizations.md), so code in C or other high-level languages which has been optimized by a good compiler will often perform as well as or better than assembly code unless it is very painstakingly written.

## Relationship to Other Languages

Since machine language is the only type of code which can be directly executed by a CPU, programs written in other languages must ultimately result in machine language code being executed in some way.

**Interpreted languages**, such as bash, are not converted into machine code, but blocks of machine code within the interpreter are selectively invoked to perform the operations stated in the program or script.

**Compiled languages**, such as C, are converted into machine language instructions by the compiler. The machine language code is stored in a separate object file for later execution.

Interpretation and compilation represent the two extreme cases of conversion to machine code. There are intermediate approaches between interpreting and compiling:

- Bytecode compilers and interpreters compile source code into a "bytecode" which is like an architecture-independent machine code. The instructions in the bytecode are effectively instructions for a virtual machine that is not modelled after a physical machine. Therefore, they cannot be directly executed by any CPU, but they can be interpreted much more quickly than the original source code because they have already been partially processed. Java and Python both utilize bytecode in the most common implementations.
- Just-in-time (JIT) interpreters/compilers take source code or bytecode and compile it into machine code on-the-fly. This has three advantages over traditional compilation: (1) the distributed software can be in an architecture-neutral form, (2) any portion of the code which will not be executed is not compiled, and (3) more information is available to the compiler about the execution environment when the compilation is being performed. JIT execution is typically faster than interpretation, but slower than traditional (pre-)compilation, because the compilation step occurs at run time.
