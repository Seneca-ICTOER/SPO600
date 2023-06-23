---
id: profile-guided-optimization
title: Profile Guided Optimization
sidebar_position: 16
description: Profile Guided Optimization
---

# Profile Guided Optimization

Profile-Guided Optimization (PGO) is an optimization technique where a performance profile is fed to the compiler to provide optimization information that is not directly evident from the source code, such as branching patterns which are the result of patterns in the input data, frequency of function calls, and number of iterations typically peformed of each loop. This information affects optimizations such as code relocation, inlining, and loop unrolling.

PGO involves these steps:

- A version of the program is built with profiling enabled.
- A representative test run is performed, and profile data is collected.
- The program is re-compiled, with the profile data provided as one of the inputs to the compiler.

Both GCC and LLVM have PGO features. Note that the profiling options, instrumentation, and profile data is not the same as that used with other tools such as gprof.
