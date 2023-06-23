---
id: 6502-emulator-example-code
title: 6502 Emulator Example Code
sidebar_position: 8
description: 6502 Emulator Example Code
---

# 6502 Emulator Example Code

This is a collection of simple examples of [6502](./6502.md) [assembly language](/F-AssemblyLanguage/assembly-language.md) code which will run in the [6502 Emulator](./6502-emulator.md). To use this code, copy and paste one of these programs into the text box of the [emulator](http://6502.cdot.systems/).

**This code is Copyright ©2020-2022 Seneca College of Applied Arts and Technology. Each of these programs is free software; you can redistribute them and/or modify them under the terms of the [General Public License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html%7CGNU) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.**

## Fill the Bitmapped Display

```assembly
      lda #$00     ; set pointer at $10 to $0200
      sta $10
      lda #$02
      sta $11
      
      ldx #$06     ; max value for $11, the high byte of the pointer
      
      ldy #$00     ; index - this value is added to the pointer

      lda #$07     ; colour code to be used to fill the display

loop: sta ($10),y  ; store colour to the value of the pointer + Y
      iny          ; increment index - prepare to fill next pixel
      bne loop     ; branch until page done - stops when Y==0
      
      inc $11      ; increment high byte of pointer
      cpx $11      ; compare with max value
      bne loop     ; continue if not done 
      
      brk          ; done - return to debugger
```

## Place a Message on the Character Display

### Without using the ROM routines

```assembly
 define SCREEN $f000     ; location of screen memory

           ldy #$00      ; index value (character we're currently processing)
 
 char:     lda text,y    ; get a character from address (text + Y)
           beq done      ; if the character is NULL, branch to done
           sta SCREEN,y  ; store character at (SCREEN + Y)
           iny           ; increment Y (go to next character)
           bne char      ; repeat loop
 
 done:     brk           ; when we're done, break (stop the program)
 
 text:                   ; this is the text message
 dcb "6","5","0","2",32,"w","a","s",32,"h","e","r","e",".",00
```

### Using the ROM routines

```assembly
; ROM routines
define		SCINIT		$ff81 ; initialize/clear screen
define		CHRIN		$ffcf ; input character from keyboard
define		CHROUT		$ffd2 ; output character to screen
define		SCREEN		$ffed ; get screen size
define		PLOT		$fff0 ; get/set cursor coordinates

          jsr SCINIT  ; initialize and clear the screen
          ldy #$00

char:     lda text,y
          beq done
          jsr CHROUT  ; put the character in A on to the screen
          iny
          bne char

done:     brk

text:
dcb "6","5","0","2",32,"w","a","s",32,"h","e","r","e",".",00
```

## Type on the Screen

```assembly
; let the user type on the first page of character screen
; has blinking cursor!
; does not use ROM routines
; backspace works (non-destructive), arrows/ENTER don't
 
next:     ldx #$00
idle:     inx
          cpx #$10
          bne check
          lda $f000,y
          eor #$80
          sta $f000,y

check:    lda $ff
          beq idle

          ldx #$00
          stx $ff

          cmp #$08 ; bs
          bne print

          lda $f000,y
          and #$7f
          sta $f000,y

          dey
          jmp next

print:    sta $f000,y
          iny
          jmp next
```

## Place a Graphic on the Screen

```assembly
 define WIDTH 	4 ; width of graphic
 define HEIGHT 	4 ; height of graphic
 
 
 	lda #$25	; create a pointer at $10
 	sta $10		;   which points to where
 	lda #$02	;   the graphic should be drawn
 	sta $11
 
 	lda #$00	; number of rows we've drawn
 	sta $12		;   is stored in $12
 
 	ldx #$00	; index for data
 	ldy #$00	; index for screen column
 
 draw:	lda data,x
 	sta ($10),y
 	inx
 	iny
 	cpy #WIDTH
 	bne draw
   
 	inc $12		; increment row counter
 
 	lda #HEIGHT	; are we done yet?
 	cmp $12
 	beq done	; ...exit if we are
 
 	lda $10		; load pointer
 	clc
 	adc #$20	; add 32 to drop one row
 	sta $10
 	lda $11         ; carry to high byte if needed
 	adc #$00
 	sta $11
 
 	ldy #$00
 	beq draw
 
 done:	brk		; stop when finished
 
 data:                 ; graphic to be displayed
 dcb 00,03,03,00
 dcb 07,00,00,07
 dcb 07,00,00,07
 dcb 00,03,03,00
```

## Etch-a-Sketchtm Style Drawing

```assembly
; zero-page variable locations
define	ROW		$20	; current row
define	COL		$21	; current column
define	POINTER		$10	; ptr: start of row
define	POINTER_H	$11

; constants
define	DOT		$01	; dot colour
define	CURSOR		$04	; black colour


	 	ldy #$00	; put help text on screen
print:		lda help,y
		beq setup
		sta $f000,y
		iny
		bne print

setup:		lda #$0f	; set initial ROW,COL
		sta ROW
		sta COL

draw:		lda ROW		; ensure ROW is in range 0:31
		and #$1f
		sta ROW

		lda COL		; ensure COL is in range 0:31
		and #$1f
		sta COL

		ldy ROW		; load POINTER with start-of-row
		lda table_low,y
		sta POINTER
		lda table_high,y
		sta POINTER_H

		ldy COL		; store CURSOR at POINTER plus COL
		lda #CURSOR
		sta (POINTER),y

getkey:		lda $ff		; get a keystroke
		beq getkey

		ldx #$00	; clear out the key buffer
		stx $ff

		cmp #$43	; handle C or c
		beq clear
		cmp #$63
		beq clear

		cmp #$80	; if not a cursor key, ignore
		bmi getkey
		cmp #$84
		bpl getkey

		pha		; save A

		lda #DOT	; set current position to DOT
		sta (POINTER),y

		pla		; restore A

		cmp #$80	; check key == up
		bne check1

		dec ROW		; ... if yes, decrement ROW
		jmp done

check1:		cmp #$81	; check key == right
		bne check2

		inc COL		; ... if yes, increment COL
		jmp done

check2:		cmp #$82	; check if key == down
		bne check3

		inc ROW		; ... if yes, increment ROW
		jmp done

check3:		cmp #$83	; check if key == left
		bne done

		dec COL		; ... if yes, decrement COL
		clc
		bcc done

clear:		lda table_low	; clear the screen
		sta POINTER
		lda table_high
		sta POINTER_H

		ldy #$00
		tya

c_loop:		sta (POINTER),y
		iny
		bne c_loop

		inc POINTER_H
		ldx POINTER_H
		cpx #$06
		bne c_loop

done:		clc		; repeat
		bcc draw


; these two tables contain the high and low bytes
; of the addresses of the start of each row

table_high:
dcb $02,$02,$02,$02,$02,$02,$02,$02
dcb $03,$03,$03,$03,$03,$03,$03,$03
dcb $04,$04,$04,$04,$04,$04,$04,$04
dcb $05,$05,$05,$05,$05,$05,$05,$05,

table_low:
dcb $00,$20,$40,$60,$80,$a0,$c0,$e0
dcb $00,$20,$40,$60,$80,$a0,$c0,$e0
dcb $00,$20,$40,$60,$80,$a0,$c0,$e0
dcb $00,$20,$40,$60,$80,$a0,$c0,$e0

; help message for the character screen

help:
dcb "A","r","r","o","w",32,"k","e","y","s"
dcb 32,"d","r","a","w",32,"/",32,"'","C","'"
dcb 32,"k","e","y",32,"c","l","e","a","r","s"
dcb 00
```

## Additional Examples

Additional examples, as well as the source code for the emulator's ROM routines, are in a repository at https://github.com/ctyler/6502js-code
