---
id: compiler-optimizations
title: Compiler Optimizations
sidebar_position: 23
description: Compiler Optimizations
---

# Compiler Optimizations

_Compiler optimizations_ are alterations made to code by a compiler to achieve the same result as the original input code but with improved performance. This can mean reduced code size, reduced execution size, or improved execution speed; often, these goals are in conflict and optimizing for one (such as speed) will come at the cost of another (such as code size).

## GCC Optimization Options

GCC offers a large number of optimization options, most of which can be controlled in combination using the `-O` flag. This option accepts a value from 0 (no optimization) through 3 (highest optimization), s (optimize for size), fast (optimize for speed only), or g (optimize for debugging experience - avoid optimizations which convolute debugging).

The `-O` actually selects a set of features. These features may also be individually selected using the `-f` flag, followed by the feature name; for example, `-funroll_loops` enables the unrolling of loops (note: other features also affect loop unrolling). To disable a feature, use the `-f` flag followed by `no-` and the feature name; for example, `-fno-unroll-loops` turns off loop unrolling.

To see the individual features enabled by a particular `-O` flag, or combination of `-O` and feature flags, use the `-Q --help=optimizers` flags, which will query the optimization feature list. For example, to see all of the optimizations enabled/disabled at `-O2`, use this command:

```bash
gcc -O2 -Q --help=optimizers
```

The GCC documentation -- both the man page and even more so the online manuals -- have good information about the 200+ optimization features of the GCC compilers.

## LLVM Optimization Options

LLVM can perform an extensive set of analysis and transform operations (optimizations). See the llvm documentation for details.

## Examples of Common Optimizations

Here are some common C optimizations. For each optimization, an input code snippet is shown, along with the code showing the equivalent of the optimization.

Note:

- There are many other kinds of optimizations, some of which operate at the object code (ADD LINK) level.
- Many of these optimizations cannot be performed when code has a side effect -- for example, the direction of a loop can sometimes be reversed without impact if the loop contains only calculations, but cannot be reversed if the loop contains I/O operations (such as printf()). Tracking these conditions can become complex!

### Code Rewriting Optimizations

These optimizations involve rewriting code for performance or space. Although these examples are shown using rewritten source code, in most cases the optimizations are applied to an intermediate representation of the program which does not closely resemble the original source.

#### Strength Reduction

Certain operation are expensive (ADD LINK) in terms of the processor time they consume. Replacing these expensive operations with cheaper (simpler, faster) operations is called _strength reduction_.

This is a simple loop that counts to ten; each iteration displays the loop index multiplied by 6:

```c
int x;
for (x=0; x < 10; x++) {
    printf("%d\n", x*6);
}
```

By adding six to the loop index instead of one after each iteration, the slow multiplication can be eliminated from the loop; on most CPUs, the addition takes the same amount of time as the increment in the code above:

```c
int x;
for (x=0; x < 60; x+=6) {
    printf("%d", x);
}
```

#### Hoisting

_Hoisting_ involves moving operations outside of a loop.

#### Hoisting I - Loop-Invariant Variable

Here is a simple loop:

```c
int t, x;
double c;
t = readtemp(); /* current temp in farenheit */
for (x = 0; x < 200; x++) {
    c = (t-32)/1.8000 + 273.15;
    foo(x,c);
}
```

The value of c is invariant within the loop, so the calculation of its value may be safely moved outside the loop:

```c
int t, x;
double c;
t = readtemp(); /* current temp in farenheit */
c = (t-32)/1.8000 + 273.15;
for (x = 0; x < 200; x++) {
    foo(x,c);
}
```

#### Hoisting II - Loop-Invariant Expression

Here is a similar example:

```c
int t, x;
t = readtemp(); /* current temp in farenheit */
for (x = 0; x < 200; x++) {
    foo(x,(t-32)/1.8000 + 273.15);
}
```

In this case, there is no variable with a loop-invariant value, but the second argument to the function `foo()` is invariant and can be hoisted out of the loop:

```c
int t, x;
double c;
t = readtemp(); /* current temp in farenheit */
c = (t-32)/1.8000 + 273.15;
for (x = 0; x < 200; x++) {
    foo(x,c);
}
```

#### Hoisting III - Loop-Invariant Expression in Loop Condition

In this example, the invariant expression is in the loop control condition:

```c
int x, y;
y = foo();
for (x=0; x < y*12; x++) {
    bar(x);
}
```

Hoisting this out of the loop will reduce the number of multiplications performed:

```c
int x, y, c;
y = foo();
c = y * 12;
for (x=0; x < c; x++) {
    bar(x);
}
```

#### Pre-calculation of Constants

Where possible, the compiler will evaluate constant expressions at compile time rather than runtime:

```c
ff = (212-32)/100;   /* factor for celcius-farenheit conversion */
conv = c * ff + 32;
```

The factor `ff` will never change, so this code could be rewritten as:

```c
conv = c * 1.800 + 32;
```

#### Loop Unswitching

It is sometimes possible to swap a condition inside a loop for loops inside a condition.

#### Loop Unswitching I - Inner/Outer Swap

Consider this code:

```c
int foo(float ctl) {
    int x;
    for (x=0; x < 10000; x++) {
        if (ctl == 0) {
            bar(x);
        } else {
            qux(x);
        }
    }
}
```

This code evaluates the condition `ctrl == 0` ten thousand times, but that condition will never change within the loop. If the loop is rewritten as a pair of loops inside an outer `if` statement, the condition can be evaluated just once, at the expense of larger code:

```c
int foo(float ctl) {
    int x;
    if (ctl == 0) {
        for (x=0; x < 10000; x++) {
            bar(x);
        }
    } else {
        for (x=0; x < 10000; x++) {
            qux(x);
        }
    }
}
```

#### Loop Unswitching II - Inner/Outer Swap with Code Repetition

This example is similar. Here, the loop contents are partially-conditional:

```c
int foo(float ctl) {
    int x;
    for (x=0; x < 10000; x++) {
        bar(x);
        if (ctl == 0) {
            qux(x);
        }
    }
}
```

Constructing two loops and placing them in a conditional structure removes the condition evaluation from inside the loop -- again, at the expense of size:

```c
int foo(float ctl) {
    int x;
    if (ctl == 0) {
        for (x=0; x < 10000; x++) {
            bar(x);
            qux(x);
        }
    } else {
        for (x=0; x < 10000; x++) {
            bar(x);
        }
    }
}
```

### Loop Splitting

Similar to loop unswitching, loop splitting will split a loop into two if two parts of the loop are handled differently:

```c
int foo(float ctl) {
    int x;
    for (x=0; x < 10000; x++) {
        if (x < 3700) {
            bar(x);
        } else {
            qux(x);
        }
    }
}
```

Becomes:

```c
int foo(float ctl) {
    int x;
    for (x=0; x < 3700; x++) {
            bar(x);
    }
    for (; x < 10000; x++) {
            qux(x);
    }
}
```

#### Loop Interchange

Swapping an inner and outer loop can sometimes improve performance. This code iterates through a two-dimensional array:

```c
int x, y, max=10000;
long double a[max][max];
for (y=0; y < max; y++) {
    for (x=0; x<max; x++) {
        a[x][y]=foo(x,y);
    }
}
```

If the data is stored in memory in row-major format (all of row 0 is followed by all of row 1), then the memory accesses in the loop above are spread across memory. This reduces the effectiveness of pre-fetching and caching memory.

Swapping the inner and outer loops achieves the same result, but causes the memory access to be sequential:

```c
int x, y, max=10000;
long double a[max][max];
for (x=0; x < max; x++) {
    for (y=0; y<max; y++) {
        a[x][y]=foo(x,y);
    }
}
```

#### Loop Unrolling

A loop can be unrolled so that the inner portion of the loop contains multiple copies of the code (corresponding to multiple iterations of the loop). This takes additional space, but reduces the number of times that the loop control condition is evaluated.

#### Loop Unrolling I - Guaranteed-Multiple Iterations

This loop is guaranteed to execute an even number of times:

```c
int x, y;
y=foo();
for (x = 0; x < y*2; x++) {
    bar(x);
}
```

It can be unrolled so that the loop expression is evaluated only every second time that the loop contents are executed:

```c
int x, y;
y=foo();
for (x = 0; x < y*2; ) {
    bar(x++);
    bar(x++);
}
```

#### Loop Unrolling II - Pairs-of-Iterations plus a Conditional Extra Iteration

The unrolling performed in the previous example can be performed even when the number of iterations is not guaranteed to be even, if you add an additional conditionally-executed iteration after the loop.

Consider this code:

```c
int x, y;
y=foo();
for (x=0; x < y; x++) {
    bar(x);
}
```

If we unroll the loop so that it executes an even number of times, we can use an if statement to conditionally execute the loop contents one extra time if an odd number of iterations are required:

```c
int x, y;
y=foo();
for (x=0; x < y-1; ) {
    bar(x++);
    bar(x++);
}
if (x < y ) {
    bar(x++);
}
```

#### Loop Unrolling III - Large Number of Iterations

You can extend this principle to a larger number of unrolled iterations:

```c
int x, y;
y=foo();
for (x=0; x < y; x++) {
    bar(x);
}
```

This code evaluates the loop control condition only one-tenth as often as the original loop, up to the largest multiple of ten iterations that is less than the total iteration count:

```c
int x, y;
y=foo();
for (x=0; x < y-10; ) {
    bar(x++);
    bar(x++);
    bar(x++);
    bar(x++);
    bar(x++);
    bar(x++);
    bar(x++);
    bar(x++);
    bar(x++);
    bar(x++);
}
for (; x < y; ) {
    bar(x++);
}
```

Loop unrolling is often beneficial as long as the unrolled loop fits into cache; unrolling past that point will reduce performance.

#### Inlining

_Inlining_ takes code from a function and places it directly into the calling routine, eliminating the function call.

```c
int foo(int a, int b) {
    return a + b * 2;
}
int x, i;
long ttl=0;
for (x = 0; x < 10000; x++) {
    i = rand();
    ttl += foo(x, i);
}
```

Using inlining, the calls to the function `foo()` can be eliminated:

```c
int x, i;
long ttl=0;
for (x = 0; x < 10000; x++) {
    i = rand();
    ttl += x + i*2;
}
```

**Additional optimization:** Can you see an additional optimization (besides loop unrolling) that could be performed in the example above?

#### Common Subexpression Elimination

Evaluating and saving the result for a common subexpression can reduce execution time. Consider this expression:

```c
x = (a * c) - (a * c) / 12
```

The subexpression `(a * c)` is evaluated twice. It could be evaluated once and used twice, saving an expensive multiplication:

```c
t = (a * c)
x = t - t/12
```

#### Jump Threading

**Jump threading** involves eliminating unnecessary condition evaluation by recognizing conditions that are in alternation.

```c
int a, b;
a=foo();
b=!a;
if (a) {
    bar();
}
if (b) {
    baz();
}
```

The variable `b` and the second condition are unnecessary and can be eliminated:

```c
int a, b;
a=foo();
if (a) {
    bar();
} else {
    baz();
}
```

#### Short-Circuit Evaluation

#### Short Circuit I - AND

When evaluating a condition with a logical AND (&&), both halves of the condition must be true for the entire condition to be true. Therefore, it is not necessary to evaluate the second half of the condition if the first half is false:

```c
if (a * b > c && d > e) {
    foo();
}
```

You could rewrite this as:

```c
if (a * b > c) {
    if (d > e) {
        foo();
    }
}
```

#### Short Circuit II - OR

In the case of a logical OR (||), the short-circuit permits you to skip evaluation of the second half of the condition if the first half is true.

```c
if (a * b > c || d > e ) {
    foo();
}
```

Could be rewritten as:

```c
// This makes more sense in assembler than C!
if (a * b > c) {
    foo();
} elseif (d > e) {
    foo();
}
```

#### Test Reordering

In a short-circuit expression, you can perform a partial strength reduction by placing the least expensive expression first:

```c
if (a * b > c && d > e) {
    foo();
}
```

When rewriting this in short-circuit form, the expression `a * b > c` contains a multiplication, while the expression `d > e` does not -- so the simpler expression should be checked first:

```c
if (d > e) {
    if (a * b > c) {
        foo();
    }
}
```

#### Dead Store Elimination

A _dead store_ occurs when a value is stored to a variable and never read again, often because the value is overwritten before being read.

#### Dead Store Elimination I - Simple Case

Here is a simple dead store example:

```c
a = b * c + d / f;
a = c / f * 60;
```

This looks stupid, but is actually fairly common in programs, especially if there are many lines of code between the two assignments.

This can be written as:

```c
a = c / f * 60;
```

#### Dead Store Elimination II - Unused Initialized Value in Declaration

A common source of dead stores is unused initialized values from declarations:

```c
int a = 0;
/* ...possibly many lines later, before a is read: */
a = foo();
```

Eliminating the dead store saves a memory access:

```c
int a;
a = foo();
```

#### Dead Store Elimination III - Special Case

Some dead stores are the result of overriding a variable value in a special case:

```c
int a;
a = b * c + d / f;     /* normal/default case */
if (foo()) {
    a = c / f * 60;    /* special case! */
}
```

This can be written so that only one store is ever performed:

```c
int a;
if (foo()) {
    a = c / f * 60;
} else {
    a = b * c + d / f;
}
```

### Machine-Code Level Optimization

In addition to code rewriting, there are optimizations that can be performed at the machine language level -- the actual instructions that are emitted by the compiler and the arrangement of these instructions in memory. Here are some examples:

#### Block Rearrangement

In a block of code such as this:

```c
if (condition) {
  action
 }
 following code
```

The compiler usually inverts the _condition_ test and converts it into a conditional branch/jump -- if the condition is FALSE, then the CPU branches to the _following_ code.

There are many cases where the _condition_ is likely to be false almost all of the time. For example, this test could be for an error condition, a very rare data case, or some kind of sanity check.

In a normal cache-load and prefetch pattern, the code for the conditional action is loaded into cache and the early stages of the processor's pipeline system and may even be speculatively executed while the condition is evaluated. If the condition is almost always false, its would be more efficient to load the _following code_ instead of the _action code_, so the compiler will rearrange the code blocks to place the _action_ code into another area of memory.

In order to do this, the compiler needs to know that the condition is almost always false. The programmer can state this using Compiler Intrinsics (ADD LINK) such as the GCC [\_\_builtin_expect function](https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html#index-fprofile-arcs-3857), or the compiler can discover this by code analysis or [PGO](./profile-guided-optimization.md).

#### Instruction Selection

There are many optimizations that occur at the object code level. Selecting an instruction that provides the same result as another instruction but which takes less time to execute, called _instruction selection_, is a simple and common object code optimization.

In order to perform instruction selection, the compiler relies upon a _Cost Model_, which contain detailed information about the relative execution cost of each instruction which the target can execute. Execution costs can vary between different implementations of an architecture (e.g., cpu models) due to varying numbers and efficiencies of execution units, pipeline size, and so forth, so most compilers accepts both a target architecture and a specific chip model (for example, `-march` and `-mtune` in gcc).

The x86 instruction set in particular has some quirks that the chip designers have maintained over the years, including [the fastest way to zero out a register](https://randomascii.wordpress.com/2012/12/29/the-surprising-subtleties-of-zeroing-a-register/).

## Debugging with Optimizations Enabled

Using low-level debugging (ADD LINK) tools with code that has been highly optimized can be very challenging, because the object code (ADD LINK) may bear little resemblance to the source code. However, some errors may only surface when optimization is enabled - for example, optimized code may perform an operation before a device is ready to receive data. Debugging the unoptimized code may not reveal the problem, because the extra execution time may eliminate the error.

The gcc option `-Og` attempts to balance optimization with the debugging experience, by enabling only optimizations that will not excessively convolute the debugging process.

## Resources

- [GCC Manual](http://gcc.gnu.org/onlinedocs/) ([Optimization Options](http://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html))
- [LLVM's Analysis and Transform Passes](http://llvm.org/docs/Passes.html)
