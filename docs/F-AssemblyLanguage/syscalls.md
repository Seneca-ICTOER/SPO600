---
id: syscalls
title: Syscalls
sidebar_position: 6
description: Syscalls
---

# Syscalls

The system call (_syscall_) mechanism is used by applications to access kernel services. The userland (application/non-kernel) program loads certain registers designating the system service (syscall) desired and the arguments to that syscall, then invokes a software [interrupt](/E-ComputerArchitecture/computer-architecture.md#interrupts-and-exceptions) or exception request which transfers control to the operating system kernel. Note that switching to kernel mode requires a change of [processor mode](/E-ComputerArchitecture/computer-architecture.md#execution-state-priviledge-state-rings-or-privilege-level) (sometimes call the privilege level or exception level), because the kernel has access to instructions, memory structures, memory areas, and devices which userland programs can't access. The syscall numbers may vary between architectures, and the registers as well as the method used to invoke syscalls are architecture-specific. The processor modes and activity involved in a userland-to-kernel switch also vary by architecture.

High-level languages wrap the syscall interface in basic wrappers or more advanced mechanisms. For example, in C, the _write_ syscall can be accessed through the generic `syscall` wrapper, the `write()` wrapper, or through more complex functions such as `printf()`. [Assembly language](./assembly-language.md) programs will often access syscalls directly.

## Syscall Mechanism

Every platform has a different syscall mechanism. Each mechanism is documented in the ABI standards for that platform, and a summary of various platforms is contained in the manpage for syscall(2) (run the command `man 2 syscall` to see this).

To invoke a syscall in your own code, load the syscall number and arguments into the appropriate registers, and then invoke the architecture-specific syscall mechanism, using the details below:

### x86 32-bit

- The syscall number is placed in eax.
- Integer and pointer arguments are placed in edi, esi, edx, ecx with spill over to the stack (refer to ABI documentation).
- Return value is in eax.
- The syscall is invoked with `int 0x80`

### x86 64-bit

- The syscall number is placed in rax.
- Integer and pointer arguments are placed in rdi, rsi, rdx, rcx, r8d, r9d with spill over to the stack (refer to ABI documentation).
- Return value is in rax.
- The syscall is invoked with `syscall`

### aarch64

- The syscall number is placed in r8.
- Integer and pointer arguments are placed in r0-r7 with spill over to the stack (refer to Procedure Call and ABI documentation).
- Return value is in r0.
- The syscall is invoked with `svc 0`

## Syscall names, numbers, and arguments

### Syscall names

A list of syscalls can be found in the manpage for `syscalls(2)` (note: this is different from the manpage for `syscall(2)` which is a generic syscall wrapper). View this with the command `man 2 syscalls`

Documentation for the C wrappers for most syscalls can be found in the manpage for that wrapper, usually in section 2 of the manual (e.g., `write(2)`, which is accessed using the command `man 2 write`).

### Syscall numbers

Syscall numbers are defined in <asm/unistd.h\> (`/usr/include/asm/unistd.h`). If you examine this file, you'll find that it includes different files depending on the platform, because the syscall numbers are platform-specific (on newer platforms, there has been an attempt to use consistent syscall numbers). In this included file, you will find macros for each syscall named `__NR_syscall` which identifies the number for each syscall. For example, aarch64 includes the file `/usr/include/asm-generic/unistd.h`, which lists this macro for the _write_ syscall:

```c
#define __NR_write 64
```

But on x86_64 the macro definition is taken from `/usr/include/asm/unistd_64.h`:

```c
#define __NR_write 1
```

You can use the `ausyscall` utility, which part of the Linux _audit_ package, to determine the number for a given syscall on the particular platform:

```assembly
$ ausyscall x86_64 write
write              1
pwrite             18
writev             20
pwritev            296
process_vm_writev  311

$ ausyscall aarch64 write
write              64
writev             66
pwrite             68
pwritev            70
process_vm_writev  271
```

Note that the syscall table is searched by name, and in the examples above the text "write" matches five different syscalls. The architecture defaults to the current platform if not specified.

### Syscall arguments and return values

The details of each syscall's arguments and return value are listed in <unistd.h\> (`/usr/include/unistd.h`) in a combination of comments and C extern declarations.For example, for the _write_ syscall:

```assembly
/* Write N bytes of BUF to FD.  Return the number written, or -1.

   This function is a cancellation point and therefore not marked with
   __THROW.  */
extern ssize_t write (int __fd, const void *__buf, size_t __n) __wur;
```

This documents that the _write_ syscall takes three arguments: the file descriptor, a pointer to the message buffer, and the message size, and returns the number of bytes written or -1 if there was an error.

## Using the syscall number macro definitions in asm code

The syscall macros can be used in an assembly program if that program is processed by the C preprocessor (cpp). The extension `.S` (uppercase instead of lowercase) is used to designate an assembler source file that must be processed by cpp.

There are two ways to do this for a pure assembler source file:

1. Invoke cpp explicitly:

```assembly
cpp foo.S > foo.s
as foo.s -o foo.o
ld foo.o -o foo
```

2. Use gcc to invoke the assembler and linker:

```assembly
gcc foo.S -o foo
```

**Initialization Code and Entry Point:** When the assembler is invoked through gcc, C initialization code is inserted into the binary, which increases its size. This initialization uses the entry point `_start` and expects your code to have the entry point `main`.

Using either of these approaches, you can use the `__NR_xxxx` macros in your assembler code:

```assembly
#include <asm/unistd.h>
...
        mov $__NR_write,%rax
```
