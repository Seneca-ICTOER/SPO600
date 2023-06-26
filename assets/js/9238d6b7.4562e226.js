"use strict";(self.webpackChunkSPO600=self.webpackChunkSPO600||[]).push([[2652],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3294:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u}});var a=n(3117),i=(n(7294),n(3905));const r={id:"week12-class2",title:"Week 12 - Class 2",sidebar_position:24,description:"Week 12 - Class 2"},l="Week 12 - Class II",o={unversionedId:"A-Classes/week12-class2",id:"A-Classes/week12-class2",title:"Week 12 - Class 2",description:"Week 12 - Class 2",source:"@site/docs/A-Classes/week12-class2.md",sourceDirName:"A-Classes",slug:"/A-Classes/week12-class2",permalink:"/SPO600/A-Classes/week12-class2",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SPO600/tree/main/docs/A-Classes/week12-class2.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{id:"week12-class2",title:"Week 12 - Class 2",sidebar_position:24,description:"Week 12 - Class 2"},sidebar:"courseNotesSidebar",previous:{title:"Week 12 - Class 1",permalink:"/SPO600/A-Classes/week12-class1"},next:{title:"Week 13 - Class 1",permalink:"/SPO600/A-Classes/week13-class1"}},s={},u=[{value:"Step-by-Step Project Minimum Requirements",id:"step-by-step-project-minimum-requirements",level:2},{value:"Video",id:"video",level:2},{value:"Minimum Requirements for a Successful Project",id:"minimum-requirements-for-a-successful-project",level:2},{value:"Build Targets",id:"build-targets",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"week-12---class-ii"},"Week 12 - Class II"),(0,i.kt)("h2",{id:"step-by-step-project-minimum-requirements"},"Step-by-Step Project Minimum Requirements"),(0,i.kt)("h2",{id:"video"},"Video"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.microsoftstream.com/video/fcc73002-b59c-4bc7-b0e6-c73706b492e8"},"Summary Video")," - Step-by-Step discussion of the minimum requirements for a successful project")),(0,i.kt)("h2",{id:"minimum-requirements-for-a-successful-project"},"Minimum Requirements for a Successful Project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remember: This project is about building a ",(0,i.kt)("em",{parentName:"li"},"tool")," that processes C source code. The tool itself can be in any suitable computer language. It is recommended that you use a language that can manipulate text easily. The tool will receive an input file containing a C function. The tool will output a modified file(s) with ifunc capability for asimd/sve/sve2 computers."),(0,i.kt)("li",{parentName:"ul"},"Requirements for a minimum implementation:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Find the protype and function name by analyzing the C function.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Example name: ",(0,i.kt)("inlineCode",{parentName:"li"},"adjust_channels")),(0,i.kt)("li",{parentName:"ul"},"Example prototype: ",(0,i.kt)("inlineCode",{parentName:"li"},"void adjust_channels(unsigned char *image,int x_size,int y_size,float red_factor,float green_factor,float blue_factor);")),(0,i.kt)("li",{parentName:"ul"},"Hint/suggestion: compiling the function file with the ",(0,i.kt)("inlineCode",{parentName:"li"},"-S")," option will produce an assembly-language output file. You can parse this file for lines like ",(0,i.kt)("inlineCode",{parentName:"li"},".type adjust_channels, %function")," to find the function name(s)."),(0,i.kt)("li",{parentName:"ul"},"Hint/suggestion #2: the ",(0,i.kt)("inlineCode",{parentName:"li"},"makeheaders")," utility can produce a header file from an C source code input file. It is easier to find the function prototypes in the header file than in the C source file."))),(0,i.kt)("li",{parentName:"ol"},"Place the prototype into the output file, adding the ifunc atttribute and resolver name. This produces the indirect function.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Example indirect function: ",(0,i.kt)("inlineCode",{parentName:"li"},'__attribute__ (( ifunc("name_of_resolver_function") )) void adjust_channels(unsigned char *image,int x_size,int y_size,float red_factor,float green_factor,float blue_factor);')))),(0,i.kt)("li",{parentName:"ol"},"Repeat these next two steps three times, once for each target (see the table below)",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Place a GCC pragma directive into the output file to select one of the three targets: ",(0,i.kt)("inlineCode",{parentName:"li"},'#pragma GCC target arch="put the target architecture string here"')),(0,i.kt)("li",{parentName:"ol"},"Paste in the function, changing the function name so that the various versions don't conflict. For example, you could append a suffix identifying the architecture target, changing the function name ",(0,i.kt)("inlineCode",{parentName:"li"},"adjust_channels")," to something like ",(0,i.kt)("inlineCode",{parentName:"li"},"adjust_channels_sve"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tip: After the last function, add a pragma to switch the compiler back to targeting basic ",(0,i.kt)("inlineCode",{parentName:"li"},"armv8-a")))))),(0,i.kt)("li",{parentName:"ol"},"Add the resolver function, being sure to include the header file ",(0,i.kt)("inlineCode",{parentName:"li"},"<sys/auxv.h>")," so that we can access the auxilliary vector (and therefore the description of available hardware capabilities).")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'static void (*name_of_resolver_function(void)) {\n        long hwcaps  = getauxval(AT_HWCAP);\n        long hwcaps2 = getauxval(AT_HWCAP2);\n\n        printf("\\n### Resolver function - selecting the implementation to use for  foo()\\n");\n        if (hwcaps2 & HWCAP2_SVE2) {\n                return adjust_channels_sve2;\n        } else if (hwcaps & HWCAP_SVE) {\n                return adjust_channels_sve;\n        } else {\n                return adjust_channels_asimd;\n        }\n};\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Build the software using the output file in place of the input file."),(0,i.kt)("li",{parentName:"ol"},"Test it thoroughly! Use your tool and compile the output. Look at the final binary to check for asimd/sve/sve2 code, and make sure the program runs in both contexts (run the binary directly to test it in asimd mode, and use the qemu-aarch64 tool to run the binary in sve2 mode)."),(0,i.kt)("li",{parentName:"ol"},"Write it up in one or more blog posts.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- The mark assigned will depend on:\n  - The quality of the implementation - For example, does it accept various input files and process them correctly? Are the output files reliably usable? Is the tool user-friendly?\n  - The amount and quality of the testing - For example, have you demonstrated that the tool works correctly? Can you show the asimd, sve, and sve2 code in the compiled binary?\n  - The quality of the writing - For example, have you fully explained the code? Have you documented how to use your tool with clear, step-by-step instructions? Is the code provided in a form that makes it easy to test?\n  - If the basic operation of the program is good, bonus marks may be assigned for additional features and for overcoming the (permitted) limitations. See the project page for details.\n")),(0,i.kt)("h2",{id:"build-targets"},"Build Targets"),(0,i.kt)("p",null,"These are the build targets:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Abbreviation"),(0,i.kt)("th",{parentName:"tr",align:null},"Typical GCC Target String"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Advanced SIMD"),(0,i.kt)("td",{parentName:"tr",align:null},"asimd"),(0,i.kt)("td",{parentName:"tr",align:null},"armv8-a"),(0,i.kt)("td",{parentName:"tr",align:null},'Basic "Advanced SIMD" implementation present in all aarch64 systems. Fixed-length 128-bit SIMD implementation.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Scalable Vector Extensions"),(0,i.kt)("td",{parentName:"tr",align:null},"sve"),(0,i.kt)("td",{parentName:"tr",align:null},"armv8-a+sve"),(0,i.kt)("td",{parentName:"tr",align:null},"Original version of the Scalable Vector Extensions. Variable-length 128-to-2048 bit SIMD implementation with predicate registers and first-fault load/store operations.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Scalable Vector Extensions version 2"),(0,i.kt)("td",{parentName:"tr",align:null},"sve2"),(0,i.kt)("td",{parentName:"tr",align:null},"armv8-a+sve2 (also armv9-a)"),(0,i.kt)("td",{parentName:"tr",align:null},"New, expanded version of the Scalable Vector Extensions used in Arm architecture version 9 systems. Has the same implementation details as sve, but with many additional instructions, such as operations useful for digital signal processing (dsp).")))),(0,i.kt)("p",null,"GCC target strings may be used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On the GCC command line, using the ",(0,i.kt)("inlineCode",{parentName:"li"},"-march=...")," option"),(0,i.kt)("li",{parentName:"ul"},"In function attributes: ",(0,i.kt)("inlineCode",{parentName:"li"},'__attribute__(( target("...") ))')),(0,i.kt)("li",{parentName:"ul"},"In pragmas: ",(0,i.kt)("inlineCode",{parentName:"li"},'#pragma GCC target "..."'))))}p.isMDXComponent=!0}}]);