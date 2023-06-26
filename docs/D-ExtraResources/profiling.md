---
id: profiling
title: Profiling
sidebar_position: 15
description: Profiling
---

# Profiling

Profiling is the process of determining how a program is using the resources that it is consuming.

## Resource that can be Profiled

Profiling produces a clear view of the call graph -- the hierarchy of function/procedure/method calls that takes place during the execution of the program.

Resources consumption that can be analyzed during profiling include:

- Time (both clock time (total real time, user time, and the amount of time the kernel spent on behalf of the program)
- Memory
- Temporary storage
- Energy (this is a relatively new area of profiling)

## Profiling Granularity and Techniques

Most profiling systems determine resource usage on a per-function basis. Data may be gathered through two different techniques:

1. Sampling - interrupting the program frequently (such as 10 000 times/second) and determining which function is currently executing (by comparing the [program counter](/E-ComputerArchitecture/register.md#program-counter) to the debuginfo of the program).
2. Instrumentation - adding code to the binary or using debug controls (such as [breakpoints](/E-ComputerArchitecture/debugger.md)) to determine when and how often specific actions take place, such as entry/exit to/from a function/procedure/method.

## Profiling Tools

There are many profiling tools available. Open source options include:

- gprof
- perf
- oprofile
- SystemTap

These tools provide different combinations of profiling capabilities, and may provide additional functions.

### Example: Profiling with 'gprof'

The `gprof` tool provides basic profiling capability using a combination of sampling (for times) and instrumentation (for call graph and counts). To use it:

1. Build the software to be profiled using the `-pg` (profile generation) option to the gcc compiler. This may require that you modify the makefile or other build instructions, but it can often be done using the CFLAGS or CCOPTS variables passed to configure or make -- for example, `./configure CFLAGS="-g -pg -O2"`
2. Execute the program. Ensure that you give it a typical to long execution time; if it is an interactive program, run through most of the commonly-used features, and if it is non-interactive, invoke it with common options and give it a good amount of data to process.
3. Check that a file named `gmon.out` was produced when the program ran. If not, recheck the previous steps.
4. Run the `gprof` program to generate a report: `gprof filenameOfExecutableBeingProfiled`

The output from gprof is a text report. It can be converted to a graphical representation, which is often more useful, using the `gprof2dot` script to convert it to the GraphViz "dot" format, then using the `dot` utility to output it in the desired graphics format.

Examples:

```assembly
# produce a PDF
gprof nameOfExecutable | gprof2dot | dot -Tps | ps2pdf - gprof.pdf 

# produce a PNG file
gprof nameOfExecutable | gprof2dot | dot -Tps | convert - gprof.png

# produce an SVG file
gprof nameOfExecutable | gprof2dot | dot -Tsvg > gprof.svg

# display on the screen
gprof nameOfExecutable | gprof2dot | dot -Tx11
```

### Example: Profiling with perf

Perf does not use instrumentation, so no changes are required to the build process.

To record performance data, run perf with the `record` argument: `perf record nameOfExecutable` To display performance data, run perf with the `report` argument: `perf report|less` for non-interactive output, or `perf report` for interactive display

**Function vs. Method vs. Procedure**

In procedural languages, called code blocks are often called **functions**. When programming in an object-oriented language, called code blocks may be called **methods**. Older or more general documentation may refer to called code blocks as **procedures**. The distinction between functions, methods, and procedures is effectively one of terminology and "packaging" only - at the [machine code](/E-ComputerArchitecture/machine-language.md) level, the distinction effectively disappears.

### Optional Lab

The [SPO600 Profiling Lab]() (ADD LINK) was used in previous semesters in the SPO600 course. It is not a required lab in the current version of the course.
