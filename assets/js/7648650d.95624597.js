"use strict";(self.webpackChunkSPO600=self.webpackChunkSPO600||[]).push([[8225],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9666:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var n=r(3117),o=(r(7294),r(3905));const a={id:"screen-tutorial",title:"Screen Tutorial",sidebar_position:11,description:"Screen Tutorial"},i="Screen Tutorial",s={unversionedId:"D-ExtraResources/screen-tutorial",id:"D-ExtraResources/screen-tutorial",title:"Screen Tutorial",description:"Screen Tutorial",source:"@site/docs/D-ExtraResources/screen-tutorial.md",sourceDirName:"D-ExtraResources",slug:"/D-ExtraResources/screen-tutorial",permalink:"/SPO600/D-ExtraResources/screen-tutorial",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/SPO600/tree/main/docs/D-ExtraResources/screen-tutorial.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"screen-tutorial",title:"Screen Tutorial",sidebar_position:11,description:"Screen Tutorial"},sidebar:"courseNotesSidebar",previous:{title:"SSH",permalink:"/SPO600/D-ExtraResources/ssh"},next:{title:"RPM Packaging Process",permalink:"/SPO600/D-ExtraResources/rpm-packaging-process"}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"screen-tutorial"},"Screen Tutorial"),(0,o.kt)("p",null,"When performing a long interactive operation such as a complex test or build over a remote connection (such as ",(0,o.kt)("a",{parentName:"p",href:"/SPO600/D-ExtraResources/ssh"},"SSH"),"), any network interruption such as a temporary break in WiFi connectivity or relocating from one pace to another will interrupt the operation and force you to start over."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/screen/"},"GNU screen")," is a utility which addresses this problem by enabling you to disconnect from a terminal session and reconnect from the same or a different location later. It also has a number of advanced features such as multiple sessions over a single connection and session sharing between multiple users. This tutorial covers the most basic and useful use-case."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect to a system, either by logging in locally or logging in remotely via ",(0,o.kt)("a",{parentName:"li",href:"/SPO600/D-ExtraResources/ssh"},"SSH"),"."),(0,o.kt)("li",{parentName:"ol"},"Start screen: ",(0,o.kt)("inlineCode",{parentName:"li"},"screen -RaD"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"-RaD")," options tell screen to start a session if none exists, or take over an existing session is one does exist, and to detach any existing remote connections to that session."))),(0,o.kt)("li",{parentName:"ol"},"Perform whatever operations you desire."),(0,o.kt)("li",{parentName:"ol"},"Disconnect by pressing ",(0,o.kt)("strong",{parentName:"li"},"Ctrl-A")," then ",(0,o.kt)("strong",{parentName:"li"},"D"),"."),(0,o.kt)("li",{parentName:"ol"},"You can now disconnect/close your local login or ssh connection."),(0,o.kt)("li",{parentName:"ol"},"To resume from the same or other location, issue the command from step 2.")),(0,o.kt)("p",null,"For additional details, see the manpage for screen."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternatives")),(0,o.kt)("p",null,"An alternative to screen is ",(0,o.kt)("a",{parentName:"p",href:"https://tmux.github.io/"},"tmux"),"."),(0,o.kt)("p",null,"For a similar disconnect/reconnect capability for graphical applications, see ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Virtual_Network_Computing"},"VNC"),"."))}p.isMDXComponent=!0}}]);