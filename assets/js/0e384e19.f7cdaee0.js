"use strict";(self.webpackChunknodesignaldocs=self.webpackChunknodesignaldocs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={id:"intro",title:"Intro to NodeSignals",custom_edit_url:null,sidebar_position:0},l="Introduction",a={unversionedId:"intro",id:"intro",title:"Intro to NodeSignals",description:"Welcome",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/NodeSignals/docs/intro",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"intro",title:"Intro to NodeSignals",custom_edit_url:null,sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Exports",permalink:"/NodeSignals/docs/api/"}},s={},c=[{value:"Welcome",id:"welcome",level:2},{value:"How do I use them?",id:"how-do-i-use-them",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,"Hello and welcome to using NodeSignals! NodeSignals is a Node.js Signal Implementation designed to be close in usage to Roblox's Signals."),(0,o.kt)("h2",{id:"how-do-i-use-them"},"How do I use them?"),(0,o.kt)("p",null,"To start using NodeSignals, first import or require the module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// TS\n\nimport { NodeSignal } from "nodesignals"\n\n// JS\n\nconst { NodeSignal } = require("nodesignals")\n')),(0,o.kt)("p",null,"From there you can create a new NodeSignal, like so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Signal = new NodeSignal()\n")),(0,o.kt)("p",null,"To listen to an event you can do the following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Signal.Connect((/*Args Go Here*/) => {\n\n})\n")))}d.isMDXComponent=!0}}]);