---
id: 6502-jumps-branches-and-procedures
title: 6502 Jumps, Branches, and Procedures
sidebar_position: 6
description: 6502 Jumps, Branches, and Procedures
---

# 6502 Jumps, Branches, and Procedures

Very few computer programs are perfectly lineary in their instruction sequence - the sequence of instructions executed may be repeated (loops), conditional (if/then/else), and involve procedures (aka subroutines, functions, or methods).

On the 6502 processor, there are three main ways to move to a specific code location in memory: jumps, branches, and procedures (or subroutines).

## Jumps

Jumps are unconditional and cause the program counter to move to a particular address. The instruction is JMP both relative and absolute [addressing modes](./6502-addressing-modes.md) are available.

Here is an example using the absolute addressing mode:

```assembly
JMP $f027  ; unconditional jump to absolute address
```

This will cause the [program counter](./6502.md#registers) (PC) to be loaded with the value $f027, causing the processor to execute the instruction at that address next. This is effectively a "GOTO".

This example uses indirect addressing:

```assembly
JMP ($6094)
```

This loads the PC with the value in memory at $6094:$6095. Effectively, $6094 is a pointer to the address of the next instruction to be executed.

## Branches

Branches are conditional on the state of a [processor flag](./6502.md#registers). The destination of the branch is given as a signed byte relative to the current value of the [PC](./6502.md#registers), so the destination must be within -128 to +127 bytes of the byte after the branch instruction. These are the branch instructions available:

```assembly
BCC ; Branch on Carry flag (C) Clear
BCS ; Branch on Carry flag (C) Set 
BEQ ; Branch on EQual (zero Z flag set)
BNE ; Branch on Not Equal (zero Z flag clear)
BMI ; Branch on MInus (negative flag S/N set)
BPL ; Branch on PLus (negative flag S/N clear)
BVC ; Branch on oVerflow flag V Clear
BVS ; Branch on oVerflow flag V Set
```

In assembler, you typically specify the address or label to which you wish to branch, and the assembler calculates the relative value for the branch offset.

For example:

```assembly
LOOP: STA (POINTER),Y
      INY
      BNE LOOP
```

In this code, the `BNE LOOP` line is assembled as:

```assembly
d0 fb     ; BNE $0600
```

Where $FB represents -5 in two's compliment (ADD LINK) notation, since the processor needs to branch back 5 bytes from the current PC location (which is the byte after the end of the BNE instruction).

Because branches are always relative, code that uses only branches is called Position Independent Code (PIC) and can be easily relocated in memory. Therefore, some programmers prefer to use a forced branch instead of a jump, using an approach like this:

```assembly
CLC ; clear the carry flag
BCC SOMEWHERE ; branch if carry clear (which will always be the case because of the previous line)
```

Although not included in the basic/original 6502, some newer variants of this processor (such as the [65C02](https://en.wikipedia.org/wiki/WDC_65C02)) have a BRanch Always (BRA) instruction which performs an unconditional relative branch.

## Procedures

Proedures - also called subroutines, functions, or methods - are a special case, because the program flow needs to return to the calling code when the procedure has finished.

In the 6502, the JSR (Jump to SubRoutine) instruction is used to push the current value of the [program counter](./6502.md#registers) on the stack, and then perform an unconditional jump to the address specified (using the absolute addressing mode):

```assembly
JSR $F000
```

To return from the procedure, the RTS (ReTurn from Subroutine) instruction loads the PC from the stack, causing execution to continue at the instruction immediately after the JSR.

Note that in assembly language, return values can be passed back to the calling function in registers or through stored values. In practical terms, the way that values are returned will depend on the type of data - for example, strings will generally be passed back in memory, while small integers or pointers can be passed in registers.

Note also that at the machine language level, there is no distinction between functions, methods, subroutines, and procedures - these distinctions apply only at the source code level and disappear during compilation to machine language.
