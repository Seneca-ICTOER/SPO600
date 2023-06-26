---
id: bcd
title: BCD
sidebar_position: 6
description: BCD
---

# BCD

_Binary coded decimal_ is a binary representation of decimal numbers where each [nibble](./word.md#nibble) (4 bits) in a [word](./word.md) represents a separate decimal digit.

For example, in BCD, the value 128 would be represented in a 16-bit value as:

```text
Binary:    0 0 0 0     0 0 0 1      0 0 1 0     1 0 0 0
Decimal:         0           1            2           8
```

(Note that, in traditional binary integer representation, the same binary number represents the decimal value 296).

In [signed](./signed.md) BCD values, the highest-order nibble is usually used to hold the sign (0 for positive, non-0 for negative).

BCD is extensively used on IBM midrange and mainframe systems. Extended Binary Coded Decimal Interchange Code (EBCDIC) is a character encoding based on BCD used as an alternative to ASCII.

BCD is also used in some accounting programs, to avoid errors that can be introduced through the use of floating-point math.

Some microcomputer CPUs, such as the [6502](/G-6502/6502.md), support a BCD math mode.
