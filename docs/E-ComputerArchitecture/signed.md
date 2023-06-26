---
id: signed
title: Signed
sidebar_position: 27
description: Signed
---

# Signed

A _signed_ value is a binary value with a positive/negative _sign_. Alternatively, an unsigned number can represent positive (or zero) values only.

Some number representations allow for both positive and negative zero values.

## Two's Compliment

In two's compliment integer representation, positive integer values are represented by the binary representation of the integer, and negative integer values are represented by the **two's compliment** of the absolute integer value -- effectively, (${2^{width}}$-abs(**n**)), where **width** is the word size in bits, and **n** is the integer being represented.

Example: A single unsigned [byte](./word.md#byte) (8 bits) stores an integer value in the range of 0 to (2^8 - 1 =) 255. If the byte is treated as a signed value, then values from 0-127 (0x00-0x7F) are treated as the positive integers 0-127, and the values 128-255 (0x80-0xFF) are treated as negative integers -128 to -1.

Notice that in two's compliment representation, the highest-order bit is the sign bit: 0 == positive, 1 == negative.

Signed address offsets are often used for relative [addressing modes](./addressing-mode.md).

## BCD

In signed [BCD](./bcd.md), the high-order nibble is used to represent the sign (0 == positive, non-0 == negative).
