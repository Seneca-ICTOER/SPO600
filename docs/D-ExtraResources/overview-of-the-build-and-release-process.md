---
id: overview-of-the-build-and-release-process
title: Overview of the Build and Release Process
sidebar_position: 18
description: Overview of the Build and Release Process
---

# Overview of the Build and Release Process

_Software Build and Release_ refers to the specialized subfield of system administration that focuses on the process of building software from source code for the purpose of (initially) testing and (ultimately) releasing and distributing the software.

## Steps in the Build and Release Process

The steps involved in each Build and Release (B&R) process vary according to the specific needs and circumstances of the process -- for example, the purpose of the build process, the development context (single developer, small team, large team, or open source community), the operating system, language, and library platforms used, the software packaging format, and the way in which the released software will be distributed.

The steps generally include some combination of these:

- **Version Control** - Most B&R processes take input from a version control system (VCS), which is used to track the software as it is developed. Common version control systems include the Concurrent Version System (CVS), Subversion (SVN), Mercurial (hg), Git, and Bazaar (bz). At this step in the build process, the code is checked out from the VCS.
- **Dependency Resolution** - The required build dependencies, both in terms of tools and libraries, are determined and satisfied.
- **Compilation** - The source files are compiled into binary files. This applies to software, which is compiled from source code written in a language such as C into machine code, but also applies to other resources such as fonts, graphics, game levels, documentation, and so forth, which are similarly converted from a source input format to a machine-readable output format, ready for use.
- **Testing** (or QA) - The software is tested, often using a combination of automated test suites and manual tests. Testing may be performed at multiple points in the process.
- **Packaging** - The files comprising the software (and related data and documentation) are combined into a form suitable for installation, typically in a single file. Common package formats include RPM, deb, and MSI.
- **Composing**- Multiple packages and related collateral are combined into a format ready for distribution -- for example, an ISO disk image, or a software repository.
- **Signing** - A [Public Key Cryptography](./public-key-cryptography.md) signature is added to the software (or package) to prove the authenticity and origin of the software.
- **Release** - The software is officially released. Depending on how the software is distributed, this may mean sending a "Gold Disk" or "Release To Manufacturing" (RTM) master media copy (USB or CD/DVD disc image) to a media duplication facility, or posting the software on a master site for download by users (or by mirror sites). Note that thousands of build cycles may be processed during software development and testing before the product is considered suitable for release.
- **Distribution** - Physically shipping the software media, if in physical form; or making it available for download; or pushing it to automated update systems.
- **Mirroring** - Copying the software to multiple servers so that a high volume of downloads can be accommodated at one time. Typically, mirrors will be placed in different locations, where the "locations" are defined more by network topology than physical geography.

## Qualities of the Build and Release Process

- **Repeatability** - Given the same inputs, the B&R process must reliably produce the same outputs every time.
- **Automation** - Since portions of the B&R process will be repeated thousands of times through the life of a product, automation is used to ensure consistency, reduce labour, and maximize throughput.
- **Speed/efficiency** - To enable fast development, testing, and patching cycles, B&R processes are usually optimized for speed, using a number of strategies including distributed processing: build jobs may be spread across dozens or hundreds of machines.
- **Security** - It's important that the build processes guard against the introduction of malicious code into the distributed software.
