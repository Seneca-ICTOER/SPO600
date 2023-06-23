---
id: assembly-language
title: Assembly Language
sidebar_position: 1
description: Assembly Language
---

# Assembly Language

_Assembly language_ is a [symbolic](./symbol.md) representation of machine language (ADD LINK). It is therefore very architecture-specific (ADD LINK).

Each instruction is represented by a short mnemonic word such as "LDR" for _Load Register_, "MOV" for _move_, or "MUL" for _multiply_, followed by (optional) arguments. The addressing mode (ADD LINK) is implied by the format of the arguments. Different assemblers (ADD LINK) use slightly different syntax.

## Examples

### x86

Here is a "Hello, World!" program written for an x86_64 Linux system using the [GNU Assembler (gas/as)](https://sourceware.org/binutils/docs/as/) syntax (which is the main assembler used in open source projects such as the Linux kernel, as well as the SPO600 (ADD LINK) course), using Linux [Syscalls](./syscalls.md):

```assembly
.text
.globl _start
_start:
    mov $len, %edx     /* file descriptor: 1 is stdout */ 
    mov $msg, %ecx     /* message location (memory address) */
    mov $1, %ebx       /* message length (bytes) */
    mov $4, %eax       /* write is syscall #4 */
    int $0x80          /* invoke syscall */

    mov $0, %ebx       /* exit status: 0 (good) */
    mov $1, %eax       /* kernel syscall number: 1 is sys_exit */
    int $0x80          /* invoke syscall */

.data
msg:
    .ascii "Hello, World!\n"
    len = . - msg
```

Here is a similar program for a 32-bit x86 system using the [Nasm](http://www.nasm.us/xdoc/2.11/html/nasmdoc1.html#section-1.1) syntax:

```assembly
section    .text
global    _start

_start:
    mov    edx,len          ; message length (bytes)
    mov    ecx,msg          ; message location (memory address)
    mov    ebx,1            ; file descriptor: 1 is stdout
    mov    eax,4            ; kernel syscall number: 4 is sys_write
    int    0x80             ; invoke syscall

    mov    ebx,0            ; exit status: 0 (good)
    mov    eax,1            ; kernel syscall number: 1 is sys_exit
    int    0x80             ; invoke syscall

section    .rodata

msg    db    'Hello, world!\n'
len    equ    $ - msg
```

Notice that the order of the arguments in some lines is reversed between the two assemblers, and the prefixes to symbols and values also change.

### ARM (32-bit)

This is written in [GNU Assembler (gas/as)](https://sourceware.org/binutils/docs/as/) syntax using Linux [Syscalls](./syscalls.md):

```assembly
.text
.globl _start
_start:

     mov     %r0, $1     /* file descriptor: 1 is stdout */
     ldr     %r1, =msg   /* message location (memory address) */
     ldr     %r2, =len   /* message length (bytes) */
     mov     %r7, $4     /* write is syscall #4 */
     swi     $0          /* invoke syscall */

     mov     %r0, $0     /* exit status: 0 (good) */
     mov     %r7, $1     /* kernel syscall number: 1 is sys_exit */
     swi     $0          /* invoke syscall */

.data
msg:
     .ascii      "Hello, world!\n"
     len = . - msg
```

### ARM (64-bit) - AArch64

This is also in [GNU Assembler (gas/as)](https://sourceware.org/binutils/docs/as/) syntax using Linux [Syscalls](./syscalls.md):

```assembly
.text
.globl _start
_start:

	mov     x0, 1           /* file descriptor: 1 is stdout */
	adr     x1, msg   	/* message location (memory address) */
 	mov     x2, len   	/* message length (bytes) */
 
 	mov     x8, 64     	/* write is syscall #64 */
	svc     0          	/* invoke syscall */

	mov     x0, 0     	/* status -> 0 */
	mov     x8, 93    	/* exit is syscall #93 */
	svc     0          	/* invoke syscall */

.data
msg: 	.ascii      "Hello, world!\n"
len= 	. - msg
```

### 6502

Here is the same "Hello World" program in 6502 (ADD LINK) assembler as used in the 6502 Emulator (ADD LINK), using the ROM routines (ADD LINK) for output:

```assembly
define SCINIT $ff81 ; initialize/clear screen
define CHROUT $ffd2 ; output character to screen

	JSR SCINIT	; clear screen
	LDY #$00	; set Y index to zero

loop:	LDA msg,Y	; get a character
	BEQ done	; quit if character is null
	JSR CHROUT	; output the character
	INY		; increment index
	JMP loop	; get next character

done:	BRK		; break (stop program)

msg:	
	DCB "H","e","l","l","o",$2C,$20
	DCB "W","o","r","l","d","!",$0d, $00
```

## Resources

- [Assembler Basics](./assembler-basics.md)
- ["Hello World" in many different types of assembler](http://leto.net/code/asm/hw_assembler.php)
- [x86_64 Register and Instruction Quick Start](./x86-64-register-and-instruction-quick-start.md)
- [aarch64 Register and Instruction Quick Start](aarch64-register-and-instruction-quick-start.md)
