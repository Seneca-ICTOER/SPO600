---
id: lab3
title: Lab 3
sidebar_position: 3
description: Lab 3 for Students to Complete and Submit
---

# 6502 Math and Strings Lab 3

## Purpose of this Lab

In this lab, you will write code with arithmetic/math and strings in [6502](/G-6502/6502.md) assembly language, including text output, graphical output, and keyboard input, in preparation for learning more complex x86_64 and AArch64 assembly language.

## Resources

- [6502](/G-6502/6502.md)
- [6502 Emulator](/G-6502/6502-emulator.md)
- [6502 Math](/G-6502/6502-math.md)
- [6502 Jumps, Branches, and Procedures](/G-6502/6502-jumps-branches-and-procedures.md)
- [6502 Emulator Example Code](/G-6502/6502-emulator-example-code.md) - Specifically:
  - [Place a Graphic on the Screen](/G-6502/6502-emulator-example-code.md#place-a-graphic-on-the-screen) - for an example of defining a graphic using DCB, and copying a graphic to the screen
  - [Etch-a-Sketch Style Drawing](/G-6502/6502-emulator-example-code.md#etch-a-sketchtm-style-drawing) - for an example of converting (ROW,COL) co-ordinates to a screen address, and reading the keyboard
- [6502js-code](https://github.com/ctyler/6502js-code/) repo on GitHub - Specifically:
  - Wordle-like example (wordle-6502)
- [8x8 Bitmap Patterns for Digits](/G-6502/8x8-bitmap-patterns-for-digits.md)
- Opcode/Instruction References
  - [6502 Opcodes with Register Definitions](http://www.6502.org/tutorials/6502opcodes.html)
  - [6502 Opcodes with Detailed Operation Information](https://www.masswerk.at/6502/6502_instruction_set.html)

## Techniques

- Bouncing Object
  - To bounce an object around the screen:
    - Use two variables for deltaX and deltaY values -- the amount that the object will move in each direction for each update. Add these values to the X,Y position of the object on the screen each time you update the position.
      - These values can simply be -1 or +1 if the object is going to bounce at 45-degree angles.
      - These values will need to include a fractional component for angles other than 45 degrees. This can be handled by using two bytes for each element of the X,Y position and for the deltaX and deltaY values, where one byte represents the integer portion and one byte represents the fractional portion (fixed-point representation).
  - Detect when the object has collided with the edge of the screen or other objects, and reverse the sign of the deltaX or deltaY value (or both). For example, when bouncing off the top or bottom of the display, set `deltaY = -deltaY`
- Keyboard
  - Access the keyboard using the CHRIN [ROM routine](/G-6502/6502-emulator.md#rom-routines).
- Random number generator
  - A random byte is available at memory location $FE.
- Drawing a Line
  - To draw a line between two arbitrary points (${X_1}$, ${Y_1}$)(${X_2}$, ${Y_2}$) where ${X_2-X_1}$ > ${Y_2-Y_1}$ and all coordinates are positive, calculate the rise/run, then set ${Y=Y_1}$ and iterate for ${X=X_1:X_2}$ incrementing Y by the rise/run each step.
  - Do something similar with run/rise where ${X_2-X_1 < Y_2-Y_1}$
  - Suggestion: Use fixed-point math for the rise/run (aka deltaY) value.
 
## Lab Instructions

### Decide What to Write

For this lab, write a program that meets these criteria:

1. Your program must work in the [6502 Emulator](/G-6502/6502-emulator.md)
2. You must output to the character screen as well as the graphics (bitmapped) screen.
3. You must accept user input from the keyboard in some form.
4. You must use some arithmetic/math instructions (to add, subtract, do bitwise operations, or rotate/shift)

For example, you could write a simple game:

- [Pong](https://en.wikipedia.org/wiki/Pong)
- [Breakout](https://en.wikipedia.org/wiki/Breakout_(video_game))
- [Mastermind](https://en.wikipedia.org/wiki/Mastermind_(board_game))
- A drawing program
- A maze
- A number guessing game (try to guess a random number in the shortest number of tries, getting feedback of "too high" or "too low" for each wrong guess)
- Or any other type of game...

Or a calculator/converter:

- An adding or subtracting calculator
- A decimal-to-binary or hexidecimal-to-decimal converter
- A inches-and-feet to centimeter converter
- A [resistor colour band](https://en.wikipedia.org/wiki/Electronic_color_code) calculator
- A program to draw bar or line graphs based on user input
- Or any other type of calculator or converter...

**Or anything else that meets the criteria above**

You can interact with the user using either display. For example:

- The main interaction could be on the graphical display, and instructions could be printed on the text display (which keys to use to move, for example); or
- The main interaction could be on the text display, and an appropriate pattern could be shown on the bitmap display (for example, a version of Wordle could display the words on the text display and the scoring of the guesses on the graphical display), or a calculator could use the text display for input and show a binary representation or a colour code on the graphical display (such as green for positive numbers, yellow for negative numbers, red for bad input).

**Keep it very simple!:** Assembly language is hard. Choose something SUPER simple - you can always add features!

### Write it!

Write the code for your selected program in the [6502 Emulator](/G-6502/6502-emulator.md).

It can be helpful and fun to write this code with one or two other people in a live session. Acknowledge each person's input, and add your own customizations or tweaks.

**Acknowledge Other's Code:** Feel free to incorporate other people's code into your program with their permission, but you _must_ acknowledge the source of any incorporated code (include a link to the source(s)), and clearly identify which parts you wrote (recommendation: colour-code your portion in the blog post). You must write at least 25% of the code.

### Blog it

Write up your adventures in your blog. Remember to include the source code, some narrative about how it went, perhaps a screenshot of the program running, a reflection on the experience, and some ideas for further enhancement of the program.

Ensure that your program works and is free from major bugs. Document any limitations or remaining minor bugs.

Make sure that others (including your prof!) can run you code by pasting it into the [emulator](/G-6502/6502-emulator.md) or loading it from a file (e.g., public git repository or downloadable file).

Remember to follow the [Blog Guidelines](/D-ExtraResources/blog-guidelines.md) as you write.

### Examples

For some examples of games and demos, take a look at the http://6502asm.com/ website - which uses an earlier version of the 6502 emulator. The Examples selector on that page has some interesting code. You can copy-and-paste any of those examples into the SPO600 [6502 Emulator](/G-6502/6502-emulator.md) at http://6502.cdot.systems/
