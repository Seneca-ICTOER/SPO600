---
id: lab5
title: Lab 5
sidebar_position: 5
description: Lab 5 for Students to Complete and Submit
---

# Algorithm Selection Lab 5

## Purpose of this Lab

In this lab, you will investigate the impact of different algorithms which produce the same effect.

## x86_64 and AArch64 Systems

This lab must be performed on both x86_64 and AArch64 systems. You may use the [SPO600 Servers](/D-ExtraResources/servers.md) or you may use other system(s) -- it might make sense to use your own x86_64 system and [israel.cdot.systems](/D-ExtraResources/servers.md#aarch64-israelcdotsystems) for AArch64.

## Lab Instructions

### Background

- Digital sound is typically represented, uncompressed, as signed 16-bit integer signal samples. There are two streams of samples, one each for the left and right stereo channels, at typical sample rates of 44.1 or 48 thousand samples (kHz)per second per channel, for a total of 88.2 or 96 thousand samples per second. Since there are 16 bits (2 bytes) per sample, the data rate is 88.2 \* 1000 \* 2 = 176,400 bytes/second (~172 KiB/sec) or 96 \* 1000 \* 2 = 192,000 bytes/second (~187.5 KiB/sec).
- To change the volume of sound, each sample can be scaled (multiplied) by a volume factor, in the range of 0.00 (silence) to 1.00 (full volume).
- On a mobile device, the amount of processing required to scale sound will affect battery life.

### Multiple Approaches

Six programs are provided, each with a different approach to the problem, named `vol0.c` through `vol5.c`. A header file, `vol.h`, defines how much data (in number of sample) will be processed by each program, as well as the volume level to be used for scaling (50%).

These are the six programs:

1. vol0.c is the basic or naive algorithm. This approach multiplies each sound sample by the volume scaling factor, casting from signed 16-bit integer to floating point and back again. Casting between integer and floating point can be expensive (ADD LINK) operations.
2. vol1.c does the math using fixed-point calculations. This avoids the overhead of casting between integer and floating point and back again.
3. vol2.c pre-calculates all 65536 different results, and then looks up the answer for each input value.
4. vol3.c is a dummy program - it doesn't scale the volume at all. It can be used to determine some of the overhead of the rest of the processing (besides scaling the volume) done by the other programs.
5. vol4.c uses Single Instruction, Multiple Data (SIMD) instructions accessed through inline assembley (assembly language code inserted into a C program). This program is specific to the AArch64 architecture and will not build for x86\_64.
6. vol5.c uses SIMD instructions accessed through Complier Intrinsics. This program is also specific to AArch64.

**Note that vol4.c and vol5.c will build only on AArch64 systems because they use architecture-specific SIMD instructions.**

### Don't Compare Across Machines

In this lab, _do not_ compare the relative performance across different machines, because various systems have different microarchitectures, memory configurations, peripheral implementations, and clock speeds, from mobile-class to server-class (e.g. Intel Atom vs. Xeon; AMD APU vs. Threadripper; ARM Cortex-A55 vs. Neoverse-V2).

However, _do_ compare the relative performance of the various algorithms on the _same_ machine.

### Important!

The hardest part of this lab, and the most critical component, is being able to separate the performance of the volume scaling code from the rest of the code (which only exists to set up the test of the scaling code). The volume scaling code runs _very_ quickly, and is dwarfed by the rest of the code.

You **must**:

- Control variables in your test environment.
  - What else is the machine doing while you are testing?
  - Who else is logged in to the machine?
  - What background operations are being performed?
  - How does your login on the machine affect performance (e.g., network activity)?
- **Isolate the performance of the volume scaling code**. This is one of the most important parts of this lab! There are two practical approaches:
  - Subtract the performance of the dummy version of the program from each of the other versions, or
  - Add code to the program to measure and report just the performance of the volume-scaling code
- Repeat the tests multiple times to ensure that the results you are getting are consistent, valid, and accurately reflect the performance of the volume scaling code.
  - Make sure you are performing enough calculation to give a useful result -- adjust the SAMPLES value in `vol.h` to a sufficiently high value
  - Discard outliers (unusually high or low results)
  - Average the results.
  - Take some measure of the amount of variation of your results (e.g., tolerance limits or standard deviation).
 
### Resources

- ARM Aarch64 documentation
  - [ARM Developer Information Centre](http://developer.arm.com/)
    - [ARM Cortex-A Series Programmer’s Guide for ARMv8-A](https://developer.arm.com/docs/den0024/latest)
    - The short guide to the ARMv8 instruction set: [ARMv8 Instruction Set Overview](https://www.element14.com/community/servlet/JiveServlet/previewBody/41836-102-1-229511/ARM.Reference_Manual.pdf) ("ARM ISA Overview")
    - The long guide to the ARMv8 instruction set: [ARM Architecture Reference Manual ARMv8, for ARMv8-A architecture profile](https://developer.arm.com/docs/ddi0487/latest/arm-architecture-reference-manual-armv8-for-armv8-a-architecture-profile) ("ARM ARM")
  - [Procedure Call Standard for the ARM 64-bit Architecture (AArch64)](https://developer.arm.com/docs/ihi0055/latest/procedure-call-standard-for-the-arm-64-bit-architecture)
- x86_64 Documentation
  - AMD: https://developer.amd.com/resources/developer-guides-manuals/ (see the AMD64 Architecture section, particularly the AMD64 Architecture Programmer’s Manual Volume 3: General Purpose and System Instructions)
  - Intel: http://www.intel.com/content/www/us/en/processors/architectures-software-developer-manuals.html
  - Web sites
    - http://ref.x86asm.net/
    - http://sandpile.org/
- Assembler and Inline Assembler
  - [Assembler Basics](/F-AssemblyLanguage/assembler-basics.md)
  - [Inline Assembly Language](/F-AssemblyLanguage/inline-assembly-language.md)
  - GAS Manual - Using as, The GNU Assembler: https://sourceware.org/binutils/docs/as/
    - Specifically, the [Assembler Instructions with C Expression Operands](http://gcc.gnu.org/onlinedocs/gcc-4.8.2/gcc/Extended-Asm.html) section
   
## Benchmarking

Get the files for this lab from one of the [SPO600 Servers](/D-ExtraResources/servers.md) -- but you can perform the lab wherever you want (feel free to use your laptop or home system). Test on both an x86\_64 and an AArch64 system.

The files for this lab are in the archive `/public/spo600-volume-examples.tgz` on each of the SPO600 servers. The archive contains:

- `vol.h` controls the number of samples to be processed and the volume level to be used
- `vol0.c` through `vol5.c` implement the various algorithms
- `vol_createsample.c` contains a function to create dummy samples
- The `Makefile` can be used to build the programs

Perform these steps **on both x86_64 and AArch64 systems**:

1. Unpack the archive `/public/spo600-volume-examples.tgz`
2. Study each of the source code files and make sure that you understand what the code is doing.
3. **Make a prediction** of the relative performance of each scaling algorithm.
4. Build and test each of the programs.
    - Do all of the algorithms produce the same output?
        - How can you verify this?
        - If there is a difference, is it significant enough to matter?
    - Change the number of samples so that each program takes a reasonable amount of time to execute (suggested minimum is 20 seconds).
5. Test the performance of each program (vol0 through vol3 on x86\_64, and vol0 through vol5 on AArch64)
    - Find a way to measure performance without the time taken to perform the test setup pre-processing (generating the samples) and post-processing (summing the results) so that you can measure _only_ the time taken to scale the samples. **This is the hard part!**
    - How much time is spent scaling the sound samples?
    - Do multiple runs take the same time? How much variation do you observe? What is the likely cause of this variation?
    - Is there any difference in the results produced by the various algorithms?
    - Does the difference between the algorithms vary depending on the architecture and implementation on which you test?
    - What is the relative memory usage of each program?
6. See if you can measurably increase performance by changing the compiler option (via the Makefile)
7. Was your prediction about performance accurate?
8. Find all of the questions, marked with `Q:`, in the program comments, and answer those questions.

### Deliverables

Blog about your experiments with a detailed analysis of your results, including memory usage, performance, accuracy, and trade-offs. Include answers to all of the questions marked with Q: in the source code.

**Make sure you convincingly prove your results to your reader!** Re-read the [section marked Important above](#important) and make sure you address the issues explained there. Also be sure to explain what you're doing so that a reader coming across your blog post understands the context (in other words, don't just jump into a discussion of optimization results -- give your post some context).

**Optional - Recommended**: Compare results across several **implementations** of AArch64 and x86\_64 systems. Note that on different CPU implementations, the relative performance of different algorithms will vary; for example, table lookup may outperform other algorithms on a system with a fast memory system (cache), but not on a system with a slower memory system.

- For AArch64, you could compare the performance on AArchie against a Raspberry Pi 4 (in 64-bit mode) or an ARM Chromebook.
- For x86\_64, you could compare the performance of different processors, such as portugal.cdot.systems, your own laptop or desktop, and Seneca systems such as Matrix or lab desktops.

### Things to consider

**Design of Your Tests**

- Most solutions for a problem of this type involve generating a large amount of data in an array, processing that array using the function being evaluated, and then storing that data back into an array. The test setup can take more time than the actual test! Make sure that you measure the time taken for the code in question (the part that scales the sound samples) ONLY -- you need to be able to remove the rest of the processing time from your evaluation.
- You may need to run a massive large amount of sample data through the function to be able to detect its performance.
- If you do not use the output from your calculation (e.g., do something with the output array), the compiler may recognize that, and remove the code you're trying to test. Be sure to process the results in some way so that the optimizer preserves the code you want to test. It is a good idea to calculate some sort of verification value to ensure that both approaches generate the same results.
- Be aware of what other tasks the system is handling during your test run, including software running on behalf of other users.

### Tips

**Analysis**

Do a thorough analysis of the results. Be certain (and prove!) that your performance measurement does not include the generation or summarization of the test data. Do multiple runs and discard the outliers. Decide whether to use mean, minimum, or maximum time values from the multiple runs, and explain why you made that decision. Control your variables well. Show relative performance as percentage change, e.g., "this approach was NN% faster than that approach".

**Time and Memory Usage of a Program**

You can get basic timing information for a program by running `time programName` -- the output will show the total time taken (real), the amount of CPU time used to run the application (user), and the amount of CPU time used by the operating system on behalf of the application (system). The version of the `time` command located in `/bin/time` gives slightly different information than the version built in to bash -- including maximum resident memory usage: `/bin/time ./programName`

**SOX**

If you want to try this with actual sound samples, you can convert a sound file of your choice to raw 16-bit signed integer PCM data using the [sox](http://sox.sourceforge.net/) utility present on most Linux systems and available for a wide range of platforms.

**stdint.h**

The `stdint.h` header provides definitions for many specialized integer size types. Use `int16_t` for 16-bit signed integers and `uint16_t` for 16-bit unsigned integers.

**Scripting**

Use bash scripting capabilities to reduce tedious manual steps!
