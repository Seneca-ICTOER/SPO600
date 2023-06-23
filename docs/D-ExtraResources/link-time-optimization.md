---
id: link-time-optimization
title: Link Time Optimization
sidebar_position: 20
description: Link Time Optimization
---

# Link Time Optimization

Link Time Optimization (LTO) defers some portions of a program's optimization from compile time to link time. In order to accomplish this, the internal representation (IR) of each portion of the program (compilation unit) must be stored in the object file. On a Linux system, this is performed with additional ELF (ADD LINK) sections.

Without LTO, there is little or no information stored about code in separate compilation units such as code size (relevant to loop unrolling) and potential return values (relevant to dead code removal), preventing the application of certain optimizations when code is compiled in separate units and then combined in a link step. With LTO, the presence of IR data permits a number of [optimizations](./compiler-optimizations.md) to be applied at link time.

## Resources

- [GCC Wiki: Link Time Optimization](https://gcc.gnu.org/wiki/LinkTimeOptimization)
- [GCC Internals - Link Time Optimization](https://gcc.gnu.org/onlinedocs/gccint/LTO.html)
- [LLVM Link Time Optimization: Design and Implementation](https://llvm.org/docs/LinkTimeOptimization.html)
