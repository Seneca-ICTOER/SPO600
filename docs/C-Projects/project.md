---
id: project
title: Project
sidebar_position: 1
description: Project
---

# Project

This page describes the SPO600 (ADD LINK) project in the Fall 2022 semester.

## Overview

The autovectorizer in gcc (and other compilers, such as llvm/clang) has become very good -- to the point that it is automatically enabled at optimization level -O2 (standard optimization level) in recent versions of gcc.

However, there are many different implementations of SIMD instructions on various CPUs -- on 64-bit Arm systems, there's Advanced SIMD, SVE, and SVE2; on x86, there's SSE, SSE2, AVX, AVX512, and more. It is desirable to be able to build a single binary that takes optimal advantage of the available CPU capabilities.

There is a tool provided by the gcc compiler to allow the run-time selection of one of several different implementations of a function (or procedure or method or subroutine): ifunc. However, ifunc requires additional setup by the software developer.

The goal for this project is to produce a proof-of-concept tool that will take code that meets specific conditions and automatically build it with ifunc capability to select between multiple, autovectorized versions of a function, to take advantage of the best SIMD implementation available on the CPU on which the code is running.

Imagine that you have two source files:

```text
main.c        # contains main() and possibly other functions
function.c    # contains one function
```

The file `function.c` will be built three times, each time using the autovectorizer, targeting different SIMD implementations for aarch64 (advanced SIMD, SVE, and SVE2). The appropriate ifunc code will be inserted so that the correct build of the function (from `function.c`) is executed based on the capabilities of the computer on which it runs.

## Limitations

Since the goal of this project is to produce a proof-of-concept, these limitations are accepted:

1. This tool only operates on aarch64 systems
2. There are three targets of interest: machines with advanced SIMD, SVE, and SVE2 capabilities
3. There are only two input source files, one containing main (and optionally other functions) (`main.c`) and one containing a function to be optimized (`function.c`)
4. Only `function.c` is built multiple times for different SIMD implementations
5. The file `function.c` may only contain one function

## Requirements

The finished project:

- Can be written in any language which will operate on the target environment, which is a 64-bit Arm system running Fedora 35 (such as israel.cdot.systems) with gcc 11.3.1. This means that the tool itself can be written in C, python, perl, bash, JS/node, haskell, or any other language available for that platform
- Once started with the appropriate arguments, the tool must produce an output file which will use advanced SIMD, SVE, or SVE2 instructions for the function contained in the `function.c` file according to the capabilites of the platform on which it is run. Thus, if the code is executed on israel.cdot.systems directly, it will execute with advanced SIMD (non-SVE) instructions only. If it is executed on israel.cdot.systems using the `qemu-aarch64` emulation tool, it will use SVE2 instructions.

## Test Code

To test your solution, use the code available at https://github.com/ctyler/spo600-fall2022-project-test-code as the input. (Reminder: you can clone this to another system -- such as israel.cdot.systems -- by using the "git clone" command along with the URL that you can find on the green **Code** button on the repository web page. Alternatively, you can fork the repo on GitHub and then clone your fork).

Note that your project should accept other input as well -- this code is just one example, provided for easy testing.

## Open Source

Since this is an open source course, your code must be licensed under one of the [Open Source Initiative approved licenses](https://opensource.org/licenses). Select an appropriate license, and include it with your project. Note that it's important that any code from other sources that you include in your project must be under a compatible license.

This is an individual project, but since we're working with open source, you're welcome to incorporate other open source code into your project, and you may also collaborate with other students. You must write a minimum of 30% of the original code in your project.

To be clear: code from established libraries, modules, and frameworks, such as Python modules or C libraries, does not count as part of the "original code". Therefore, if your project has 400 lines of code in addition to 100,000 lines of code that are in standard/common libraries/modules/frameworks, then you must have written at least 30% of the 400 lines (not 30% of the 100,400 lines!).

You **must** clearly identify which lines you wrote, and which lines were written by someone else. You **must** verify that you have permission/license to use any code not written by you, including libraries/modules/frameworks, which you include in your project, and you must appropriately credit the source of that code, provide a link/URL as appropriate, and confirm license compatibility with your chosen open source license. See the [Wikipedia article on License Compatibility](https://en.wikipedia.org/wiki/License_compatibility) for an introduction to this topic.

## Project Stages

### Stage 1

What is required:

- Provide a plan for your project
    - Specify the language that you're going to use
    - Specify the overall operation of your project -- how you're going to approach the problem
    - Describe the challenges you expect to face as you implement the code
- Submit your plan in one or more clear and detailed blog posts

Due: Sunday, November 18, 11:59 pm

Mark: 15%

### Stage 2

What is required:

- Provide the initial implementation of your project
- The initial implementation must be able to produce a usable output binary that correctly uses the best available SIMD implementation, but it may have additional limitations or bugs. These limitations and bugs must be appropriately documented
- Provide clear documentation on what the project does and how to test it
- Submit the implementation as one or more blog posts linked to your code hosted appropriately (recommendation: place it in an accessible git repository)

Due: ~~Sunday, December 4, 11:59 pm~~ Thursday, December 8, 12 noon

Mark: 20%

### Stage 3

What is required:

- Provide the final implementation of your project
    - The implementation must work
    - The implementation should not have any limitations beyond those listed in the [Limitations](#limitations) section above
- Bonus points may be awarded if your project works well (Note: bonus marks are not applicable if your basic solution does not work properly!) and:
    - ... is not subject to some of the [Limitations](#limitations) listed above. For example, your project could work on both aarch64 and x86\_64 systems, or it could accept multiple function files. Up to 5% bonus is available for each limitation that you overcome. (Note: the quality of the implementation will be considered when assigning the bonus marks).
    - ... has additional useful features, such as notifying the user if autovectorization could not be applied to the code. Up to 5% bonus is available for each additional useful feature. (Note: the quality of the implementation, and usefulness of the feature, will be considered when assigning the bonus marks).
- Provide clear documentation on what the project does and how to test it
- Submit the implementation as one or more blog posts linked to your code hosted appropriately (recommendation: place it in an accessible git repository)
    - Include your reflections on the project, what you have learned, what you enjoyed, what you didn't enjoy, and whether or not you think that this type of tool (perhaps integrated into a compiler) would be useful to you in your future work

Due: Wednesday, December 14, 11:59 pm

Mark: 25%
