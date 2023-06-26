---
id: week12-class2
title: Week 12 - Class 2
sidebar_position: 24
description: Week 12 - Class 2
---

# Week 12 - Class II

## Step-by-Step Project Minimum Requirements

## Video

- [Summary Video](https://web.microsoftstream.com/video/fcc73002-b59c-4bc7-b0e6-c73706b492e8) - Step-by-Step discussion of the minimum requirements for a successful project

## Minimum Requirements for a Successful Project

- Remember: This project is about building a _tool_ that processes C source code. The tool itself can be in any suitable computer language. It is recommended that you use a language that can manipulate text easily. The tool will receive an input file containing a C function. The tool will output a modified file(s) with ifunc capability for asimd/sve/sve2 computers.
- Requirements for a minimum implementation:
  1. Find the protype and function name by analyzing the C function.
      - Example name: `adjust_channels`
      - Example prototype: `void adjust_channels(unsigned char *image,int x_size,int y_size,float red_factor,float green_factor,float blue_factor);`
      - Hint/suggestion: compiling the function file with the `-S` option will produce an assembly-language output file. You can parse this file for lines like `.type adjust_channels, %function` to find the function name(s).
      - Hint/suggestion #2: the `makeheaders` utility can produce a header file from an C source code input file. It is easier to find the function prototypes in the header file than in the C source file.
  2. Place the prototype into the output file, adding the ifunc atttribute and resolver name. This produces the indirect function.
      - Example indirect function: `__attribute__ (( ifunc("name_of_resolver_function") )) void adjust_channels(unsigned char *image,int x_size,int y_size,float red_factor,float green_factor,float blue_factor);`
  3. Repeat these next two steps three times, once for each target (see the table below)
      1. Place a GCC pragma directive into the output file to select one of the three targets: `#pragma GCC target arch="put the target architecture string here"`
      2. Paste in the function, changing the function name so that the various versions don't conflict. For example, you could append a suffix identifying the architecture target, changing the function name `adjust_channels` to something like `adjust_channels_sve`.
          - Tip: After the last function, add a pragma to switch the compiler back to targeting basic `armv8-a`
  4. Add the resolver function, being sure to include the header file `<sys/auxv.h>` so that we can access the auxilliary vector (and therefore the description of available hardware capabilities).

```c
static void (*name_of_resolver_function(void)) {
        long hwcaps  = getauxval(AT_HWCAP);
        long hwcaps2 = getauxval(AT_HWCAP2);

        printf("\n### Resolver function - selecting the implementation to use for  foo()\n");
        if (hwcaps2 & HWCAP2_SVE2) {
                return adjust_channels_sve2;
        } else if (hwcaps & HWCAP_SVE) {
                return adjust_channels_sve;
        } else {
                return adjust_channels_asimd;
        }
};
```

  5. Build the software using the output file in place of the input file.
  6. Test it thoroughly! Use your tool and compile the output. Look at the final binary to check for asimd/sve/sve2 code, and make sure the program runs in both contexts (run the binary directly to test it in asimd mode, and use the qemu-aarch64 tool to run the binary in sve2 mode).
  7. Write it up in one or more blog posts.
    - The mark assigned will depend on:
      - The quality of the implementation - For example, does it accept various input files and process them correctly? Are the output files reliably usable? Is the tool user-friendly?
      - The amount and quality of the testing - For example, have you demonstrated that the tool works correctly? Can you show the asimd, sve, and sve2 code in the compiled binary?
      - The quality of the writing - For example, have you fully explained the code? Have you documented how to use your tool with clear, step-by-step instructions? Is the code provided in a form that makes it easy to test?
      - If the basic operation of the program is good, bonus marks may be assigned for additional features and for overcoming the (permitted) limitations. See the project page for details.

## Build Targets

These are the build targets:

| Name	| Abbreviation	| Typical GCC Target String	| Description |
| --- | --- | --- | --- |
| Advanced SIMD	|	asimd	|	armv8-a	|	Basic "Advanced SIMD" implementation present in all aarch64 systems. Fixed-length 128-bit SIMD implementation. |
| Scalable Vector Extensions	|	sve	|	armv8-a+sve	|	Original version of the Scalable Vector Extensions. Variable-length 128-to-2048 bit SIMD implementation with predicate registers and first-fault load/store operations. |
| Scalable Vector Extensions version 2	|	sve2	|	armv8-a+sve2 (also armv9-a)	|	New, expanded version of the Scalable Vector Extensions used in Arm architecture version 9 systems. Has the same implementation details as sve, but with many additional instructions, such as operations useful for digital signal processing (dsp). |

GCC target strings may be used:

- On the GCC command line, using the `-march=...` option
- In function attributes: `__attribute__(( target("...") ))`
- In pragmas: `#pragma GCC target "..."`
