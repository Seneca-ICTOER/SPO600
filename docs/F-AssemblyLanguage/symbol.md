---
id: symbol
title: Symbol
sidebar_position: 5
description: Symbol
---

# Symbol

A _symbol_ is a _name_ for a variable, address, register, or instruction.

For example, the symbol "a" is used in this C code:

```c
int a=5;
```

In the compiled code, the name of the variable is insignificant -- the object code will access the relevant memory location by address, or the relevant register, at the [machine code](/E-ComputerArchitecture/machine-language.md) level.

Symbolic information is generally lost during compilation, unless it is specifically preserved by the compiler. Most C compilers use the -g option to request that symbol information be attached to the binary for debugging purposes; a [debugger](/E-ComputerArchitecture/debugger.md) or [disassembler](/E-ComputerArchitecture/disassembler.md) can use this information to convert addresses and other numeric information to a symbolic representation. (Debug information may also include code-address-to-source-line-number cross reference data so that errors, code listings, and single-step operations can display or refer to the relevant source code).

In order to reduce the size of distributed binaries, symbolic debug data may be separated from the binary and placed in another file. This can be accessed from a local file, or a _symbol server_ set up for this purpose. Alternately, it may be removed from the binary and discarded. The tool that performs this function on most Linux and Unix systems is called `strip`.

## Reserved Names

Many tools (such as [assemblers](/E-ComputerArchitecture/assembler.md)) have _reserved names_ -- names which cannot be used for user-defined symbols because they conflict with pre-defined or internal symbols or create ambiguity in the source code. For example, in aarch64 gas assembly syntax, you cannot use x0 as a constant name, because it conflicts with the register name.
