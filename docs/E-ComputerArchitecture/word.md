---
id: word
title: Word
sidebar_position: 31
description: Word
---

# Word

A word is a set number of bits managed as a unit.

## Hardware Word

A _hardware word_ is the group of bits normally managed by a processor. The word size is a distinguishing feature of a processor, and is typically a power-of-two multiple of eight bits (8, 16, 32, or 64 bits), although some rare or early processors used different word sizes.

The word size is usually associated with the size of general-purpose [registers](./register.md) and the amount of data read from or written to memory at one time. Most modern processors can read/write alternate word sizes (for example, a "64-bit" x86_64 system can also read/write 32, 16, and 8 bit values to/from memory, and 64-bit registers can be accessed as 32, 16, or 8-bit subsets). Additionally, many modern systems use a different memory word size than CPU word size (for example, a "64-bit" system may be built to read/write memory 128 bits at a time), but this is transparent to the programmer and user.

## Common Names for Various Word Sizes

### Bit

A bit is a single _binary digit_, a value that can take one of two states. These states may be referred to as:

- 1 or 0
- True or False
- On or Off (electrically)
- Positive or Negative charge, or Forward or Reverse current flow (electrically - differential signalling)

### Byte

A byte is a collection of eight **bits**. It is a convenient size for use with many small character sets such as [ASCII](http://czyborra.com/charsets/iso646.html), [ISO8859](http://czyborra.com/charsets/iso8859.html), and [EBCDIC](http://czyborra.com/charsets/iso646.html#EBCDIC), and can also be used with the [UTF-8](http://czyborra.com/utf/#UTF-8) encoding of Unicode. It is often viewed as the smallest hardware word size that makes sense for general-purpose computing.

Most computers with larger hardware word sizes continue to rank memory, storage, and data sizes in bytes (or prefixed multiples of bytes) for comparability. For example, an x86_64 system will be advertised as having "16 gigabytes" of memory instead of "2 gigawords".

### Octet

Another name for [byte](./word.md#byte), commonly used in telecommunication standards and in French.

### Nibble

A nibble (or nybble) is a half-byte, corresponding to one hexadecimal or BCD digit.

### Half word, Single word, Double word, Quad word

The terms half word (or halfword or half-word), single word, double word, and quad word are often used in contemporary computing to refer to common word sizes relative to a 32-bit base word size:

- half word = 16 bits
- single word = 32 bits
- double word = 64 bits
- quad word = 128 bits

This terminology can be seen, for example, in the lane naming conventions for AArch64 SIMD (where `v0.8h` refers to the 128-bit vector register 0 divided in eight half word lanes) and x86_86 instruction suffixes (MOVQ to move a quad word).

The 32-bit base size is reflective of the 32-bit standard integer size used in the predominant LP64 (and less common ILP32) programming models.
