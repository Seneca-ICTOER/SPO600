"use strict";(self.webpackChunkSPO600=self.webpackChunkSPO600||[]).push([[455],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1043:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l}});var n=r(3117),o=(r(7294),r(3905));const a={id:"host-setup",title:"Host Setup",sidebar_position:4,description:"Host Setup"},s="Host Setup",i={unversionedId:"D-ExtraResources/host-setup",id:"D-ExtraResources/host-setup",title:"Host Setup",description:"Host Setup",source:"@site/docs/D-ExtraResources/host-setup.md",sourceDirName:"D-ExtraResources",slug:"/D-ExtraResources/host-setup",permalink:"/SPO600/D-ExtraResources/host-setup",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SPO600/tree/main/docs/D-ExtraResources/host-setup.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"host-setup",title:"Host Setup",sidebar_position:4,description:"Host Setup"},sidebar:"courseNotesSidebar",previous:{title:"Active Learning Classroom",permalink:"/SPO600/D-ExtraResources/active-learning-classroom"},next:{title:"Information for Prospective Students",permalink:"/SPO600/D-ExtraResources/information-for-prospective-students"}},u={},l=[],c={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"host-setup"},"Host Setup"),(0,o.kt)("p",null,"For SPO600 (ADD LINK), remote access to ",(0,o.kt)("a",{parentName:"p",href:"/SPO600/D-ExtraResources/servers"},"Linux systems")," is provided. Howerver, it is strongly recommended that you have access to a personal x86_64 (64-bit AMD/Intel) or ARM64 Linux system. I recommend running the latest release of ",(0,o.kt)("a",{parentName:"p",href:"http://get.fedoraproject.org/"},"Fedora")," to match the ",(0,o.kt)("a",{parentName:"p",href:"/SPO600/D-ExtraResources/servers"},"class ARM servers"),", and because Fedora has a very up-to-date version of the gcc compiler which supports SVE2 (ADD LINK)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This system could be set up:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On your laptop"),(0,o.kt)("li",{parentName:"ul"},"As a virtual machine on your laptop"),(0,o.kt)("li",{parentName:"ul"},"On a computer at your home, ideally with ",(0,o.kt)("a",{parentName:"li",href:"/SPO600/D-ExtraResources/ssh"},"SSH")," access (so you can connect to your home system from class)"),(0,o.kt)("li",{parentName:"ul"},"On a USB drive or external disk pack")),(0,o.kt)("p",null,"You may want to installing virtual machine/emulation/simulation software on this machine, in which case a fast/large system is desirable."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recommended system configuration (especially if using emulation):")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install a 64-bit Linux operating system (",(0,o.kt)("a",{parentName:"li",href:"https://getfedora.org/"},"Fedora")," is recommended)"),(0,o.kt)("li",{parentName:"ul"},"Minimum 2GB RAM"),(0,o.kt)("li",{parentName:"ul"},"Minumum 32GB disk space")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Initial software to install:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Development tools and libraries (on Fedora: ",(0,o.kt)("inlineCode",{parentName:"li"},'dnf groupinstall "Development Tools" "Development Libraries"'),")."),(0,o.kt)("li",{parentName:"ul"},"The qemu-aarch64 emulation tool (on Fedora: ",(0,o.kt)("inlineCode",{parentName:"li"},"dnf install qemu-user"),")."),(0,o.kt)("li",{parentName:"ul"},"A GUI is optional and may not be required (especially if the system is being accessed remotely).")))}p.isMDXComponent=!0}}]);