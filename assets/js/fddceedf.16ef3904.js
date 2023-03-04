"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[13833],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(v,i(i({ref:t},s),{},{components:r})):a.createElement(v,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"liberty",title:"Liberty",description:"Liberty \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84 \ud658\uacbd\uc5d0\uc11c JVM \uc635\uc158 \ucd94\uac00 \uc124\uc815\uc744 \uc644\ub8cc\ud558\uc138\uc694.",tags:["Java","Liberty"]},i=void 0,p={unversionedId:"java/add-jvm-opt/liberty",id:"java/add-jvm-opt/liberty",title:"Liberty",description:"Liberty \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84 \ud658\uacbd\uc5d0\uc11c JVM \uc635\uc158 \ucd94\uac00 \uc124\uc815\uc744 \uc644\ub8cc\ud558\uc138\uc694.",source:"@site/docs/java/add-jvm-opt/liberty.mdx",sourceDirName:"java/add-jvm-opt",slug:"/java/add-jvm-opt/liberty",permalink:"/java/add-jvm-opt/liberty",draft:!1,editUrl:"undefined/docs/java/add-jvm-opt/liberty.mdx",tags:[{label:"Java",permalink:"/tags/java"},{label:"Liberty",permalink:"/tags/liberty"}],version:"current",frontMatter:{id:"liberty",title:"Liberty",description:"Liberty \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84 \ud658\uacbd\uc5d0\uc11c JVM \uc635\uc158 \ucd94\uac00 \uc124\uc815\uc744 \uc644\ub8cc\ud558\uc138\uc694.",tags:["Java","Liberty"]},sidebar:"javaSidebar",previous:{title:"Resin",permalink:"/java/add-jvm-opt/resin"},next:{title:"Jetty",permalink:"/java/add-jvm-opt/jetty"}},l={},c=[],s={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Liberty\ub97c \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84 \ud658\uacbd\uc5d0\uc11c JVM \uc635\uc158\uc744 \ucd94\uac00\ud558\ub294 \ubc29\ubc95\uc744 \ud655\uc778\ud558\uc138\uc694. "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"jvm.options")," \ud30c\uc77c\uc5d0 \uc5d0\uc774\uc804\ud2b8 \uc635\uc158\uc744 \ucd94\uac00\ud558\uc138\uc694. \ud30c\uc77c\uc774 \uc5c6\ub294 \uacbd\uc6b0 \uc2e0\uaddc\ub85c \uc0dd\uc131\ud558\uc138\uc694."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=/wasliberty/usr/servers/defaultServer/jvm.options {2} showLineNumbers",title:"/wasliberty/usr/servers/defaultServer/jvm.options","{2}":!0,showLineNumbers:!0},"-javaagent:/app/whatap/whatap.agent-2.1.1.jar\n-Dorg.osgi.framework.bootdelegation=whatap.* ## OSGI \ud504\ub808\uc784\uc6cc\ud06c \uc124\uc815\uc744 \uc704\ud55c \ucd94\uac00 \uc635\uc158 ##\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Java 17 \ubc84\uc804 \uc774\uc0c1\uc758 \uacbd\uc6b0 reflection \uad00\ub828\ud55c \ub2e4\uc74c \uc635\uc158\uc744 \ucd94\uac00\ud558\uc138\uc694."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\n--add-opens=java.base/java.lang=ALL-UNNAMED\n\n"))),(0,n.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\ub97c \ub2e4\uc2dc \uc2dc\uc791\ud558\uba74 \uc5d0\uc774\uc804\ud2b8\uac00 \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uae30 \uc2dc\uc791\ud569\ub2c8\ub2e4. ",(0,n.kt)("a",{parentName:"p",href:"/java/install-check"},"\ub2e4\uc74c \ubb38\uc11c"),"\ub97c \ud655\uc778\ud558\uc138\uc694."))}d.isMDXComponent=!0}}]);