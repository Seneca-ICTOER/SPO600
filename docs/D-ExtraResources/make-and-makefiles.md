---
id: make-and-makefiles
title: Make and Makefiles
sidebar_position: 19
description: Make and Makefiles
---

# Make and Makefiles

_make_ is a specialized scripting language used to build software. Unlike most scripting languages, commands are not executed in linear (start-to-finish) sequence; instead, command sequences are defined in terms of what input they accept and what output they produce, and _make_ automatically sequences the commands to produce the required output.

Running the `make` command by itself will execute the makefile script named `Makefile` or `makefile` in the current directory.

## Targets and Dependencies

Picture a very simple build, where the file `test.c` is compiled by _gcc_ into the executable binary named `test`.

```text
test.c -> compiled by the command 'gcc test.c  -o test' -> test
```

The binary executable product file, `test`, is considered the _target_ -- the object to be built. The file `test.c` is a dependency - a file that is required in order to produce the target. _gcc_ is the command that builds the target from the dependency.

In a make script (typically called a _Makefile_), the syntax looks like this:

```text
target: dependencies
        commands
```

(Note that the _commands_ must be indented by tabs and not spaces in most versions of _make_).

The example above could be written:

```bash
test: test.c
      gcc test.c -o test
```

Here is the result when this _Makefile_ is executed:

```bash
$ ls -l
total 8
-rw-rw-r--. 1 chris chris 35 Jan 10 19:21 Makefile
-rw-rw-r--. 1 chris chris 40 Jan 10 19:15 test.c
$ cat Makefile
test:     test.c
          gcc -o test test.c

$ make
gcc -o test test.c
```

When executed a second time, make does nothing:

```bash
$ make
make: `test' is up to date.
```

This is because the timestamp on the target (`test`) is later than the timestamp on the dependency (`test.c`). If the dependency has been changed since the target was built, though, then _make_ will rebuild the target.

### Complex Dependencies

A more complicated build will involve a number of targets and dependencies. C programs, for example, can be compiled into intermediate files, called object files (.o extension), which can then be combined to produce executables.

Picture this scenario:

- There are three object files:
    - double.c, number.h, and sauce.h compile to make: double.o
    - half.c, number.h, and sauce.h compile to make: half.o
    - sauce.c compiles to make: sauce.o
- There are two binary targets:
    - double.o and sauce.o can be linked to produce: double
    - half.o and sauce.o can be linked to produce: half

The _Makefile_ for these relationships may be written like this:

```bash
CC=cc
CFLAGS=-O3

all:         half double

half:        half.o sauce.o
             ${CC} ${CFLAGS} -o half half.o sauce.o

double:      double.o sauce.o
             ${CC} ${CFLAGS} -o double double.o sauce.o

half.o:      half.c number.h
             ${CC} ${CFLAGS} -c half.c

double.o:    double.c number.h
             ${CC} ${CFLAGS} -c double.c
       
sauce.o:     sauce.c
             ${CC} ${CFLAGS} -c sauce.c

```

There are several things worth noting about this _Makefile_:

1. Variables are used for the name of the compiler and the compiler flags. This makes it very easy to change these values -- to use the _gcc_ compiler, for example, the CC variable could simply be changed to _gcc_. If variables were not used, you would have to change every line that invoked the compiler.
2. _all_ is a dummy target. Since it appears as the first target in the file, it is executed by default if no target is specified as an argument to the `make` command. It depends on the _half_ and _double_ files, which will be built in order to satisfy the dependency. However, the all target does not specify any commands, and the file `all` will never be built.

When _make_ is executed the first time, five compilations are performed:

```bash
$ make
cc         -O3 -c half.c
cc         -O3 -c sauce.c
cc         -O3 -o half half.o sauce.o
cc         -O3 -c double.c
cc         -O3 -o double double.o sauce.o
```

Note that the commands are not being executed in the order in which they appear in the file -- instead, they are ordered according to dependencies.

When executed a second time, no compilations are performed:

```bash
$ make
make: Nothing to be done for 'all'.
```

If the file `half.c` was edited or the last-modified timestamp (mtime) was updated, running _make_ would execute two compilations:

```bash
$ touch half.c
$ make
cc         -O3 -c half.c
cc         -O3 -o half half.o sauce.o
```

This reveals the power of _make_ -- it does the absolute minimum in order to build the specified target.

On a large programming project, a binary may be comprised of hundreds or even thousands of source files, and compiling all of those files may take hours. If a software developer edits just one file, it's a waste of time to rebuild everything, so _make_ can save a lot of time -- especially when the software is rebuilt many thousand times.

### Fake Targets

It is not uncommon to include "fake" targets in a Makefile -- targets which never get built, but which perform a useful operation. For example, a target of "all" never produces an actual file named "all". Typical fake targets include:

- all: build all binaries
- docs: builts all documentation (e.g., generates PDFs, HTML, manpages, etc)
- install: install all files, building binaries, documentation, etc if required
- clean: erases all built intermediate and binary files
- dist-clean (or distclean): erases all files not included in the original distribution of the source
- check (or test): tests the software

The make command will exit as soon as any command pipeline fails, so fake targets which may non-fatally fail are usually forced to return a success code; for example, to delete files which may or may not exist as part of a "clean" target, code such as this may be used:

```bash
rm *.o || true
```

## Examples

- [A tarball of simple Makefile examples](http://matrix.senecacollege.ca/~chris.tyler/osd600/makefile-examples.tgz)
