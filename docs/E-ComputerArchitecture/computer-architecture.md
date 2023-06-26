---
id: computer-architecture
title: Computer Architecture
sidebar_position: 1
description: Computer Architecture
---

# Computer Architecture

The phrase _Computer Architecture_ refers to the design of a computer, primarily focused on the central processing unit but also including main memory and input-output (IO) subsystems. The term "architecture" is generally used to refer to the core components of the system and not peripheral devices.

**Introduction Only:** This page is intended as an introduction to some computer architecture concepts only. It is not a comprehensive text on computer architecture! Please be sure to review the other entries in the Computer Architecture Menu on the left side and class notes.

## Common Elements in Modern Computer Design

Various decisions made throughout the history of computing have resulted in a fairly consistent basic design for most modern digital computers: almost all designs consist of:

- A central processing unit (CPU) which reads binary [machine language](./machine-language.md) instructions from memory and executes them. The CPU contains multiple [registers](./register.md). Instructions are executed according to a [clock](./clock.md) pulse, which synchronizes activity across the system.
- Memory, including random-access memory (RAM), which consists of multiple [words](./word.md) of memory which are individually [addressable](./address.md) -- words can be individually written to or read from each address. Memory is used to store both instructions and data. Memory is generally [volatile](./volatile.md), but some non-volatile memory is usually provided for system startup.
- Some memory is connected to the CPU as well as one or more devices for "memory mapped" input/output -- the CPU as one device, and a peripheral such as a video system or disk controller as the second device. Most modern computers use a [Von Neuman](https://en.wikipedia.org/wiki/Von_Neumann_architecture) architecture, with one memory space for both instructions (software) and data. In some systems, devices may be accessed through a separate address range (designated for I/O ports), which acts like memory-mapped I/O but has a distinct addressing scheme. Devices can get the CPU's attention using an [Interrupt](#interrupts-and-exceptions) scheme. Devices include:
    - Storage, which is addressable in sectors or blocks, and is used for [non-volatile](./volatile.md), long-term storage of instructions and data.
    - Human interface devices (HID), such as keyboards, pointing devices (mice, touchscreens, trackpads, and so forth), and fingerprint readers. These are typically low-speed devices (e.g., people type at 6 characters per second or less).
    - Video, which typically uses a region of memory as a framebuffer to store the image being displayed. The video system may also be able to perform hardware-accelerated operations such as bit-blitting, fills, video overlays, and 3D operations.
    - Audio, which typically uses a region of memory as an audio sample buffer.
    - Connectivity, including network, serial, and radio (including WiFi and Cellular) connections.

However, there is an enormous amount of variation even within this general design.

## Popular Architecture Families

Throughout this page and the Computer Architecture folder on the left side, several architecture families are mentioned, including:

- x86 - The Intel/AMD architecture which debuted with the Intel 8086 processor (16-bit), gained desktop and server dominance as the 386/486/x86 32-bit architecture, and was extended by AMD to the 64-bit x86_64 architecture. Intel and AMD vigorously compete with x86_64 CPUs, which continue as the preeminent server architecture and most popular desktop architecture.
- ARM - An architecture which started with the Acorn computer company, became the dominant mobile and embedded architecture in its 32-bit incarnations, and was extended to 64-bit in version 8 ([ARMv8](/H-ARM/arm-v8.md)) with the [AArch64](/H-ARM/arm-v8.md) mode. 64-bit ARM processors are dominant in smartphone applications and starting to be compete in server and high-performance computing systems.
- PowerPC - An architecture which has been used in a wide range of applications, from Apple desktop systems to Sony PlayStation CELL processors, and which is now used primarily in IBM midrange and mainframe systems.
- MIPS - An architecture which was used in Sillicon Graphics workstations but has found its primary audience in network infrastructure such as backbone routers and firewall systems.

As well as some architectures which are no longer current:

- 6502 - An 8-bit architecture which helped spawned the home computing/personal computing era.
- Sparc - A RISC architecture developed by Sun Microsystems which powered the high-end workstation and server market for many years.

## Basic CPU Features

There are many variables in CPU design, including:

- **Register width** - [Registers](./register.md) are generally fixed-width, with 8, 16, 32, and 64 bit widths common (though other values are sometimes seen). Some CPUs have multiple registers of different sizes, or can access smaller subsets of larger registers (e.g., accessing the first 8 bits of a 64-bit register when needed), or can access a register as two smaller registers or one larger register (e.g., the 16-bit accumulator register on the 6809E processor can also be accessed as two 8-bit registers). Processors with wider registers are generally considered more powerful, though this may actually be a drawback in some specific situations.
- The **number of registers** varies from three or four to many dozen. Some processors are equipped with multiple sets of registers, and can rapidly switch between the register sets on demand (e.g., Intel "Hyperthreading" technology), which simplifies and speeds up process or thread switches. Since registers are often significantly faster than RAM, a larger register set is generally considered better, except that it will take longer to save a larger register set when switching processes. The full set of registers available on a CPU is known as the register file.
- The _work_ of a CPU is performed by **Execution Units**, which perform operations such as loading and storing data from/to memory (load/store unit), performing integer math (integer unit), executing [bitwise operations](./bitwise-operations.md), and performing floating-point math (floating-point unit, or FPU). The length of time taken to perform an operation varies according to the sophistication of the execution unit and the complexity of the operation. For example, a multiplication can be performed in many different ways, ranging from repeated addition (very slow, but requiring very little hardware logic) to table lookup (very fast, but requiring a lot of silicon), with most implementations falling somewhere in the middle. A multiplication will almost always take longer to perform than an addition, and may vary according to carry and overflow sub-operations required. The use of multiple units permits faster operations to be completed on some execution units while other (slower) operations are taking place on other execution units.
- As instructions are performed, special results are recorded as [flags](./flags.md) within the CPU. For example, adding or multiplying two numbers will set a "Carry" flag when the result overflows the word width. Other flags may indicate zero or negative result values. These flags can then be used in later operations -- for example, a branch may be taken if the carry flag is set. The number of flags, their specific meanings, and the circumstances under which they are set (to binary "1") and cleared (to binary "0") vary from architecture to architecture.
- **Cache** is high-speed memory placed between RAM and the CPU. This memory is faster than main RAM but much smaller; it improves performance by enabling the CPU to continue to write data quickly and continue without waiting for the data to be written out to main RAM. It also provides fast access to instructions or data that are accessed repeatedly, such as when a small loop is being executed. The performance difference between a loop that fits into cache and a loop that does not fit into cache can be substantial. Cache memory is arranged in "lines" which are typically a multiple of the word size; requesting a memory address that is not in cache results in a "cache miss" which causes a stall while the cache contents are retrieved from main memory. Cache design varies in many details, especially in write behaviour -- the cache can simply carry a write through to main memory (write-through), or it can hold the data in cache and write it back at a later time (write-back). There may be multiple levels of cache of varying sizes.
- **Pre-fetching** is the process of retrieving instructions from memory before executing them. Done effectively, this avoids pipeline stalls due to cache misses.
- **Branch prediction** is used to guess whether a branch will be taken or not taken based on past history. For example, in most loops, the same branch is taken repeatedly until the loop exit condition is met, so a prediction that the loop will be taken will be correct most of the time. However, inside the loop, there may be a conditional statement ("if") which is usually executed, so predicting that the branch that skirts around the conditional code will not be taken will be correct most of the time. Branch prediction is used in conjunction with pre-fetching and pipelining to improve performance.
- **Pipelining** is the sequential decoding and execution of an instruction. As each instruction is passed through the stages of a pipeline, other instructions can be processed by other stages. However, when a conditional branch appears, a decision must be made before the conditional branch can be evaluated: should the pipeline be filled with the instructions that are on the code path associated with taking the branch, or with not taking the branch? In either case, if the wrong branch prediction is made, then the contents of the entire pipeline must be discarded. The pipeline can be stalled if an execution unit is not available when needed or if a memory read or write is stalled by cache. Execution based on branch prediction is called speculative execution.

## Memory Design

In addition to cache, briefly described above, most modern computer systems use some type of paged memory design, memory maps, and a memory management unit (MMU) to control memory.

Effectively, memory is divided into "pages" of a set size (such as 4KB, 1MB, or 4MB). These pages are _mapped_ using a memory mapping table or address translation table, which renumbers the addresses of the locations within that page. Pages which do not appear in the memory map are not accessible to the CPU. It is also possible to mark specific attributes for each page in the mapping table, such as "do not execute" and "read only".

For example, a computer may have three processes, "A", "B", and "C". Only one process is active at a time (assuming a single-core model), and the operating system switches between the processes frequently whenever they are eligible to run to create the appearance of concurrent execution. (A program is not eligible to run if it is blocked by something -- for example, when it is waiting for data from the disk, network, or keyboard, and that data hasn't arrived yet).

Process A and B are running two separate programs, so the memory map is set so that the pages used by the first program are visible when process A is running; pages used for the data used by that process are also made visible. The memory map is changed so that the pages of the second program and data space are visible when process B is running. Neither process can access the software or data of the other program.

Process B and C may be executing the same program. In this case, the memory map active while each process is running contains the same program, but different data pages. The program is only loaded into memory once, reducing memory requirements.

Advanced use of the MMU by the operating system enables features such as virtual memory (pages which are not in use are placed in storage (on disk) until required), demand-loading (pages of data or software are only retrieved from disk into memory when they are accessed for the first time), and copy-on-write (two processes access a copy of the same data page, until one of them writes to the page, at which point the operating system makes a copy of the page and sets up each process to access their own copy - which gives the same result as having two private copies of the page, without using additional memory until absolutely necessary; this is commonly used with a fork() system call).

The cache size and type, page size, levels of memory maps (one to three levels of indirection are common), and page attributes vary significantly between computer architectures.

## Execution State, Priviledge State, Rings, or Privilege Level

Most processors have multiple privilege levels so that certain instructions can only be executed by certain software. On a modern system, this typically includes a hypervisor level (for virtual machine management), operating system level, and user level, and the names and number of levels vary. The higher-privilege modes can set up memory maps and access devices which are not available to lower-privilege levels; this forces certain operations to be performed by the operating system or hypervisor so that security policies can be enforced.

## Interrupts and Exceptions

Hardware interrupt requests (IRQs) are external signals which cause the CPU to stop executing the current program (generally between instructions) and jump to a pre-defined block of code. These signals were originally dedicated electrical signals but in newer systems may take the form of serially-signalled data (for example, on a PCIe bus). An interrupt is typically used to make the operating system service I/O requests when they occur. For example, when a sector of data is available from a disk drive, the disk controller will trigger an interrupt on the CPU, which will cause the operating system to load the received data. This may then cause the operating system to change the status of a process from blocked (waiting for data) to eligible for execution, so that it will be considered along with all other eligible processes when the next process switch is performed.

Most architectures support multiple levels of interrupts, usually numbered (e.g., "IRQ0", "IRQ8", and so forth). These may be handled by the CPU itself, or a (programmable) interrupt controller (_PIC_, _APIC_, or _GIC_) may latch the IRQ event and signal the processor, which then queries the interrupt controller to determine which interrupt occurred. Some architectures support multiple types or priorities of interrupts -- for example, the 6502 supports regular (IRQ) and higher-priority non-maskable interrupts (NMI), while ARM processors offer both regular (IRQ) and "fast" interrupts (FIQ).

Software interrupts are similar to hardware interrupts, but are triggered by a specific instruction. x86, ARM, and PPC processors use software interrupts to invoke system calls.

An interrupt handler is part of the operating system typically runs at a higher privilege level than a regular application.

Exceptions (or _traps_) are similar to interrupts, but are triggered by event occurrences within the processor. These exceptions cause code within the operating system to be executed to handle the event. Events which will trigger an exception include:

- Accessing a memory location which is not mapped. This will cause the operating system to swap-in a virtual memory page, load a binary page on-demand, or signal a segmentation fault (segfault)/general protection fault (gpf) depending on the circumstances.
- Writing to a read-only page, which will cause a copy-on-write or segfault/gpf depending on circumstances.
- Division by zero.
- Attempted execution of a protected instruction. Some operations can only be used when the CPU is in a particular mode -- for example, MMU address translation tables can only be altered by the operating system kernel, not by a regular process.
- Attempted execution of an undefined or invalid instruction.

When any type of interrupt is received, the [program counter](./register.md#program-counter) is saved (typically by pushing it on the [stack](./stack.md) or storing it in a dedicated register), and then a new value for the program counter is loaded from an _interrupt vector_ stored in a register or a pre-defined memory location, usually at the top or bottom of physical [address space](./address.md). Effectively, this means that a subroutine jump is performed to the interrupt-handling routine. In systems where multiple devices are connected to one hardware interrupt line, it is necessary to poll the PIC/APIC or the attached devices to determine which one(s) triggered the interrupt before servicing the request(s). When the interrupt routine exits, the original program counter location is restored, and execution of the interrupted program continues.

Most but not all interrupts can be masked -- temporarily turned off -- either in the CPU or in the PIC/APIC/GIC.

Many debugging tools use a software interrupt for single-stepping through a program - for example, on a 6502, the instruction after the one to be executed by single-stepping is replaced with a BRK instruction (opcode 00), so that control will immediately return to the debugger after one instruction is executed. In other cases, the debugger regains control by scheduling a timer-based hardware non-maskable interrupt (NMI) to occur during the execution of the next instruction, using a peripheral timer chip.

## Multiple Cores

Many modern CPU chips have multiple cores. Each core effectively acts like an independent CPU. The most common arrangement of cores is symmetric multiprocessing (SMP), where each core has exactly the same view of physical memory. Special logic in the cache controller ensures that the caches for each core are kept in sync -- otherwise, one core could change data in memory, and another core would not be aware of the change because of stale data in cache. Additional logic arbitrates access to shared resources such as main memory and I/O ports, and routes IRQs

There are alternatives to SMP, including non-uniform memory access (NUMA).

## In-order and Out-of-order Execution

In-order execution means that instructions are executed in the order in which they exist in memory. Out-of-order execution is an architecture feature where instructions are re-sequenced by the CPU on-the-fly to produce the same logical result while keeping the execution units as busy as possible.

For example, when evaluating a compound arithmetic function on a CPU that has two units capable of addition which take an average of 2 [clock cycles](./clock.md) to perform an operation, and a multiplication unit which takes an average of 5 clock cycles to perform an operation, two multiplications in succession will cause a pipeline stall, because the second operation cannot be performed until the first multiplication has completed. With out-of-order execution, additional logic in the early portion of the pipeline could rearrange operations so that some add/subtract operations would be performed between the two multiplications, avoiding the stall (and therefore increasing performance).

Out-of-order execution requires significant additional hardware logic (chip space) and energy.

## RISC vs CISC

RISC stands for _Reduced Instruction Set Computer_ and is a design philosophy favouring a CPU design which executes a small number of simple instructions very quickly. This approach relies on a good compiler to sequence instructions optimally. Since each instruction is simpler, less silicon is required for instruction decoding and execution, and therefore more silicon is devoted to execution units, cache, and registers to improve performance.

CISC stands for _Complex Instruction Set Computer_ and is an alternate design philosophy which favours a CPU design where each instruction can perform a lot of work. This approach emphasizes chip logic to optimize performance. Additional silicon is needed for features such as instruction resequencing, deep pipelines, and more complex execution units.

The RISC vs. CISC debate was at its peak in the 1980s and early 1990s. Most modern CPU designs combine elements of both philosophies. For example, ARM processors, which have historically been considered RISC designs, now include out-of-order execution (a CISC feature); x86 processors, traditionally regarded as a CISC design, now feature larger register sets that were originally considered a RISC feature.

## Instruction Set Architecture

The [Instruction Set Architecture](./instruction-set-architecture.md) is specific to a particular architecture family and therefore dependent on certain architectural features, such as the register set, but independent of other features, such as the cache type -- because the cache type affects performance but not the instructions which can be executed by the CPU.

## Sub-word and Unaligned Access

Most processors use a [word](./word.md) size that is multiple of width of some common data types. However, it is often necessary to access data which is a fraction of this size -- for example, a system with a 32-bit [hardware word size](./word.md#hardware-word) that is running applications which use UTF-8 character encoding may often need to read or write single [bytes](./word.md#byte) of data. A byte-sized read will cause the CPU to perform a 32-bit read, followed by [masking and shifting operations](./bitwise-operations.md) to extract the desired byte from the 32-bit word. A single-byte write operation will cause the CPU to read the existing word, extract the unaffected bits within that word (similar to an [AND](./bitwise-operations.md#and) operation), merg in the new value (similar to an [OR](./bitwise-operations.md#or) operation), and then write the word back to memory.

Unaligned memory access causes similar issues. For example, to read a 32-bit value from the byte address 0x2, most 32-bit CPUs will read a 32-bit value starting at byte address 0x0 and perform an AND to extract highest 16 bits, then a shift to move those bits to the lowest 16 bit positions. The CPU will then read a 32-bit value starting at byte address 0x4, perform the equivalent of an [AND](./bitwise-operations.md#and) to extract the lowest 16 bits, shift those bits to the highest 16 bit positions, and then OR the high 16 bits and the low 16 bits together into a single 32 bit value. These operations are usually hardware-optimized to occur much faster than the equivalent software operations. (Writing an unaligned 32-bit value is even worse than reading it!)

Obviously, unaligned access is far slower than aligned access, and should be avoided whenever possible. However, aligning all storage may result in increased memory usage (e.g., aligning 24-bit pixel values on 32-bit boundaries), and some data such as compressed data streams or network packets will almost always contain unaligned data.

Some processors, such as ARMv5 processors, do not have alignment-fixup hardware, and an unaligned access causes a processor exception. The operating system may ignore the unaligned access (usually leading to incorrect results), stop the program performing the unaligned access, or fix up the access in software and then resume execution of the process which caused the exception.

On a Linux system, the control file `/proc/cpu/alignment` controls how the operating system will handle alignment exceptions (on machines which lack alignment-fixup hardware). The possible values are:

```text
0 = ignore
1 = warn (via kernel message)
2 = fixup
3 = fixup + warn
```

Note that even on systems that perform alignment fixups in hardware, unaligned access is [expensive](./expensive.md).

Note also that the native word size of the CPU may be different from the physical word size of main memory; for example, some 32-bit systems have a 64-, 128-, or 256-bit-wide memory configuration.

## Processor-specific Optimizations

Code which is optimized for a particular architecture will take advantage of the features of that architecture, such as the full register file. However, the performance may still vary significantly between processor models within that architecture -- for example, a loop that is small enough to fit in the cache of one processor model may not fit inside the smaller cache of another model within the same architecture family. Likewise, a particular instruction sequence may be optimal for one processor model with a particular combination of execution units, but suboptimal for another model with a different set of units. However, the variation from model to model is usually not huge.

Most modern compilers, such as GCC, enable you to set the overall target architecture, but also permit you to optimize performance for a specific CPU model within that target architecture. For example, with GCC, the `-march` argument selects the target architecture for the output code and the specific features that may be accessed by that code, while `-mtune` is used to optimize the performance for a particular CPU variant.
