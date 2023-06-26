"use strict";(self.webpackChunkSPO600=self.webpackChunkSPO600||[]).push([[2422],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),h=n,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7860:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var a=r(3117),n=(r(7294),r(3905));const i={id:"machine-language",title:"Machine Language",sidebar_position:21,description:"Machine Language"},o="Machine Language",c={unversionedId:"E-ComputerArchitecture/machine-language",id:"E-ComputerArchitecture/machine-language",title:"Machine Language",description:"Machine Language",source:"@site/docs/E-ComputerArchitecture/machine-language.md",sourceDirName:"E-ComputerArchitecture",slug:"/E-ComputerArchitecture/machine-language",permalink:"/SPO600/E-ComputerArchitecture/machine-language",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SPO600/tree/main/docs/E-ComputerArchitecture/machine-language.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{id:"machine-language",title:"Machine Language",sidebar_position:21,description:"Machine Language"},sidebar:"courseNotesSidebar",previous:{title:"Instruction",permalink:"/SPO600/E-ComputerArchitecture/instruction"},next:{title:"Memory Prefetch",permalink:"/SPO600/E-ComputerArchitecture/memory-prefetch"}},s={},l=[{value:"General Format",id:"general-format",level:2},{value:"Relationship to Assembly Language",id:"relationship-to-assembly-language",level:2},{value:"Relationship to Other Languages",id:"relationship-to-other-languages",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"machine-language"},"Machine Language"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Machine language"),", ",(0,n.kt)("em",{parentName:"p"},"machine code"),", or ",(0,n.kt)("em",{parentName:"p"},"object code")," is code that is directly executable by a CPU. It consist of a sequence of binary instructions encoded in a machine's ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/instruction-set-architecture"},"Instruction Set Architecture")," (ISA) and is therefore very ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/portable"},"specific")," to a particular ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/computer-architecture"},"architecture"),"."),(0,n.kt)("h2",{id:"general-format"},"General Format"),(0,n.kt)("p",null,"Machine code consists of a series of instructions, each of which specifies an operation and zero or more arguments. Each argument may indicate a ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/register"},"register"),", a ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/address"},"memory address"),", or an ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/immediate-value"},"immediate value"),"."),(0,n.kt)("p",null,"Many early computers encoded the ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/operation"},"operation")," and ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/addressing-mode"},"addressing mode")," as a distinct ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/word#byte"},"byte")," or ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/word"},"word")," called an ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/opcode"},"opcode"),", followed by zero or more additional bytes for the arguments, where the number of additional bytes is implied by the opcode."),(0,n.kt)("p",null,"Other processors encode instructions as bit values packed with a instruction field. For example, specific bits within an instruction word specify the operation, other bits specify the addressing mode, and still other bits specify the register(s) and other arguments."),(0,n.kt)("p",null,"Thus, the length of each instruction may be variable (6502, x86_64) or fixed (ARM) -- a design decision which affects code density, execution speed, and ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/memory-prefetch"},"memory prefetch")," operations."),(0,n.kt)("h2",{id:"relationship-to-assembly-language"},"Relationship to Assembly Language"),(0,n.kt)("p",null,"Machine language is very hard to write and read, although it can be hand-coded on simple processors (it was not uncommon for 6502 programmers to memorize the complete instruction set, for example). It is particularly difficult to write and read when the ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/instruction-set-architecture"},"ISA")," uses bit-packing."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/SPO600/F-AssemblyLanguage/assembly-language"},"Assembly Language"),' (or just "Assembly") is closely related to machine language, but uses a ',(0,n.kt)("a",{parentName:"p",href:"/SPO600/F-AssemblyLanguage/symbol"},"symbolic")," representation of instructions and memory locations and is therefore easier to write and read. A compiler for assembly language is called an ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/assembler"},"assembler"),", and a tool to convert machine code to assembly is called a ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/disassembler"},"disassembler"),"."),(0,n.kt)("p",null,"Assembly is ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/portable"},"architecture-specific")," but allows precise control over the exact instructions which will be executed by the CPU. It is therefore used for the most basic functions of the bootloader and operating system kernel, the lowest-level operating system devices drivers, and code where performance is critical. However, assemblers do not usually perform ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/D-ExtraResources/compiler-optimizations"},"optimizations"),", so code in C or other high-level languages which has been optimized by a good compiler will often perform as well as or better than assembly code unless it is very painstakingly written."),(0,n.kt)("h2",{id:"relationship-to-other-languages"},"Relationship to Other Languages"),(0,n.kt)("p",null,"Since machine language is the only type of code which can be directly executed by a CPU, programs written in other languages must ultimately result in machine language code being executed in some way."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Interpreted languages"),", such as bash, are not converted into machine code, but blocks of machine code within the interpreter are selectively invoked to perform the operations stated in the program or script."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Compiled languages"),", such as C, are converted into machine language instructions by the compiler. The machine language code is stored in a separate object file for later execution."),(0,n.kt)("p",null,"Interpretation and compilation represent the two extreme cases of conversion to machine code. There are intermediate approaches between interpreting and compiling:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Bytecode compilers and interpreters compile source code into a "bytecode" which is like an architecture-independent machine code. The instructions in the bytecode are effectively instructions for a virtual machine that is not modelled after a physical machine. Therefore, they cannot be directly executed by any CPU, but they can be interpreted much more quickly than the original source code because they have already been partially processed. Java and Python both utilize bytecode in the most common implementations.'),(0,n.kt)("li",{parentName:"ul"},"Just-in-time (JIT) interpreters/compilers take source code or bytecode and compile it into machine code on-the-fly. This has three advantages over traditional compilation: (1) the distributed software can be in an architecture-neutral form, (2) any portion of the code which will not be executed is not compiled, and (3) more information is available to the compiler about the execution environment when the compilation is being performed. JIT execution is typically faster than interpretation, but slower than traditional (pre-)compilation, because the compilation step occurs at run time.")))}p.isMDXComponent=!0}}]);