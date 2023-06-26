---
id: instruction-encoding
title: Instruction Encoding
sidebar_position: 18
description: Instruction Encoding
---

# Instruction Encoding

The encoding of instructions, which is a key aspect of an [Instruction Set Architecture](./instruction-set-architecture.md), defines how instuctions and arguments are encoded as binary values in the [machine code](./machine-language.md) of a system.

Some architectures encode instructions as multi-byte sequences, where one or more bytes specify the operation to be performed and the [addressing mode(s)](./addressing-mode.md) to be used, and additional bytes specify the operands (such as the register numbers, immediate values, addresses, or offsets to be used). Other architectures encode instructions as fixed-length bitfields, where various (and varying) subfields within the bitfield specify the operation, addressing mode(s), and operands.

The 6502 architecture uses variable-length byte sequences, from 1 to 3 bytes (including the [opcode](./opcode.md)) depending on the [addressing mode](./addressing-mode.md).

The x86_64 architecture uses variable-length byte sequences, from 1 to approximately 17 bytes.

The AArch64 architecture uses 32-bit long instructions. Since this instruction length is insufficient to adequately contain a 64-bit operand (such as an address), some operands are encoded using run-length encoding (RLE) or shifted-bitfield techniques. For certain operand values, it may be necessary to build the required value in a register with a few instructions.
