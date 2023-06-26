---
id: 6502-instructions-introduction
title: 6502 Instructions - Introduction
sidebar_position: 4
description: 6502 Instructions - Introduction
---

# 6502 Instructions - Introduction

The [6502](./6502.md) processor has a compact instruction set, consisting of just 56 instructions:

```text
ADC	AND	ASL	BCC	BCS	BEQ	BIT	
BMI	BNE	BPL	BRK	BVC	BVS	CLC  
CLD	CLI	CLV	CMP	CPX	CPY	DEC
DEX	DEY	EOR	INC	INX	INY	JMP
JSR	LDA	LDX	LDY	LSR	NOP	ORA
PHA	PHP	PLA	PLP	ROL	ROR	RTI 
RTS	SBC	SEC	SED	SEI	STA	STX
STY	TAX	TAY	TSX	TXA	TXS	TYA
```

This page groups these instructions into functional categories and explains their basic purpose.

**Addressing Modes and Registers are essential!:** Take the time to understand the [6502 addressing modes](./6502-addressing-modes.md) and [registers](./6502.md#registers). This is essential background infromation for understanding the 6502 instructions.

## Addressing Modes

There are thirteen [6502 Addressing Modes](./6502-addressing-modes.md). All of these instructions work with at least one addressing mode, and many work with several addressing modes. See the [Resources](#resources) section for Opcode tables that define which instructions work with which addressing modes.

## Registers

Most of these instructions work with [registers](/E-ComputerArchitecture/register.md). Refer to the [6502 page, Register section](./6502.md#registers) for details on the 6502's internal registers.

## Performance

Each 6502 instruction takes a defined number of machine cycles to execute. In some cases,the number of cycles will vary depending on the circumstances of the instruction's execution - for example, the conditional branch instruction `BRE` (Branch if EQual) takes:

- 2 cycles if the branch is not taken
- 3 cycles if a branch is taken to an address in the same page
- 4 cycles if a branch is taken to an address in another page

Remember that the Program Counter (PC register) contains a pointer to the next instruction to be executed. When the BEQ instruction has been loaded into the CPU, the PC points to the instruction following the BEQ. The branch works by adding a signed integer value (in the range of -128 to +127) to the Program Counter; the extra cycle required when the branch is taken is used to process the addition. If the high byte of the Program Counter changes (because the branch crosses in to another page), one additional cycle is required to adjust the high byte.

You can find the execution time in the instruction charts found in the [Resources](#resources) section below.

To convert the number of cycles to time, multiply the cycles by the time between system [clock](/E-ComputerArchitecture/clock.md) pulses. Many 6502 systems operated at 1 MHz (1 million operations per second), and therefore 1 cycle corresponded to 1 millionth of a second, or 1 microsecond (uS). Therefore, an instruction that took 4 clock cycles would take 4 uS to execute.

## Instructions by Category

### Loading and Storing Data (to/from Memory)

#### Register-Memory Loads and Stores

There are three instructions to load data from memory to a register:

```assembly
LDA ; load the accumulator
LDX ; load the X register 
LDY ; load the Y register
```

And there are three matching instructions to store data from a register to a memory location:

```assembly
STA ; store the accumulator 
STX ; store the X register 
STY ; store the Y register
```

#### Push/Pull on the Stack

When a value is pushed to the stack, the stack pointer register (SP) is decremented and the selected register is written to memory location $0100+SP.

When a value is pulled from the stack, the stack pointer register (SP) is incremented and the selected register is loaded from memory location $0100+SP.

There are two instructions to push data onto the stack:

```assembly
PHA ; push the accumulator
PHP ; push the processor status register (SR)
```

And two matching instructions to pull data from the stack:

```assembly
PLA ; pull the accumulator
PLP ; pull the processor status register (SR)
```

Note that some other operations, such as JSR, interrupts, RTI, and RTS, cause data to be pushed to or pulled from the stack.

#### Transferring Data between Registers

The X and Y registers can be transferred to/from the accumulator:

```assembly
TAX ; transfer A to X
TAY ; transfer A to Y
TXA ; transfer X to A
TYA ; transfer Y to A
```

You can also transfer the Stack Pointer (SP) to/from the X register:

```assembly
TSX ; transfer SP to X
TXS ; tranfer X to SP
```

It is not possible to directly transfer the Status Register (SR) to a general-purpose register, but you can you transfer it via the stack (e.g., by pushing SR to the stack with with `PHP` and then popping the stack to the accumulator with `PLA`).

### Arithmetic and Bitwise Operations

**Watch the Carry Flag!:** Failing to clear the carry flag before addition or to set the carry flag before subtraction is the cause of many bugs in 6502 programs. The carry flag also affects the rotate instructions. Be sure to set or clear this flag with the `SEC` or `CLC` instructions when needed!

**For full details on all of the arithmetic and bitwise instructions, see the [6502 Math](./6502-math.md) page.**

The 6502 has rudimentry addition and subtraction instructions, which operate on the accumulator (A):

```assembly
ADC ; add with carry
SBC ; subtract with carry
```

There are also increment and decrement instructions for the X and Y registers and for memory:

```assembly
DEC ; decrement memory
DEX ; decrement X register
DEY ; decrement Y register

INC ; increment memory
INX ; increment X register
INY ; increment Y register
```

The 6502 also has instructions for left and right bit-shifts and rotations (which can act as multiply-by-2 and divide-by-2):

```assembly
ASL ; arithmetic shift left
ROL ; rotate left

LSR ; logical shift right
ROR ; rotate right
```

There are also instructions for bitwise operations such as exclusive-OR, OR, and AND. Exclusive-OR with #$FF is equivalent to a NOT operation, and these operations can be combined to produce other logical operations such as NOR and NAND.

```assembly
AND ; bitwise AND (with accumulator)
EOR ; bitwise exclusive-OR (with accumulator)
ORA ; bitwise OR (with accumulator)
```

### Test and Comparison Operations

The A, X, and Y registers can be directly compared with immediate or memory values:

```assembly
CMP ; compare (accumulator)
CPX ; compare (X register)
CPY ; compare (Y register)
```

These operations are performed by subtraction. The appropriate condition flags are set, and the result of the subtraction is discarded. Conditional branch instructions can be used to alter program flow based on the results of the comparisons.

There is another test instruction available:

```assembly
BIT ; bit test
```

This instruction places bit 7 of the operand into the N flag and bit 6 of the operand into the V flag. The operand is then ANDed with the accumulator, and the Z flag is set if the result is zero. The result of the AND is discarded. In this way, you can test the value of bit 7, bit 6, or any arbitrary bits (using the operand).

Note that in addition to these instructions, many other instructions (such as register loads) affect condition flags.

### Program Flow

#### Unconditional Jump

An unconditional jump is like a "Goto" -- it sets the address of the next instruction to be executed (by modifying the Program Counter (PC)):

```assembly
JMP ; jump to address
```

#### Jump to SubRoutine

A jump to a subroutine is also unconditional, but the current value of the Program Counter (PC) is placed on the stack so that when the subroutine (aka procedure, function, or method) is finished, execution can resume at the instruction after the jump to subroutine:

```assembly
JSR ; jump to subroutine (pushes PC on stack, loads operand into PC)
RTS ; return from subroutine (pops PC from stack)
```

#### Conditional Branch

A conditional branch is like a jump, except that it is only performed if a certain condition is met:

```assembly
BCC ; branch on carry clear (C flag is clear)
BCS ; branch on carry set (C flag is set)
BEQ ; branch if equal (Z flag is set)
BMI ; branch if minus (N flag is set)
BNE ; branch if not equal (Z flag is clear)
BPL ; branch if plus (N flag is clear)
BVC ; branch if overflow clear (V flag is clear)
BVS ; branch if overflow set (V flag is set)
```

Note that the operand for conditional branch instructions is a relative offset - a signed 8-bit value (in the range -128 to +127) that is added to the current PC. When writing assembler (or viewing disassembled code), the operand is _written_ as an absolute address or label, but the actual [machine language](/E-ComputerArchitecture/machine-language.md) code uses the relative addressing mode. For this reason, a branch that is too far will not assemble and will produce an error message.

### Manipulating Flags

The 6502 provides instructions for setting and clearing various condition flags:

```assembly
CLC ; clear carry flag (C) - required before using ADC
CLD ; clear decimal flag (D) - switches into binary math mode
CLI ; clear interrupt disable (I) - enables processor interrupts
CLV ; clear overflow flag (V)

SEC ; set carry flag (C) - required before using SBC
SED ; set decimal flag (D) - switches into decimal math mode
SEI ; set interrupt disable - turns off processor interrupts
```

Note that there is no instruction to set the overflow (V) flag.

### Miscellaneous Instructions

```assembly
BRK ; "BREAK" - turn control over to the debugger
```

This instruction initiates a special version of the Non-Maskable Interrupt - "Non-maskable" meaning that the interrupt flag (I) cannot disable this signal.

```assembly
RTI ; return from interrupt
```

`RTI` is very similar to `RTS` (ReTurn from Subroutine), but is used to return from interrupts.

```assembly
NOP ; no operation
```

The `NOP` instruction does nothing. It can be used to "comment-out" code.

## Resources

These resources provide detailed summaries of the 6502 instructions, including the number of cycles required to execute the instructions, flags affected by each instruction, and the addressing modes available:

- [6502 Opcodes with Register Definitions](http://www.6502.org/tutorials/6502opcodes.html)
- [6502 Opcodes with Detailed Operation Information](https://www.masswerk.at/6502/6502_instruction_set.html)
