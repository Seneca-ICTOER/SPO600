"use strict";(self.webpackChunkSPO600=self.webpackChunkSPO600||[]).push([[9906],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,d=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1737:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=a(3117),n=(a(7294),a(3905));const o={id:"lab5",title:"Lab 5",sidebar_position:5,description:"Lab 5 for Students to Complete and Submit"},i="Algorithm Selection Lab 5",s={unversionedId:"B-Labs/lab5",id:"B-Labs/lab5",title:"Lab 5",description:"Lab 5 for Students to Complete and Submit",source:"@site/docs/B-Labs/lab5.md",sourceDirName:"B-Labs",slug:"/B-Labs/lab5",permalink:"/SPO600/B-Labs/lab5",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SPO600/tree/main/docs/B-Labs/lab5.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"lab5",title:"Lab 5",sidebar_position:5,description:"Lab 5 for Students to Complete and Submit"},sidebar:"courseNotesSidebar",previous:{title:"Lab 4",permalink:"/SPO600/B-Labs/lab4"},next:{title:"Project",permalink:"/SPO600/C-Projects/project"}},l={},u=[{value:"Purpose of this Lab",id:"purpose-of-this-lab",level:2},{value:"x86_64 and AArch64 Systems",id:"x86_64-and-aarch64-systems",level:2},{value:"Lab Instructions",id:"lab-instructions",level:2},{value:"Background",id:"background",level:3},{value:"Multiple Approaches",id:"multiple-approaches",level:3},{value:"Don&#39;t Compare Across Machines",id:"dont-compare-across-machines",level:3},{value:"Important!",id:"important",level:3},{value:"Resources",id:"resources",level:3},{value:"Benchmarking",id:"benchmarking",level:2},{value:"Deliverables",id:"deliverables",level:3},{value:"Things to consider",id:"things-to-consider",level:3},{value:"Tips",id:"tips",level:3}],m={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"algorithm-selection-lab-5"},"Algorithm Selection Lab 5"),(0,n.kt)("h2",{id:"purpose-of-this-lab"},"Purpose of this Lab"),(0,n.kt)("p",null,"In this lab, you will investigate the impact of different algorithms which produce the same effect."),(0,n.kt)("h2",{id:"x86_64-and-aarch64-systems"},"x86_64 and AArch64 Systems"),(0,n.kt)("p",null,"This lab must be performed on both x86_64 and AArch64 systems. You may use the ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/D-ExtraResources/servers"},"SPO600 Servers")," or you may use other system(s) -- it might make sense to use your own x86_64 system and ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/D-ExtraResources/servers#aarch64-israelcdotsystems"},"israel.cdot.systems")," for AArch64."),(0,n.kt)("h2",{id:"lab-instructions"},"Lab Instructions"),(0,n.kt)("h3",{id:"background"},"Background"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Digital sound is typically represented, uncompressed, as signed 16-bit integer signal samples. There are two streams of samples, one each for the left and right stereo channels, at typical sample rates of 44.1 or 48 thousand samples (kHz)per second per channel, for a total of 88.2 or 96 thousand samples per second. Since there are 16 bits (2 bytes) per sample, the data rate is 88.2 ","*"," 1000 ","*"," 2 = 176,400 bytes/second (~172 KiB/sec) or 96 ","*"," 1000 ","*"," 2 = 192,000 bytes/second (~187.5 KiB/sec)."),(0,n.kt)("li",{parentName:"ul"},"To change the volume of sound, each sample can be scaled (multiplied) by a volume factor, in the range of 0.00 (silence) to 1.00 (full volume)."),(0,n.kt)("li",{parentName:"ul"},"On a mobile device, the amount of processing required to scale sound will affect battery life.")),(0,n.kt)("h3",{id:"multiple-approaches"},"Multiple Approaches"),(0,n.kt)("p",null,"Six programs are provided, each with a different approach to the problem, named ",(0,n.kt)("inlineCode",{parentName:"p"},"vol0.c")," through ",(0,n.kt)("inlineCode",{parentName:"p"},"vol5.c"),". A header file, ",(0,n.kt)("inlineCode",{parentName:"p"},"vol.h"),", defines how much data (in number of sample) will be processed by each program, as well as the volume level to be used for scaling (50%)."),(0,n.kt)("p",null,"These are the six programs:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"vol0.c is the basic or naive algorithm. This approach multiplies each sound sample by the volume scaling factor, casting from signed 16-bit integer to floating point and back again. Casting between integer and floating point can be expensive (ADD LINK) operations."),(0,n.kt)("li",{parentName:"ol"},"vol1.c does the math using fixed-point calculations. This avoids the overhead of casting between integer and floating point and back again."),(0,n.kt)("li",{parentName:"ol"},"vol2.c pre-calculates all 65536 different results, and then looks up the answer for each input value."),(0,n.kt)("li",{parentName:"ol"},"vol3.c is a dummy program - it doesn't scale the volume at all. It can be used to determine some of the overhead of the rest of the processing (besides scaling the volume) done by the other programs."),(0,n.kt)("li",{parentName:"ol"},"vol4.c uses Single Instruction, Multiple Data (SIMD) instructions accessed through inline assembley (assembly language code inserted into a C program). This program is specific to the AArch64 architecture and will not build for x86","_","64."),(0,n.kt)("li",{parentName:"ol"},"vol5.c uses SIMD instructions accessed through Complier Intrinsics. This program is also specific to AArch64.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note that vol4.c and vol5.c will build only on AArch64 systems because they use architecture-specific SIMD instructions.")),(0,n.kt)("h3",{id:"dont-compare-across-machines"},"Don't Compare Across Machines"),(0,n.kt)("p",null,"In this lab, ",(0,n.kt)("em",{parentName:"p"},"do not")," compare the relative performance across different machines, because various systems have different microarchitectures, memory configurations, peripheral implementations, and clock speeds, from mobile-class to server-class (e.g. Intel Atom vs. Xeon; AMD APU vs. Threadripper; ARM Cortex-A55 vs. Neoverse-V2)."),(0,n.kt)("p",null,"However, ",(0,n.kt)("em",{parentName:"p"},"do")," compare the relative performance of the various algorithms on the ",(0,n.kt)("em",{parentName:"p"},"same")," machine."),(0,n.kt)("h3",{id:"important"},"Important!"),(0,n.kt)("p",null,"The hardest part of this lab, and the most critical component, is being able to separate the performance of the volume scaling code from the rest of the code (which only exists to set up the test of the scaling code). The volume scaling code runs ",(0,n.kt)("em",{parentName:"p"},"very")," quickly, and is dwarfed by the rest of the code."),(0,n.kt)("p",null,"You ",(0,n.kt)("strong",{parentName:"p"},"must"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Control variables in your test environment.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"What else is the machine doing while you are testing?"),(0,n.kt)("li",{parentName:"ul"},"Who else is logged in to the machine?"),(0,n.kt)("li",{parentName:"ul"},"What background operations are being performed?"),(0,n.kt)("li",{parentName:"ul"},"How does your login on the machine affect performance (e.g., network activity)?"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Isolate the performance of the volume scaling code"),". This is one of the most important parts of this lab! There are two practical approaches:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Subtract the performance of the dummy version of the program from each of the other versions, or"),(0,n.kt)("li",{parentName:"ul"},"Add code to the program to measure and report just the performance of the volume-scaling code"))),(0,n.kt)("li",{parentName:"ul"},"Repeat the tests multiple times to ensure that the results you are getting are consistent, valid, and accurately reflect the performance of the volume scaling code.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Make sure you are performing enough calculation to give a useful result -- adjust the SAMPLES value in ",(0,n.kt)("inlineCode",{parentName:"li"},"vol.h")," to a sufficiently high value"),(0,n.kt)("li",{parentName:"ul"},"Discard outliers (unusually high or low results)"),(0,n.kt)("li",{parentName:"ul"},"Average the results."),(0,n.kt)("li",{parentName:"ul"},"Take some measure of the amount of variation of your results (e.g., tolerance limits or standard deviation).")))),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ARM Aarch64 documentation",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://developer.arm.com/"},"ARM Developer Information Centre"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.arm.com/docs/den0024/latest"},"ARM Cortex-A Series Programmer\u2019s Guide for ARMv8-A")),(0,n.kt)("li",{parentName:"ul"},"The short guide to the ARMv8 instruction set: ",(0,n.kt)("a",{parentName:"li",href:"https://www.element14.com/community/servlet/JiveServlet/previewBody/41836-102-1-229511/ARM.Reference_Manual.pdf"},"ARMv8 Instruction Set Overview"),' ("ARM ISA Overview")'),(0,n.kt)("li",{parentName:"ul"},"The long guide to the ARMv8 instruction set: ",(0,n.kt)("a",{parentName:"li",href:"https://developer.arm.com/docs/ddi0487/latest/arm-architecture-reference-manual-armv8-for-armv8-a-architecture-profile"},"ARM Architecture Reference Manual ARMv8, for ARMv8-A architecture profile"),' ("ARM ARM")'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.arm.com/docs/ihi0055/latest/procedure-call-standard-for-the-arm-64-bit-architecture"},"Procedure Call Standard for the ARM 64-bit Architecture (AArch64)")))),(0,n.kt)("li",{parentName:"ul"},"x86_64 Documentation",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AMD: ",(0,n.kt)("a",{parentName:"li",href:"https://developer.amd.com/resources/developer-guides-manuals/"},"https://developer.amd.com/resources/developer-guides-manuals/")," (see the AMD64 Architecture section, particularly the AMD64 Architecture Programmer\u2019s Manual Volume 3: General Purpose and System Instructions)"),(0,n.kt)("li",{parentName:"ul"},"Intel: ",(0,n.kt)("a",{parentName:"li",href:"http://www.intel.com/content/www/us/en/processors/architectures-software-developer-manuals.html"},"http://www.intel.com/content/www/us/en/processors/architectures-software-developer-manuals.html")),(0,n.kt)("li",{parentName:"ul"},"Web sites",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://ref.x86asm.net/"},"http://ref.x86asm.net/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://sandpile.org/"},"http://sandpile.org/")))))),(0,n.kt)("li",{parentName:"ul"},"Assembler and Inline Assembler",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/SPO600/F-AssemblyLanguage/assembler-basics"},"Assembler Basics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/SPO600/F-AssemblyLanguage/inline-assembly-language"},"Inline Assembly Language")),(0,n.kt)("li",{parentName:"ul"},"GAS Manual - Using as, The GNU Assembler: ",(0,n.kt)("a",{parentName:"li",href:"https://sourceware.org/binutils/docs/as/"},"https://sourceware.org/binutils/docs/as/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Specifically, the ",(0,n.kt)("a",{parentName:"li",href:"http://gcc.gnu.org/onlinedocs/gcc-4.8.2/gcc/Extended-Asm.html"},"Assembler Instructions with C Expression Operands")," section")))))),(0,n.kt)("h2",{id:"benchmarking"},"Benchmarking"),(0,n.kt)("p",null,"Get the files for this lab from one of the ",(0,n.kt)("a",{parentName:"p",href:"/SPO600/D-ExtraResources/servers"},"SPO600 Servers")," -- but you can perform the lab wherever you want (feel free to use your laptop or home system). Test on both an x86","_","64 and an AArch64 system."),(0,n.kt)("p",null,"The files for this lab are in the archive ",(0,n.kt)("inlineCode",{parentName:"p"},"/public/spo600-volume-examples.tgz")," on each of the SPO600 servers. The archive contains:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"vol.h")," controls the number of samples to be processed and the volume level to be used"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"vol0.c")," through ",(0,n.kt)("inlineCode",{parentName:"li"},"vol5.c")," implement the various algorithms"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"vol_createsample.c")," contains a function to create dummy samples"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"Makefile")," can be used to build the programs")),(0,n.kt)("p",null,"Perform these steps ",(0,n.kt)("strong",{parentName:"p"},"on both x86_64 and AArch64 systems"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Unpack the archive ",(0,n.kt)("inlineCode",{parentName:"li"},"/public/spo600-volume-examples.tgz")),(0,n.kt)("li",{parentName:"ol"},"Study each of the source code files and make sure that you understand what the code is doing."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Make a prediction")," of the relative performance of each scaling algorithm."),(0,n.kt)("li",{parentName:"ol"},"Build and test each of the programs.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Do all of the algorithms produce the same output?",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"How can you verify this?"),(0,n.kt)("li",{parentName:"ul"},"If there is a difference, is it significant enough to matter?"))),(0,n.kt)("li",{parentName:"ul"},"Change the number of samples so that each program takes a reasonable amount of time to execute (suggested minimum is 20 seconds)."))),(0,n.kt)("li",{parentName:"ol"},"Test the performance of each program (vol0 through vol3 on x86","_","64, and vol0 through vol5 on AArch64)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Find a way to measure performance without the time taken to perform the test setup pre-processing (generating the samples) and post-processing (summing the results) so that you can measure ",(0,n.kt)("em",{parentName:"li"},"only")," the time taken to scale the samples. ",(0,n.kt)("strong",{parentName:"li"},"This is the hard part!")),(0,n.kt)("li",{parentName:"ul"},"How much time is spent scaling the sound samples?"),(0,n.kt)("li",{parentName:"ul"},"Do multiple runs take the same time? How much variation do you observe? What is the likely cause of this variation?"),(0,n.kt)("li",{parentName:"ul"},"Is there any difference in the results produced by the various algorithms?"),(0,n.kt)("li",{parentName:"ul"},"Does the difference between the algorithms vary depending on the architecture and implementation on which you test?"),(0,n.kt)("li",{parentName:"ul"},"What is the relative memory usage of each program?"))),(0,n.kt)("li",{parentName:"ol"},"See if you can measurably increase performance by changing the compiler option (via the Makefile)"),(0,n.kt)("li",{parentName:"ol"},"Was your prediction about performance accurate?"),(0,n.kt)("li",{parentName:"ol"},"Find all of the questions, marked with ",(0,n.kt)("inlineCode",{parentName:"li"},"Q:"),", in the program comments, and answer those questions.")),(0,n.kt)("h3",{id:"deliverables"},"Deliverables"),(0,n.kt)("p",null,"Blog about your experiments with a detailed analysis of your results, including memory usage, performance, accuracy, and trade-offs. Include answers to all of the questions marked with Q: in the source code."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Make sure you convincingly prove your results to your reader!")," Re-read the ",(0,n.kt)("a",{parentName:"p",href:"#important"},"section marked Important above")," and make sure you address the issues explained there. Also be sure to explain what you're doing so that a reader coming across your blog post understands the context (in other words, don't just jump into a discussion of optimization results -- give your post some context)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Optional - Recommended"),": Compare results across several ",(0,n.kt)("strong",{parentName:"p"},"implementations")," of AArch64 and x86","_","64 systems. Note that on different CPU implementations, the relative performance of different algorithms will vary; for example, table lookup may outperform other algorithms on a system with a fast memory system (cache), but not on a system with a slower memory system."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For AArch64, you could compare the performance on AArchie against a Raspberry Pi 4 (in 64-bit mode) or an ARM Chromebook."),(0,n.kt)("li",{parentName:"ul"},"For x86","_","64, you could compare the performance of different processors, such as portugal.cdot.systems, your own laptop or desktop, and Seneca systems such as Matrix or lab desktops.")),(0,n.kt)("h3",{id:"things-to-consider"},"Things to consider"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Design of Your Tests")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Most solutions for a problem of this type involve generating a large amount of data in an array, processing that array using the function being evaluated, and then storing that data back into an array. The test setup can take more time than the actual test! Make sure that you measure the time taken for the code in question (the part that scales the sound samples) ONLY -- you need to be able to remove the rest of the processing time from your evaluation."),(0,n.kt)("li",{parentName:"ul"},"You may need to run a massive large amount of sample data through the function to be able to detect its performance."),(0,n.kt)("li",{parentName:"ul"},"If you do not use the output from your calculation (e.g., do something with the output array), the compiler may recognize that, and remove the code you're trying to test. Be sure to process the results in some way so that the optimizer preserves the code you want to test. It is a good idea to calculate some sort of verification value to ensure that both approaches generate the same results."),(0,n.kt)("li",{parentName:"ul"},"Be aware of what other tasks the system is handling during your test run, including software running on behalf of other users.")),(0,n.kt)("h3",{id:"tips"},"Tips"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Analysis")),(0,n.kt)("p",null,'Do a thorough analysis of the results. Be certain (and prove!) that your performance measurement does not include the generation or summarization of the test data. Do multiple runs and discard the outliers. Decide whether to use mean, minimum, or maximum time values from the multiple runs, and explain why you made that decision. Control your variables well. Show relative performance as percentage change, e.g., "this approach was NN% faster than that approach".'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Time and Memory Usage of a Program")),(0,n.kt)("p",null,"You can get basic timing information for a program by running ",(0,n.kt)("inlineCode",{parentName:"p"},"time programName")," -- the output will show the total time taken (real), the amount of CPU time used to run the application (user), and the amount of CPU time used by the operating system on behalf of the application (system). The version of the ",(0,n.kt)("inlineCode",{parentName:"p"},"time")," command located in ",(0,n.kt)("inlineCode",{parentName:"p"},"/bin/time")," gives slightly different information than the version built in to bash -- including maximum resident memory usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"/bin/time ./programName")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SOX")),(0,n.kt)("p",null,"If you want to try this with actual sound samples, you can convert a sound file of your choice to raw 16-bit signed integer PCM data using the ",(0,n.kt)("a",{parentName:"p",href:"http://sox.sourceforge.net/"},"sox")," utility present on most Linux systems and available for a wide range of platforms."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"stdint.h")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"stdint.h")," header provides definitions for many specialized integer size types. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"int16_t")," for 16-bit signed integers and ",(0,n.kt)("inlineCode",{parentName:"p"},"uint16_t")," for 16-bit unsigned integers."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Scripting")),(0,n.kt)("p",null,"Use bash scripting capabilities to reduce tedious manual steps!"))}p.isMDXComponent=!0}}]);