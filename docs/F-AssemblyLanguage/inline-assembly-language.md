---
id: inline-assembly-language
title: Inline Assembly Language
sidebar_position: 3
description: Inline Assembly Language
---

# Inline Assembly Language

_Inline Assembly_ is [assembly language](./assembly-language.md) code which is embedded in a program written in another language, typically C.

In open source software (especially in a Linux context), this is most commonly done using gcc, but inline assembler is also supported by llvm/clang, the Intel C compilers, Microsoft Visual Studio, and various other tools. Here we're going to focus on gcc.

## Syntax

Inline assembler is included in a GCC C source file in one of these two forms:

```assembly
asm(...);
__asm__ (...);                  // Those are double underscores!
```

If it is critical that the code not be moved by the compiler (for example, as the result of an optimization), include the keyword `volatile`:

```assembly
asm volatile (...);
__asm__ __volatile__ (...);     // Double underscores all over the place
```

Inside the parenthesis, there are up to four sections separated by colons. There are:

1. The assembler template (mandatory)
2. Output operands (optional)
3. Input operands (optional)
4. Clobbers (optional)

### Assembler Template

The assembler template is a piece of assembler code that will be pre-processed to fill in register assignments. Registers may be referenced as %0, %1, %2 and so forth, indicating the registers mentioned in the output operands and input operands. For example, if there is one output operand and two input operands, you can refer to the register containing the output operand as `%0` and the input operands as `%1` and `%2`.

Because % is used as a prefix for register numbers (using some assembly language dialects), a double percent-sign must be used to represent a single percent sign in the code. For example, in x86_64 gas assembler, the rax register is written as `%rax` -- but in a template, it must be written as `%%rax`.

The template is written as one or more strings enclosed in quotes, with no separator other than whitespace between the strings. Individual statements in the asm code must be separated by semi-colons (;) or explicit newline characters (\n). The sequence \t can be used to indicate a tab character.

These are all valid:

```assembly
asm("mov %1,%0;inc %0");

__asm__ ("mov %1,%0\ninc %0");

__asm__ ("mov %1,%0\n" "inc %0");

__asm__ ("mov %1,%0\n\t"
         "inc $0");
```

These are not valid:

```assembly
asm("mov %1,%0
     inc %0");   // the assembler will not see a delimiter between the statements

__asm__ ("mov %1,%0\n","inc %0");  // do not place a comma between the strings
```

### Output and Input Operands

Output and input operands are optional -- some asm code may do a task without any input or output values.

If the asm code has input or output values, these operands are specified as an optional name in square brackets, a quoted string containing a constraint, and a C expression in parenthesis.

Constraints are specified as a string of characters. Some commonly use constraints are:

- r - any general-purpose register is permitted.
- 0-9 - the same register used in the matching number operand should be used (for example, "1" indicates that the same register should be used as operand 1).
- i - an immediate integer value is permitted.
- F - an immediate floating-point value is permitted.

There are additional generic and platform-specific constraints (for example, for SIMD and floating-point registers). Refer to the gcc documentation for details (see [resources](#resources)).

These constraints are combined with a modifier, required for output operands:

- = - output-only register - previous contents are discarded and replaced with output value (this does not preclude use as in input register)
- \+ \- input and output register - this register will be used to both pass input data to the asm code, and to receive a value from the asm code
- & - earlyclobber register - this value may be overwritten before input is processed, therefore it must not be used for input
- % - in addition to one of the symbols above, declares that this operand and the following operand are commutable (interchangeable) for optimization. Only one commutable pair may be specified.

The constraint is followed by a C expression in parenthesis to provide the value (input operand) or receive the value (output operand). This is usually a variable name for output operands, but may be a variable name, evaluated expression, or a constant for input operands.

Here are some (trivial) examples in x86_64 assembler:

```assembly
int x=10, y;
__asm__ ("mov %1,%0"

   : "=r"(y)    // output register value is moved to y
                // register is called %0 in template

   : "r"(x)     // input value from x is placed in a register
                // register is called %1 in template
   :
);
```

In the example above, one or two registers are used for input and output -- the compiler can choose whether to use the same register for input and output, or to use separate ones. We can specify that only one register is to be used:

```assembly
int x=10, y;
__asm__ ("mov %1,%0"
   : "+r"(y)       // + indicates read/write register
   : "0"(x)        // output register is same as %0
   :
);
```

The registers may be referenced by name instead of number if a name is provided in the operand sections:

```assembly
int x=10, y;
__asm__ ("mov %[in],%[out]"
   : [out]"=r"(y)  // register may be called %[out]
   : [in]"r"(x)    // register may be called %[in]
   :
);
```

### Using a Specific Register Width on AArch64

On AArch64, you may need to access a 32-bit version of a register. To do this with templated register names, you can add the 'w' modifier. For example, if %0 is x22 and you need to access w22, use %w0.

### Constraining an Operand to a Specific Register

It is sometimes useful to constrain an operand to a particular register to avoid having to perform moves within the asm code (for example, if an operand will be used as the input to a function call or [syscall](./syscalls.md)).

### Register Constraints using Explicit Register Variables

To select a specific register for a operand, use a (perhaps temporary) variable in operand's C expression that is locked to a particular register in that variable's C declaration, using [explicit register variables](http://gcc.gnu.org/onlinedocs/gcc-4.8.2/gcc/Local-Reg-Vars.html#Local-Reg-Vars).

For example, in aarch64 asm:

```assembly
int x=10;
register int y asm("r15");

asm("mov %1,%0; inc r15;"
   : "=r"(y)
   : "r"(x)   // register r15
   :
);
```

In this example, the variable y is constrained in C to the r15 register. The "inc r15" in the assembler template therefore increments the output register after the mov instructions.

### i386 Register Names

On i386 only, specific registers may be selected by using `a`, `b`, `c`, or `d` in place of `r` as a register constraint. Using `a`, for example, will select the rax/eax register.

### Clobber

If your code will clobber (overwrite) registers or memory regions, these must be listed after the third colon within the asm parenthesis. For example:

```assembly
asm("..."
    : "=r"(out)
    :  "r"(in)
    : "rax", "rbx", "rsi"   // values in rax, rbx, rsi will be clobbered
);
```

If memory is altered by the asm code, the string "memory" should be added to the clobber list. This will cause the compiler to mistrust values that were loaded from memory before the assembly language code was executed -- for example, if register r12 is loaded with an integer from memory before the assembly code is executed, it will be reloaded from memory afterward, because the value in memory may have been modified by the assembly code. If a memory clobber is not specified, the compiler will assume that values previously loaded from memory still match the values in memory. In most cases, the `volatile` keyword should be used along with the memory clobber flag.

If the condition code (status register or flag register) (ADD LINK) is altered, the string "cc" should be added to the clobber list.

## Resources

There are many other options applicable to special situations or specific architectures. All of these are documented here:

- [GNU Assembler Manual](http://gcc.gnu.org/onlinedocs/gcc-4.8.2/gcc/Extended-Asm.html)
  - Specifically, see the [Assembler Instructions with C Expression Operands](http://gcc.gnu.org/onlinedocs/gcc-4.8.2/gcc/Extended-Asm.html) section
