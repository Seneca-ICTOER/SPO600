"use strict";(self.webpackChunkSPO600=self.webpackChunkSPO600||[]).push([[8894],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),a=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=a(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=a(n),f=i,m=l["".concat(s,".").concat(f)]||l[f]||p[f]||o;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=l;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,c[1]=u;for(var a=2;a<o;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},6920:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return a}});var r=n(3117),i=(n(7294),n(3905));const o={id:"instruction-encoding",title:"Instruction Encoding",sidebar_position:18,description:"Instruction Encoding"},c="Instruction Encoding",u={unversionedId:"E-ComputerArchitecture/instruction-encoding",id:"E-ComputerArchitecture/instruction-encoding",title:"Instruction Encoding",description:"Instruction Encoding",source:"@site/docs/E-ComputerArchitecture/instruction-encoding.md",sourceDirName:"E-ComputerArchitecture",slug:"/E-ComputerArchitecture/instruction-encoding",permalink:"/SPO600/E-ComputerArchitecture/instruction-encoding",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SPO600/tree/main/docs/E-ComputerArchitecture/instruction-encoding.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{id:"instruction-encoding",title:"Instruction Encoding",sidebar_position:18,description:"Instruction Encoding"},sidebar:"courseNotesSidebar",previous:{title:"Immediate Value",permalink:"/SPO600/E-ComputerArchitecture/immediate-value"},next:{title:"Instruction Set Architecture",permalink:"/SPO600/E-ComputerArchitecture/instruction-set-architecture"}},s={},a=[],d={toc:a};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"instruction-encoding"},"Instruction Encoding"),(0,i.kt)("p",null,"The encoding of instructions, which is a key aspect of an ",(0,i.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/instruction-set-architecture"},"Instruction Set Architecture"),", defines how instuctions and arguments are encoded as binary values in the ",(0,i.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/machine-language"},"machine code")," of a system."),(0,i.kt)("p",null,"Some architectures encode instructions as multi-byte sequences, where one or more bytes specify the operation to be performed and the ",(0,i.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/addressing-mode"},"addressing mode(s)")," to be used, and additional bytes specify the operands (such as the register numbers, immediate values, addresses, or offsets to be used). Other architectures encode instructions as fixed-length bitfields, where various (and varying) subfields within the bitfield specify the operation, addressing mode(s), and operands."),(0,i.kt)("p",null,"The 6502 architecture uses variable-length byte sequences, from 1 to 3 bytes (including the ",(0,i.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/opcode"},"opcode"),") depending on the ",(0,i.kt)("a",{parentName:"p",href:"/SPO600/E-ComputerArchitecture/addressing-mode"},"addressing mode"),"."),(0,i.kt)("p",null,"The x86_64 architecture uses variable-length byte sequences, from 1 to approximately 17 bytes."),(0,i.kt)("p",null,"The AArch64 architecture uses 32-bit long instructions. Since this instruction length is insufficient to adequately contain a 64-bit operand (such as an address), some operands are encoded using run-length encoding (RLE) or shifted-bitfield techniques. For certain operand values, it may be necessary to build the required value in a register with a few instructions."))}p.isMDXComponent=!0}}]);