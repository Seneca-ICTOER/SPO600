"use strict";(self.webpackChunkSPO600=self.webpackChunkSPO600||[]).push([[5256],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(r),p=a,f=l["".concat(d,".").concat(p)]||l[p]||m[p]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=l;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},8344:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(3117),a=(r(7294),r(3905));const i={id:"addressing-mode",title:"Addressing Mode",sidebar_position:3,description:"Addressing Mode"},o="Addressing Mode",s={unversionedId:"E-ComputerArchitecture/addressing-mode",id:"E-ComputerArchitecture/addressing-mode",title:"Addressing Mode",description:"Addressing Mode",source:"@site/docs/E-ComputerArchitecture/addressing-mode.md",sourceDirName:"E-ComputerArchitecture",slug:"/E-ComputerArchitecture/addressing-mode",permalink:"/SPO600/E-ComputerArchitecture/addressing-mode",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SPO600/tree/main/docs/E-ComputerArchitecture/addressing-mode.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"addressing-mode",title:"Addressing Mode",sidebar_position:3,description:"Addressing Mode"},sidebar:"courseNotesSidebar",previous:{title:"Address",permalink:"/SPO600/E-ComputerArchitecture/address"},next:{title:"Assembler",permalink:"/SPO600/E-ComputerArchitecture/assembler"}},d={},c=[],u={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"addressing-mode"},"Addressing Mode"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Addressing modes")," specify how the data/arguments for an ",(0,a.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/instruction"},"instruction")," are retrieved/stored."),(0,a.kt)("p",null,"Addressing modes may include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implicit - Any arguments are implied by the instruction (e.g., a return-from-subroutine instruction, which will pop a value off the stack or retrieve it from a Link Register and place it in the ",(0,a.kt)("a",{parentName:"li",href:"/SPO600/E-ComputerArchitecture/register#program-counter"},"program counter")," - no additional arguments are required to complete the ",(0,a.kt)("a",{parentName:"li",href:"/SPO600/E-ComputerArchitecture/operation"},"operation"),")."),(0,a.kt)("li",{parentName:"ul"},"Register - Data is read from (or written to) a register."),(0,a.kt)("li",{parentName:"ul"},"Absolute - An exact memory address is specified."),(0,a.kt)("li",{parentName:"ul"},"Immediate - An ",(0,a.kt)("a",{parentName:"li",href:"/SPO600/E-ComputerArchitecture/immediate-value"},"immediate value")," is used used as an argument."),(0,a.kt)("li",{parentName:"ul"},"Indirect - A memory address is specified, which contains the address of the memory for reading/writing. Effectively, the argument in this addressing mode is the address of a pointer to the actual data."),(0,a.kt)("li",{parentName:"ul"},"Base plus offset - An absolute or indirect memory address is specified as a base address along with a register (or immediate value) that contains an offset value. The base and offset values are added together, and the resulting address is used to read/write data. This is useful for accessing arrays (where the base is the start of the array and the offset is the array index multiplied by the element size) or a device such as a memory-mapped video display (where the base is the start of the display and the offset is the character or pixel within the display). In some cases, the computed address may be written back to a register, so that as you iterate through a loop, successive data locations are accessed."),(0,a.kt)("li",{parentName:"ul"},"Relative - A ",(0,a.kt)("a",{parentName:"li",href:"/SPO600/E-ComputerArchitecture/signed"},"signed or unsigned")," offset is added to the current ",(0,a.kt)("a",{parentName:"li",href:"/SPO600/E-ComputerArchitecture/register#program-counter"},"program counter")," to obtain a new address. This is most often used for branches or jumps but is also used for some kinds of data access. Code that uses relative addresses can be easily relocated in memory and is therefore sometimes called position-independent code (PIC)."),(0,a.kt)("li",{parentName:"ul"},"Stack - Values are pushed to or popped from the ",(0,a.kt)("a",{parentName:"li",href:"/SPO600/E-ComputerArchitecture/stack"},"stack"),".")),(0,a.kt)("p",null,"(There are many other modes available on some architectures)."),(0,a.kt)("p",null,"The addressing modes available, and the valid combinations of operations and addressing modes, are significant features of an ",(0,a.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/instruction-set-architecture"},"Instruction Set Architecture"),"."))}m.isMDXComponent=!0}}]);