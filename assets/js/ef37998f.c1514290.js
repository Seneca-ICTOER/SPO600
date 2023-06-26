"use strict";(self.webpackChunkSPO600=self.webpackChunkSPO600||[]).push([[2441],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(a),h=r,d=u["".concat(m,".").concat(h)]||u[h]||c[h]||s;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9919:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return o}});var n=a(3117),r=(a(7294),a(3905));const s={id:"6502-emulator",title:"6502 Emulator",sidebar_position:2,description:"6502 Emulator"},l="6502 Emulator",i={unversionedId:"G-6502/6502-emulator",id:"G-6502/6502-emulator",title:"6502 Emulator",description:"6502 Emulator",source:"@site/docs/G-6502/6502-emulator.md",sourceDirName:"G-6502",slug:"/G-6502/6502-emulator",permalink:"/SPO600/G-6502/6502-emulator",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SPO600/tree/main/docs/G-6502/6502-emulator.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"6502-emulator",title:"6502 Emulator",sidebar_position:2,description:"6502 Emulator"},sidebar:"courseNotesSidebar",previous:{title:"6502",permalink:"/SPO600/G-6502/6502"},next:{title:"6502 Addressing Modes",permalink:"/SPO600/G-6502/6502-addressing-modes"}},m={},o=[{value:"Basic Controls",id:"basic-controls",level:2},{value:"Assembler Capabilities",id:"assembler-capabilities",level:2},{value:"Instructions",id:"instructions",level:3},{value:"Directives",id:"directives",level:3},{value:"High and Low Label Bytes",id:"high-and-low-label-bytes",level:3},{value:"Comments",id:"comments",level:3},{value:"Using the Debugger",id:"using-the-debugger",level:2},{value:"Using the Monitor",id:"using-the-monitor",level:2},{value:"Turning the Text Screen On/Off",id:"turning-the-text-screen-onoff",level:2},{value:"Peripherals and Memory Map",id:"peripherals-and-memory-map",level:2},{value:"ROM Routines",id:"rom-routines",level:2},{value:"Example Code",id:"example-code",level:2},{value:"Source Code",id:"source-code",level:2}],p={toc:o};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"6502-emulator"},"6502 Emulator"),(0,r.kt)("p",null,"A simple web-based ",(0,r.kt)("a",{parentName:"p",href:"/SPO600/G-6502/6502"},"6502")," emulator is available at ",(0,r.kt)("a",{parentName:"p",href:"http://6502.cdot.systems."},"http://6502.cdot.systems.")," This emulator is used in the ",(0,r.kt)("a",{parentName:"p",href:"/SPO600/"},"SPO600")," course to teach 8-bit ",(0,r.kt)("a",{parentName:"p",href:"/SPO600/F-AssemblyLanguage/assembly-language"},"assembly language")," before transitioning to more complex 64-bit x86_64 and ",(0,r.kt)("a",{parentName:"p",href:"/SPO600/H-ARM/armv8"},"AArch64")," assembly language."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://wiki.cdot.senecacollege.ca/w/imgs/6502_Emulator_Screenshot.png",alt:"6502 Emulator"})),(0,r.kt)("p",null,"A screen shot of the 6502 Emulator running ",(0,r.kt)("a",{parentName:"p",href:"/SPO600/G-6502/6502-emulator-example-code#etch-a-sketchtm-style-drawing"},"the drawing example code"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hex notation - $XX:")," In most 6502 documentation, including this page, the ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," prefix indicates hexadecimal notation. On other systems, this may be designated by a ",(0,r.kt)("inlineCode",{parentName:"p"},"0x")," prefix."),(0,r.kt)("h2",{id:"basic-controls"},"Basic Controls"),(0,r.kt)("p",null,"The emulator has a text area for entering and editing code, a small bit-mapped graphics screen (32x32 pixels), a character screen (80x25 characters), a debug area, a memory monitor, and a message area."),(0,r.kt)("p",null,"These controls are available at the top of the screen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assemble - assembles the code in the text area, placing the resulting binary machine language code at $0600 and outputting any error messasges to the message area."),(0,r.kt)("li",{parentName:"ul"},"Run - runs the assembled code, if it assembled correctly. While the code is running, this button becomes a Stop button."),(0,r.kt)("li",{parentName:"ul"},"Reset - resets the state of the emulator (see the ",(0,r.kt)("a",{parentName:"li",href:"#peripherals-and-memory-map"},"Memory Map")," section below)."),(0,r.kt)("li",{parentName:"ul"},"Hexdump - shows, in hexadecimal, the values stored in memory starting at $0600"),(0,r.kt)("li",{parentName:"ul"},"Disassemble - shows a combined hexdump and disassembly of code at $0600"),(0,r.kt)("li",{parentName:"ul"},"Notes - displays notes about the emulator in the message area.")),(0,r.kt)("p",null,"The Speed slider lets you adjust the speed of the emulator from about 1% of native 6502 performance (left) to roughly full native speed (right). Setting the speed slider to a lower setting can be useful for debugging and for viewing the progress of operations on the displays."),(0,r.kt)("p",null,"There are also controls to Save and Load the text area to/from local storage on the computer on which it is running (as a download/upload); this works nicely with a local git repository (or clone)."),(0,r.kt)("h2",{id:"assembler-capabilities"},"Assembler Capabilities"),(0,r.kt)("p",null,"The assembler accepts these inputs:"),(0,r.kt)("h3",{id:"instructions"},"Instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6502 assembler instructions, optionally prefixed with a label and a colon. Examples:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"simple instruction: ",(0,r.kt)("inlineCode",{parentName:"li"},"STA $10")),(0,r.kt)("li",{parentName:"ul"},"instruction with a label: LOOP: ",(0,r.kt)("inlineCode",{parentName:"li"},"STA ($10),Y"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"when a label is used, the address of the label can be referenced using the label name: ",(0,r.kt)("inlineCode",{parentName:"li"},"JMP LOOP"))))))),(0,r.kt)("h3",{id:"directives"},"Directives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Origin assignment: You can tell the assembler where to assemble the following code with this syntax: ",(0,r.kt)("inlineCode",{parentName:"li"},"*=$XXXX")," where XXXX is an address in hexadecimal. Multiple origin assignments may be used. Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"*=$1800")),(0,r.kt)("li",{parentName:"ul"},'"define" directive: Macro assignments may be created with the "define" directive: ',(0,r.kt)("inlineCode",{parentName:"li"},"define macro value")," -- for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"define WHITE $01")," -- the macro value will be substituted into lines wherever the macro name appears (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"LDA #WHITE"),")."),(0,r.kt)("li",{parentName:"ul"},'"dcb" directive: the Define Constant Byte (dcb) directive will cause the assembler to place individual byte values into memory. These byte values may be in hexadecimal prefixed with $, decimal with no prefix, or single printable non-space characters quoted with double quotes.')),(0,r.kt)("h3",{id:"high-and-low-label-bytes"},"High and Low Label Bytes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The low byte of the label X can be accessed as <X and the high byte can be accessed as ",">",'X. For example, this code will load the low byte of the label "start" into the A register: ',(0,r.kt)("inlineCode",{parentName:"li"},"LDA #<START")," - note that this only works with labels, and not with macros."),(0,r.kt)("li",{parentName:"ul"},"You can use labels and origin assignment together to get a label for any address in the system. For example, to get a label pointing to the first byte of the character display, you could place this at the end of your program:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-assembly"},"*=$f000\nDISPLAY:\n")),(0,r.kt)("p",null,"You could then create a pointer to that address at $0027 with this code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-assembly"},"LDA #<DISPLAY\nSTA $27\nLDA #>DISPLAY\nSTA $28\n")),(0,r.kt)("h3",{id:"comments"},"Comments"),(0,r.kt)("p",null,"any characters on a line following an unquoted semicolon ",(0,r.kt)("inlineCode",{parentName:"p"},";")," are treated as a comment and ignored."),(0,r.kt)("h2",{id:"using-the-debugger"},"Using the Debugger"),(0,r.kt)("p",null,"The debugger will constantly show the value of the emulated 6502's registers. If you select the Debugger checkbox, you will be able to single-step through memory or jump to an address or label using the associated pushbuttons."),(0,r.kt)("h2",{id:"using-the-monitor"},"Using the Monitor"),(0,r.kt)("p",null,"Selecting the Monitor checkbox will display the specified region of memory as code is executed. For example, specifying a start of $00 and a length of $100 will display the entire zero page. Once enabled, the monitor may not display until the code is executed (via Run button)."),(0,r.kt)("h2",{id:"turning-the-text-screen-onoff"},"Turning the Text Screen On/Off"),(0,r.kt)("p",null,'The checkbox labeled "Text Screen" can be used to hide the character display to free up more screen space for editing code. Note also that the character display can be used for additional program memory (whether the display is enabled or not) when it\'s not required for output.'),(0,r.kt)("h2",{id:"peripherals-and-memory-map"},"Peripherals and Memory Map"),(0,r.kt)("p",null,"The entire 64K address space is available and is populated with RAM except for peripherals and a small ROM area."),(0,r.kt)("p",null,"Visually, the memory map looks like this:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Page(s)"),(0,r.kt)("th",{parentName:"tr",align:null},"Address Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Subdivided Address Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$00"),(0,r.kt)("td",{parentName:"tr",align:null},"$0000-$00FF"),(0,r.kt)("td",{parentName:"tr",align:null},"Zero Page"),(0,r.kt)("td",{parentName:"tr",align:null},"$0000-$00FD, $00F5-$00FD, $00FE, $00FF"),(0,r.kt)("td",{parentName:"tr",align:null},"Fast-access variable storage. Your software can use this region as you see fit. Variables used by the ROM routines -- Do not use this region if you are using the ROM routines. Random number generator. Last key pressed on keyboard -- See description below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$01"),(0,r.kt)("td",{parentName:"tr",align:null},"$0100-$01FF"),(0,r.kt)("td",{parentName:"tr",align:null},"Stack"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hardware stack - values are pushed on to the stack by the PHA, PHP, JSR, and BRK instructions (plus hardware interrupts), and pulled from the stack by the PLA, PLP, RTS, and RTI instructions. The stack is first-in/last out (FILO) aka last-in, first-out (LIFO), and it descends in memory. After 256 bytes have been pushed on the stack, the stack will overflow back to the beginning and the oldest data will be overwritten. The current stack location is tracked in the Stack Pointer (SP) register.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$02-$05"),(0,r.kt)("td",{parentName:"tr",align:null},"$0200-$05FF"),(0,r.kt)("td",{parentName:"tr",align:null},"Bitmapped Display"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"32x32 pixel graphics display -- See description below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"06"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"06-")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"06"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"))))),"EF"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"0600"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0600-")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0600"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"))))),"EFFF"),(0,r.kt)("td",{parentName:"tr",align:null},"Program Memory"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"RAM available for program use. By default, programs will be assembled starting at memory location $0600. This space is available for software and data. The arrangement and use of this memory is left to the programmer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$F0-FC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"F"),(0,r.kt)("mn",{parentName:"mrow"},"000"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F000-")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,r.kt)("span",{parentName:"span",className:"mord"},"000"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"))))),"FCFF"),(0,r.kt)("td",{parentName:"tr",align:null},"Character Display"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"80 colummn x 25 line character display for text messages -- See description below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$FD"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"F"),(0,r.kt)("mi",{parentName:"mrow"},"D"),(0,r.kt)("mn",{parentName:"mrow"},"00"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"FD00-")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,r.kt)("span",{parentName:"span",className:"mord"},"00"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"))))),"FDFF"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This memory range is reserved for future ROM expansion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"F"),(0,r.kt)("mi",{parentName:"mrow"},"E"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"FE-")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"FE"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"))))),"FF"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"F"),(0,r.kt)("mi",{parentName:"mrow"},"E"),(0,r.kt)("mn",{parentName:"mrow"},"00"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"FE00-")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"FE"),(0,r.kt)("span",{parentName:"span",className:"mord"},"00"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"))))),"FFFF"),(0,r.kt)("td",{parentName:"tr",align:null},"ROM"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 12: FE00-FF80, $\u0332FF81-",style:{color:"#cc0000"}},"FE00-FF80, $FF81-")),"FFF9, ",(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"F"),(0,r.kt)("mi",{parentName:"mrow"},"F"),(0,r.kt)("mi",{parentName:"mrow"},"F"),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"FFFA-")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"FFF"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"))))),"FFFF"),(0,r.kt)("td",{parentName:"tr",align:null},'This region is occupied by a small Read-Only Memory (ROM) image that contains input-output routines for the character display and keyboard. Entry point table - This table consists of 3-byte "entry points" for the ROM routines. To access a particular routine, use the Jump to SubRoutine (JSR) instruction with the corresponding entry point. This arrangement allows the ROM image to be revised without changing the entry point locations. See ROM Routines below for details on the available entry points. Hardware vectors - On a hardware 6502 system, three 2-byte pointers (or "vectors") are used to access software routines to handle non-maskable interrupts (NMI) and the BRK instruction (vector $FFFA), CPU reset (vector $FFFC), and hardware interrupt (IRQ) (vector $FFFF). Since this is an emulator, these vectors are not used.')))),(0,r.kt)("p",null,"There are four peripherals available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a one-byte pseudo-random number generator (PRNG) at ",(0,r.kt)("strong",{parentName:"li"},"$fe"),"."),(0,r.kt)("li",{parentName:"ul"},"a single-key buffer at ",(0,r.kt)("strong",{parentName:"li"},"$ff")," - if you write to this address, it will remain unchanged until a new keypress is received. Printable characters plus Return/Enter and Backspace are reported as ASCII codes; cursor keys are reported as $80=up, $81=right, $82=down, $83=left."),(0,r.kt)("li",{parentName:"ul"},"a 32x32 pixel bitmapped display at ",(0,r.kt)("strong",{parentName:"li"},"$0200-$05ff"),", with one byte per pixel. The upper-left pixel is at address $0200, the pixel to the right is $0201, and the first pixel on the second row is $0220. A ",(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1a1-ZZ1opY8xcuUHNxj3YW75dxOPynSuP2-QGSvZGzYY/edit?usp=sharing"},"reference spreadsheet")," shows the row/column to address mapping. The lowest four bits of each byte select one of 16 colours.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"$0: Black"),(0,r.kt)("li",{parentName:"ul"},"$1: White"),(0,r.kt)("li",{parentName:"ul"},"$2: Red"),(0,r.kt)("li",{parentName:"ul"},"$3: Cyan"),(0,r.kt)("li",{parentName:"ul"},"$4: Purple"),(0,r.kt)("li",{parentName:"ul"},"$5: Green"),(0,r.kt)("li",{parentName:"ul"},"$6: Blue"),(0,r.kt)("li",{parentName:"ul"},"$7: Yellow"),(0,r.kt)("li",{parentName:"ul"},"$8: Orange"),(0,r.kt)("li",{parentName:"ul"},"$9: Brown"),(0,r.kt)("li",{parentName:"ul"},"$a: Light red"),(0,r.kt)("li",{parentName:"ul"},"$b: Dark grey"),(0,r.kt)("li",{parentName:"ul"},"$c: Grey"),(0,r.kt)("li",{parentName:"ul"},"$d: Light green"),(0,r.kt)("li",{parentName:"ul"},"$e: Light blue"),(0,r.kt)("li",{parentName:"ul"},"$f: Light grey"))),(0,r.kt)("li",{parentName:"ul"},"an 80x25 character display at ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("span",{parentName:"strong",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"f"),(0,r.kt)("mn",{parentName:"mrow"},"000"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f000-")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,r.kt)("span",{parentName:"span",className:"mord"},"000"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"))))),"fcff"),", with one byte per character. Printable ASCII characters will be displayed. If the high-order bit is set, the character will be shown in  ",(0,r.kt)("strong",{parentName:"li"},"reverse video")," ."),(0,r.kt)("li",{parentName:"ul"},"a read-only ROM chip is present at ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("span",{parentName:"strong",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"f"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mn",{parentName:"mrow"},"00"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"fe00-")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord"},"00"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"))))),"ffff"),"; see below for details.")),(0,r.kt)("p",null,"The Reset button clears the zero page, bitmap display, and character display, and resets the stack pointer (SP=$ff), program counter (PC=$0600), status register (P=$30), and the general purpose registers (A=X=Y=$00)."),(0,r.kt)("p",null,"Code is assembled starting at $0600 (unless the code changes the location with a ",(0,r.kt)("inlineCode",{parentName:"p"},"*=address")," directive). Memory following the program is reset to $00. A ",(0,r.kt)("inlineCode",{parentName:"p"},"BRK")," instruction ($00) will cause the program to stop and return control to the debugger."),(0,r.kt)("p",null,"For more details, press the Notes button in the emulator."),(0,r.kt)("h2",{id:"rom-routines"},"ROM Routines"),(0,r.kt)("p",null,"Many 6502 personal/home computers had the operating system installed in read-only memory (ROM) chips. The emulator has a small ROM chip with these simple input/output (I/O) routines defined:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SCINIT $ff81 - Initialize and clear the character display"),(0,r.kt)("li",{parentName:"ul"},"CHRIN $ffcf - Input one character from keyboard (returns A (that is, the return value will be placed in the Accumulator register))"),(0,r.kt)("li",{parentName:"ul"},"CHROUT $ffdw - Outputs one character (A) to the screen at the current cursor position. Screen will wrap/scroll appropriately. Printable characters and cursor codes ($80/$81/$82/$83 for up/right/left/down) as well as RETURN ($0d) are accepted. Printable ASCII codes with the high bit set will be printed in reverse video."),(0,r.kt)("li",{parentName:"ul"},"SCREEN $ffed - Returns the character screen size in the X and Y registers."),(0,r.kt)("li",{parentName:"ul"},"PLOT $fff0 - gets (CARRY=1) or sets (CARRY=0) the cursor position")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-assembly"},"   If C=0: X,Y registers set the cursor position\n           Y:A is returned as a pointer to the current screen position \n               (i.e., Y is the high byte and A is the low byte of a pointer\n               to the memory address of the current cursor position)\n\n   If C=1: X,Y registers return the current cursor position\n           A contains the character at the current cursor location\n")),(0,r.kt)("p",null,"Registers which are not used for input/output are not affected by the ROM routines. The ROM routines use $f0-fd in the zero page for variable storage."),(0,r.kt)("p",null,"To use the ROM routines, these define directives may be pasted into your code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-assembly"},"define      SCINIT      $ff81 ; initialize/clear screen\ndefine      CHRIN       $ffcf ; input character from keyboard\ndefine      CHROUT      $ffd2 ; output character to screen\ndefine      SCREEN      $ffed ; get screen size\ndefine      PLOT        $fff0 ; get/set cursor coordinates\n")),(0,r.kt)("p",null,"You can then access the routines by name using the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSR")," instruction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-assembly"},'LDA #$41        ; ASCII code for the letter "A"\nJSR CHROUT      ; execute the CHROUT routine (print the character on the screen)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ROM Routine Names:")," The ROM routine names and locations pay homage to a famous 6502-based family of computers. Discovering which one is left as an exercise for the reader!"),(0,r.kt)("h2",{id:"example-code"},"Example Code"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/SPO600/G-6502/6502-emulator-example-code"},"6502 Emulator Example Code")," page."),(0,r.kt)("h2",{id:"source-code"},"Source Code"),(0,r.kt)("p",null,"The emulator's source code can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ctyler/6502js"},"https://github.com/ctyler/6502js")," ... Pull Requests are welcome."))}c.isMDXComponent=!0}}]);