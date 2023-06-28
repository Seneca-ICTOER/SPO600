---
id: 6502-emulator
title: 6502 Emulator
sidebar_position: 2
description: 6502 Emulator
---

# 6502 Emulator

A simple web-based [6502](./6502.md) emulator is available at http://6502.cdot.systems. This emulator is used in the [SPO600](../landing-page.md) course to teach 8-bit [assembly language](/F-AssemblyLanguage/assembly-language.md) before transitioning to more complex 64-bit x86_64 and [AArch64](/H-ARM/arm-v8.md) assembly language.

![6502 Emulator](https://wiki.cdot.senecacollege.ca/w/imgs/6502_Emulator_Screenshot.png)

A screen shot of the 6502 Emulator running [the drawing example code](./6502-emulator-example-code.md#etch-a-sketchtm-style-drawing).

**Hex notation - $XX:** In most 6502 documentation, including this page, the `$` prefix indicates hexadecimal notation. On other systems, this may be designated by a `0x` prefix.

## Basic Controls

The emulator has a text area for entering and editing code, a small bit-mapped graphics screen (32x32 pixels), a character screen (80x25 characters), a debug area, a memory monitor, and a message area.

These controls are available at the top of the screen:

- Assemble - assembles the code in the text area, placing the resulting binary machine language code at $0600 and outputting any error messasges to the message area.
- Run - runs the assembled code, if it assembled correctly. While the code is running, this button becomes a Stop button.
- Reset - resets the state of the emulator (see the [Memory Map](#peripherals-and-memory-map) section below).
- Hexdump - shows, in hexadecimal, the values stored in memory starting at $0600
- Disassemble - shows a combined hexdump and disassembly of code at $0600
- Notes - displays notes about the emulator in the message area.

The Speed slider lets you adjust the speed of the emulator from about 1% of native 6502 performance (left) to roughly full native speed (right). Setting the speed slider to a lower setting can be useful for debugging and for viewing the progress of operations on the displays.

There are also controls to Save and Load the text area to/from local storage on the computer on which it is running (as a download/upload); this works nicely with a local git repository (or clone).

## Assembler Capabilities

The assembler accepts these inputs:

### Instructions

- 6502 assembler instructions, optionally prefixed with a label and a colon. Examples:
  - simple instruction: `STA $10`
  - instruction with a label: `LOOP: STA ($10),Y`
    - when a label is used, the address of the label can be referenced using the label name: `JMP LOOP`

### Directives

- Origin assignment: You can tell the assembler where to assemble the following code with this syntax: `*=$XXXX` where XXXX is an address in hexadecimal. Multiple origin assignments may be used. Example: `*=$1800`
- "define" directive: Macro assignments may be created with the "define" directive: `define macro value` -- for example: `define WHITE $01` -- the macro value will be substituted into lines wherever the macro name appears (e.g., `LDA #WHITE`).
- "dcb" directive: the Define Constant Byte (dcb) directive will cause the assembler to place individual byte values into memory. These byte values may be in hexadecimal prefixed with $, decimal with no prefix, or single printable non-space characters quoted with double quotes.

### High and Low Label Bytes

- The low byte of the label X can be accessed as <X and the high byte can be accessed as \>X. For example, this code will load the low byte of the label "start" into the A register: `LDA #<START` - note that this only works with labels, and not with macros.
- You can use labels and origin assignment together to get a label for any address in the system. For example, to get a label pointing to the first byte of the character display, you could place this at the end of your program:

```assembly
*=$f000
DISPLAY:
```

You could then create a pointer to that address at $0027 with this code:

```assembly
LDA #<DISPLAY
STA $27
LDA #>DISPLAY
STA $28
```

### Comments

Any characters on a line following an unquoted semicolon `;` are treated as a comment and ignored.

## Using the Debugger

The debugger will constantly show the value of the emulated 6502's registers. If you select the Debugger checkbox, you will be able to single-step through memory or jump to an address or label using the associated pushbuttons.

## Using the Monitor

Selecting the Monitor checkbox will display the specified region of memory as code is executed. For example, specifying a start of $00 and a length of $100 will display the entire zero page. Once enabled, the monitor may not display until the code is executed (via Run button).

## Turning the Text Screen On/Off

The checkbox labeled "Text Screen" can be used to hide the character display to free up more screen space for editing code. Note also that the character display can be used for additional program memory (whether the display is enabled or not) when it's not required for output.

## Peripherals and Memory Map

The entire 64K address space is available and is populated with RAM except for peripherals and a small ROM area.

Visually, the memory map looks like this:

| Page(s)	| Address Range	| Description	| Subdivided Address Range	| Description |
| --- | --- | --- | --- | --- |
| $00	| $0000-$00FF	| Zero Page	| $0000-$00FD, $00F5-$00FD, $00FE, $00FF |	Fast-access variable storage. Your software can use this region as you see fit. Variables used by the ROM routines -- Do not use this region if you are using the ROM routines. Random number generator. Last key pressed on keyboard -- See description below |
| $01	| $0100-$01FF	| Stack	| 	| Hardware stack - values are pushed on to the stack by the PHA, PHP, JSR, and BRK instructions (plus hardware interrupts), and pulled from the stack by the PLA, PLP, RTS, and RTI instructions. The stack is first-in/last out (FILO) aka last-in, first-out (LIFO), and it descends in memory. After 256 bytes have been pushed on the stack, the stack will overflow back to the beginning and the oldest data will be overwritten. The current stack location is tracked in the Stack Pointer (SP) register. |
| $02-$05	| $0200-$05FF	| Bitmapped Display	| 	| 32x32 pixel graphics display -- See description below. |
| \$06-\$EF	| \$0600-\$EFFF	| Program Memory	| 	| RAM available for program use. By default, programs will be assembled starting at memory location $0600. This space is available for software and data. The arrangement and use of this memory is left to the programmer. |
| $F0-FC	| \$F000-\$FCFF	| Character Display	| 	| 80 colummn x 25 line character display for text messages -- See description below. |
| $FD	| \$FD00-\$FDFF	| Reserved	| 	| This memory range is reserved for future ROM expansion. |
| \$FE-\$FF	| \$FE00-\$FFFF	| ROM	| \$FE00-FF80, $FF81-\$FFF9, \$FFFA-\$FFFF |	This region is occupied by a small Read-Only Memory (ROM) image that contains input-output routines for the character display and keyboard. Entry point table - This table consists of 3-byte "entry points" for the ROM routines. To access a particular routine, use the Jump to SubRoutine (JSR) instruction with the corresponding entry point. This arrangement allows the ROM image to be revised without changing the entry point locations. See [ROM Routines](#rom-routines) below for details on the available entry points. Hardware vectors - On a hardware 6502 system, three 2-byte pointers (or "vectors") are used to access software routines to handle non-maskable interrupts (NMI) and the BRK instruction (vector $FFFA), CPU reset (vector $FFFC), and hardware interrupt (IRQ) (vector $FFFF). Since this is an emulator, these vectors are not used. |

There are four peripherals available:

- a one-byte pseudo-random number generator (_PRNG_) at **$fe**.
- a single-key buffer at **$ff** - if you write to this address, it will remain unchanged until a new keypress is received. Printable characters plus Return/Enter and Backspace are reported as ASCII codes; cursor keys are reported as $80=up, $81=right, $82=down, $83=left.
- a 32x32 pixel bitmapped display at **$0200-$05ff**, with one byte per pixel. The upper-left pixel is at address $0200, the pixel to the right is $0201, and the first pixel on the second row is $0220. A [reference spreadsheet](https://docs.google.com/spreadsheets/d/1a1-ZZ1opY8xcuUHNxj3YW75dxOPynSuP2-QGSvZGzYY/edit?usp=sharing) shows the row/column to address mapping. The lowest four bits of each byte select one of 16 colours.
    - $0: Black
    - $1: White
    - $2: Red
    - $3: Cyan
    - $4: Purple
    - $5: Green
    - $6: Blue
    - $7: Yellow
    - $8: Orange
    - $9: Brown
    - $a: Light red
    - $b: Dark grey
    - $c: Grey
    - $d: Light green
    - $e: Light blue
    - $f: Light grey
- an 80x25 character display at **\$f000-\$fcff**, with one byte per character. Printable ASCII characters will be displayed. If the high-order bit is set, the character will be shown in  **reverse video** .
- a read-only ROM chip is present at **\$fe00-\$ffff**; see below for details.

The Reset button clears the zero page, bitmap display, and character display, and resets the stack pointer (SP=$ff), program counter (PC=$0600), status register (P=$30), and the general purpose registers (A=X=Y=$00).

Code is assembled starting at $0600 (unless the code changes the location with a `*=address` directive). Memory following the program is reset to $00. A `BRK` instruction ($00) will cause the program to stop and return control to the debugger.

For more details, press the Notes button in the emulator.

## ROM Routines

Many 6502 personal/home computers had the operating system installed in read-only memory (ROM) chips. The emulator has a small ROM chip with these simple input/output (I/O) routines defined:

- SCINIT $ff81 - Initialize and clear the character display
- CHRIN $ffcf - Input one character from keyboard (returns A (that is, the return value will be placed in the Accumulator register))
- CHROUT $ffdw - Outputs one character (A) to the screen at the current cursor position. Screen will wrap/scroll appropriately. Printable characters and cursor codes ($80/$81/$82/$83 for up/right/left/down) as well as RETURN ($0d) are accepted. Printable ASCII codes with the high bit set will be printed in reverse video.
- SCREEN $ffed - Returns the character screen size in the X and Y registers.
- PLOT $fff0 - gets (CARRY=1) or sets (CARRY=0) the cursor position

```assembly
   If C=0: X,Y registers set the cursor position
           Y:A is returned as a pointer to the current screen position 
               (i.e., Y is the high byte and A is the low byte of a pointer
               to the memory address of the current cursor position)

   If C=1: X,Y registers return the current cursor position
           A contains the character at the current cursor location
```

Registers which are not used for input/output are not affected by the ROM routines. The ROM routines use $f0-fd in the zero page for variable storage.

To use the ROM routines, these define directives may be pasted into your code:

```assembly
define		SCINIT		$ff81 ; initialize/clear screen
define		CHRIN		$ffcf ; input character from keyboard
define		CHROUT		$ffd2 ; output character to screen
define		SCREEN		$ffed ; get screen size
define		PLOT		$fff0 ; get/set cursor coordinates
```

You can then access the routines by name using the `JSR` instruction:

```assembly
LDA #$41        ; ASCII code for the letter "A"
JSR CHROUT      ; execute the CHROUT routine (print the character on the screen)
```

**ROM Routine Names:** The ROM routine names and locations pay homage to a famous 6502-based family of computers. Discovering which one is left as an exercise for the reader!

## Example Code

See the [6502 Emulator Example Code](./6502-emulator-example-code.md) page.

## Source Code

The emulator's source code can be found at https://github.com/ctyler/6502js ... Pull Requests are welcome.
