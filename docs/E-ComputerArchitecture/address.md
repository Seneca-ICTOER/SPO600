---
id: address
title: Address
sidebar_position: 2
description: Address
---

# Address

An **address** is the numeric identifier for a memory location. The term may also be used for other storage allocation identifiers -- for example, a **logical block address** on a disk identifies a block or sector on that disk using a unique number.

Each memory location is identified by a unique numeric address. The maximum number of unique memory locations is dictated by the width of the address in bits; for example, a 32-bit address can refer to any of ${2^{32}}$ addresses, limiting memory to 4GB.

Most modern CPUs with a memory management unit (MMU) separate physical memory addresses from virtual memory addresses -- in other words, they can renumber memory. This feature is usually used on a per-process basis by the operating system, to present a different view of memory to each process.

It is not necessary to fully populate the address space -- a computer with a 32-bit address bus may only have 1GB of installed memory. Reading unpopulated memory locations will typically lead to undefined results.

On almost all modern systems, addresses refer to individual bytes within the memory system, but the memory is usually not physically arranged in bytes. See [sub-word and unaligned access](./computer-architecture.md#sub-word-and-unaligned-access) for more information.
