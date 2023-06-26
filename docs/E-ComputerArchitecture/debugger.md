---
id: debugger
title: Debugger
sidebar_position: 11
description: Debugger
---

# Debugger

A _debugger_ is a tool used to analyze running code.

Although debugging tools are available for interpreted and bytestream languages, the term _debugger_ is often used to describe a tool that can analyze object code.

Typical features of a debugger include:

- the ability to [disassemble](./disassembler.md) code
- the ability to cross-reference and display source code and address [symbols](/F-AssemblyLanguage/symbol.md) (for functions and variables)
- the ability to execute single instructions or lines of code (single-step)
- the ability to stop execution at a requested location in the program (breakpoint) or when a variable changes value (watchpoint)
- the ability to trap and examine faults (such as a segmentation fault)
- the ability to examine variables and [registers](./register.md)

The GNU debugger is named "gdb" and has a command-line interface. Various graphical front-ends are available.

## Resources

- [GDB Documentation](https://www.gnu.org/software/gdb/documentation/)
