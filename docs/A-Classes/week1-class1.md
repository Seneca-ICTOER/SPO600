---
id: week1-class1
title: Week 1 - Class 1
sidebar_position: 1
description: Week 1 - Class 1
---

# Week 1 - Class 1

## Introduction to the Course, Introduction to the Problem, and Computer Architecture Basics

### Video

- [Edited Class Summary](https://web.microsoftstream.com/video/9c7a7427-aad8-4503-b014-35749f36367f)

### General Course Information

- Course resources are linked from the CDOT wiki, starting at https://wiki.cdot.senecacollege.ca/wiki/SPO600 (Quick find: This page will usually be Google's top result for a search on "SPO600"), arranged by week and class. There will be lots of hyperlinks -- be sure to follow these links.
- Coursework is submitted by blogging. The only exception to this is quizzes.
- Quizzes will be short (~1 page) and will be held without announcement at the start of any synchronous class. There is no opportunity to re-take a missed quiz, but your lowest three quiz scores will not be counted, so do not worry if you miss one or two.
  - Students with test accommodations: an alternate monthly quiz can be made available via the Test Centre. Communicate with your professor for details.
- Course marks (see Weekly Schedule for dates):
  - 60% - Project Deliverables in three phases (15%, 20%, 25%)
  - 20% - Communication (Blog writing, in four phases roughly a month long each, 5% each)
  - 20% - Labs and Quizzes (10% labs; 10% for quizzes - lowest 3 quiz scores not counted)
 
### About SPO600 Classes

- Wednesday: synchronous (live) classes at 11:40 am - login to learn.senecacollege.ca ("Blackboard"), go to SPO600, and select the "Wednesday Classes" option on the left-hand menu.
- Friday: these classes will usually be asynchronous (pre-recorded) - see this page for details each week.
- There may be occasional exceptions to this pattern.

### Introduction to the Problems

#### Porting and Portability

- Most software is written in a **high-level language** which can be compiled into [machine code](/E-ComputerArchitecture/machine-language.md) for a specific computer architecture. In many cases, this code can be compiled or interpreted for execution on multiple computer architectures - this is called 'portable' code. However, there is a lot of existing code that contains some architecture-specific code fragments which contains assumptions about the architecture, resulting in architecture-specific high-level or [Assembly Language](/F-AssemblyLanguage/assembly-language.md) code.
- Reasons that code is architecture-specific:
  - System assumptions that don't hold true on other platforms
    - Variable or [word](/E-ComputerArchitecture/word.md) size
    - [Endianness](/E-ComputerArchitecture/endian.md)
  - Code that takes advantage of platform-specific features
- Reasons for writing code in Assembly Language include:
  - Performance
  - [Atomic Operations](/E-ComputerArchitecture/atomic-operation.md)
  - Direct access to hardware features, e.g., CPUID registers
- Most of the historical reasons for using assembler are no longer valid. Modern compilers can out-perform most hand-optimized assembly code, atomic operations can be handled by libraries or [compiler intrinsics](/E-ComputerArchitecture/compiler-intrinsics.md), and most hardware access should be performed through the operating system or appropriate libraries.
- A new architecture has appeared: AArch64, which is part of [ARMv8](http://www.arm.com/products/processors/instruction-set-architectures/armv8-architecture.php). This is the first new [computer architecture](/E-ComputerArchitecture/computer-architecture.md) to appear in several years (at least, the first mainstream computer architecture).
- At this point, most key open source software (the software typically present in a Linux distribution such as Ubuntu or Fedora, for example) now runs on AArch64. However, it may not yet be as extensively optimized as on older architectures (such as x86_64).

#### Benchmarking and Profiling

Benchmarking involves testing software performance under controlled conditions so that the performance can be compared to other software, the same software operating on other types of computers, or so that the impact of a change to the software can be gauged.

Profiling is the process of analyzing software performance on finer scale, determining resource usage per program part (typically per function/method). This can identify software bottlenecks and potential targets for optimization. The resource utilization studies may include memory, CPU cycles/time, or power.

#### Optimization

Optimization is the process of evaluating different ways that software can be written or built and selecting the option that has the best performance tradeoffs.

Optimization may involve substituting software algorithms, altering the sequence of operations, using architecture-specific code, or altering the build process. It is important to ensure that the optimized software produces correct results and does not cause an unacceptable performance regression for other use-cases, system configurations, operating systems, or architectures.

The definition of "performance" varies according to the target system and the operating goals. For example, in some contexts, low memory or storage usage is important; in other cases, fast operation; and in other cases, low CPU utilization or long battery life may be the most important factor. It is often possible to trade off performance in one area for another; using a lookup table, for example, can reduce CPU utilization and improve battery life in some algorithms, in return for increased memory consumption.

Most advanced compilers perform some level of optimization, and the options selected for compilation can have a significant effect on the trade-offs made by the compiler, affecting memory usage, execution speed, executable size, power consumption, and debuggability.

#### Build Process

Building software is a complex task that many developers gloss over. The simple act of compiling a program invokes a process with five or more stages, including pre-processing, compiling, optimizing, assembling, and linking. However, a complex software system will have hundreds or even thousands of source files, as well as dozens or hundreds of build configuration options, auto configuration scripts (cmake, autotools), build scripts (such as Makefiles) to coordinate the process, test suites, and more.

The build process varies significantly between software packages. Most software distribution projects (including Linux distributions such as Ubuntu and Fedora) use a packaging system that further wraps the build process in a standardized script format, so that different software packages can be built using a consistent process.

In order to get consistent and comparable benchmark results, you need to ensure that the software is being built in a consistent way. Altering the build process is one way of optimizing software.

Note that the build time for a complex package can range up to hours or even days!

#### Course Setup

Follow the instructions on the [SPO600 Communication Tools](/D-ExtraResources/communication-tools.md) page to set up a blog, create SSH keys, and send your blog URLs and public key to me.

I will use this information to:

1. Update the Current [SPO600 Participants](/D-ExtraResources/participants-table.md) page with your information, and
2. Create an account for you on the [SPO600 Servers](/D-ExtraResources/servers.md).

This updating is done in batches once or twice a week -- allow some time!

#### How open source communities work

Do the [Code Review Lab (Lab 1)](/B-Labs/lab1.md) as homework.
