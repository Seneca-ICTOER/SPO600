"use strict";(self.webpackChunkSPO600=self.webpackChunkSPO600||[]).push([[460],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6914:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var n=a(3117),o=(a(7294),a(3905));const r={id:"lab2",title:"Lab 2",sidebar_position:2,description:"Lab 2 for Students to Complete and Submit"},i="6502 Assembly Language Lab 2",l={unversionedId:"B-Labs/lab2",id:"B-Labs/lab2",title:"Lab 2",description:"Lab 2 for Students to Complete and Submit",source:"@site/docs/B-Labs/lab2.md",sourceDirName:"B-Labs",slug:"/B-Labs/lab2",permalink:"/SPO600/B-Labs/lab2",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SPO600/tree/main/docs/B-Labs/lab2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"lab2",title:"Lab 2",sidebar_position:2,description:"Lab 2 for Students to Complete and Submit"},sidebar:"courseNotesSidebar",previous:{title:"Lab 1",permalink:"/SPO600/B-Labs/lab1"},next:{title:"Lab 3",permalink:"/SPO600/B-Labs/lab3"}},s={},p=[{value:"Purpose of this Lab",id:"purpose-of-this-lab",level:2},{value:"Resources",id:"resources",level:2},{value:"Lab Instructions",id:"lab-instructions",level:2},{value:"Setup",id:"setup",level:3},{value:"Bitmap Code",id:"bitmap-code",level:3},{value:"Calculating Performance",id:"calculating-performance",level:3},{value:"Modifying the Code",id:"modifying-the-code",level:3},{value:"Experiments (Optional, Recommended)",id:"experiments-optional-recommended",level:3},{value:"Challenges (Optional, Recommended)",id:"challenges-optional-recommended",level:3},{value:"Write-Up",id:"write-up",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"6502-assembly-language-lab-2"},"6502 Assembly Language Lab 2"),(0,o.kt)("h2",{id:"purpose-of-this-lab"},"Purpose of this Lab"),(0,o.kt)("p",null,"In this lab, you will learn some of the basics of 6502 (ADD LINK) assembly language, in preparation for learning more complex x86_64 and AArch64 assembly language."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"6502 (ADD LINK) Page"),(0,o.kt)("li",{parentName:"ul"},"6502 Emulator (ADD LINK)"),(0,o.kt)("li",{parentName:"ul"},"Assembler Basics (ADD LINK)"),(0,o.kt)("li",{parentName:"ul"},"6502 Emulator Example Code (ADD LINK)"),(0,o.kt)("li",{parentName:"ul"},"Opcode/Instruction References",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On this Site",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"6502 Instructions - Introduction (ADD LINK)"),(0,o.kt)("li",{parentName:"ul"},"6502 Addressing Modes (ADD LINK)"))),(0,o.kt)("li",{parentName:"ul"},"External",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.6502.org/tutorials/6502opcodes.html"},"6502 Opcodes with Register Definitions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.masswerk.at/6502/6502_instruction_set.html"},"6502 Opcodes with Detailed Operation Information")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1a1-ZZ1opY8xcuUHNxj3YW75dxOPynSuP2-QGSvZGzYY/edit?usp=sharing"},"Spreadsheet of bitmapped display memory locations"))),(0,o.kt)("h2",{id:"lab-instructions"},"Lab Instructions"),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the 6502 Emulator (ADD LINK) at ",(0,o.kt)("a",{parentName:"li",href:"http://6502.cdot.systems"},"http://6502.cdot.systems")," in another tab or window, keeping this lab open.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Save Your Work:")," The emulator ",(0,o.kt)("strong",{parentName:"p"},"does not")," save your work automatically. Remember to periodically save it to a file (copy-and-paste the code or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," button to create local files). Recommendation: save your files to a directory, and use ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"git")," to manage that directory."),(0,o.kt)("h3",{id:"bitmap-code"},"Bitmap Code"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"The following code fills the emulator's bitmapped display with the colour yellow. Paste this code into the emulator:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-assembly"},"    lda #$00    ; set a pointer in memory location $40 to point to $0200\n    sta $40     ; ... low byte ($00) goes in address $40\n    lda #$02    \n    sta $41     ; ... high byte ($02) goes into address $41\n\n    lda #$07    ; colour number\n\n    ldy #$00    ; set index to 0\n\nloop:   sta ($40),y ; set pixel colour at the address (pointer)+Y\n\n    iny     ; increment index\n    bne loop    ; continue until done the page (256 pixels)\n\n    inc $41     ; increment the page\n    ldx $41     ; get the current page number\n    cpx #$06    ; compare with 6\n    bne loop    ; continue until done all pages\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Test the code by pressing the Assemble button, then the Run button. If the there are any errors assembling (compiling) the code, they will appear in the message area at the bottom of the page. Make sure the code is running correctly and that you understands how it works. Don't be afraid to experiment!")),(0,o.kt)("h3",{id:"calculating-performance"},"Calculating Performance"),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Calculate how long it takes for the code to execute, assuming a 1 MHz clock speed (Watch ",(0,o.kt)("a",{parentName:"li",href:"https://web.microsoftstream.com/video/ed7aedf1-fe6f-4b72-bbf1-c9b4e6e80af9"},"this video")," if you would like a refresher on how to do this). Also calculate the total memory usage for the program plus any pointers or variables."),(0,o.kt)("li",{parentName:"ol"},"Consider ways to decrease the time taken to fill the screen with a solid colour. Calculate the execution time of the fastest version of this program that you can create. Challenge: the fastest version of this program is more than twice as fast as the original version shown above!")),(0,o.kt)("h3",{id:"modifying-the-code"},"Modifying the Code"),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Change the code to fill the display with light blue instead of yellow. (Tip: you can find the colour codes on the 6502 Emulator (ADD LINK) page)."),(0,o.kt)("li",{parentName:"ol"},'Change the code to fill the display with a different colour on each page (each "page" will be one-quarter of the bitmapped display).')),(0,o.kt)("h3",{id:"experiments-optional-recommended"},"Experiments (Optional, Recommended)"),(0,o.kt)("p",null,"Go back to the bitmap code above, and try these experiments:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add this instruction after the ",(0,o.kt)("inlineCode",{parentName:"li"},"loop:")," label and before the ",(0,o.kt)("inlineCode",{parentName:"li"},"sta ($40),y")," instruction: ",(0,o.kt)("inlineCode",{parentName:"li"},"tya")),(0,o.kt)("li",{parentName:"ol"},"What visual effect does this cause, and how many colours are on the screen? Why?"),(0,o.kt)("li",{parentName:"ol"},"Add this instruction after the ",(0,o.kt)("inlineCode",{parentName:"li"},"tya"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"lsr")),(0,o.kt)("li",{parentName:"ol"},"What visual effect does this cause, and how many colours are on the screen? Why?"),(0,o.kt)("li",{parentName:"ol"},"Repeat the above tests with two, three, four, and five ",(0,o.kt)("inlineCode",{parentName:"li"},"lsr")," instructions in a row. Describe and explain the effect in each case."),(0,o.kt)("li",{parentName:"ol"},"Repeat the tests using ",(0,o.kt)("inlineCode",{parentName:"li"},"asl")," instructions instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"lsr")," instructions. Describe and explain the effect in each case."),(0,o.kt)("li",{parentName:"ol"},"Revert to the original code."),(0,o.kt)("li",{parentName:"ol"},"The original code includes one ",(0,o.kt)("inlineCode",{parentName:"li"},"iny")," instruction. Test with one to five consecutive ",(0,o.kt)("inlineCode",{parentName:"li"},"iny")," instructions. Describe and explain the effect in each case. ",(0,o.kt)("strong",{parentName:"li"},"Note"),": it is helpful to place the Speed slider is on its lowest setting (left) for these experiments."),(0,o.kt)("li",{parentName:"ol"},"Revert to the original code."),(0,o.kt)("li",{parentName:"ol"},"Make each pixel a random colour. (Hint: use the psudo-random number generator mentioned on the 6502 Emulator (ADD LINK) page).")),(0,o.kt)("h3",{id:"challenges-optional-recommended"},"Challenges (Optional, Recommended)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set all of the display pixels to the same colour, except for the middle four pixels, which will be drawn in another colour."),(0,o.kt)("li",{parentName:"ol"},"Write a program which draws lines around the edge of the display:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A red line across the top"),(0,o.kt)("li",{parentName:"ul"},"A green line across the bottom"),(0,o.kt)("li",{parentName:"ul"},"A blue line across the right side."),(0,o.kt)("li",{parentName:"ul"},"A purple line across the left size.")))),(0,o.kt)("h3",{id:"write-up"},"Write-Up"),(0,o.kt)("p",null,"Post an entry on your blog describing your experiments in this lab. Follow the Blog Guidelines (ADD LINK). Include code as text (and not screenshots), but feel free to include screenshots of the bitmapped display."),(0,o.kt)("p",null,"Include in your blog post:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An introduction, so that someone who happens across your blog will understand the context of what you're writing about."),(0,o.kt)("li",{parentName:"ol"},"The results from the ",(0,o.kt)("em",{parentName:"li"},"Calculating Performance")," and ",(0,o.kt)("em",{parentName:"li"},"Modifying Code")," portions of the lab, including the code, a description of how the code works, and the results produced."),(0,o.kt)("li",{parentName:"ol"},"The results of the Optional sections, if you performed them, and your explaination for each observed result."),(0,o.kt)("li",{parentName:"ol"},"Your experiences with this lab -- your impressions of Assembly Language, what you learned, and your reflections on the process.")),(0,o.kt)("p",null,"Remember that labs are marked on a scale of 0-3:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"0 - Lab not completed, or significant errors."),(0,o.kt)("li",{parentName:"ul"},"1 - Very basic completion, or some small errors."),(0,o.kt)("li",{parentName:"ul"},"2 - Satisfactory completion of the lab."),(0,o.kt)("li",{parentName:"ul"},"3 - Lab completed with additional experiments, investigation, research, or explanation. For example, you could do some of the optional sections in this lab, and include those in your blog writeup -- or you could create your own experiments.")),(0,o.kt)("p",null,"Remember to follow the Blog Guidelines (ADD LINK) as you write."))}u.isMDXComponent=!0}}]);