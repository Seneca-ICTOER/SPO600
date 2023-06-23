---
id: 6502-addressing-modes
title: 6502 Addressing Modes
sidebar_position: 3
description: 6502 Addressing Modes
---

# 6502 Addressing Modes

The [6502](./6502.md) processor has 13 Addressing Modes (ADD LINK), which affect how the arguments for instructions are accessed.

For example, the Load Accumulator `LDA` instruction can load the accumulator from different sources:

```assembly
LDA #$05  ; Immediate addressing mode - load the accumulator with the number 5
LDA $05   ; Zero-page addressing mode - load the accumulator from memory address 5
LDA $0805 ; Absolute addressing mode - load the accumulator from memory address 0x8005 (32773).
```

Not all addressing modes are valid for every instruction.

## Accumulator

The operation works on the accumulator. No additional data is required. Examples:

```text
ASL A
LSR A
ROL A
ROR A
```

Note that the explicit `A` is not required by most assemblers, so you could write:

```text
ASL
LSR
ROL
ROR
```

## Absolute

Data is accessed using 16-bit address specified as a constant.

```assembly
LDA $06d3
STX $0200
JMP $5913
```

## Absolute, X

Data is accessed using a 16-bit address specified as a constant, to which the value of the X register is added (with carry).

```assembly
LDA $8000,x
STA $8000,x
```

## Absolute, Y

Data is accessed using a 16-bit address specified as a constant, to which the value of the Y register is added (with carry).

```assembly
LDA $8000,y
STA $8000,y
```

## Immediate

Data is taken from the byte following the opcode.

```assembly
LDA #$05
ORA #$80
```

## Implied

The data is implied by the operation. Examples:

```assembly
CLC ; clears the Carry flag - it's implied that this operates on the Status register
RTS ; return from subroutine - it's implied that the return address will be taken from the stack
```

## Indirect

Data is accessed using a pointer. The 16-bit address of the pointer is given in the two bytes following the opcode.

```assembly
JMP ($9000) ; Jumps to the location pointed to by addresses $9000 (low) and $9001 (high)
```

## X, Indirect

An 8-bit zero-page address and the X register are added, without carry (if the addition overflows, the address wraps around within page 0). The resulting address is used as a pointer to the data being accessed. Note that, effectively, this makes the X register an index into a list of pointers. Also note that pointers are two bytes long, so the X register should be an even number when accessing a list of pointers (otherwise you'll get half of one pointer and half of another).

```assembly
LDA ($05,x) ; if x=4, then the pointer at $09 (and $0a) will be used, and the accumulator loaded from the address indicated by the pointer
```

## Indirect, Y

An 8-bit address identifies a pointer. The value of the Y register is added to the address contained in the pointer. Effectively, the pointer is the base address and the Y register is an index past that base address.

```assembly
LDA ($10),y ; if y=4, and the pointer at $10 (and $11) holds the value $FF00, then the accumulator is loaded from the address ($FF00+$04)=$FF04
```

## Relative

An 8-bit signed offset is provided. This value is added to the program counter (PC) to find the effective address.

```assembly
BNE $0600 ; The value "$0600" is assembled into a signed offset (note that $0600 is not the value of the argument in the assembled code -- the offset is a one-byte signed value calculated by the assembler). The target must be in the range of (-128:127) bytes of the current PC value.
```

## Zero page

An 8-bit address is provided within the zero page. This is like an absolute address, but since the argument is only one byte, the CPU does not have to spend an additional cycle to fetch high byte.

```assembly
LDX $13
AND $07
```

## Zero page, X

An 8-bit address is provided, to which the X register is added (without carry - if the addition overflows, the address wraps around within the zero page).

```assembly
STA $00,x
LDA $00,x
```

## Zero page, Y

An 8-bit address is provided, to which the Y register is added (without carry - if the addition overflows, the address wraps around within the zero page).

```assembly
STA $00,y
LDA $00,y
```
