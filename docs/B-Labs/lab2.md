---
id: lab2
title: Lab 2
sidebar_position: 2
description: Lab 2 for Students to Complete and Submit
---

# 6502 Assembly Language Lab 2

## Purpose of this Lab

In this lab, you will learn some of the basics of 6502 (ADD LINK) assembly language, in preparation for learning more complex x86_64 and AArch64 assembly language.

## Resources

- 6502 (ADD LINK) Page
- 6502 Emulator (ADD LINK)
- Assembler Basics (ADD LINK)
- 6502 Emulator Example Code (ADD LINK)
- Opcode/Instruction References
  - On this Site
    - 6502 Instructions - Introduction (ADD LINK)
    - 6502 Addressing Modes (ADD LINK)
  - External
    - [6502 Opcodes with Register Definitions](http://www.6502.org/tutorials/6502opcodes.html)
    - [6502 Opcodes with Detailed Operation Information](https://www.masswerk.at/6502/6502_instruction_set.html)
- [Spreadsheet of bitmapped display memory locations](https://docs.google.com/spreadsheets/d/1a1-ZZ1opY8xcuUHNxj3YW75dxOPynSuP2-QGSvZGzYY/edit?usp=sharing)

## Lab Instructions

### Setup

1. Open the 6502 Emulator (ADD LINK) at http://6502.cdot.systems in another tab or window, keeping this lab open.

**Save Your Work:** The emulator **does not** save your work automatically. Remember to periodically save it to a file (copy-and-paste the code or use the `Save` button to create local files). Recommendation: save your files to a directory, and use [git](https://git-scm.com/) to manage that directory.

### Bitmap Code

2. The following code fills the emulator's bitmapped display with the colour yellow. Paste this code into the emulator:

```assembly
	lda #$00	; set a pointer in memory location $40 to point to $0200
	sta $40		; ... low byte ($00) goes in address $40
	lda #$02	
	sta $41		; ... high byte ($02) goes into address $41

	lda #$07	; colour number

	ldy #$00	; set index to 0

loop:	sta ($40),y	; set pixel colour at the address (pointer)+Y

	iny		; increment index
	bne loop	; continue until done the page (256 pixels)

	inc $41		; increment the page
	ldx $41		; get the current page number
	cpx #$06	; compare with 6
	bne loop	; continue until done all pages
```

3. Test the code by pressing the Assemble button, then the Run button. If the there are any errors assembling (compiling) the code, they will appear in the message area at the bottom of the page. Make sure the code is running correctly and that you understands how it works. Don't be afraid to experiment!

### Calculating Performance

4. Calculate how long it takes for the code to execute, assuming a 1 MHz clock speed (Watch [this video](https://web.microsoftstream.com/video/ed7aedf1-fe6f-4b72-bbf1-c9b4e6e80af9) if you would like a refresher on how to do this). Also calculate the total memory usage for the program plus any pointers or variables.
5. Consider ways to decrease the time taken to fill the screen with a solid colour. Calculate the execution time of the fastest version of this program that you can create. Challenge: the fastest version of this program is more than twice as fast as the original version shown above!

### Modifying the Code

6. Change the code to fill the display with light blue instead of yellow. (Tip: you can find the colour codes on the 6502 Emulator (ADD LINK) page).
7. Change the code to fill the display with a different colour on each page (each "page" will be one-quarter of the bitmapped display).

### Experiments (Optional, Recommended)

Go back to the bitmap code above, and try these experiments:

1. Add this instruction after the `loop:` label and before the `sta ($40),y` instruction: `tya`
2. What visual effect does this cause, and how many colours are on the screen? Why?
3. Add this instruction after the `tya`: `lsr`
4. What visual effect does this cause, and how many colours are on the screen? Why?
5. Repeat the above tests with two, three, four, and five `lsr` instructions in a row. Describe and explain the effect in each case.
6. Repeat the tests using `asl` instructions instead of `lsr` instructions. Describe and explain the effect in each case.
7. Revert to the original code.
8. The original code includes one `iny` instruction. Test with one to five consecutive `iny` instructions. Describe and explain the effect in each case. **Note**: it is helpful to place the Speed slider is on its lowest setting (left) for these experiments.
9. Revert to the original code.
10. Make each pixel a random colour. (Hint: use the psudo-random number generator mentioned on the 6502 Emulator (ADD LINK) page).

### Challenges (Optional, Recommended)

1. Set all of the display pixels to the same colour, except for the middle four pixels, which will be drawn in another colour.
2. Write a program which draws lines around the edge of the display:
    - A red line across the top
    - A green line across the bottom
    - A blue line across the right side.
    - A purple line across the left size.
  
### Write-Up

Post an entry on your blog describing your experiments in this lab. Follow the Blog Guidelines (ADD LINK). Include code as text (and not screenshots), but feel free to include screenshots of the bitmapped display.

Include in your blog post:

1. An introduction, so that someone who happens across your blog will understand the context of what you're writing about.
2. The results from the _Calculating Performance_ and _Modifying Code_ portions of the lab, including the code, a description of how the code works, and the results produced.
3. The results of the Optional sections, if you performed them, and your explaination for each observed result.
4. Your experiences with this lab -- your impressions of Assembly Language, what you learned, and your reflections on the process.

Remember that labs are marked on a scale of 0-3:

- 0 - Lab not completed, or significant errors.
- 1 - Very basic completion, or some small errors.
- 2 - Satisfactory completion of the lab.
- 3 - Lab completed with additional experiments, investigation, research, or explanation. For example, you could do some of the optional sections in this lab, and include those in your blog writeup -- or you could create your own experiments.

Remember to follow the Blog Guidelines (ADD LINK) as you write.
