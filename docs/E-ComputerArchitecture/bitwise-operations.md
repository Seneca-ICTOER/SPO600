---
id: bitwise-operations
title: Bitwise Operations
sidebar_position: 7
description: Bitwise Operations
---

# Bitwise Operations

Bitwise Operations are [operations](./operation.md) that are performed [bit-by-bit](./word.md#bit) on one or two operands (input values) to produce an output value.

## Logical Bitwise Operations

Logical bitwise operations are performed by executing a logical operation such as OR, AND, or XOR on operands, processing corresponding bits in each operand. For example, the logical OR operation takes a two-bit input and produces a one-bit output. When applied bitwise to two 32-bit values, a logical OR is performed using bit 0 (the least significant bit) of each of the two operands as input, and the result is stored in bit 0 of the output. Bit 1 of the two operands is processed to produce bit 1 of the output, and so forth.

For most logical bitwise operations, one operand is viewed as the input, and the other operand is viewed as a mask.

**True and False:** True is represented by binary 1, and false is represented by binary 0, in the textual descriptions of logical operations below.

### OR

The _OR_ logical operation takes two inputs, labelled A and B, and produces an output.

Written out as a text description, **OR** means:

```text
If A OR B are true, then the OUTPUT is true.
```

The [truth table](./truth-table.md) looks like this:

| A	| B	| Output |
| --- | --- | --- |
| 0	| 0	| 0 |
| 0	| 1	| 1 |
| 1	| 0	| 1 |
| 1	| 1	| 1 |

This can be reduced to:

| Input	| Mask	| Output |
| --- | --- | --- |
| X	| 0	| X |
| X	| 1	| 1 |

When applied bitwise:

```text
Wherever a 0 appears in the Mask, the corresponding bit in the Input appears unchanged in the Output
Wherever a 1 appears in the Mask, the corresponding bit is a 1 in the Output
```

Therefore the bitwise _OR_ is used to **set bits** to a value of 1.

For example, bits 4:7 can be set to 1 while preserving the remaining bits in a byte by ORing a mask of 11110000 (0xF0):

| | Bit 7	| Bit 6	| Bit 5	| Bit 4	| Bit 3	| Bit 2	| Bit 1	| Bit 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Input	| 0	| 1	| 0	| 1	| **0**	| **1**	| **0**	| **1** |
| Mask	| **1**	| **1**	| **1**	| **1**	| 0	| 0	| 0	| 0 |
| Output	| **1**	| **1**	| **1**	| **1**	| **1**	| **0**	| **1**	| **0** |

### AND

The _AND_ logical operation means:

```text
If A AND B are true, then the OUTPUT is true.
```

The truth table looks like this:

| A	| B	| Output |
| --- | --- | --- |
| 0	| 0	| 0 |
| 0	| 1	| 0 |
| 1	| 0	| 0 |
| 1	| 1	| 1 |

This can be reduced to:

| Input	| Mask	| Output |
| --- | --- | --- |
| X	| 0	| 0 |
| X	| 1	| X |

When applied bitwise:

```text
Wherever a 0 appears in the Mask, the corresponding bit is a 0 in the Output
Wherever a 1 appears in the Mask, the corresponding bit in the Input appears unchanged in the Output
```

Therefore the bitwise _AND_ is used to **clears bits** to a value of 0.

For example, bits 0:3 can be cleared to 0 while preserving the remaining bits in a byte by ANDing a mask of 11110000 (0xF0):

| | Bit 7	| Bit 6	| Bit 5	| Bit 4	| Bit 3	| Bit 2	| Bit 1	| Bit 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Input	| **0**	| **1**	| **0**	| **1**	| 0	| 1	| 0	| 1 |
| Mask	| 1	| 1	| 1	| 1	| **0**	| **0**	| **0**	| **0** |
| Output	| **0**	|	**1**	|	**0**	|	**1**	|	**0**	|	**0**	|	**0**	|	**0** |

### XOR

The XOR (Exclusive OR) logical operation means:

```text
If A AND B are true, but not both, then the OUTPUT is true.
```

The truth table looks like this:

| A	| B	| Output |
| --- | --- | --- |
| 0	| 0	| 0 |
| 0	| 1	| 1 |
| 1	| 0	| 1 |
| 1	| 1	| 0 |

This can be reduced to:

| Input	| Mask	| Output |
| --- | --- | --- |
| X	| 0	| X |
| X	| 1	| !X |

Where !X means "not X" or "X inverted" (0 becomes 1; 1 becomes 0).


When applied bitwise:

```text
Wherever a 0 appears in the Mask, the corresponding bit appears unchanged in the Output
Wherever a 1 appears in the Mask, the corresponding bit in the Input is inverted in the Output
```

Therefore the bitwise XOR is used to **flip (invert) bits** from 0 to 1 and vice-versa.

For example, bits 4:7 can be flipped while preserving the remaining bits in a byte by XORing a mask of 11110000 (0xF0):

| | Bit 7	| Bit 6	| Bit 5	| Bit 4	| Bit 3	| Bit 2	| Bit 1	| Bit 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Input	| **0**	| **1**	| **0**	| **1**	| **0**	| **1**	| **0**	| **1** |
| Mask	| **1**	| **1**	| **1**	| **1**	| 0	| 0	| 0	| 0 |
| Output	| **1**	| **0**	| **1**	| **0**	| **0**	| **1**	| **0**	| **1** |

### NOT

**NOT** is a unary operation which inverts all bits.

```text
The Output is the inverse of the Input.
```

The truth table looks like this:

| A	| Output |
| --- | --- |
| 0	| 1 |
| 1	| 0 |

Bitwise:

| | Bit 7	| Bit 6	| Bit 5	| Bit 4	| Bit 3	| Bit 2	| Bit 1	| Bit 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Input	| **0**	| **1**	| **0**	| **1**	| **0**	| **1**	| **0**	| **1** |
| Output	| **1**	| **0**	| **1**	| **0**	| **1**	| **0**	| **1**	| **0** |

### NAND

**NAND** is an **AND** operation with the output inverted.

### NOR

**NOR** is an **OR** operation with the output inverted.

## Bit shifts and rotates

Bit shift and rotate operations are used to move bits to the left or right within a [word](./word.md).

### Rotate

A rotate operation moves bits right or left. Bits shifted out of the word are moved to the other end.

A rotate-right by 1 bit performed on a byte will move bit 7 to bit 6, bit 6 to bit 5, bit 5 to bit 4, and so forth. Bit 0 will move to bit 7.

A rotate-left by 1 bit performed on a byte will move bit 0 to bit 1, bit 1 to bit 2, bit 2 to bit 3, and so forth. Bit 7 will move to bit 0.

Note that in some processors, a status register bit is included in the rotation, allowing rotates to be strung together in multi-byte sequences.

### Shift

Shift operations are like rotate operations, but bits shifted out of the word are either lost or placed in a processor [flag](./register#status-register), and bits shifted in are either 0 or from a processor flag.

Note that a binary left-shift is equivalent to multiply-by-2, and right-shift is equivalent to divide-by-2.
