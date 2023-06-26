---
id: atomic-operation
title: Atomic Operation
sidebar_position: 5
description: Atomic Operation
---

# Atomic Operation

An _atomic operation_ is one that cannot be interrupted. These operations are typically used for acquiring locks.

Consider the following code, intended to set a "lock" in shared memory so that only one thread or process performs a particular action at a time:

```c
if (lock == 0) {
  lock++;
  /* Perform exclusive action */
  lock--;
} else {
  abort();
}
```

If another process or thread writes to the lock variable between the lock comparison (lock == 0) and setting the lock (lock++), then the lock could fail to ensure exclusive action.

There are two ways to accomplish an atomic operation:

1. Use a single machine instruction.
2. Tell the operating system in advance not to interrupt the operation.

GCC provides [intrinsics](./compiler-intrinsics.md) for some atomic operations.

(Note that in the above example, even the `lock++` statement may not be atomic - it will typically compile into the three-operation sequence "load-increment-store", and its possible that two processes or threads could each perform this operation in an interleaved fashion and increment `lock` by just one instead of two).
