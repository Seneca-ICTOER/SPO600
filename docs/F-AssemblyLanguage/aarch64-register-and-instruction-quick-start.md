---
id: aarch64-register-and-instruction-quick-start
title: AArch64 Register and Instruction Quick Start
sidebar_position: 7
description: AArch64 Register and Instruction Quick Start
---

# AArch64 Register and Instruction Quick Start

This page contains very basic information on the AArch64 mode of the [ARMv8](/H-ARM/arm-v8.md) architecture: the [register](/E-ComputerArchitecture/register.md) layout and naming and the some basic instructions.

## Registers

### General-Purpose Registers

The aarch64 registers are named:

- r0 through r30 - to refer generally to the registers
- x0 through x30 - for 64-bit-wide access (same registers)
- w0 through w30 - for 32-bit-wide access (same registers - upper 32 bits are either cleared on load or sign-extended (set to the value of the most significant bit of the loaded value)).

Register '31' is one of two registers depending on the instruction context:

- For instructions dealing with the stack, it is the stack pointer, named rsp
- For all other instructions, it is a "zero" register, which returns 0 when read and discards data when written - named rzr (xzr, wzr)

Usage during [syscall](./syscalls.md)/function call:

- **r0-r7 are used for arguments and return values; additional arguments are on the stack**
- **For syscalls, the syscall number is in r8**
- **r9-r15 are for temporary values (may get trampled)**
- r16-r18 are used for intra-procedure-call and platform values (avoid)
- **The called routine is expected to preserve r19-r28 \*\*\* These registers are generally safe to use in your program.**
- r29 and r30 are used as the frame register and link register (avoid)

See the ARM Procedure Call Reference for details.

### Floating-Point and SIMD Registers

Aarch64 also defines a set of large registers for floating-point and single-instruction/multiple-data (SIMD) operations. For details, refer to the ARM documentation.

## Instructions

### Starter Kit

These instructions are sufficient to complete the [SPO600 Assembler Lab](/B-Labs/lab4.md); remember to replace the generic register names with ones that specify width (for example, replace "r0" with "x0" or "w0").

```assembly
add r0,r1,r2      // load r0 with r1+r2
add r0,r1,99      // load r0 with r1+99
adr r0,label      // load r0 with the address label (this actually calculates an address from the PC plus an offset)
adrp r0,label     // load r0 with the 4K page containing label (this calculates an address from the PC plus an offset, and is often followed by an ADD instruction so that the register points exactly to the label)
bl label          // branch (with link) to label - this is a procedure / subroutine / function call
br label          // branch to label - this is a goto
br register       // branch to the address in register
b.eq label        // branch to label if equal
b.ne label        // branch to label if not equal
b.lt label        // branch to label if less
b.gt label        // branch to label if greater
cmp r0,r1         // compare register r0 with register r1. The comparison sets flags in the processor status register which affect conditional branches.
cmp r0,99         // compare the number 99 with register r0. The comparison sets flags in the processor status register which affect conditional branches.
ldr r0,[r1,0]     // load register r0 from the address pointed to by (r1 + (0 * size)) where size is 8 bytes for 64-bit stores, 4 bytes for 32-bit stores
ldr w0,[r1,0]     // like above but reads 32 bits only - note the use of w0 instead of r0 for the source register name
ldrb w0,[r1,0]    // like above but reads 1 byte (8 bits) only - note the use of w0 for the source register name
ldur r0,[r1,0]    // load register r0 from the address pointed to by (r1 + 0) - the mnemonic means "load unscaled register"
mov r0,r1         // move data from r1 to r0
mov r0,99         // load r0 with 99 (only certain immediate values are possible)
ret               // return from subroutine (counterpart to bl)
str r0,[r1,0]     // store register r0 to address pointed to by (r1 + (0 * size)) where size is 8 bytes for 64-bit stores
strb w0,[r1,0]    // like str but writes one byte only - note the use of w0 for the source register name
stur r0,[r1,0]    // store register r0 to the address pointed to by (r1 + 0) - the mnemonic means "store unscaled register"
svc 0             // perform a syscall
msub r0,r1,r2,r3  // load r0 with r3-(r1*r2) (useful for calculating remainders)
madd r0,r1,r2,r3  // load r0 with r3+(r1*r2)
mul r0,r1,r2      // load r0 with r1*r2 (actually an alias - see ARM ARM)
push r0           // push r0 onto the stack
pop r0            // pop r0 off the stack
udiv r0,r1,r2     // unsigned - divide r1 by r2, places quotient into r0 - remainder is not calculated (use msub)
```

Note the syntax:

- [Register](/E-ComputerArchitecture/register.md) names are not prefixed.
- [Immediate values](/E-ComputerArchitecture/immediate-value.md) are not prefixed with a character (they may be prefaced with # if desired).
- Indirect memory access is indicated by \[square brackets\].
- Hexadecimal values are indicated by a 0x prefix.
- Character values are indicated by quotation marks. Escapes (such as '\n') are permitted.
- Destinations are given as the first argument (mov r0, r1 moves INTO r0 FROM r1; you can think of this as r0=r1).
- For the LDR/STR instructions: you can append a character indicating the number of bits (lowest) to be loaded or stored:
    - Q = Quadword = 64 bits
    - D = Double word = 32 bits
    - W = Word = 16 bits
    - B = Byte = 8 bits

## Resources

- ARM Aarch64 documentation
  - [ARM Developer Information Centre](http://developer.arm.com/)
    - [ARM Cortex-A Series Programmer’s Guide for ARMv8-A](https://developer.arm.com/docs/den0024/latest)
    - The _short_ guide to the ARMv8 instruction set: [ARMv8 Instruction Set Overview](https://www.element14.com/community/servlet/JiveServlet/previewBody/41836-102-1-229511/ARM.Reference_Manual.pdf) ("ARM ISA Overview")
    - The _long_ guide to the ARMv8 instruction set: [ARM Architecture Reference Manual ARMv8, for ARMv8-A architecture profile](https://developer.arm.com/docs/ddi0487/latest/arm-architecture-reference-manual-armv8-for-armv8-a-architecture-profile) ("ARM ARM")
  - [Procedure Call Standard for the ARM 64-bit Architecture (AArch64)](https://developer.arm.com/docs/ihi0055/latest/procedure-call-standard-for-the-arm-64-bit-architecture)
- GAS Manual - Using as, The GNU Assembler: https://sourceware.org/binutils/docs/as/
