---
id: host-setup
title: Host Setup
sidebar_position: 4
description: Host Setup
---

# Host Setup

For [SPO600](../landing-page.md), remote access to [Linux systems](./servers.md) is provided. Howerver, it is strongly recommended that you have access to a personal x86_64 (64-bit AMD/Intel) or ARM64 Linux system. I recommend running the latest release of [Fedora](http://get.fedoraproject.org/) to match the [class ARM servers](./servers.md), and because Fedora has a very up-to-date version of the gcc compiler which supports [SVE2](/H-ARM/sve2.md).

**This system could be set up:**

- On your laptop
- As a virtual machine on your laptop
- On a computer at your home, ideally with [SSH](./ssh.md) access (so you can connect to your home system from class)
- On a USB drive or external disk pack

You may want to installing virtual machine/emulation/simulation software on this machine, in which case a fast/large system is desirable.

**Recommended system configuration (especially if using emulation):**

- Install a 64-bit Linux operating system ([Fedora](https://getfedora.org/) is recommended)
- Minimum 2GB RAM
- Minumum 32GB disk space

**Initial software to install:**

- Development tools and libraries (on Fedora: `dnf groupinstall "Development Tools" "Development Libraries"`).
- The qemu-aarch64 emulation tool (on Fedora: `dnf install qemu-user`).
- A GUI is optional and may not be required (especially if the system is being accessed remotely).
