"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[65587],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),u=a(76775),i=a(91980),s=a(67392),p=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,s]=f({queryString:a,groupId:r}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=i??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var h=a(72389);const v="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=s[a].value;r!==u&&(c(t),i(r))},d=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":u===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},22972:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162);const u={id:"agent-temp-st",title:"\ubaa8\ub2c8\ud130\ub9c1 \uc77c\uc2dc \uc911\uc9c0",description:"PHP \uc5d0\uc774\uc804\ud2b8 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc77c\uc2dc\uc801\uc73c\ub85c \uc911\uc9c0\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:["PHP","\uc77c\uc2dc \uc911\uc9c0","\uad00\ub9ac\ud558\uae30","\uc560\ud50c\ub9ac\ucf00\uc774\uc158"]},i=void 0,s={unversionedId:"php/agent-temp-st",id:"php/agent-temp-st",title:"\ubaa8\ub2c8\ud130\ub9c1 \uc77c\uc2dc \uc911\uc9c0",description:"PHP \uc5d0\uc774\uc804\ud2b8 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc77c\uc2dc\uc801\uc73c\ub85c \uc911\uc9c0\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/docs/php/agent-temp-st.mdx",sourceDirName:"php",slug:"/php/agent-temp-st",permalink:"/php/agent-temp-st",draft:!1,editUrl:"undefined/docs/php/agent-temp-st.mdx",tags:[{label:"PHP",permalink:"/tags/php"},{label:"\uc77c\uc2dc \uc911\uc9c0",permalink:"/tags/\uc77c\uc2dc-\uc911\uc9c0"},{label:"\uad00\ub9ac\ud558\uae30",permalink:"/tags/\uad00\ub9ac\ud558\uae30"},{label:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158",permalink:"/tags/\uc560\ud50c\ub9ac\ucf00\uc774\uc158"}],version:"current",frontMatter:{id:"agent-temp-st",title:"\ubaa8\ub2c8\ud130\ub9c1 \uc77c\uc2dc \uc911\uc9c0",description:"PHP \uc5d0\uc774\uc804\ud2b8 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc77c\uc2dc\uc801\uc73c\ub85c \uc911\uc9c0\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:["PHP","\uc77c\uc2dc \uc911\uc9c0","\uad00\ub9ac\ud558\uae30","\uc560\ud50c\ub9ac\ucf00\uc774\uc158"]},sidebar:"phpSidebar",previous:{title:"\uc5d0\uc774\uc804\ud2b8 \uc5c5\ub370\uc774\ud2b8",permalink:"/php/agent-update"},next:{title:"\uc5d0\uc774\uc804\ud2b8 \uc0ad\uc81c",permalink:"/php/agent-remove"}},p={},c=[],m={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"PHP \ubaa8\ub2c8\ud130\ub9c1 \uc11c\ube44\uc2a4\ub97c \uc77c\uc2dc \uc911\uc9c0\ud558\ub824\uba74 PHP \ud655\uc7a5 \ubaa8\ub4c8\uc744 \uc911\uc9c0\ud558\uace0 whatap-php \uc11c\ube44\uc2a4\ub97c \uc911\uc9c0\ud574\uc57c \ud569\ub2c8\ub2e4. \ub2e4\uc74c \ud56d\ubaa9\uc744 \ucc38\uace0\ud558\uc138\uc694."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"PHP \ud655\uc7a5 \ubaa8\ub4c8(PHP Extension module)\uc744 \uc911\uc9c0\ud558\uc138\uc694. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"whatap.ini")," \ud30c\uc77c\uc758 ",(0,n.kt)("inlineCode",{parentName:"p"},"extension=")," \uad6c\ubb38\uc744 \uc8fc\uc11d \ucc98\ub9ac\ud558\uc138\uc694. \uc8fc\uc11d\uc740 \uc138\ubbf8\ucf5c\ub860(",(0,n.kt)("em",{parentName:"p"},";"),")\uc73c\ub85c \uc124\uc815\ud558\uc138\uc694."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo vi whatap.ini\n\nextension=whatap.so\n\n;\uc8fc\uc11d\n;extension=whatap.so\n")),(0,n.kt)("p",{parentName:"li"},"\uc218\ub3d9 \uc124\uc815\uc73c\ub85c ",(0,n.kt)("em",{parentName:"p"},"php.ini")," \ud30c\uc77c\uc5d0 \uc9c1\uc811 \uc124\uc815\ud55c \uacbd\uc6b0\ub3c4 \ub3d9\uc77c\ud558\uac8c ",(0,n.kt)("inlineCode",{parentName:"p"},"extension=")," \uad6c\ubb38\uc744 \uc8fc\uc11d \ucc98\ub9ac\ud558\uc138\uc694. "),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Apache \ub610\ub294 PHP-FPM \uc11c\ube44\uc2a4(Service)\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4. "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"whatap-php \uc11c\ube44\uc2a4(Service)\ub97c \uc911\uc9c0\ud558\uc138\uc694."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"rdct",label:"Redhat/CentOS",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo service whatap-php stop\n"))),(0,n.kt)(o.Z,{value:"dbub",label:"Debian/Ubuntu",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo service whatap-php stop\n"))),(0,n.kt)(o.Z,{value:"frbsd",label:"FreeBSD",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ service whatap_php stop\n")))))))}d.isMDXComponent=!0}}]);