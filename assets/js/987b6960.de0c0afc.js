"use strict";(self.webpackChunkSPO600=self.webpackChunkSPO600||[]).push([[977],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?i.createElement(h,l(l({ref:n},c),{},{components:t})):i.createElement(h,l({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8610:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return p}});var i=t(3117),o=(t(7294),t(3905));const a={id:"compiler-optimizations",title:"Compiler Optimizations",sidebar_position:23,description:"Compiler Optimizations"},l="Compiler Optimizations",r={unversionedId:"D-ExtraResources/compiler-optimizations",id:"D-ExtraResources/compiler-optimizations",title:"Compiler Optimizations",description:"Compiler Optimizations",source:"@site/docs/D-ExtraResources/compiler-optimizations.md",sourceDirName:"D-ExtraResources",slug:"/D-ExtraResources/compiler-optimizations",permalink:"/SPO600/D-ExtraResources/compiler-optimizations",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SPO600/tree/main/docs/D-ExtraResources/compiler-optimizations.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{id:"compiler-optimizations",title:"Compiler Optimizations",sidebar_position:23,description:"Compiler Optimizations"},sidebar:"courseNotesSidebar",previous:{title:"Irssi Tutorial",permalink:"/SPO600/D-ExtraResources/irssi-tutorial"},next:{title:"Benchmarking",permalink:"/SPO600/D-ExtraResources/benchmarking"}},s={},p=[{value:"GCC Optimization Options",id:"gcc-optimization-options",level:2},{value:"LLVM Optimization Options",id:"llvm-optimization-options",level:2},{value:"Examples of Common Optimizations",id:"examples-of-common-optimizations",level:2},{value:"Code Rewriting Optimizations",id:"code-rewriting-optimizations",level:3},{value:"Strength Reduction",id:"strength-reduction",level:4},{value:"Hoisting",id:"hoisting",level:4},{value:"Hoisting I - Loop-Invariant Variable",id:"hoisting-i---loop-invariant-variable",level:4},{value:"Hoisting II - Loop-Invariant Expression",id:"hoisting-ii---loop-invariant-expression",level:4},{value:"Hoisting III - Loop-Invariant Expression in Loop Condition",id:"hoisting-iii---loop-invariant-expression-in-loop-condition",level:4},{value:"Pre-calculation of Constants",id:"pre-calculation-of-constants",level:4},{value:"Loop Unswitching",id:"loop-unswitching",level:4},{value:"Loop Unswitching I - Inner/Outer Swap",id:"loop-unswitching-i---innerouter-swap",level:4},{value:"Loop Unswitching II - Inner/Outer Swap with Code Repetition",id:"loop-unswitching-ii---innerouter-swap-with-code-repetition",level:4},{value:"Loop Splitting",id:"loop-splitting",level:3},{value:"Loop Interchange",id:"loop-interchange",level:4},{value:"Loop Unrolling",id:"loop-unrolling",level:4},{value:"Loop Unrolling I - Guaranteed-Multiple Iterations",id:"loop-unrolling-i---guaranteed-multiple-iterations",level:4},{value:"Loop Unrolling II - Pairs-of-Iterations plus a Conditional Extra Iteration",id:"loop-unrolling-ii---pairs-of-iterations-plus-a-conditional-extra-iteration",level:4},{value:"Loop Unrolling III - Large Number of Iterations",id:"loop-unrolling-iii---large-number-of-iterations",level:4},{value:"Inlining",id:"inlining",level:4},{value:"Common Subexpression Elimination",id:"common-subexpression-elimination",level:4},{value:"Jump Threading",id:"jump-threading",level:4},{value:"Short-Circuit Evaluation",id:"short-circuit-evaluation",level:4},{value:"Short Circuit I - AND",id:"short-circuit-i---and",level:4},{value:"Short Circuit II - OR",id:"short-circuit-ii---or",level:4},{value:"Test Reordering",id:"test-reordering",level:4},{value:"Dead Store Elimination",id:"dead-store-elimination",level:4},{value:"Dead Store Elimination I - Simple Case",id:"dead-store-elimination-i---simple-case",level:4},{value:"Dead Store Elimination II - Unused Initialized Value in Declaration",id:"dead-store-elimination-ii---unused-initialized-value-in-declaration",level:4},{value:"Dead Store Elimination III - Special Case",id:"dead-store-elimination-iii---special-case",level:4},{value:"Machine-Code Level Optimization",id:"machine-code-level-optimization",level:3},{value:"Block Rearrangement",id:"block-rearrangement",level:4},{value:"Instruction Selection",id:"instruction-selection",level:4},{value:"Debugging with Optimizations Enabled",id:"debugging-with-optimizations-enabled",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compiler-optimizations"},"Compiler Optimizations"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Compiler optimizations")," are alterations made to code by a compiler to achieve the same result as the original input code but with improved performance. This can mean reduced code size, reduced execution size, or improved execution speed; often, these goals are in conflict and optimizing for one (such as speed) will come at the cost of another (such as code size)."),(0,o.kt)("h2",{id:"gcc-optimization-options"},"GCC Optimization Options"),(0,o.kt)("p",null,"GCC offers a large number of optimization options, most of which can be controlled in combination using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-O")," flag. This option accepts a value from 0 (no optimization) through 3 (highest optimization), s (optimize for size), fast (optimize for speed only), or g (optimize for debugging experience - avoid optimizations which convolute debugging)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-O")," actually selects a set of features. These features may also be individually selected using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag, followed by the feature name; for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"-funroll_loops")," enables the unrolling of loops (note: other features also affect loop unrolling). To disable a feature, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag followed by ",(0,o.kt)("inlineCode",{parentName:"p"},"no-")," and the feature name; for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"-fno-unroll-loops")," turns off loop unrolling."),(0,o.kt)("p",null,"To see the individual features enabled by a particular ",(0,o.kt)("inlineCode",{parentName:"p"},"-O")," flag, or combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"-O")," and feature flags, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-Q --help=optimizers")," flags, which will query the optimization feature list. For example, to see all of the optimizations enabled/disabled at ",(0,o.kt)("inlineCode",{parentName:"p"},"-O2"),", use this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcc -O2 -Q --help=optimizers\n")),(0,o.kt)("p",null,"The GCC documentation -- both the man page and even more so the online manuals -- have good information about the 200+ optimization features of the GCC compilers."),(0,o.kt)("h2",{id:"llvm-optimization-options"},"LLVM Optimization Options"),(0,o.kt)("p",null,"LLVM can perform an extensive set of analysis and transform operations (optimizations). See the llvm documentation for details."),(0,o.kt)("h2",{id:"examples-of-common-optimizations"},"Examples of Common Optimizations"),(0,o.kt)("p",null,"Here are some common C optimizations. For each optimization, an input code snippet is shown, along with the code showing the equivalent of the optimization."),(0,o.kt)("p",null,"Note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There are many other kinds of optimizations, some of which operate at the object code (ADD LINK) level."),(0,o.kt)("li",{parentName:"ul"},"Many of these optimizations cannot be performed when code has a side effect -- for example, the direction of a loop can sometimes be reversed without impact if the loop contains only calculations, but cannot be reversed if the loop contains I/O operations (such as printf()). Tracking these conditions can become complex!")),(0,o.kt)("h3",{id:"code-rewriting-optimizations"},"Code Rewriting Optimizations"),(0,o.kt)("p",null,"These optimizations involve rewriting code for performance or space. Although these examples are shown using rewritten source code, in most cases the optimizations are applied to an intermediate representation of the program which does not closely resemble the original source."),(0,o.kt)("h4",{id:"strength-reduction"},"Strength Reduction"),(0,o.kt)("p",null,"Certain operation are expensive (ADD LINK) in terms of the processor time they consume. Replacing these expensive operations with cheaper (simpler, faster) operations is called ",(0,o.kt)("em",{parentName:"p"},"strength reduction"),"."),(0,o.kt)("p",null,"This is a simple loop that counts to ten; each iteration displays the loop index multiplied by 6:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'int x;\nfor (x=0; x < 10; x++) {\n    printf("%d\\n", x*6);\n}\n')),(0,o.kt)("p",null,"By adding six to the loop index instead of one after each iteration, the slow multiplication can be eliminated from the loop; on most CPUs, the addition takes the same amount of time as the increment in the code above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'int x;\nfor (x=0; x < 60; x+=6) {\n    printf("%d", x);\n}\n')),(0,o.kt)("h4",{id:"hoisting"},"Hoisting"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Hoisting")," involves moving operations outside of a loop."),(0,o.kt)("h4",{id:"hoisting-i---loop-invariant-variable"},"Hoisting I - Loop-Invariant Variable"),(0,o.kt)("p",null,"Here is a simple loop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int t, x;\ndouble c;\nt = readtemp(); /* current temp in farenheit */\nfor (x = 0; x < 200; x++) {\n    c = (t-32)/1.8000 + 273.15;\n    foo(x,c);\n}\n")),(0,o.kt)("p",null,"The value of c is invariant within the loop, so the calculation of its value may be safely moved outside the loop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int t, x;\ndouble c;\nt = readtemp(); /* current temp in farenheit */\nc = (t-32)/1.8000 + 273.15;\nfor (x = 0; x < 200; x++) {\n    foo(x,c);\n}\n")),(0,o.kt)("h4",{id:"hoisting-ii---loop-invariant-expression"},"Hoisting II - Loop-Invariant Expression"),(0,o.kt)("p",null,"Here is a similar example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int t, x;\nt = readtemp(); /* current temp in farenheit */\nfor (x = 0; x < 200; x++) {\n    foo(x,(t-32)/1.8000 + 273.15);\n}\n")),(0,o.kt)("p",null,"In this case, there is no variable with a loop-invariant value, but the second argument to the function ",(0,o.kt)("inlineCode",{parentName:"p"},"foo()")," is invariant and can be hoisted out of the loop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int t, x;\ndouble c;\nt = readtemp(); /* current temp in farenheit */\nc = (t-32)/1.8000 + 273.15;\nfor (x = 0; x < 200; x++) {\n    foo(x,c);\n}\n")),(0,o.kt)("h4",{id:"hoisting-iii---loop-invariant-expression-in-loop-condition"},"Hoisting III - Loop-Invariant Expression in Loop Condition"),(0,o.kt)("p",null,"In this example, the invariant expression is in the loop control condition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int x, y;\ny = foo();\nfor (x=0; x < y*12; x++) {\n    bar(x);\n}\n")),(0,o.kt)("p",null,"Hoisting this out of the loop will reduce the number of multiplications performed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int x, y, c;\ny = foo();\nc = y * 12;\nfor (x=0; x < c; x++) {\n    bar(x);\n}\n")),(0,o.kt)("h4",{id:"pre-calculation-of-constants"},"Pre-calculation of Constants"),(0,o.kt)("p",null,"Where possible, the compiler will evaluate constant expressions at compile time rather than runtime:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"ff = (212-32)/100;   /* factor for celcius-farenheit conversion */\nconv = c * ff + 32;\n")),(0,o.kt)("p",null,"The factor ",(0,o.kt)("inlineCode",{parentName:"p"},"ff")," will never change, so this code could be rewritten as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"conv = c * 1.800 + 32;\n")),(0,o.kt)("h4",{id:"loop-unswitching"},"Loop Unswitching"),(0,o.kt)("p",null,"It is sometimes possible to swap a condition inside a loop for loops inside a condition."),(0,o.kt)("h4",{id:"loop-unswitching-i---innerouter-swap"},"Loop Unswitching I - Inner/Outer Swap"),(0,o.kt)("p",null,"Consider this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int foo(float ctl) {\n    int x;\n    for (x=0; x < 10000; x++) {\n        if (ctl == 0) {\n            bar(x);\n        } else {\n            qux(x);\n        }\n    }\n}\n")),(0,o.kt)("p",null,"This code evaluates the condition ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl == 0")," ten thousand times, but that condition will never change within the loop. If the loop is rewritten as a pair of loops inside an outer ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement, the condition can be evaluated just once, at the expense of larger code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int foo(float ctl) {\n    int x;\n    if (ctl == 0) {\n        for (x=0; x < 10000; x++) {\n            bar(x);\n        }\n    } else {\n        for (x=0; x < 10000; x++) {\n            qux(x);\n        }\n    }\n}\n")),(0,o.kt)("h4",{id:"loop-unswitching-ii---innerouter-swap-with-code-repetition"},"Loop Unswitching II - Inner/Outer Swap with Code Repetition"),(0,o.kt)("p",null,"This example is similar. Here, the loop contents are partially-conditional:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int foo(float ctl) {\n    int x;\n    for (x=0; x < 10000; x++) {\n        bar(x);\n        if (ctl == 0) {\n            qux(x);\n        }\n    }\n}\n")),(0,o.kt)("p",null,"Constructing two loops and placing them in a conditional structure removes the condition evaluation from inside the loop -- again, at the expense of size:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int foo(float ctl) {\n    int x;\n    if (ctl == 0) {\n        for (x=0; x < 10000; x++) {\n            bar(x);\n            qux(x);\n        }\n    } else {\n        for (x=0; x < 10000; x++) {\n            bar(x);\n        }\n    }\n}\n")),(0,o.kt)("h3",{id:"loop-splitting"},"Loop Splitting"),(0,o.kt)("p",null,"Similar to loop unswitching, loop splitting will split a loop into two if two parts of the loop are handled differently:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int foo(float ctl) {\n    int x;\n    for (x=0; x < 10000; x++) {\n        if (x < 3700) {\n            bar(x);\n        } else {\n            qux(x);\n        }\n    }\n}\n")),(0,o.kt)("p",null,"Becomes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int foo(float ctl) {\n    int x;\n    for (x=0; x < 3700; x++) {\n            bar(x);\n    }\n    for (; x < 10000; x++) {\n            qux(x);\n    }\n}\n")),(0,o.kt)("h4",{id:"loop-interchange"},"Loop Interchange"),(0,o.kt)("p",null,"Swapping an inner and outer loop can sometimes improve performance. This code iterates through a two-dimensional array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int x, y, max=10000;\nlong double a[max][max];\nfor (y=0; y < max; y++) {\n    for (x=0; x<max; x++) {\n        a[x][y]=foo(x,y);\n    }\n}\n")),(0,o.kt)("p",null,"If the data is stored in memory in row-major format (all of row 0 is followed by all of row 1), then the memory accesses in the loop above are spread across memory. This reduces the effectiveness of pre-fetching and caching memory."),(0,o.kt)("p",null,"Swapping the inner and outer loops achieves the same result, but causes the memory access to be sequential:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int x, y, max=10000;\nlong double a[max][max];\nfor (x=0; x < max; x++) {\n    for (y=0; y<max; y++) {\n        a[x][y]=foo(x,y);\n    }\n}\n")),(0,o.kt)("h4",{id:"loop-unrolling"},"Loop Unrolling"),(0,o.kt)("p",null,"A loop can be unrolled so that the inner portion of the loop contains multiple copies of the code (corresponding to multiple iterations of the loop). This takes additional space, but reduces the number of times that the loop control condition is evaluated."),(0,o.kt)("h4",{id:"loop-unrolling-i---guaranteed-multiple-iterations"},"Loop Unrolling I - Guaranteed-Multiple Iterations"),(0,o.kt)("p",null,"This loop is guaranteed to execute an even number of times:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int x, y;\ny=foo();\nfor (x = 0; x < y*2; x++) {\n    bar(x);\n}\n")),(0,o.kt)("p",null,"It can be unrolled so that the loop expression is evaluated only every second time that the loop contents are executed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int x, y;\ny=foo();\nfor (x = 0; x < y*2; ) {\n    bar(x++);\n    bar(x++);\n}\n")),(0,o.kt)("h4",{id:"loop-unrolling-ii---pairs-of-iterations-plus-a-conditional-extra-iteration"},"Loop Unrolling II - Pairs-of-Iterations plus a Conditional Extra Iteration"),(0,o.kt)("p",null,"The unrolling performed in the previous example can be performed even when the number of iterations is not guaranteed to be even, if you add an additional conditionally-executed iteration after the loop."),(0,o.kt)("p",null,"Consider this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int x, y;\ny=foo();\nfor (x=0; x < y; x++) {\n    bar(x);\n}\n")),(0,o.kt)("p",null,"If we unroll the loop so that it executes an even number of times, we can use an if statement to conditionally execute the loop contents one extra time if an odd number of iterations are required:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int x, y;\ny=foo();\nfor (x=0; x < y-1; ) {\n    bar(x++);\n    bar(x++);\n}\nif (x < y ) {\n    bar(x++);\n}\n")),(0,o.kt)("h4",{id:"loop-unrolling-iii---large-number-of-iterations"},"Loop Unrolling III - Large Number of Iterations"),(0,o.kt)("p",null,"You can extend this principle to a larger number of unrolled iterations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int x, y;\ny=foo();\nfor (x=0; x < y; x++) {\n    bar(x);\n}\n")),(0,o.kt)("p",null,"This code evaluates the loop control condition only one-tenth as often as the original loop, up to the largest multiple of ten iterations that is less than the total iteration count:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int x, y;\ny=foo();\nfor (x=0; x < y-10; ) {\n    bar(x++);\n    bar(x++);\n    bar(x++);\n    bar(x++);\n    bar(x++);\n    bar(x++);\n    bar(x++);\n    bar(x++);\n    bar(x++);\n    bar(x++);\n}\nfor (; x < y; ) {\n    bar(x++);\n}\n")),(0,o.kt)("p",null,"Loop unrolling is often beneficial as long as the unrolled loop fits into cache; unrolling past that point will reduce performance."),(0,o.kt)("h4",{id:"inlining"},"Inlining"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Inlining")," takes code from a function and places it directly into the calling routine, eliminating the function call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int foo(int a, int b) {\n    return a + b * 2;\n}\nint x, i;\nlong ttl=0;\nfor (x = 0; x < 10000; x++) {\n    i = rand();\n    ttl += foo(x, i);\n}\n")),(0,o.kt)("p",null,"Using inlining, the calls to the function ",(0,o.kt)("inlineCode",{parentName:"p"},"foo()")," can be eliminated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int x, i;\nlong ttl=0;\nfor (x = 0; x < 10000; x++) {\n    i = rand();\n    ttl += x + i*2;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Additional optimization:")," Can you see an additional optimization (besides loop unrolling) that could be performed in the example above?"),(0,o.kt)("h4",{id:"common-subexpression-elimination"},"Common Subexpression Elimination"),(0,o.kt)("p",null,"Evaluating and saving the result for a common subexpression can reduce execution time. Consider this expression:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"x = (a * c) - (a * c) / 12\n")),(0,o.kt)("p",null,"The subexpression ",(0,o.kt)("inlineCode",{parentName:"p"},"(a * c)")," is evaluated twice. It could be evaluated once and used twice, saving an expensive multiplication:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"t = (a * c)\nx = t - t/12\n")),(0,o.kt)("h4",{id:"jump-threading"},"Jump Threading"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Jump threading")," involves eliminating unnecessary condition evaluation by recognizing conditions that are in alternation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int a, b;\na=foo();\nb=!a;\nif (a) {\n    bar();\n}\nif (b) {\n    baz();\n}\n")),(0,o.kt)("p",null,"The variable ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," and the second condition are unnecessary and can be eliminated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int a, b;\na=foo();\nif (a) {\n    bar();\n} else {\n    baz();\n}\n")),(0,o.kt)("h4",{id:"short-circuit-evaluation"},"Short-Circuit Evaluation"),(0,o.kt)("h4",{id:"short-circuit-i---and"},"Short Circuit I - AND"),(0,o.kt)("p",null,"When evaluating a condition with a logical AND (&&), both halves of the condition must be true for the entire condition to be true. Therefore, it is not necessary to evaluate the second half of the condition if the first half is false:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"if (a * b > c && d > e) {\n    foo();\n}\n")),(0,o.kt)("p",null,"You could rewrite this as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"if (a * b > c) {\n    if (d > e) {\n        foo();\n    }\n}\n")),(0,o.kt)("h4",{id:"short-circuit-ii---or"},"Short Circuit II - OR"),(0,o.kt)("p",null,"In the case of a logical OR (||), the short-circuit permits you to skip evaluation of the second half of the condition if the first half is true."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"if (a * b > c || d > e ) {\n    foo();\n}\n")),(0,o.kt)("p",null,"Could be rewritten as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"// This makes more sense in assembler than C!\nif (a * b > c) {\n    foo();\n} elseif (d > e) {\n    foo();\n}\n")),(0,o.kt)("h4",{id:"test-reordering"},"Test Reordering"),(0,o.kt)("p",null,"In a short-circuit expression, you can perform a partial strength reduction by placing the least expensive expression first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"if (a * b > c && d > e) {\n    foo();\n}\n")),(0,o.kt)("p",null,"When rewriting this in short-circuit form, the expression ",(0,o.kt)("inlineCode",{parentName:"p"},"a * b > c")," contains a multiplication, while the expression ",(0,o.kt)("inlineCode",{parentName:"p"},"d > e")," does not -- so the simpler expression should be checked first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"if (d > e) {\n    if (a * b > c) {\n        foo();\n    }\n}\n")),(0,o.kt)("h4",{id:"dead-store-elimination"},"Dead Store Elimination"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"dead store")," occurs when a value is stored to a variable and never read again, often because the value is overwritten before being read."),(0,o.kt)("h4",{id:"dead-store-elimination-i---simple-case"},"Dead Store Elimination I - Simple Case"),(0,o.kt)("p",null,"Here is a simple dead store example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"a = b * c + d / f;\na = c / f * 60;\n")),(0,o.kt)("p",null,"This looks stupid, but is actually fairly common in programs, especially if there are many lines of code between the two assignments."),(0,o.kt)("p",null,"This can be written as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"a = c / f * 60;\n")),(0,o.kt)("h4",{id:"dead-store-elimination-ii---unused-initialized-value-in-declaration"},"Dead Store Elimination II - Unused Initialized Value in Declaration"),(0,o.kt)("p",null,"A common source of dead stores is unused initialized values from declarations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int a = 0;\n/* ...possibly many lines later, before a is read: */\na = foo();\n")),(0,o.kt)("p",null,"Eliminating the dead store saves a memory access:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int a;\na = foo();\n")),(0,o.kt)("h4",{id:"dead-store-elimination-iii---special-case"},"Dead Store Elimination III - Special Case"),(0,o.kt)("p",null,"Some dead stores are the result of overriding a variable value in a special case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int a;\na = b * c + d / f;     /* normal/default case */\nif (foo()) {\n    a = c / f * 60;    /* special case! */\n}\n")),(0,o.kt)("p",null,"This can be written so that only one store is ever performed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int a;\nif (foo()) {\n    a = c / f * 60;\n} else {\n    a = b * c + d / f;\n}\n")),(0,o.kt)("h3",{id:"machine-code-level-optimization"},"Machine-Code Level Optimization"),(0,o.kt)("p",null,"In addition to code rewriting, there are optimizations that can be performed at the machine language level -- the actual instructions that are emitted by the compiler and the arrangement of these instructions in memory. Here are some examples:"),(0,o.kt)("h4",{id:"block-rearrangement"},"Block Rearrangement"),(0,o.kt)("p",null,"In a block of code such as this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"if (condition) {\n  action\n }\n following code\n")),(0,o.kt)("p",null,"The compiler usually inverts the ",(0,o.kt)("em",{parentName:"p"},"condition")," test and converts it into a conditional branch/jump -- if the condition is FALSE, then the CPU branches to the ",(0,o.kt)("em",{parentName:"p"},"following")," code."),(0,o.kt)("p",null,"There are many cases where the ",(0,o.kt)("em",{parentName:"p"},"condition")," is likely to be false almost all of the time. For example, this test could be for an error condition, a very rare data case, or some kind of sanity check."),(0,o.kt)("p",null,"In a normal cache-load and prefetch pattern, the code for the conditional action is loaded into cache and the early stages of the processor's pipeline system and may even be speculatively executed while the condition is evaluated. If the condition is almost always false, its would be more efficient to load the ",(0,o.kt)("em",{parentName:"p"},"following code")," instead of the ",(0,o.kt)("em",{parentName:"p"},"action code"),", so the compiler will rearrange the code blocks to place the ",(0,o.kt)("em",{parentName:"p"},"action")," code into another area of memory."),(0,o.kt)("p",null,"In order to do this, the compiler needs to know that the condition is almost always false. The programmer can state this using Compiler Intrinsics (ADD LINK) such as the GCC ",(0,o.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html#index-fprofile-arcs-3857"},"_","_","builtin_expect function"),", or the compiler can discover this by code analysis or ",(0,o.kt)("a",{parentName:"p",href:"/SPO600/D-ExtraResources/profile-guided-optimization"},"PGO"),"."),(0,o.kt)("h4",{id:"instruction-selection"},"Instruction Selection"),(0,o.kt)("p",null,"There are many optimizations that occur at the object code level. Selecting an instruction that provides the same result as another instruction but which takes less time to execute, called ",(0,o.kt)("em",{parentName:"p"},"instruction selection"),", is a simple and common object code optimization."),(0,o.kt)("p",null,"In order to perform instruction selection, the compiler relies upon a ",(0,o.kt)("em",{parentName:"p"},"Cost Model"),", which contain detailed information about the relative execution cost of each instruction which the target can execute. Execution costs can vary between different implementations of an architecture (e.g., cpu models) due to varying numbers and efficiencies of execution units, pipeline size, and so forth, so most compilers accepts both a target architecture and a specific chip model (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"-march")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-mtune")," in gcc)."),(0,o.kt)("p",null,"The x86 instruction set in particular has some quirks that the chip designers have maintained over the years, including ",(0,o.kt)("a",{parentName:"p",href:"https://randomascii.wordpress.com/2012/12/29/the-surprising-subtleties-of-zeroing-a-register/"},"the fastest way to zero out a register"),"."),(0,o.kt)("h2",{id:"debugging-with-optimizations-enabled"},"Debugging with Optimizations Enabled"),(0,o.kt)("p",null,"Using low-level debugging (ADD LINK) tools with code that has been highly optimized can be very challenging, because the object code (ADD LINK) may bear little resemblance to the source code. However, some errors may only surface when optimization is enabled - for example, optimized code may perform an operation before a device is ready to receive data. Debugging the unoptimized code may not reveal the problem, because the extra execution time may eliminate the error."),(0,o.kt)("p",null,"The gcc option ",(0,o.kt)("inlineCode",{parentName:"p"},"-Og")," attempts to balance optimization with the debugging experience, by enabling only optimizations that will not excessively convolute the debugging process."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://gcc.gnu.org/onlinedocs/"},"GCC Manual")," (",(0,o.kt)("a",{parentName:"li",href:"http://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html"},"Optimization Options"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://llvm.org/docs/Passes.html"},"LLVM's Analysis and Transform Passes"))))}u.isMDXComponent=!0}}]);