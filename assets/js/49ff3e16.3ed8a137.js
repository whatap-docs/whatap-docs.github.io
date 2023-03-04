"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[10754],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(g,u(u({ref:t},p),{},{components:a})):r.createElement(g,u({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,u[1]=o;for(var s=2;s<l;s++)u[s]=a[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,u),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),l=a(86010),u=a(12466),o=a(76775),i=a(91980),s=a(67392),p=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[u,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,s]=g({queryString:a,groupId:r}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=i??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var b=a(72389);const h="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=s[a].value;r!==o&&(c(t),i(r))},d=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},u,{className:(0,l.Z)("tabs__item",k,null==u?void 0:u.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},23952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),u=a(85162);const o={id:"manage",title:"\uad00\ub9ac\ud558\uae30",description:"whatap.conf \ud30c\uc77c\uc744 \ud1b5\ud574 Telegraf \uc5d0\uc774\uc804\ud2b8\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",tags:["Telegraf","\uad00\ub9ac\ud558\uae30"]},i=void 0,s={unversionedId:"telegraf/manage",id:"telegraf/manage",title:"\uad00\ub9ac\ud558\uae30",description:"whatap.conf \ud30c\uc77c\uc744 \ud1b5\ud574 Telegraf \uc5d0\uc774\uc804\ud2b8\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/telegraf/manage.mdx",sourceDirName:"telegraf",slug:"/telegraf/manage",permalink:"/telegraf/manage",draft:!1,editUrl:"undefined/docs/telegraf/manage.mdx",tags:[{label:"Telegraf",permalink:"/tags/telegraf"},{label:"\uad00\ub9ac\ud558\uae30",permalink:"/tags/\uad00\ub9ac\ud558\uae30"}],version:"current",frontMatter:{id:"manage",title:"\uad00\ub9ac\ud558\uae30",description:"whatap.conf \ud30c\uc77c\uc744 \ud1b5\ud574 Telegraf \uc5d0\uc774\uc804\ud2b8\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",tags:["Telegraf","\uad00\ub9ac\ud558\uae30"]},sidebar:"pluginSidebar",previous:{title:"\uc124\uc815\ud558\uae30",permalink:"/telegraf/set-agent"},next:{title:"\uc0ac\uc6a9 \uc608\uc2dc",permalink:"/telegraf/telegraf-usage"}},p={},c=[{value:"\uc5c5\ub370\uc774\ud2b8",id:"\uc5c5\ub370\uc774\ud2b8",level:2},{value:"\uc77c\uc2dc \uc911\uc9c0",id:"\uc77c\uc2dc-\uc911\uc9c0",level:2},{value:"\uc0ad\uc81c",id:"\uc0ad\uc81c",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Telegraf \uc5d0\uc774\uc804\ud2b8 \uad00\ub9ac\ub97c \uc704\ud574 ",(0,n.kt)("em",{parentName:"p"},"whatap.conf")," \ud30c\uc77c\uc744 \ud1b5\ud574 \uc124\uc815\ud560 \uc218 \uc788\ub294 \ucd94\uac00 \uc635\uc158\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4."),(0,n.kt)("h2",{id:"\uc5c5\ub370\uc774\ud2b8"},"\uc5c5\ub370\uc774\ud2b8"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"rc",label:"Red Hat/CentOS",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\ud328\ud0a4\uc9c0 \uc815\ubcf4 \uac31\uc2e0\uc744 \uc704\ud574 \uce90\uc2dc \uc815\ubcf4\ub97c \uc0ad\uc81c\ud558\uc138\uc694.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"$ yum clean all\n"))),(0,n.kt)("li",{parentName:"ol"},"whatap-telegraf \ud328\ud0a4\uc9c0\ub97c \uc5c5\ub370\uc774\ud2b8 \ud558\uc138\uc694.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"$ yum update whatap-telegraf\n"))),(0,n.kt)("li",{parentName:"ol"},"\ud2b9\uc815 \ubc84\uc804\uc744 \uc124\uce58\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc124\uce58 \uc2dc \ubc84\uc804 \uc815\ubcf4\ub97c \uba85\uc2dc\ud574 \uc90d\ub2c8\ub2e4.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"$ sudo yum install whatap-telegraf-<version>\n"))))),(0,n.kt)(u.Z,{value:"du",label:"Debian/Ubuntu",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\ud328\ud0a4\uc9c0 \uc815\ubcf4 \uac31\uc2e0\uc744 \uc704\ud574 \uce90\uc2dc \uc815\ubcf4\ub97c \uc0ad\uc81c\ud558\uc138\uc694.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"$ sudo apt-get update\n"))),(0,n.kt)("li",{parentName:"ol"},"whatap-telegraf \ud328\ud0a4\uc9c0\ub97c \uc5c5\ub370\uc774\ud2b8 \ud558\uc138\uc694.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"$ sudo apt-get install --only-upgrade whatap-telegraf\n"))),(0,n.kt)("li",{parentName:"ol"},"\ud2b9\uc815 \ubc84\uc804\uc744 \uc124\uce58\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc124\uce58 \uc2dc \ubc84\uc804 \uc815\ubcf4\ub97c \uba85\uc2dc\ud574 \uc90d\ub2c8\ub2e4.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"$ sudo apt-get install whatap-telegraf=<version>\n"))))),(0,n.kt)(u.Z,{value:"fb",label:"FreeBSD",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\ud328\ud0a4\uc9c0\ub97c \ub2e4\uc2dc \uc124\uce58\ud558\uc138\uc694.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='SH'",title:"'SH'"},"# wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/freebsd/10/whatap-telegraf-0.0.4.txz\n# pkg install whatap-telegraf-0.0.4.txz\n"))),(0,n.kt)("li",{parentName:"ol"},"\ud2b9\uc815 \ubc84\uc804\uc744 \uc124\uce58\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,n.kt)("inlineCode",{parentName:"li"},"<version>"),"\uc5d0 \ubc84\uc804 \uc815\ubcf4\ub97c \uc785\ub825\ud574 \uc124\uce58\ud558\uc138\uc694.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='SH'",title:"'SH'"},"# wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/freebsd/10/whatap-telegraf-<version>.txz\n# pkg install whatap-telegraf-<version>.txz\n")))))),(0,n.kt)("h2",{id:"\uc77c\uc2dc-\uc911\uc9c0"},"\uc77c\uc2dc \uc911\uc9c0"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"rc",label:"Red Hat/CentOS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='SH'",title:"'SH'"},"$ sudo service whatap-telegraf stop\n"))),(0,n.kt)(u.Z,{value:"du",label:"Debian/Ubuntu",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='SH'",title:"'SH'"},"$ sudo service whatap-telegraf stop\n"))),(0,n.kt)(u.Z,{value:"fb",label:"FreeBSD",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='SH'",title:"'SH'"},"$ service whatap_telegraf stop\n")))),(0,n.kt)("h2",{id:"\uc0ad\uc81c"},"\uc0ad\uc81c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud328\ud0a4\uc9c0(yum, apt-get)\ub97c \uc0ad\uc81c\ud558\uc138\uc694. "),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"rc",label:"Red Hat/CentOS",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='SH'",title:"'SH'"},"$ sudo yum remove whatap-telegraf\n"))),(0,n.kt)(u.Z,{value:"du",label:"Debian/Ubuntu",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='SH'",title:"'SH'"},"$ sudo apt-get purge whatap-telegraf\n"))),(0,n.kt)(u.Z,{value:"fb",label:"FreeBSD",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='SH'",title:"'SH'"},"$ pkg delete whatap-telegraf\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud544\uc694\ud55c \uacbd\uc6b0 ",(0,n.kt)("em",{parentName:"p"},"/usr/whatap/telegraf")," \ud558\uc704\uc758 \ub85c\uadf8 \ud30c\uc77c \ubc0f \uae30\ud0c0 \ud30c\uc77c\uc744 \uc0ad\uc81c\ud558\uc138\uc694."))))}d.isMDXComponent=!0}}]);