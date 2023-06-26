---
id: endian
title: Endian
sidebar_position: 13
description: Endian
---

# Endian

The _Endian_-ism of a processor refers to the order in which multi-byte values are stored in memory.

## Little-Endian

Little-endian systems store the least-significant byte of a multi-byte value at the lowest address.

For example, on 6502 systems (with a 8 bit/1 byte word size), the 16-bit value $FFEE stored at address $1000 would be stored like this:

```assembly
$1000 $EE
$1001 $FF
```

Likewise, on an x86_64 system, the 64-bit value 0xFFEEDDCCBBAA9988 would be stored at memory location 0x1000 like this:

```assembly
0x1000 0x88
0x1001 0x99
0x1002 0xAA
0x1003 0xBB
0x1004 0xCC
0x1005 0xDD
0x1006 0xEE
0x1007 0xFF
```

## Big-Endian

Big-endian systems store multi-byte values with the most significant byte at the lowest address.

For example, on a Motorola 68030 CPU, the value 0xFFEEDDCC would be written at memory location 0x1000 as:

```assembly
0x1000 0xFF
0x1001 0xEE
0x1002 0xDD
0x1003 0xCC
```

## Bi-endian

Bi-endian CPUs can store data in either format (though sometimes not instructions). ARM [AArch32](/H-ARM/arm-v8.md) and [AArch64](/H-ARM/arm-v8.md) systems, PowerPC, Alpha, recent SPARC, MIPS, and Itanium systems are bi-endian.

## Other Memory Sequences

There are a few, rare architectures which store values in a sequence other than strict little-endian or big-endian format. For example, the 32-bit value FFEEDDCCh would be stored by a PDP-11 at address 1000h in this manner:

```assembly
1000h EEh
1001h FFh
1002h CCh
1003h DDh
```

That is, each 16-bit word is stored in little-endian format, but the two 16-bit words are in big-endian sequence.

## Significance of Byte Order

Byte order can introduce ambiguity and complexity when transferring binary data between dissimilar systems; in network protocols and file specifications, it is critical to specify the order of multi-byte values. Some platform-independent remote procedure call (RPC) systems provide functions to ensure that data is always represented "on the wire" in a particular byte order.

Byte order can be significant for performance in some contexts. The 6502 processor, for example, loads the byte following an [opcode](./opcode.md) in memory while the opcode is being decoded. Due to little-endian encoding, this byte can be safely assumed to represent bit positions 0-7 regardless of whether the opcode's argument is 1 byte or 2 bytes; if big-endian encoding was used, the first byte read after the opcode might have to be shifted to bit positions 8-15 in the case of a 2-byte argument.

Binary fields in internet protocol (IP) packets are in big-endian order. For this reason, the processors on many routers and other high-speed network devices are big-endian (e.g., MIPS) or run in big-endian order (ARM).

## Origin of the Terms

The terms Big-Endian and Little-Endian originally appeared in the classic satirical tale [Gulliver's Travels](https://www.gutenberg.org/files/829/829-h/829-h.htm) by Jonathan Swift, where they referred to which end of a boiled egg was to be opened first -- a distinction which led to ongoing conflict between small-minded people.
