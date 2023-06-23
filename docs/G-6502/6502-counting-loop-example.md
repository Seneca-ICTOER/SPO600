---
id: 6502-counting-loop-example
title: 6502 Counting Loop Example
sidebar_position: 7
description: 6502 Counting Loop Example
---

# 6502 Counting Loop Example

Here is a solution for part of the [SPO600 64-bit Assembly Language Lab](/B-Labs/lab4.md) but implemented in 6502 Assembly language for use with the [6502 Emulator](./6502-emulator.md):

```assembly
; ROM routines
define		SCINIT		$ff81
define		CHROUT		$ffd2

START:
	LDX #$00	; Loop index (0-9)

GO:
	TXA		; Put loop index into A
	CLC
	ADC #$30	; Add $30 (ASCII '0')
	STA MSG_DIGIT	; Store into the string

	LDY #$00	; Character number to print
DO:
	LDA MSG,Y	; Get a character
	BEQ DONE	; Done if it's NULL
	JSR CHROUT	; Print character
	INY		; Increment char number
	JMP DO		; Process next character

DONE:
	INX		; Increment loop index
	CPX #10		; Is it 10?
	BNE GO		; If not, branch to GO
	BRK		; Stop

MSG:
	DCB "L","o","o","p",$20
MSG_DIGIT:
	DCB "#",$0D,$00

; Note that MSG_DIGIT is a position in
; the middle of the message - not a 
; separate message.
```
