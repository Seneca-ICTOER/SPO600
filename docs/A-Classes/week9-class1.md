---
id: week9-class1
title: Week 9 - Class 1
sidebar_position: 17
description: Week 9 - Class 1
---

# Week 9 - Class I

## GNU ifunc & Project Overview

## Video

- [Edited summary](https://web.microsoftstream.com/video/28a4f8e7-c96c-4662-9adc-8d67aa409868)

## iFunc

GNU iFunc is a facility for handling indirect functions. The basic premise is that you prototype the function to be called, add the `ifunc` attribute to that prototype, and provide the name of a resolver function. The resolver function is called at program initialization, and returns a pointer to the function to be executed when the function referenced in the prototype is called. The resolver typically picks one of several implementations based on the capabilities of the machine on which the code is running; for example, it could return a pointer to a non-SVE, SVE, or SVE2 implementation of a function based on cpu capabilities (on an Aarch64 system) or it could return a pointer to an SSE, SSE2, AVX, or AVX512 implementation (on an x86_64 system).

There is a [GitHub repository](https://github.com/ctyler/ifunc-aarch64-demo) available with example iFunc code -- please clone this to [israel.cdot.systems](/D-ExtraResources/servers.md#aarch64-israelcdotsystems) and build and test the code there. You should see different results if you run the output executable directly (`./ifunc-test`) and run it through the qemu-aarch64 tool, which will emultate SVE2 capabilities (`qemu-aarch64 ./ifunc-test`). Make sure you understand how the code works.

## Reading/Resources

- [GNU iFunc attribute in GCC manual](https://gcc.gnu.org/onlinedocs/gcc-12.2.0/gcc/Common-Function-Attributes.html#index-ifunc-function-attribute)
- [iFunc on the glibc wiki](https://sourceware.org/glibc/wiki/GNU_IFUNC)
