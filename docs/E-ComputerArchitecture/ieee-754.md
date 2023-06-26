---
id: ieee-754
title: IEEE 754
sidebar_position: 16
description: IEEE 754
---

# IEEE 754

The Institute of Electrical and Electronics Engineers (IEEE) standard 754 defines a format for floating-point numbers used in most modern computers. ISO 60559 is an international version of the same standard (though it may lag behind the IEEE version's updates).

IEEE 754 defines a single-precision floating point format with 32 bits (24 significand bits (one of which is implied), 8 exponent bits, and one sign bit), including special values (such as infinity and not-a-number (NaN)). It then defines half-, double-, quadruple-, and octuple-precision versions, with 16, 64, 128, and 256 bits, respectively.

In IEEE 754, both the number of significand and exponent bits vary with the format. Therefore, naming the various lengths as different "precisions" is not completely accurate, because they can also express varying ranges of values. For this reason, other formats such as bfloat16, a 16-bit floating point format with the same dynamic range as IEEE 754 single-precision but with fewer significand bits, have become popular for particular applications such as machine learning.

The IEEE 754 standard also defines interchange formats, rounding rules, and exceptions, as well as rarely-used decimal floating-point formats.

## References

- [Wikipedia article on IEEE 754](https://en.wikipedia.org/wiki/IEEE_754)
- [IEEE 754 Calculator](https://www.h-schmidt.net/FloatConverter/IEEE754.html)
