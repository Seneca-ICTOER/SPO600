---
id: assembler-basics
title: Assembler Basics
sidebar_position: 2
description: Assembler Basics
---

# Assembler Basics

When you program in [assembly language](./assembly-language.md), you're directly programming the "bare metal" hardware. This means that many of the compile-time and run-time checks, error messages, and diagnostics that are present in other languages are not available. The computer will follow your instructions exactly, even if they are completely wrong (like executing data), and when something goes wrong, your program won't terminate until it tries to do something that's not permitted, such as execute an invalid opcode or attempt to access a protected or unmapped region of memory. When that happens, the CPU will signal an exception, and in most cases the operating system will shut down the offending process.

## Format of an Assembly Language program

The traditional extension for assembly-language source files is `.s` (e.g., `example.s`), or `.S` for files that need to go through the C preprocessor (`cpp`).

An assembly-language program consists of:

1. [Symbols](./symbol.md) that are constants which correspond to memory addresses, registers, or other values.
2. Instructions - Mnemonics for an operations, each followed by zero or more arguments.
3. Data - Values used by the program for things such as initial variable values and string or numeric constants.

Assembler **directives** are used to control the assembly of the code, by specifying output file sections (such as .text (machine code), .data (read/write data), or .rodata (read-only data/constants) in an ELF file) and data formats (such as word size for numeric values), and by defining macros.

Consider this x86_64 assembly language "Hello World" program:

```assembly
.text
.global  _start

stdout = 1

_start:
        mov    $len,%rdx                       /* message length */
        mov    $msg,%rsi                       /* message location */
        mov    $stdout,%rdi                    /* file descriptor stdout */
        mov    $1,%rax                         /* syscall sys_write */
        syscall

        mov    $0,%rdi                         /* exit status */
        mov    $60,%rax                        /* syscall sys_exit */
        syscall

.rodata

msg:    .ascii      "Hello, world!\n"
.set len , . - msg
```

In this program, which was written using GNU Assembler (gas) syntax, text is coloured according to its type:

- directives
- instructions
- symbols
- expressions
- other syntax elements, such as prefixes and delimiters

In GNU assembler, a symbol may be set in one of three ways:

1. Using the `.set` directive (in the example above, len line)
2. Using an assignment using an equals sign (in the example above, stdout line), which the GNU assembler treats as an alternative syntax for the `.set` directive
3. As a label (such as _start or msg in the example above). A label set in this way is identified by the trailing colon, and is set to the current memory location in the instruction or data sequence. Labels may be used for loading/storing information, or as the target of branches/jumps.

In the program above:

- .text is a directive (equivalent to the longer directive ".section .text") which specifies that the following instructions/data should be placed in the ".text" section of the output ELF file.
- .rodata is a similar directive which specifies that the following instructions/data should be placed in the .rodata section of the output ELF file. In the case of this program, they could alternately be placed in the .data section, which is for read-write data (data which is write-protected in memory), but .rodata was used because the string is not modified by the program (it's a constant).
- .global (or .globl) is a directive which makes the following symbol visible to the linker. Otherwise, symbols are normally lost by link time. In this case, the linker needs to know the value of the special symbol _start in order to know where execution is to begin in the program (which is not always at the start of the .text section).
- _start is a label which is equivalent to the memory location of the first instruction in the program.
- msg is a label which is equivalent to the memory location of the first byte of the string "Hello, World!\n"
- .set is a directive which sets a symbol (len) equal to the value of an expression (in this example, ". - msg" meaning the current memory location minus the value of the label "msg"). Note that the GNU assembler accepts `a=1` as equivalent to `.set a, 1` -- both are counted as directives regardless of the presence of the `.set` keyword.

Note that symbols are not variables - they are constants that are calculated at compile-time. However, they may contain an address at which a variable is stored.

Note also that the syntax will vary from assembler to assembler and from architecture to architecture.

## 6502 Assembly Language in the Emulator

The [6502 Emulator](/G-6502/6502-emulator.md) provides a very simple assembler for [6502](/G-6502/6502.md) code:

Simple text-substitution macros can be defined with `define name value` like this:

```assembly
 define SCREEN $f000
```

- The DCB (Declare Constant Byte) directive can be used to create a group of bytes in memory. Byte values are comma-separated and may be double-quoted single printable characters (except space, double quote, or comma), decimal values, or hexadecimal values prefixed with $, like this:

```assembly
 dcb 12,34,56
 dcb $33,$66,$CC,$FF
 dcb "A"
 dcb "T","e","s","t",$20,"4",".",0
```

- The current assembly pointer starts at $0600 and increments with output bytes; it can be changed with this syntax:

```assembly
 *=$0800
```

To create an assembly language program in the emulator, simply type or paste the code in the text area and hit Assemble. If no error messages are output, the Run button will be enabled, and pressing that will run your code. To save your code, copy and paste it from the text area into an editor.

## Assembly Language on a Linux System

On a Linux system, you will need to meet three requirements to get your assembly language program to work:

1. Code must be placed in the `.text` section of the ELF file.
2. Data must be placed in either the `.rodata` (read-only data) or `.data` (read/write data) sections of the ELF file.
3. There must be a globally-defined symbol which the linker (`ld`) will use to find the entry point to your program. If the code is being directly compiled by the assembler, this symbol must be `_start` -- but if the code is being compiled by gcc, this symbol must be called `main` (a preamble will be located at `_start` which will then transfer control to `main`).

The file extension should be `.s` for assembler source without directives (for compilation with the assembler) or `.S` for assembler with preprocessor directives (for compilation with gcc).

### Compiling an Assembly Language Program using the GNU Assembler

1. Run the assembler: `as -g -o test.o test.s`
2. Run the linker: `ld -o test test.o`

Note that the `-g` option assembles the program with symbolic debugging information included.

### Compiling an Assembly Language Program using the NASM Assembler

1. Run the assembler: `nasm -g -f elf64 -o test.o test.s`
2. Run the linker: `ld -o test test.o`

Notes:

1. NASM only works with x86 code.
2. The source file must be written using NASM syntax (which is substantially different from the GNU assembler syntax).
3. The `-f elf64` option instructs NASM to assemble the code for a 64-bit target (x86_64).
4. The `-g` option assembles the program with symbolic debugging information included.

### Compiling an Assembly Language program using GCC

1. Run the preprocessor, assembler, and linker using the gcc command: `gcc -g -o test.o test.S`

Note that the `-g` option assembles the program with symbolic debugging information included, and that the normal GCC optimization options are not available.

### Instruction Set Architecture Information

To get started with specific [instruction set architectures](/E-ComputerArchitecture/instruction-set-architecture.md), see:

- [x86_64 Register and Instruction Quick Start](./x86-64-register-and-instruction-quick-start.md)
- [aarch64 Register and Instruction Quick Start](./aarch64-register-and-instruction-quick-start.md)

## Resources

- [Using as, The GNU Assembler](https://sourceware.org/binutils/docs/as/) (GAS manual)
