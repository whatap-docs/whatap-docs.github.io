"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[67023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66242:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),a=n(86010),i=n(53438),o=n(39960),c=n(13919),l=n(95999);const s="cardContainer_S8oU",m="cardTitle_HoSo",p="cardDescription_c27F";function u(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function f(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:i},i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",p),title:o},o))}function d(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(f,{href:n,title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;(0,c.Z)(t.href);const n=(0,i.xz)(t.docId??void 0);return r.createElement(f,{href:t.href,title:t.label,description:null==n?void 0:n.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},67395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),i=n(66242);const o={id:"agent-settings",title:"\uc124\uc815\ud558\uae30",description:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5d0\uc774\uc804\ud2b8 \uc11c\ubc84\uc5d0 \uc788\ub294 whatap.conf \ud30c\uc77c\uc744 \ud1b5\ud574 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",tags:["MySQL","\ub370\uc774\ud130\ubca0\uc774\uc2a4","\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubaa8\ub2c8\ud130\ub9c1"]},c=void 0,l={unversionedId:"mysql/agent-settings",id:"mysql/agent-settings",title:"\uc124\uc815\ud558\uae30",description:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5d0\uc774\uc804\ud2b8 \uc11c\ubc84\uc5d0 \uc788\ub294 whatap.conf \ud30c\uc77c\uc744 \ud1b5\ud574 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",source:"@site/docs/mysql/agent-settings.mdx",sourceDirName:"mysql",slug:"/mysql/agent-settings",permalink:"/mysql/agent-settings",draft:!1,editUrl:"undefined/docs/mysql/agent-settings.mdx",tags:[{label:"MySQL",permalink:"/tags/my-sql"},{label:"\ub370\uc774\ud130\ubca0\uc774\uc2a4",permalink:"/tags/\ub370\uc774\ud130\ubca0\uc774\uc2a4"},{label:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubaa8\ub2c8\ud130\ub9c1",permalink:"/tags/\ub370\uc774\ud130\ubca0\uc774\uc2a4-\ubaa8\ub2c8\ud130\ub9c1"}],version:"current",frontMatter:{id:"agent-settings",title:"\uc124\uc815\ud558\uae30",description:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5d0\uc774\uc804\ud2b8 \uc11c\ubc84\uc5d0 \uc788\ub294 whatap.conf \ud30c\uc77c\uc744 \ud1b5\ud574 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",tags:["MySQL","\ub370\uc774\ud130\ubca0\uc774\uc2a4","\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubaa8\ub2c8\ud130\ub9c1"]},sidebar:"mysqlSidebar",previous:{title:"\uc124\uce58 \ubb38\uc81c \ud574\uacb0",permalink:"/mysql/troubleshooting"},next:{title:"\uc5d0\uc774\uc804\ud2b8 \ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0",permalink:"/mysql/agent-network"}},s={},m=[],p={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc640\ud0ed \uc5d0\uc774\uc804\ud2b8\ub294 \uc5d0\uc774\uc804\ud2b8 \ubcc4 \ud544\uc694\ud55c \uc124\uc815\uc744 ",(0,a.kt)("em",{parentName:"p"},"whatap.conf")," \ud30c\uc77c\uc5d0 \uc791\uc131\ud569\ub2c8\ub2e4. \uc5d0\uc774\uc804\ud2b8\ub294 \ud658\uacbd\ubcc0\uc218\ub97c \ud1b5\ud574 \uc124\uc815 \ud30c\uc77c\uc758 \uc704\uce58\ub97c \ud30c\uc545\ud558\uace0 \ub85c\ub529\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"p"},"whatap.conf")," \ud30c\uc77c\uc744 \ud1b5\ud574 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);