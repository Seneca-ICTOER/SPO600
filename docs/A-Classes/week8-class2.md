---
id: week8-class2
title: Week 8 - Class 2
sidebar_position: 16
description: Week 8 - Class 2
---

# Week 8 - Class II

## Scalable Vector Extensions (SVE/SVE2) via Inline Assembler and C Intrinsics

## Video

- [SVE & SVE2 - Edited Summary Video](https://web.microsoftstream.com/video/a6b892e4-b408-4bc7-9fc1-d78e4efb8e0e)

## Reading

- [SVE2](/H-ARM/sve2.md)

## SVE2 Demonstration

- Code available here: https://github.com/ctyler/sve2-test
  - You can clone this to israel.cdot.systems with: `git clone https://github.com/ctyler/sve2-test.git`
- This is an implementation of a very simple program which takes an image file, adjusts the red/green/blue channels of that file, and then writes an output file. Each channel is adjusted by a factor in the range 0.0 to 2.0 (with saturation).
- The image adjustment is performed in the function `adjust_channels()` in the file `adjust_channels.c`. There are three implementations:
  1. A basic (naive) implementation in C. Although this is a very basic implementation, it is potentially subject to autovectorization.
  2. An implementation using inline assembler for SVE2 with strucure loads.
  3. An implementation using inline assembler for SVE2 with an interleaved factor table.
  4. An implementation using ACLE compile intrinsics.
- The implementation built is dependent on the value of the ADJUST\_CHANNEL\_IMPLEMENTATION macro.
- The provided Makefile will build four versions of the binary -- one using each of the four implementations -- and it will run through 3 tests with each binary. The tests use the input image file `tests/input/bree.jpg` (a picture of a cat) and place the output in the files `tests/output/bree[1234][abc].jpg`. The output files are processed with adjustment factors of 0.5/0.5/0.5, 1.0/1.0/1.0, and 2.0/2.0/2.0.
- **Please examine, build, and test the code, compare the implementations, and note how it works - there are extensive comments in the code, especially for implementation 2.**
- Your observations about the code might make a good blog post!
