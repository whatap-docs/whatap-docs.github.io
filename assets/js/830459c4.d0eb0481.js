"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[87527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66242:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(67294),a=n(86010),o=n(53438),i=n(39960),c=n(13919),l=n(95999);const s="cardContainer_S8oU",p="cardTitle_HoSo",m="cardDescription_c27F";function u(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function d(e){let{href:t,icon:n,title:o,description:i}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:o},o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:i},i))}function f(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(d,{href:n,title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;(0,c.Z)(t.href);const n=(0,o.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,title:t.label,description:null==n?void 0:n.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},41913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(66242);const i={id:"set-agent",title:"\uc124\uc815\ud558\uae30",description:".NET \uc5d0\uc774\uc804\ud2b8\uc758 \uae30\ubcf8 \uc124\uc815 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:[".NET","\ud658\uacbd \uc124\uc815"]},c=void 0,l={unversionedId:"dotnet/set-agent",id:"dotnet/set-agent",title:"\uc124\uc815\ud558\uae30",description:".NET \uc5d0\uc774\uc804\ud2b8\uc758 \uae30\ubcf8 \uc124\uc815 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/docs/dotnet/set-agent.mdx",sourceDirName:"dotnet",slug:"/dotnet/set-agent",permalink:"/dotnet/set-agent",draft:!1,editUrl:"undefined/docs/dotnet/set-agent.mdx",tags:[{label:".NET",permalink:"/tags/net"},{label:"\ud658\uacbd \uc124\uc815",permalink:"/tags/\ud658\uacbd-\uc124\uc815"}],version:"current",frontMatter:{id:"set-agent",title:"\uc124\uc815\ud558\uae30",description:".NET \uc5d0\uc774\uc804\ud2b8\uc758 \uae30\ubcf8 \uc124\uc815 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:[".NET","\ud658\uacbd \uc124\uc815"]},sidebar:"dotNetSidebar",previous:{title:"\uc124\uce58 \ubb38\uc81c \ud574\uacb0",permalink:"/dotnet/agent-troubleshooting"},next:{title:"\uc5d0\uc774\uc804\ud2b8 \uc774\ub984 \uc2dd\ubcc4",permalink:"/dotnet/agent-name"}},s={},p=[],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc640\ud0ed \uc5d0\uc774\uc804\ud2b8\ub294 \uc5d0\uc774\uc804\ud2b8 \ubcc4 \ud544\uc694\ud55c \uc124\uc815\uc744 ",(0,a.kt)("em",{parentName:"p"},"whatap.conf")," \ud30c\uc77c\uc5d0 \uc791\uc131\ud569\ub2c8\ub2e4. \uc5d0\uc774\uc804\ud2b8\ub294 \ud658\uacbd\ubcc0\uc218\ub97c \ud1b5\ud574 \uc124\uc815 \ud30c\uc77c\uc758 \uc704\uce58\ub97c \ud30c\uc545\ud558\uace0 \ub85c\ub529\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"p"},"whatap.conf")," \ud30c\uc77c\uc744 \ud1b5\ud574 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);