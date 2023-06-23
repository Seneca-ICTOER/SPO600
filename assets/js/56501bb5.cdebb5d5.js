"use strict";(self.webpackChunkSPO600=self.webpackChunkSPO600||[]).push([[6697],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},131:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var a=r(3117),n=(r(7294),r(3905));const i={id:"aarch64-register-and-instruction-quick-start",title:"AArch64 Register and Instruction Quick Start",sidebar_position:7,description:"AArch64 Register and Instruction Quick Start"},s="AArch64 Register and Instruction Quick Start",o={unversionedId:"F-AssemblyLanguage/aarch64-register-and-instruction-quick-start",id:"F-AssemblyLanguage/aarch64-register-and-instruction-quick-start",title:"AArch64 Register and Instruction Quick Start",description:"AArch64 Register and Instruction Quick Start",source:"@site/docs/F-AssemblyLanguage/aarch64-register-and-instruction-quick-start.md",sourceDirName:"F-AssemblyLanguage",slug:"/F-AssemblyLanguage/aarch64-register-and-instruction-quick-start",permalink:"/SPO600/F-AssemblyLanguage/aarch64-register-and-instruction-quick-start",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SPO600/tree/main/docs/F-AssemblyLanguage/aarch64-register-and-instruction-quick-start.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"aarch64-register-and-instruction-quick-start",title:"AArch64 Register and Instruction Quick Start",sidebar_position:7,description:"AArch64 Register and Instruction Quick Start"},sidebar:"courseNotesSidebar",previous:{title:"Syscalls",permalink:"/SPO600/F-AssemblyLanguage/syscalls"},next:{title:"X86 64 Register and Instruction Quick Start",permalink:"/SPO600/F-AssemblyLanguage/x86-64-register-and-instruction-quick-start"}},l={},u=[{value:"Registers",id:"registers",level:2},{value:"General-Purpose Registers",id:"general-purpose-registers",level:3},{value:"Floating-Point and SIMD Registers",id:"floating-point-and-simd-registers",level:3},{value:"Instructions",id:"instructions",level:2},{value:"Starter Kit",id:"starter-kit",level:3},{value:"Resources",id:"resources",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aarch64-register-and-instruction-quick-start"},"AArch64 Register and Instruction Quick Start"),(0,n.kt)("p",null,"This page contains very basic information on the AArch64 mode of the ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/H-ARM/armv8"},"ARMv8")," architecture: the register (ADD LINK) layout and naming and the some basic instructions."),(0,n.kt)("h2",{id:"registers"},"Registers"),(0,n.kt)("h3",{id:"general-purpose-registers"},"General-Purpose Registers"),(0,n.kt)("p",null,"The aarch64 registers are named:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"r0 through r30 - to refer generally to the registers"),(0,n.kt)("li",{parentName:"ul"},"x0 through x30 - for 64-bit-wide access (same registers)"),(0,n.kt)("li",{parentName:"ul"},"w0 through w30 - for 32-bit-wide access (same registers - upper 32 bits are either cleared on load or sign-extended (set to the value of the most significant bit of the loaded value)).")),(0,n.kt)("p",null,"Register '31' is one of two registers depending on the instruction context:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For instructions dealing with the stack, it is the stack pointer, named rsp"),(0,n.kt)("li",{parentName:"ul"},'For all other instructions, it is a "zero" register, which returns 0 when read and discards data when written - named rzr (xzr, wzr)')),(0,n.kt)("p",null,"Usage during ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/F-AssemblyLanguage/syscalls"},"syscall"),"/function call:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"r0-r7 are used for arguments and return values; additional arguments are on the stack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"For syscalls, the syscall number is in r8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"r9-r15 are for temporary values (may get trampled)")),(0,n.kt)("li",{parentName:"ul"},"r16-r18 are used for intra-procedure-call and platform values (avoid)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"The called routine is expected to preserve r19-r28 ","*","*","*"," These registers are generally safe to use in your program.")),(0,n.kt)("li",{parentName:"ul"},"r29 and r30 are used as the frame register and link register (avoid)")),(0,n.kt)("p",null,"See the ARM Procedure Call Reference for details."),(0,n.kt)("h3",{id:"floating-point-and-simd-registers"},"Floating-Point and SIMD Registers"),(0,n.kt)("p",null,"Aarch64 also defines a set of large registers for floating-point and single-instruction/multiple-data (SIMD) operations. For details, refer to the ARM documentation."),(0,n.kt)("h2",{id:"instructions"},"Instructions"),(0,n.kt)("h3",{id:"starter-kit"},"Starter Kit"),(0,n.kt)("p",null,"These instructions are sufficient to complete the ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/B-Labs/lab4"},"SPO600 Assembler Lab"),'; remember to replace the generic register names with ones that specify width (for example, replace "r0" with "x0" or "w0").'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-assembly"},'add r0,r1,r2      // load r0 with r1+r2\nadd r0,r1,99      // load r0 with r1+99\nadr r0,label      // load r0 with the address label (this actually calculates an address from the PC plus an offset)\nadrp r0,label     // load r0 with the 4K page containing label (this calculates an address from the PC plus an offset, and is often followed by an ADD instruction so that the register points exactly to the label)\nbl label          // branch (with link) to label - this is a procedure / subroutine / function call\nbr label          // branch to label - this is a goto\nbr register       // branch to the address in register\nb.eq label        // branch to label if equal\nb.ne label        // branch to label if not equal\nb.lt label        // branch to label if less\nb.gt label        // branch to label if greater\ncmp r0,r1         // compare register r0 with register r1. The comparison sets flags in the processor status register which affect conditional branches.\ncmp r0,99         // compare the number 99 with register r0. The comparison sets flags in the processor status register which affect conditional branches.\nldr r0,[r1,0]     // load register r0 from the address pointed to by (r1 + (0 * size)) where size is 8 bytes for 64-bit stores, 4 bytes for 32-bit stores\nldr w0,[r1,0]     // like above but reads 32 bits only - note the use of w0 instead of r0 for the source register name\nldrb w0,[r1,0]    // like above but reads 1 byte (8 bits) only - note the use of w0 for the source register name\nldur r0,[r1,0]    // load register r0 from the address pointed to by (r1 + 0) - the mnemonic means "load unscaled register"\nmov r0,r1         // move data from r1 to r0\nmov r0,99         // load r0 with 99 (only certain immediate values are possible)\nret               // return from subroutine (counterpart to bl)\nstr r0,[r1,0]     // store register r0 to address pointed to by (r1 + (0 * size)) where size is 8 bytes for 64-bit stores\nstrb w0,[r1,0]    // like str but writes one byte only - note the use of w0 for the source register name\nstur r0,[r1,0]    // store register r0 to the address pointed to by (r1 + 0) - the mnemonic means "store unscaled register"\nsvc 0             // perform a syscall\nmsub r0,r1,r2,r3  // load r0 with r3-(r1*r2) (useful for calculating remainders)\nmadd r0,r1,r2,r3  // load r0 with r3+(r1*r2)\nmul r0,r1,r2      // load r0 with r1*r2 (actually an alias - see ARM ARM)\npush r0           // push r0 onto the stack\npop r0            // pop r0 off the stack\nudiv r0,r1,r2     // unsigned - divide r1 by r2, places quotient into r0 - remainder is not calculated (use msub)\n')),(0,n.kt)("p",null,"Note the syntax:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Register (ADD LINK) names are not prefixed."),(0,n.kt)("li",{parentName:"ul"},"Immediate values (ADD LINK) are not prefixed with a character (they may be prefaced with # if desired)."),(0,n.kt)("li",{parentName:"ul"},"Indirect memory access is indicated by ","[","square brackets","]","."),(0,n.kt)("li",{parentName:"ul"},"Hexadecimal values are indicated by a 0x prefix."),(0,n.kt)("li",{parentName:"ul"},"Character values are indicated by quotation marks. Escapes (such as '\\n') are permitted."),(0,n.kt)("li",{parentName:"ul"},"Destinations are given as the first argument (mov r0, r1 moves INTO r0 FROM r1; you can think of this as r0=r1)."),(0,n.kt)("li",{parentName:"ul"},"For the LDR/STR instructions: you can append a character indicating the number of bits (lowest) to be loaded or stored:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Q = Quadword = 64 bits"),(0,n.kt)("li",{parentName:"ul"},"D = Double word = 32 bits"),(0,n.kt)("li",{parentName:"ul"},"W = Word = 16 bits"),(0,n.kt)("li",{parentName:"ul"},"B = Byte = 8 bits")))),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ARM Aarch64 documentation",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://developer.arm.com/"},"ARM Developer Information Centre"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.arm.com/docs/den0024/latest"},"ARM Cortex-A Series Programmer\u2019s Guide for ARMv8-A")),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("em",{parentName:"li"},"short")," guide to the ARMv8 instruction set: ",(0,n.kt)("a",{parentName:"li",href:"https://www.element14.com/community/servlet/JiveServlet/previewBody/41836-102-1-229511/ARM.Reference_Manual.pdf"},"ARMv8 Instruction Set Overview"),' ("ARM ISA Overview")'),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("em",{parentName:"li"},"long")," guide to the ARMv8 instruction set: ",(0,n.kt)("a",{parentName:"li",href:"https://developer.arm.com/docs/ddi0487/latest/arm-architecture-reference-manual-armv8-for-armv8-a-architecture-profile"},"ARM Architecture Reference Manual ARMv8, for ARMv8-A architecture profile"),' ("ARM ARM")'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.arm.com/docs/ihi0055/latest/procedure-call-standard-for-the-arm-64-bit-architecture"},"Procedure Call Standard for the ARM 64-bit Architecture (AArch64)")))),(0,n.kt)("li",{parentName:"ul"},"GAS Manual - Using as, The GNU Assembler: ",(0,n.kt)("a",{parentName:"li",href:"https://sourceware.org/binutils/docs/as/"},"https://sourceware.org/binutils/docs/as/"))))}d.isMDXComponent=!0}}]);