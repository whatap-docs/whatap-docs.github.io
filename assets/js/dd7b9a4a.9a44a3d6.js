"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[54981],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66242:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),a=r(86010),o=r(53438),c=r(39960),i=r(13919),l=r(95999);const s="cardContainer_S8oU",p="cardTitle_HoSo",m="cardDescription_c27F";function u(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function f(e){let{href:t,icon:r,title:o,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:o},o),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:c},c))}function d(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(f,{href:r,title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;(0,i.Z)(t.href);const r=(0,o.xz)(t.docId??void 0);return n.createElement(f,{href:t.href,title:t.label,description:null==r?void 0:r.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const c=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},12022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(66242);const c={id:"agent-settings",title:"\uc124\uc815\ud558\uae30",description:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5d0\uc774\uc804\ud2b8 \uc11c\ubc84\uc5d0 \uc788\ub294 whatap.conf \ud30c\uc77c\uc744 \ud1b5\ud574 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",tags:["Oracle","\ub370\uc774\ud130\ubca0\uc774\uc2a4","\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubaa8\ub2c8\ud130\ub9c1"]},i=void 0,l={unversionedId:"oracle/agent-settings",id:"oracle/agent-settings",title:"\uc124\uc815\ud558\uae30",description:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5d0\uc774\uc804\ud2b8 \uc11c\ubc84\uc5d0 \uc788\ub294 whatap.conf \ud30c\uc77c\uc744 \ud1b5\ud574 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",source:"@site/docs/oracle/agent-settings.mdx",sourceDirName:"oracle",slug:"/oracle/agent-settings",permalink:"/oracle/agent-settings",draft:!1,editUrl:"undefined/docs/oracle/agent-settings.mdx",tags:[{label:"Oracle",permalink:"/tags/oracle"},{label:"\ub370\uc774\ud130\ubca0\uc774\uc2a4",permalink:"/tags/\ub370\uc774\ud130\ubca0\uc774\uc2a4"},{label:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubaa8\ub2c8\ud130\ub9c1",permalink:"/tags/\ub370\uc774\ud130\ubca0\uc774\uc2a4-\ubaa8\ub2c8\ud130\ub9c1"}],version:"current",frontMatter:{id:"agent-settings",title:"\uc124\uc815\ud558\uae30",description:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5d0\uc774\uc804\ud2b8 \uc11c\ubc84\uc5d0 \uc788\ub294 whatap.conf \ud30c\uc77c\uc744 \ud1b5\ud574 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",tags:["Oracle","\ub370\uc774\ud130\ubca0\uc774\uc2a4","\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubaa8\ub2c8\ud130\ub9c1"]},sidebar:"dboracleSidebar",previous:{title:"\uc124\uce58 \ubb38\uc81c \ud574\uacb0",permalink:"/oracle/troubleshooting"},next:{title:"\uc5d0\uc774\uc804\ud2b8 \ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0",permalink:"/oracle/agent-network"}},s={},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc640\ud0ed \uc5d0\uc774\uc804\ud2b8\ub294 \uc5d0\uc774\uc804\ud2b8 \ubcc4 \ud544\uc694\ud55c \uc124\uc815\uc744 ",(0,a.kt)("em",{parentName:"p"},"whatap.conf")," \ud30c\uc77c\uc5d0 \uc791\uc131\ud569\ub2c8\ub2e4. \uc5d0\uc774\uc804\ud2b8\ub294 \ud658\uacbd\ubcc0\uc218\ub97c \ud1b5\ud574 \uc124\uc815 \ud30c\uc77c\uc758 \uc704\uce58\ub97c \ud30c\uc545\ud558\uace0 \ub85c\ub529\ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"p"},"whatap.conf")," \ud30c\uc77c\uc744 \ud1b5\ud574 \uc124\uc815\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);