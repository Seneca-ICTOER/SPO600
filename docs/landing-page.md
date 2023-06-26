---
id: landing-page
title: Welcome to SPO600
sidebar_position: 1
slug: /
description: Landing Page for SPO600
---

# Welcome to SPO600 - Software Portability and Optimization

## Quick Links

| [Weekly Schedule](./weekly-schedule.md) | [Participants Table](/D-ExtraResources/participants-table.md) | [Telescope](https://telescope.cdot.systems/) | [Course Outline](https://ict.senecacollege.ca/course/spo600) | [Winter 2022 Addendum](/files/SPO600_Winter_2022_addendum.pdf) | [Course Policies](/D-ExtraResources/course-policies.md) |
| --- | --- | --- | --- | --- | --- |

## Software Portability and Optimization

Software is sometimes written to work on a specific computer architecture (type of computer), such as on Intel-compatible x86_64 PCs, or IBM Z-series mainframes. This course deals with the challenge of making software compatible with a new architecture in one of two ways:

1. Adding additional architecture-specific code so that the software can run on the new architecture ('porting' the software), or
2. Removing the architecture-specific code and replacing it with architectural-neutral code, so that it can run on a variety of system architectures (making the software 'portable').

In either case, software can be altered or it can be built in such a way that performance is optimized - so that runs faster, or it uses less memory or other resources. In order to test optimizations, we'll be performing benchmark testing before and after modification.

SPO600 is a professional option in the [Seneca School of Information and Communication Technology](http://ict.senecac.on.ca/) [CTY](https://ict.senecacollege.ca/academic-programs/cty/overview) and [CPA](https://ict.senecacollege.ca/academic-programs/cpa/overview) programs. First offered: Winter 2014.

## SPO600 in Winter 2022

A new computer architecture has appeared: 64-bit ARM systems (also known as "ARM64" or "AArch64"). While AArch64 is showing up in cell phones and tablets, it is also poised to pounce on the datacentre. Most of the work of porting core software to AArch64 has been completed, and at this point, just about everything that runs on x86_64 Linux systems will run an AArch64 systems. However, the x86_64 architecture has been around for many years, and software has been well-optimized to work on that architecture; but AArch64 is relatively new, and it may be possible to get better performance with additional tuning and optimization.

In this semester, the SPO600 course will be focused on optimizing software on AArch64 systems, and specifically on building infrastructure to make it easier to use indirect functions (similar to the glibc "ifunc" capability) for runtime implementation selection. This technique is widely used in a few places -- such as in glibc, the GNU standard C library -- but it would be great if we could easily use it in other places. This would allow (for example) two versions of a particular function to be automatically compiled, with and without support for particular hardware features (such as Scalable Vector Extensions (SVE/SVE2)), and for the best version to be automatically used at runtime.

Note that, unlike some other project-based courses, the results of the projects done in SPO600 will eventually be incorporated into the actual "upstream" open source software, and have a real impact on other people. For this reason, projects must be completed in collaboration with the relevant open source communities, using relevant [communication tools](/D-ExtraResources/communication-tools.md). Work performed in this course will be licensed using the relevant open source licenses used by the associated community.

Working in an open source community provides the opportunity to build solid real-world experience, your technical skills and reputation, and a network of contacts, all of which are useful in developing your career.

### Course Materials / System Requirements

- Course information and labs are online - no textbook is required.

**Required:**

- You **must** be able to [SSH](/D-ExtraResources/ssh.md) to [computer systems](/D-ExtraResources/servers.md) at Seneca (CDOT). You can do this using an SSH client program, included with or available for almost all platforms.
- You **must** be able to participate in synchronous (live) streaming classes and be able to view/stream video content.

### Professor

SPO600 is taught by Chris Tyler.

### Succeeding in SPO600

There are three keys to success in this course:

1. **Blog**. Tell your professor, your colleagues, the community, and everyone else what you're doing. Write a lot and write well, include good technical content, and incorporate links to all relevant resources and the product of your work, and write often. Almost all of your work in this course is submitted by blogging.
2. **Be ambitious**. In this course, you will need to be the driving force behind your project. The community will help you, but it's up to you to supply the energy.
3. **Work _in_ the open source community**. The projects we will be doing are too large and too unfamiliar for you to succeed entirely on your own. You will need to use the community's knowledge, connections, and resources to succeed well. Respect the community's standards, tell the community what you're doing, ask when you have a question, and pull your own weight within the community.


**It's best to plan to make a bit of progress each day.**

## Weekly Outline

See the Current [SPO600 Weekly Schedule](./weekly-schedule.md) for specific dates and topics.

## Course Outline

See the online [course outline](https://ict.senecacollege.ca/course/spo600) for course details, and the [Winter 2022 Addendum](/files/SPO600_Winter_2022_addendum.pdf) for additional course details.
