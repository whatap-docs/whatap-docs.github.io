"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[67314],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},66242:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),a=r(86010),i=r(53438),c=r(39960),o=r(13919),l=r(95999);const s="cardContainer_S8oU",m="cardTitle_HoSo",u="cardDescription_c27F";function p(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function d(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:i},i),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",u),title:c},c))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(d,{href:r,title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;(0,o.Z)(t.href);const r=(0,i.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,title:t.label,description:null==r?void 0:r.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const c=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},48966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),i=r(66242);const c={id:"manage",title:"\uad00\ub9ac \uae30\ub2a5",description:"\uc640\ud0ed \ubaa8\ub2c8\ud130\ub9c1 \uc11c\ube44\uc2a4\uc758 \uacc4\uc815, \ud504\ub85c\uc81d\ud2b8, \uadf8\ub8f9 \ub4f1\uc744 \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",displayed_sidebar:"manageSidebar",tags:["\uad00\ub9ac","\ud504\ub85c\uc81d\ud2b8","\uacc4\uc815","\uadf8\ub8f9"]},o=void 0,l={unversionedId:"manage",id:"manage",title:"\uad00\ub9ac \uae30\ub2a5",description:"\uc640\ud0ed \ubaa8\ub2c8\ud130\ub9c1 \uc11c\ube44\uc2a4\uc758 \uacc4\uc815, \ud504\ub85c\uc81d\ud2b8, \uadf8\ub8f9 \ub4f1\uc744 \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",source:"@site/docs/manage.mdx",sourceDirName:".",slug:"/manage",permalink:"/manage",draft:!1,editUrl:"undefined/docs/manage.mdx",tags:[{label:"\uad00\ub9ac",permalink:"/tags/\uad00\ub9ac"},{label:"\ud504\ub85c\uc81d\ud2b8",permalink:"/tags/\ud504\ub85c\uc81d\ud2b8"},{label:"\uacc4\uc815",permalink:"/tags/\uacc4\uc815"},{label:"\uadf8\ub8f9",permalink:"/tags/\uadf8\ub8f9"}],version:"current",frontMatter:{id:"manage",title:"\uad00\ub9ac \uae30\ub2a5",description:"\uc640\ud0ed \ubaa8\ub2c8\ud130\ub9c1 \uc11c\ube44\uc2a4\uc758 \uacc4\uc815, \ud504\ub85c\uc81d\ud2b8, \uadf8\ub8f9 \ub4f1\uc744 \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",displayed_sidebar:"manageSidebar",tags:["\uad00\ub9ac","\ud504\ub85c\uc81d\ud2b8","\uacc4\uc815","\uadf8\ub8f9"]},sidebar:"manageSidebar",next:{title:"\uacc4\uc815 \uad00\ub9ac",permalink:"/account/account-manage"}},s={},m=[],u={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc640\ud0ed \ubaa8\ub2c8\ud130\ub9c1 \uc11c\ube44\uc2a4\uc758 \uacc4\uc815, \ud504\ub85c\uc81d\ud2b8, \uadf8\ub8f9 \ub4f1\uc744 \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);