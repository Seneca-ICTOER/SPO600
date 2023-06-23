---
id: lab4
title: Lab 4
sidebar_position: 4
description: Lab 4 for Students to Complete and Submit
---

# 64-bit Assembly Language Lab 4

## Purpose of this Lab

In this lab, you will experiment with assembler on the x86_64 and aarch64 platforms.

## SPO600 Servers

Perform this lab on [SPO600 Servers](/D-ExtraResources/servers.md) (you may use your own systems if they are of the right architecture and appropriately configured).

## Lab Instructions

### Code Examples

The code examples for this lab are available in the file `/public/spo600-assembler-lab-examples.tgz` on each of the [SPO600 Servers](/D-ExtraResources/servers.md).

Unpacking the archive in your home directory will produce the following directory structure:

```bash
spo600
└── examples
    └── hello                     # "hello world" example programs
        ├── assembler
        │   ├── aarch64           # aarch64 gas assembly language version
        │   │   ├── hello.s
        │   │   └── Makefile
        │   ├── Makefile
        │   └── x86_64            # x86_64 assembly language versions
        │       ├── hello-gas.s   # ... gas syntax
        │       ├── hello-nasm.s  # ... nasm syntax
        │       └── Makefile
        └── c                     # Portable C versions
            ├── hello2.c          # ... using write()
            ├── hello3.c          # ... using syscall()
            ├── hello.c           # ... using printf()
            └── Makefile
```

Throughout this lab, take advantage of [make](/D-ExtraResources/make-and-makefiles.md) whenever possible.

### Resources

- [Assembler Basics](/F-AssemblyLanguage/assembler-basics.md) (includes instructions on how to use the GNU Assembler)
- [Syscalls](/F-AssemblyLanguage/syscalls.md)
- [x86_64 Register and Instruction Quick Start](/F-AssemblyLanguage/x86-64-register-and-instruction-quick-start.md)
- [aarch64 Register and Instruction Quick Start](/F-AssemblyLanguage/aarch64-register-and-instruction-quick-start.md)

### Optional Investigation

1. Build and run the three C versions of the program for x86_64 and aarch64, using `make`. Take a look at the differences in the code.
2. Use the `objdump -d` command to dump (print) the object code (machine code) and disassemble it into assembler for each of the binaries. Find the `<main>` section and take a look at the code. Also notice the total amount of code.
3. Review, build, and run the x86_64 assembly language programs using `make`, taking note of the commands that are executed to assemble and link the code. Take a look at the code using `objdump -d objectfile` and compare it to the source code. Notice the absence of other code (compared to the C binary, which had a lot of extra code).
4. Build and run the assembly language version of the program for aarch64 using `make`, taking note of the commands that are executed to assemble and link the code. Verify that you can disassemble the object code in the ELF binary using `objdump -d objectfile` and take a look at the code.

### Lab Tasks

1. Review, build, and run the aarch64 assembly language programs. Take a look at the code using `objdump -d objectfile` and compare it to the source code.
2. Here is a basic loop in AArch64 assembler - this loops from 0 to 9, using r19 as the index (loop control) counter:

```assembly
.text
.globl _start

min = 0                          /* starting value for the loop index; note that this is a symbol (constant), not a variable */
max = 10                         /* loop exits when the index hits this number (loop condition is i<max) */

_start:

    mov     x19, min

loop:

    /* ... body of the loop ... do something useful here ... */

    add     x19, x19, 1
    cmp     x19, max
    b.ne    loop

    mov     x0, 0           /* status -> 0 */
    mov     x8, 93          /* exit is syscall #93 */
    svc     0               /* invoke syscall */
```

This code doesn't actually do anything while looping, because the body of the loop is empty. On an AArch64 machine, combine this code with code from the "Hello World" assembley-language example, so that it prints a word each time it loops:

```text
Loop
Loop
Loop
Loop
Loop
Loop
Loop
Loop
Loop
Loop
```

Then modify the message so that it includes the loop index values, showing each digit from 0 to 9 like this:

```text
Loop: 0
Loop: 1
Loop: 2
Loop: 3
Loop: 4
Loop: 5
Loop: 6
Loop: 7
Loop: 8
Loop: 9
```

**Character conversion**

In order to print the loop index value, you will need to convert from an integer to digit character. In ASCII/ISO-8859-1/Unicode UTF-8, the digit characters are in the range 48-57 (0x30-0x39). You will also need to assemble the message to be printed for each line - you can do this by writing the digit into the message buffer before outputting it to stdout, which is probably the best approach, or you can perform a sequence of writes for the thee parts of the message ('Loop: ', number, '\n'). You may want to refer to the manpage for `ascii`.

**6502 Implementation:** For reference, here is a [6502 implementation of this loop](/G-6502/6502-counting-loop-example-code.md).

3. Repeat the previous step for x86_64.

For reference, here is the loop code in x86_64 assembler:

```assembly
.text
.globl    _start

min = 0                         /* starting value for the loop index; note that this is a symbol (constant), not a variable */
max = 10                        /* loop exits when the index hits this number (loop condition is i<max) */

_start:
    mov     $min,%r15           /* loop index */

loop:
    /* ... body of the loop ... do something useful here ... */

    inc     %r15                /* increment index */
    cmp     $max,%r15           /* see if we're done */
    jne     loop                /* loop if we're not */

    mov     $0,%rdi             /* exit status */
    mov     $60,%rax            /* syscall sys_exit */
    syscall
```

4. Extend the AArch64 code to loop from 00-30, printing each value as a 2-digit decimal number.

**2-Digit Conversion**

You will need to take the loop index and convert it to a 2-digit decimal number by dividing by 10. Read the description of the division instruction carefully. On x86_64, you need to set up specific registers before performing a division. On AArch64, you will need to use a second instruction to find the remainder after a division.

5. Change the code as needed to suppress the leading zero (printing 0-30 instead of 00-30).
6. Repeat the previous two steps for x86_64.

### Deliverables

1. Complete the lab section, above.
2. Blog about the programs you've written. Describe the experience of writing and debugging in assembler, as compared to writing in other languages. Contrast x86_64 and aarch64 assembler, your experience with each, and your opinions of each. Include links to the source code for each of your assembler programs.

### Optional Challenge

Write a program in aarch64 assembly language to print the times tables from 1-12 ("1 x 1 = 1" through "12 x 12 = 144"). Add a spacer between each table, and use a function/subroutine to format the numbers with leading-zero suppression.

The output could look something like this:

```assembly
 1 x  1 =   1
 2 x  1 =   2
 3 x  1 =   3
 4 x  1 =   4
 5 x  1 =   5
 6 x  1 =   6
 7 x  1 =   7
 8 x  1 =   8
 9 x  1 =   9
10 x  1 =  10
11 x  1 =  11
12 x  1 =  12
-------------
 1 x  2 =   2
 2 x  2 =   4
 3 x  2 =   6
 4 x  2 =   8
 5 x  2 =  10

  ...lines snipped for space... 

11 x 12 = 132
-------------
 1 x 12 =  12
 2 x 12 =  24
 3 x 12 =  36
 4 x 12 =  48
 5 x 12 =  60
 6 x 12 =  72
 7 x 12 =  84
 8 x 12 =  96
 9 x 12 = 108
10 x 12 = 120
11 x 12 = 132
12 x 12 = 144
```
