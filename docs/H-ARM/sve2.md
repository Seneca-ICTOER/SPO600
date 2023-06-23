---
id: sve2
title: SVE2
sidebar_position: 2
description: SVE2
---

# SVE2

The Armv9 **Scalable Vector Extensions verision 2** (SVE2) provide a variable-witdh SIMD capability for [AArch64](./arm-v8.md) systems. Note that SVE2 is a minor refinement and standardization of the original Scalable Vector Extensions (used on the [Fugaku](https://www.r-ccs.riken.jp/en/fugaku/) supercomputer), so most materials discussing SVE are also applicable to SVE2 (which will be used on systems ranging from smartphones to servers to supercomputers).

## Resources

- Arm Armv9-A A64 Instruction Set Architecture - https://developer.arm.com/documentation/ddi0602/2021-12/
- **Introduction to SVE2** - https://developer.arm.com/documentation/102340/0001/?lang=en
- Intrinsics - Arm C Language Extensions for SVE (ACLE) - https://developer.arm.com/documentation/100987/latest
- SVE Coding Considerations with Arm Compiler - Note that this documentation is specific to Arm's own compiler, but most of it will be applicable to other compilers including gcc - https://developer.arm.com/documentation/100748/0616/SVE-Coding-Considerations-with-Arm-Compiler

## Building SVE2 Code

### C Compiler Options

At the time of writing (March 2022), most compilers do not have a specific target for Armv9 systems. Therefore, to build code that includes SVE2 instructions, you will need to instruct the complier to emit code for an Armv8-a processor that also understands the SVE2 instructions; on the GCC compiler, this is performed using the `-march=` option (which is read as "machine architecture"). **You must do this regardless of whether you're using autovectorization, inline assembler, or intrinsics**. The architecture specificaion for this target is currently "armv8-a+sve2":

```bash
gcc -march=armv8-a+sve2 ...
```

Remember that in order to invoke the autovectorizer in GCC version 11, you must use `-O3` or the appropriate feature options (`-ftree-vectorize`):

```bash
gcc -O3 -march=armv8-a+sve2 ...

gcc -O2 -march=armv8-a+sve2 -ftree-vectorize ...
```

### Using SVE2 Intrinsics Header Files

To use SVE2 intrinsics in a C program, include the header file `arm_sve.h`:

```c
#include <arm_sve.h>
```

Note: some ARM documentation will refer to `<arm_sve2.h>`, but in gcc, the correct file is `<arm_sve.h>`

### Macro for SVE2

To detect SVE2 capability in the compilation target, use the macro `__ARM_FEATURE_SVE2`:

```text
#if __ARM_FEATURE_SVE2
...
#endif
```

## Running SVE2 Code

To run SVE2 code on an Armv8 computer, you can use the QEMU usermode software. This will trap SVE2 instructions and emulate them in software, while executing Armv8a instructions directly on the hardware:

```bash
qemu-aarch64 ./binary
```

**Running AArch64 code on x86_64:** The QEMU user mode software can also be used to run AArch64 code on an x86_64 system (albeit slowly). However, this requires a full AArch64 userspace (applications and tools, such as ld) to be installed on the x86_64 system.
