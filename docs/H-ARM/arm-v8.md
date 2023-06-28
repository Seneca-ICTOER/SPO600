---
id: armv8
title: ARMv8
sidebar_position: 1
description: ARMv8
---

# ARMv8

There are a few different terms swirling around the 64-bit ARM space. This page distinguishes between some of these terms and concepts.

## ARMv8

ARM architecture version 8 -- known as ARMv8 -- was introduced in ~2012 and is just starting to appear in the market as of 2013/2014.

ARMv8 has two execution states which support three [Instruction Set Architectures](/E-ComputerArchitecture/instruction-set-architecture.md):

## AArch32 Execution State

AArch32 is a 32-bit execution state which supports these instruction sets:

- A32 (often just called "ARM") - the traditional 32-bit instruction set used in ARMv7 (with minor differences).
- T32 (Thumb) - a mixed 16- and 32-bit fixed-length instruction set for increased code density, previously referred to as Thumb2.

## AArch64 Execution State

AArch64 is a 64-bit execution state which supports these instruction sets:

- A64 - a 64-bit capable instruction set encoded into 32-bit fixed-length instructions.

## ARMv8 Profiles

There are different profiles for ARMv8 devices, including:

- Armv8-A - _Application_ - For user-level application processors, i.e., servers, smartphones, tablets. ARMv8-A devices support the AArch64 instruction state, and may optionally support the AArch32 instruction state.
- Armv8-R - _Real-time_ - For real-time applications, which require that hardware events (such as interrupts) receive a response within a (short) hard deadline, such as a fuel injection system. ARMv8-R devices support only the AArch32 execution state, and do not support the AArch64 execution state.
- Armv8-M - _Microcontroller_ - For small embedded / microcontroller applications.

## AArch32 and AArch64 Support on ARMv8 in Linux

Linux systems may support the execution of AArch32 binaries on an AArch64 platform (multiarch support), or they may prohibit it and allow AArch32 binaries only in a virtual machine.

Debian/Ubuntu supports AArch32 binaries on ARMv8 via a multiarch mechanism similar to that used to support x86_32 binaries on x86_64.

Fedora/Red Hat intentionally does not support AArch32 binaries on ARMv8.

The value of supporting AArch32 binaries on ARMv8 is controversial. The argument **for** supporting them is for maximum backward-compatibility; the argument **against** supporting them is that there are very few proprietary/closed-source 32-bit binaries available, they may require recompilation anyways (since AArch32 supports a slight subset of the ARMv7 instruction set), and anything that is a 32-bit open source ARM program can readily be rebuilt for AArch64.

## Boot Systems for ARMv8 in Linux

### Historical Situation

Very few general-purpose 32-bit ARM systems were ever produced - the billions of ARMv6 and ARMv7 devices that exist generally run a dedicated build of an operating system, even if that operating system is open-source. For example, an Android-based cellphone or tablet (which runs Linux) comes with software particularly customized for that device. There is little or no market for general-purpose operating systems that can be installed on a wide range of 32-bit ARM devices, and therefore there was almost no effort made to standardize the boot process.

Although most 32-bit development boards and general devices (such as the Beagle Bone, Wanda Board, Panda Board, CubieBoard, CubieTruck, Radaxa Rock, Utilite, TrimSlice, and so forth) use a version of the U-Boot bootloader, these are almost always customized and operate in a way that is unique to the device. For example, some U-Boot versions boot only from some combination of NAND/NOR SPI-connected flash memory, eMMC, SD card, or disk; some load the kernel using a configuration stored on the boot device, while others store the boot configuration in the device that holds the U-Boot bootloader (which may be different); some load the U-Boot software itself directly from a particular block offset or FAT slot number, while others load it by name, or load it from SPI-connected flash; and so forth.

Dennis Gilmore of Red Hat and some others attempted to unify the U-Boot situation; however, this has been an uphill battle, as new 32-bit ARM devices have continued to flood onto the market.

In addition to the boot environment, the machine description (describing the devices which make up the system in addition to the CPU) was originally done using a "machine number" passed in from the boot environment. This led to the creation of incompatible patch sets for the kernel, such that the kernel could not be built so that it would work on a variety of devices - it had to be built for a specific machine.

### Single zImage

Arnd Bergman (originally working at IBM, now with Linaro), one of the key ARM kernel maintainers, worked with others to move from machine numbers to using [Device Tree](http://www.devicetree.org/) to describe the attached hardware. This paved the way to move to a "Single zImage" - a kernel which could run on a variety of different devices by using data in a board-specific Device Tree Blob (DTB) to initialize the correct device drivers with the correct parameters for each device. This in turn has made it much easier for various distros (Fedora, Debian/Ubuntu, Mint, Gentoo, etc) to support a range of devices.

### ARMv8 Server Standardization

The situation is different in the server space - companies want to be able to buy servers from any vendor and install a standard operating system. Jon Masters of Red Hat and others have led efforts to standardize the boot process and environment for ARMv8 servers, using UEFI for the boot process and ACPI for machine description. The move from Device Tree to ACPI has caused some grumbling from vendors, but it's a relatively straightforward evolutionary step, and much simpler than jumping from the machine number approach directly to ACPI.

This in turn has led to the development of the ARM [_Server Base System Architecture_](https://lwn.net/Articles/584123/) (SBSA) specification, which details the minimum hardware requirements for a standard ARMv8 server, and the [_Server Base Boot Requirements_](http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.den0044b/index.html) (SBBR) specification, which details how the boot firmware should work. Any system following these specifications should be able to boot a standard ARMv8 operating system from any vendor. Since this is a clean design in which we learned from previous industry mistakes, there is high hope that the boot situation on ARMv8 will be even better standardized than on x86_64.

Since EFI and ACPI were previously very x86-specific and tied to particular Windows releases, adopting these for ARM systems and non-Windows operating systems has led to changes in the management and governance of these standards.

### ARMv8 on Non-Server Devices

It remains to be seen what situation will develop on non-server ARMv8A devices, which generally fall into two categories:

- Cellphones, tablets, and fixed-function devices (SAN, NAS, Routers)
- Development boards / hackable devices

Later version of uBoot support UEFI, and the _Embedded Base Boot Requirements_ ([EBBR](https://developer.arm.com/products/architecture/platform-design/%E2%80%9C/-/media/developer/products/Embedded_Base_Boot_Requirements.pdf?revision=d6615c1b-09c9-4dd7-819a-3c471703ee34%E2%80%9D)) standard codifies the requirements for an embedded system based on UEFI.

Development boards will probably initially ship with u-Boot based systems with or without UEFI, but it is hoped that SBSA and/or EBBR lead to unification of these approaches. The [96boards](http://96boards.org/) project is having a significant impact in bringing under-$100 ARMv8 Consumer Edition (mobile processor-based) and under-$500 Enterprise Edition (enterprise server processor-based) development boards to market; while the Consumer Edition (CE) boards ship with u-boot and/or uefi and/or the Android bootloader, the Enterprise Edition (EE) boards are expected to conform to SBSA.

## Implementations of ARMv8

ARM does not implement its processors; except for a few test kits (e.g., the "Juno" ARMv8 systems), ARM licenses their intellectual property to other companies for implementation. This has resulted in dozens of different companies producing ARM processors.

ARM licenses their technology at several different levels:

- An _architectural licensee_ has the right to develop their own implementation of a particular ARM architecture. Apple (A7+ CPU) and Applied Micro (X-Gene) fall into this category. These chips execute standard ARMv8A software, but because the designs are prepared by the licensees, the performance profiles may be different from those of other manufacturers and those designed by ARM - for example, branch prediction and pipelining may be different, and some instructions will be slower while other instructions are faster than the corresponding ARM-designed devices. Therefore, optimizations may have different effects. To perform appropriate optimizations for a particular implementation, a compiler can use a "cost table" which contains information about the performance of specific instructions, enabling the compiler to pick the optimal combination of instructions for a particular operation.
- A _design licensee_ has the right to produce devices using one or more of ARM's chip designs. This requires far less expertise on the part of the licensee, and allows what is basically a cut-and-paste of the standard ARM core(s) into the chip design that the licensee is working on. This enables the licensee to focus on the other IP (intellectual property) blocks on the chip, such as GPUs, memory controllers, radios (cellular, wifi, bluetooth, GPS, zigbee, and so forth), accelerators, and various peripherals. Most ARM licensees fall into this category. Current standard ARM chip designs are designated "Cortex" - the Cortex-A5, A7, A8, A9, A12, A15, and A17 are ARMv7-A 32-bit designs, and the Cortex-A35, A53, A57, A72 , A73, A75, and A76 are ARMv8-A 32/64-bit designs.

### System-on-a-Chip Implementations

Most ARMv8 implementations are a System-On-a-Chip (SoC), which means that the processor cores, memory controller, interrupt controller, input/output (IO) bus adapters, and graphics system/GPU are all on a single chip. In some mobile chips, radio (WiFi/LTE/Bluetooth/GPS) systems may also be integrated into the SoC. This means that only the PHY (physical level circuits), RAM, flash, and power controller need to be added to create a fully-functioning system.

Most SoCs offer more features than are used in any one system and more features than can be exposed on the pins which are physically present on the chip. A pin multiplexor system, or PinMux, is used to select which signals are currently exposed on the SoC's pins. For example, a given group of pins could be used for an SPI serial interface, or an ${I^{2}C}$ serial interface, or as general-purpose input/output (GPIO) connections, but are only connected to one of those functions at a time.

In addition, a number of SoCs use high-speed serial interfaces for multiple purposes -- a pool of 40 multi-gigabit-per-second serial interfaces might be provided, for example, and it is up to the board designer to decide how many of those interfaces to use as the lanes of a PCIe bus, gigabit (or faster) ethernet ports, or as SATA ports.

The operating system kernel has the required mechanisms to set up the PinMux as needed for a given board, and to connect serial controllers to the appropriate drivers. In order to do this, it is critical that the kernel receive not only an accurate description of the SoC, but also an accurate description of how that SoC is wired up in the current system. This information is passed in via a Device Tree or an ACPI description (ACPI is mandated by the SBSA specification for servers).

## Confusing Numbering Schemes

The ARM space is littered with very confusing (and conflicting) numbering schemes.

- Early ARM chips had numbers that were different from the corresponding architecture levels. For example, the ARM11 processor is an ARMv6 chip, which is much lower-performing than other parts with lower numbers, including the ARMv7-level Cortex-A5, -A7, -A8, and -A9 devices.
- Cortex designations are not in order of release date, features, or power consumption, and are only loosely in order by performance. Cortex-A8 (single-core only) and Cortex-A9 (available in single- and multi-core) are some of the older designs in the series; Cortex-A15 chips add hardware virtualization support. The ARMv7 (32 bit) Cortex-A12, Cortex-A7, and Cortex-A5 designs followed, with varying power/performance profiles. Cortex-A35, -A53, -A55, -A57, -A72, -A73, -A75, and -A76 chips are ARMv8A.
- Other companies have introduced chips with confusingly similar designations. The Apple A7/A8/A9/A10/... chips are not ARM designs and have nothing to do with the similarly-named Cortex-A7/-A9/... (or any other Cortex cores); the Apple A7, for example, is roughly in the same performance category as a dual-core Cortex-A53. Allwinner and AMD have also used chip designations starting with A (Allwinner A10, A20, and A80, and AMD Opteron A1100, for example); these are unrelated to the Apple A-series chips and to the Cortex A designations. Likewise, the Nvidia K1 is unrelated to the AMD K12.

## big.LITTLE and DynamIQ

ARM cores may be combined in compatible groups of higher-performance/high-consumption and lower-performance/lower-consumption devices. These configurations were enabled by a technology which Arm called big.LITTLE, and a related but newer cluster technology which Arm calls DynamIQ.

The advantage to big.LITTLE/DynamIQ lies in the ability to turn off cores that are not needed. Thus, when a device such as a cellphone is performing background tasks (screen off), one little core may be used; when the device is performing basic tasks, a couple of little cores or one big core may be used; and when very demanding tasks are performed, several big cores (or all of the cores) may be turned on.

Balancing power vs. performance can be very difficult - for example, will it require less energy to keep a little core on constantly to perform a background task, or run a big core for a fraction of a second every few seconds and sleep all of the cores the rest of the time? Issues such as core affinity and cache coherency also play into balancing decisions.

Wikipedia has a [page on big.LITTLE](http://en.wikipedia.org/wiki/ARM_big.LITTLE) that includes a list of known implementations.
