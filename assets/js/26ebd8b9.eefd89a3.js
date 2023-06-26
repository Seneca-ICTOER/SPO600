"use strict";(self.webpackChunkSPO600=self.webpackChunkSPO600||[]).push([[4440],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,d=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3378:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var n=r(3117),a=(r(7294),r(3905));const o={id:"benchmarking",title:"Benchmarking",sidebar_position:24,description:"Benchmarking"},i="Benchmarking",s={unversionedId:"D-ExtraResources/benchmarking",id:"D-ExtraResources/benchmarking",title:"Benchmarking",description:"Benchmarking",source:"@site/docs/D-ExtraResources/benchmarking.md",sourceDirName:"D-ExtraResources",slug:"/D-ExtraResources/benchmarking",permalink:"/SPO600/D-ExtraResources/benchmarking",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SPO600/tree/main/docs/D-ExtraResources/benchmarking.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{id:"benchmarking",title:"Benchmarking",sidebar_position:24,description:"Benchmarking"},sidebar:"courseNotesSidebar",previous:{title:"Compiler Optimizations",permalink:"/SPO600/D-ExtraResources/compiler-optimizations"},next:{title:"Computer Architecture",permalink:"/SPO600/E-ComputerArchitecture/computer-architecture"}},c={},l=[{value:"Benchmarking Software",id:"benchmarking-software",level:2},{value:"Factors to Control",id:"factors-to-control",level:2},{value:"Typical Benchmark Process",id:"typical-benchmark-process",level:2},{value:"Execution-time Benchmarks",id:"execution-time-benchmarks",level:3},{value:"Volume-of-Work Benchmarks",id:"volume-of-work-benchmarks",level:3},{value:"Comparing Different Systems",id:"comparing-different-systems",level:2}],m={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This is a draft only!:")," It is still under construction and content may change. Do not rely on this information."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"bench mark")," was originally a surveyor's mark used to record a reference elevation. A surveyor would literally mark a pillar, post, or stone with the reference elevation, which would correspond to the height at which they would place their bench (platform for measuring equipment) to measure other elevations. (See the ",(0,a.kt)("a",{parentName:"p",href:"http://en.wiktionary.org/wiki/benchmark#Etymology"},"etymology of benchmark at Wiktionary"),"."),(0,a.kt)("h2",{id:"benchmarking-software"},"Benchmarking Software"),(0,a.kt)("p",null,"In the software industry, benchmarking means measuring performance in a reliable, repeatable way. This is done to compare the relative performance of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"two versions of the same software (to gauge the effect of changes made to the software);"),(0,a.kt)("li",{parentName:"ul"},"two different pieces of software which do the same thing (e.g., two webservers);"),(0,a.kt)("li",{parentName:"ul"},"the same software running with different libraries or operating systems (e.g., apache under Windows and OS/X);"),(0,a.kt)("li",{parentName:"ul"},"the same software built in two different ways (e.g., using different compilers or optimization options); or"),(0,a.kt)("li",{parentName:"ul"},"the same software on two different computers (x86_64 vs mainframe) or computer configurations (SSD vs. hard disk, or 8GB RAM vs 64GB RAM).")),(0,a.kt)("h2",{id:"factors-to-control"},"Factors to Control"),(0,a.kt)("p",null,"In order to produce reliable, repeatable results, variable must be controlled or eliminated. The most common variables affecting performance results on a system are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the data being processed;"),(0,a.kt)("li",{parentName:"ul"},"the state of caches;"),(0,a.kt)("li",{parentName:"ul"},"other activity on the system (other processes, users, network activity, and so forth).")),(0,a.kt)("h2",{id:"typical-benchmark-process"},"Typical Benchmark Process"),(0,a.kt)("h3",{id:"execution-time-benchmarks"},"Execution-time Benchmarks"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Decide on the processing to be benchmarked. It is best to avoid all human interaction (user interfaces) and use data that is consistent (data sets should be provided by a file, random numbers should be generated by a PRNG given identical keys, etc). Pick a data set size that is"),(0,a.kt)("li",{parentName:"ol"},"Disable any unnecessary background processing (daemons, cron jobs, screen sessions, and so forth)."),(0,a.kt)("li",{parentName:"ol"},"Warm up disk and network caches by doing an initial program run and discard the results."),(0,a.kt)("li",{parentName:"ol"},"Execute the benchmark process several times, recording the execution time for each run. If the results are not consistent, determine why and eliminate the variation.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Timing Commands on a Linux System:")," You can record the execution time of a command on a Linux system using the ",(0,a.kt)("inlineCode",{parentName:"p"},"time")," command. However, this includes command startup and shutdown time, and is not suitable for all purposes."),(0,a.kt)("h3",{id:"volume-of-work-benchmarks"},"Volume-of-Work Benchmarks"),(0,a.kt)("p",null,"For some operations, especially such as serving web pages or remote storage, it may be more appropriate to determine how much data (e.g., web requests) can be served in a given amount of time."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Decide on the processing to be benchmarked, and which program will be used to generate the test load (e.g., a program to request web pages, such as httpbench, or a program to generate storage requests, such as bonnie++)."),(0,a.kt)("li",{parentName:"ol"},"Decide whether the load generator should be run on the same system as the server, or on another network-connected system (ensure that the network connection is fast enough that it will not be the limiting factor)."),(0,a.kt)("li",{parentName:"ol"},"Set up the server."),(0,a.kt)("li",{parentName:"ol"},"Run the benchmark several times. Discard the first result (it may be affected by cache state)."),(0,a.kt)("li",{parentName:"ol"},"If the results are not consistent, determine why and eliminate the variation.")),(0,a.kt)("h2",{id:"comparing-different-systems"},"Comparing Different Systems"),(0,a.kt)("p",null,"To compare benchmarks on different systems or with different software, it is important to configure the systems as similarly as possible. Doing so is left as an exercise for the reader :-)"))}u.isMDXComponent=!0}}]);