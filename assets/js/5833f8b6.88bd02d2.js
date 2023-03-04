"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[98577],{3905:(t,a,e)=>{e.d(a,{Zo:()=>k,kt:()=>g});var n=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function m(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var u=n.createContext({}),i=function(t){var a=n.useContext(u),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},k=function(t){var a=i(t.components);return n.createElement(u.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,k=m(t,["components","mdxType","originalType","parentName"]),N=i(e),g=l,o=N["".concat(u,".").concat(g)]||N[g]||d[g]||r;return e?n.createElement(o,p(p({ref:a},k),{},{components:e})):n.createElement(o,p({ref:a},k))}));function g(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,p=new Array(r);p[0]=N;var m={};for(var u in a)hasOwnProperty.call(a,u)&&(m[u]=a[u]);m.originalType=t,m.mdxType="string"==typeof t?t:l,p[1]=m;for(var i=2;i<r;i++)p[i]=e[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},45362:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>m,toc:()=>i});var n=e(87462),l=(e(67294),e(3905));const r={id:"analysis-apm-trs",title:"\ud2b8\ub79c\uc7ad\uc158",description:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubd84\uc11d\uc744 \uc548\ub0b4\ud569\ub2c8\ub2e4.",tags:["Golang","\ud2b8\ub79c\uc7ad\uc158","\uc560\ud50c\ub9ac\ucf00\uc774\uc158","\ubd84\uc11d\ud558\uae30","UI"]},p=void 0,m={unversionedId:"golang/analysis-apm-trs",id:"golang/analysis-apm-trs",title:"\ud2b8\ub79c\uc7ad\uc158",description:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubd84\uc11d\uc744 \uc548\ub0b4\ud569\ub2c8\ub2e4.",source:"@site/docs/golang/analysis-apm-trs.mdx",sourceDirName:"golang",slug:"/golang/analysis-apm-trs",permalink:"/golang/analysis-apm-trs",draft:!1,editUrl:"undefined/docs/golang/analysis-apm-trs.mdx",tags:[{label:"Golang",permalink:"/tags/golang"},{label:"\ud2b8\ub79c\uc7ad\uc158",permalink:"/tags/\ud2b8\ub79c\uc7ad\uc158"},{label:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158",permalink:"/tags/\uc560\ud50c\ub9ac\ucf00\uc774\uc158"},{label:"\ubd84\uc11d\ud558\uae30",permalink:"/tags/\ubd84\uc11d\ud558\uae30"},{label:"UI",permalink:"/tags/ui"}],version:"current",frontMatter:{id:"analysis-apm-trs",title:"\ud2b8\ub79c\uc7ad\uc158",description:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubd84\uc11d\uc744 \uc548\ub0b4\ud569\ub2c8\ub2e4.",tags:["Golang","\ud2b8\ub79c\uc7ad\uc158","\uc560\ud50c\ub9ac\ucf00\uc774\uc158","\ubd84\uc11d\ud558\uae30","UI"]},sidebar:"goSidebar",previous:{title:"\ud050\ube0c",permalink:"/golang/cube"},next:{title:"\ubcf4\uace0\uc11c",permalink:"/golang/report-intro"}},u={},i=[{value:"\ud1b5\uacc4",id:"\ud1b5\uacc4",level:2},{value:"SQL \uc218\ud589 \ud1b5\uacc4",id:"sql-\uc218\ud589-\ud1b5\uacc4",level:2},{value:"HTTP Call \uc218\ud589 \ud1b5\uacc4",id:"http-call-\uc218\ud589-\ud1b5\uacc4",level:2},{value:"\uc5d0\ub7ec \ud1b5\uacc4",id:"\uc5d0\ub7ec-\ud1b5\uacc4",level:2},{value:"IP \ubcc4 \ud638\ucd9c \uac74\uc218",id:"ip-\ubcc4-\ud638\ucd9c-\uac74\uc218",level:2},{value:"User Agent \ubcc4 \ud638\ucd9c \uac74\uc218",id:"user-agent-\ubcc4-\ud638\ucd9c-\uac74\uc218",level:2},{value:"\ud2b8\ub79c\uc7ad\uc158 Caller",id:"\ud2b8\ub79c\uc7ad\uc158-caller",level:2},{value:"\ud2b8\ub79c\uc7ad\uc158 \ub3c4\uba54\uc778 \ud1b5\uacc4",id:"\ud2b8\ub79c\uc7ad\uc158-\ub3c4\uba54\uc778-\ud1b5\uacc4",level:2},{value:"\ud2b8\ub79c\uc7ad\uc158 Referer \ud1b5\uacc4",id:"stat-referer",level:2}],k={toc:i};function d(t){let{components:a,...e}=t;return(0,l.kt)("wrapper",(0,n.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ud648 \ud654\uba74 > \ud504\ub85c\uc81d\ud2b8 \uc120\ud0dd > ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\ubd84\uc11d"))," > ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\ud2b8\ub79c\uc7ad\uc158 \uac80\uc0c9"))),(0,l.kt)("p",null,"\uc640\ud0ed \ubaa8\ub2c8\ud130\ub9c1 \uc11c\ube44\uc2a4 \ucd08\uae30 \ud654\uba74\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uc120\ud0dd\ud55c \ub2e4\uc74c ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\ud504\ub85c\uc81d\ud2b8 \uba54\ub274"))," \ud558\uc704\uc5d0 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\ubd84\uc11d"))," > ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\ud2b8\ub79c\uc7ad\uc158 \uac80\uc0c9")),"\uc744 \uc120\ud0dd\ud558\uc138\uc694. \uc640\ud0ed \uc5d0\uc774\uc804\ud2b8\ub294 \ud2b8\ub79c\uc7ad\uc158 \uc815\ubcf4, SQL\uacfc \uac19\uc740 \uc8fc\uc694 \ud2b8\ub808\uc774\uc2a4 \uc815\ubcf4\uc5d0 \ub300\ud574 \ud1b5\uacc4 \uc815\ubcf4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4. 5\ubd84\ub9c8\ub2e4 \ubaa9\ub85d\uc744 \ub9cc\ub4e4\uace0 \uc11c\ubc84\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ud1b5\uacc4"},"\ud1b5\uacc4"),(0,l.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \ud1b5\uacc4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4. 5\ubd84\ub9c8\ub2e4 \ucd5c\ub300 5,000\uac1c\uc758 URL \ubcc4 \uc218\ud589 \ud1b5\uacc4\ub97c \uc218\uc9d1\ud558\uc5ec \uc11c\ubc84\uc5d0 \uc804\uc1a1\ud569\ub2c8\ub2e4. \ub9cc\uc57d \uc11c\ub85c \ub2e4\ub978 URL\uc758 \uc218\uac00 5\ubd84 \ub3d9\uc548 5,000\uac1c\uac00 \ub118\uc73c\uba74 \ubb34\uc2dc\ub429\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uceec\ub7fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hash"),(0,l.kt)("td",{parentName:"tr",align:null},"URL \ud574\uc26c"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"\uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc5d0\ub7ec\uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time_sum"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc751\ub2f5\uc2dc\uac04\uc758 \ud569"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time_max"),(0,l.kt)("td",{parentName:"tr",align:null},"\ucd5c\ub300 \uc751\ub2f5\uc2dc\uac04"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sql_count"),(0,l.kt)("td",{parentName:"tr",align:null},"SQL \uc218\ud589 \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sql_time"),(0,l.kt)("td",{parentName:"tr",align:null},"SQL\uc218\ud589\uc2dc\uac04\uc758 \ud569"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sql_fetch"),(0,l.kt)("td",{parentName:"tr",align:null},"SQL \ud328\uce58 \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sql_fetch_time"),(0,l.kt)("td",{parentName:"tr",align:null},"SQL \ud328\uce58 \uc2dc\uac04\uc758 \ud569"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpc_count"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP Call\uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpc_time"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP Call \uc2dc\uac04\uc758 \ud569"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"malloc_sum"),(0,l.kt)("td",{parentName:"tr",align:null},"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 SUM"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cpu_sum"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU\uc0ac\uc6a9\ub7c9 SUM"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"malloc_sum"),"\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"trace_malloc_enabled=true"),"\ub85c \ubcc0\uacbd\ud574\uc57c \uc218\uc9d1\ub429\ub2c8\ub2e4. \uae30\ubcf8\uac12\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\uc785\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"sql-\uc218\ud589-\ud1b5\uacc4"},"SQL \uc218\ud589 \ud1b5\uacc4"),(0,l.kt)("p",null,"5\ubd84 \ub3d9\uc548\uc758 SQL \uc218\ud589 \ud1b5\uacc4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4. 5\ubd84 \ub3d9\uc548 \uc11c\ub85c \ub2e4\ub978 SQL \ubb38\uc7a5\uc774 \ucd5c\ub300 5,000\uae4c\uc9c0\ub9cc \ud5c8\uc6a9\ub429\ub2c8\ub2e4. \ub9cc\uc57d \ud558\ub098\uc758 Java \ud504\ub85c\uc138\uc2a4\uc5d0\uc11c \ud55c\uacc4\ub97c \ub118\ub294 SQL\uc774 \ubc1c\uc0dd\ud558\uba74 \ud1b5\uacc4 \ub370\uc774\ud130\uc5d0\uc11c\ub294 \ubc84\ub824\uc9d1\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uceec\ub7fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dbc"),(0,l.kt)("td",{parentName:"tr",align:null},"DB \uc5f0\uacb0 \uc815\ubcf4\uc758 Hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sql"),(0,l.kt)("td",{parentName:"tr",align:null},"SQL\ubb38 Hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count_total"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc218\ud589 \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count_error"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc5d0\ub7ec \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time_sum"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc751\ub2f5 \uc2dc\uac04\uc758 \ud569"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time_max"),(0,l.kt)("td",{parentName:"tr",align:null},"\ucd5c\ub300 \uc751\ub2f5 \uc2dc\uac04"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fetch_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud328\uce58 \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fetch_time"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud328\uce58 \uc2dc\uac04\uc758 \ud569"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},"SQL\uc744 \uc218\ud589\ud55c service \uc911 \ud558\ub098"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"service(URL)")," hash\ub294 5\ubd84 \ub3d9\uc548 \ud574\ub2f9 SQL\uc744 \ud638\ucd9c\ud55c URL \uc911 \ud558\ub098(\ub9c8\uc9c0\ub9c9 \ud638\ucd9c URL)\ub97c \ubd84\uc11d \ud65c\uc6a9\uc744 \uc704\ud574 \uc218\uc9d1\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"http-call-\uc218\ud589-\ud1b5\uacc4"},"HTTP Call \uc218\ud589 \ud1b5\uacc4"),(0,l.kt)("p",null,"5\ubd84 \ub3d9\uc548\uc758 Http Call \uc218\ud589 \ud1b5\uacc4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4. 5\ubd84 \ub3d9\uc548 \uc11c\ub85c \ub2e4\ub978 Http Call \ubb38\uc7a5\uc774 \ucd5c\ub300 5,000\uae4c\uc9c0\ub9cc \ud5c8\uc6a9\ub429\ub2c8\ub2e4. \ub9cc\uc57d \ud558\ub098\uc758 node.js \ud504\ub85c\uc138\uc2a4\uc5d0\uc11c \ud55c\uacc4\ub97c \ub118\ub294 \uc678\ubd80 Http Call\uc774 \ubc1c\uc0dd\ud558\uba74 \ud1b5\uacc4 \ub370\uc774\ud130\uc5d0\uc11c\ub294 \ubc84\ub824\uc9d1\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uceec\ub7fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud0c0\uac9f URL hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"Host or ip"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"Tcp Port"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count_total"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc218\ud589 \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count_error"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc5d0\ub7ec \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time_sum"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc751\ub2f5\uc2dc\uac04\uc758 \ud569"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time_max"),(0,l.kt)("td",{parentName:"tr",align:null},"\ucd5c\ub300 \uc751\ub2f5\uc2dc\uac04"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},"Http Call\uc744 \uc218\ud589\ud55c service \uc911 \ud558\ub098"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")))),(0,l.kt)("h2",{id:"\uc5d0\ub7ec-\ud1b5\uacc4"},"\uc5d0\ub7ec \ud1b5\uacc4"),(0,l.kt)("p",null,"5\ubd84 \ub3d9\uc548 \ubc1c\uc0dd\ud55c \uc11c\ube44\uc2a4 \uc5d0\ub7ec\uc5d0 \ub300\ud55c \ud1b5\uacc4\uc785\ub2c8\ub2e4. \uc11c\ub85c \ub2e4\ub978 \uc5d0\ub7ec\uc640 \ud2b8\ub79c\uc7ad\uc158 \uc774\ub984\uc744 \ud0a4\ub85c \ubc1c\uc0dd \uac74\uc218\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4. 5\ubd84 \ub2f9 \ucd5c\ub300 1,000 \uac00\uc9c0 \uc11c\ub85c \ub2e4\ub978 \uc5d0\ub7ec\ub97c \ud1b5\uacc4\ud654\ud569\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uceec\ub7fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"classHash"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc5d0\ub7ec \ud074\ub798\uc2a4"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud2b8\ub79c\uc7ad\uc158 HASH"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapSeq"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc2a4\ud0dd \uc815\ubcf4"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msg"),(0,l.kt)("td",{parentName:"tr",align:null},"\uba54\uc138\uc9c0 hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"\ubc1c\uc0dd \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")))),(0,l.kt)("h2",{id:"ip-\ubcc4-\ud638\ucd9c-\uac74\uc218"},"IP \ubcc4 \ud638\ucd9c \uac74\uc218"),(0,l.kt)("p",null,"IP \ubcc4\ub85c \ud638\ucd9c\ud55c \ud2b8\ub79c\uc7ad\uc158 \uac74\uc218\ub97c \ud1b5\uacc4\uc801\uc73c\ub85c \uc218\uc9d1\ud569\ub2c8\ub2e4. 5\ubd84\ub2f9 \uc218\uc9d1\ud560 \uc218 \uc788\ub294 \uc11c\ub85c \ub2e4\ub978 IP \uc218\ub294 \uc778\uc2a4\ud134\uc2a4 \ub2f9 \ucd5c\ub300 70,000\uac1c\uc785\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uceec\ub7fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ip"),(0,l.kt)("td",{parentName:"tr",align:null},"ip \uc8fc\uc18c"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"\uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")))),(0,l.kt)("h2",{id:"user-agent-\ubcc4-\ud638\ucd9c-\uac74\uc218"},"User Agent \ubcc4 \ud638\ucd9c \uac74\uc218"),(0,l.kt)("p",null,"User Agnet \ubb38\uc790\uc5f4\uc758 Hash \ubcc4\ub85c \ud638\ucd9c \uac74\uc218\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4. 5\ubd84\ub2f9 \uc218\uc9d1\ud560 \uc218 \uc788\ub294 \uc11c\ub85c \ub2e4\ub978 User Agent Hash\ub294 \uc778\uc2a4\ud134\uc2a4 \ub2f9 \ucd5c\ub300 500\uac1c\uc785\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uceec\ub7fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hash"),(0,l.kt)("td",{parentName:"tr",align:null},"hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"\uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")))),(0,l.kt)("h2",{id:"\ud2b8\ub79c\uc7ad\uc158-caller"},"\ud2b8\ub79c\uc7ad\uc158 Caller"),(0,l.kt)("p",null,"\uba40\ud2f0 \uc11c\ubc84\uac00 rest \ud638\ucd9c\ub85c \uc5f0\uacb0\ub418\uba74 ",(0,l.kt)("strong",{parentName:"p"},"Caller"),"\uc640 ",(0,l.kt)("strong",{parentName:"p"},"Callee")," \uac04\uc758 \uc5f0\uad00 \ud1b5\uacc4\ub97c \uc218\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uae30 \uc704\ud574 \ub2e4\uc74c\uc758 \uc635\uc158\uc744 \uc124\uc815\ud558\uc138\uc694."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini",metastring:"title='whatap.conf'",title:"'whatap.conf'"},"mtrace_rate=100\nmtrace_spec=v1\nstat_mtrace_enabled=true\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.whatap.io/media/agent_java/data/msa.png",alt:"msa-system"})),(0,l.kt)("p",null,"\uc704\uc640 \uac19\uc740 \uc544\ud0a4\ud14d\ucc98\uc5d0\uc11c ",(0,l.kt)("strong",{parentName:"p"},"Caller & Callee")," \ud1b5\uacc4\ub294 api1, api2\uc5d0\uc11c\ub9cc \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ud638\ucd9c\ub418\ub294 \uc2dc\uc2a4\ud15c\uc5d0\uc11c\ub294 ",(0,l.kt)("strong",{parentName:"p"},"Caller")," \ud1b5\uacc4\ub97c \uc870\ud68c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc ",(0,l.kt)("strong",{parentName:"p"},"Caller")," \ucabd \uc11c\ubc84\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud574\uc57c \ud558\ubbc0\ub85c \ubaa8\ub4e0 \uc11c\ubc84\uc5d0 \uc801\uc808\ud55c \uc124\uc815\uc774 \ub4e4\uc5b4\uac00\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini",metastring:"title='whatap.conf of [front]'",title:"'whatap.conf",of:!0,"[front]'":!0},"mtrace_rate=100\nmtrace_spec=v1\nstat_mtrace_enabled=true\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini",metastring:"title='whatap.conf of [api1] & [api2]'",title:"'whatap.conf",of:!0,"[api1]":!0,"&":!0,"[api2]'":!0},"mtrace_spec=v1\nstat_mtrace_enabled=true\n")),(0,l.kt)("p",null,"\uc218\uc9d1\ub418\ub294 \ud1b5\uacc4 \ub370\uc774\ud130\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("strong",{parentName:"p"},"Callee")," \ucabd\uc5d0\uc11c \uc870\ud68c\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uceec\ub7fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"caller_pcode"),(0,l.kt)("td",{parentName:"tr",align:null},"Caller\uc758 \ud504\ub85c\uc81d\ud2b8(\uc640\ud0ed) \ucf54\ub4dc"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"caller_spec"),(0,l.kt)("td",{parentName:"tr",align:null},"Caller\uc758 \ubc84\uc804 \ubb38\uc790\uc5f4 hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"caller_url"),(0,l.kt)("td",{parentName:"tr",align:null},"Caller\uc758 URL hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec"),(0,l.kt)("td",{parentName:"tr",align:null},"Callee\uc758 \ubc84\uc804 \ubb38\uc790\uc5f4 hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"Callee URL hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc218\ud589 \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc5d0\ub7ec \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc751\ub2f5 \uc2dc\uac04\uc758 \ud569"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")))),(0,l.kt)("h2",{id:"\ud2b8\ub79c\uc7ad\uc158-\ub3c4\uba54\uc778-\ud1b5\uacc4"},"\ud2b8\ub79c\uc7ad\uc158 \ub3c4\uba54\uc778 \ud1b5\uacc4"),(0,l.kt)("p",null,"\uc640\ud0ed \uc5d0\uc774\uc804\ud2b8\ub294 \ub3c4\uba54\uc778\ubcc4 \ud2b8\ub79c\uc7ad\uc158 \ud1b5\uacc4\ub97c \uc218\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\ub098\uc758 \uc11c\ubc84\uc5d0 \uc5ec\ub7ec \uac1c\uc758 \ub3c4\uba54\uc778\uc744 \ubd84\ub9ac\ud558\uc5ec \uc11c\ube44\uc2a4\ud558\ub294 \uc2dc\uc2a4\ud15c\uc5d0\uc11c\ub294 \ub3c4\uba54\uc778 \ubcc4 \ubd84\uc11d\uc774 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \uc635\uc158\uc744 \uc124\uc815\ud558\uc138\uc694."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini",metastring:"title='whatap.conf'",title:"'whatap.conf'"},"stat_domain_enabled=true\n")),(0,l.kt)("p",null,"\uc218\uc9d1\ub418\ub294 \ub370\uc774\ud130\ub294 \ub3c4\uba54\uc778\ubcc4 URL\uc758 \ucc98\ub9ac \ud604\ud669\uc744 \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uceec\ub7fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc11c\ube44\uc2a4 \ub3c4\uba54\uc778 hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud2b8\ub79c\uc7ad\uc158 URL hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc218\ud589 \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc5d0\ub7ec \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc751\ub2f5\uc2dc\uac04\uc758 \ud569"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")))),(0,l.kt)("h2",{id:"stat-referer"},"\ud2b8\ub79c\uc7ad\uc158 Referer \ud1b5\uacc4"),(0,l.kt)("p",null,"\uc640\ud0ed \uc5d0\uc774\uc804\ud2b8\ub294 Referer \ubcc4 \ud2b8\ub79c\uc7ad\uc158 \ud1b5\uacc4\ub97c \uc218\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \uc635\uc158\uc744 \uc124\uc815\ud558\uc138\uc694."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini",metastring:"title='whatap.conf'",title:"'whatap.conf'"},"stat_referer_enabled=true\n")),(0,l.kt)("p",null,"\uc218\uc9d1\ub418\ub294 \ub370\uc774\ud130\ub294 Referer \uc815\ubcf4\ub97c \ud1b5\uacc4\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\uceec\ub7fc"),(0,l.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,l.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"referer"),(0,l.kt)("td",{parentName:"tr",align:null},"Referer hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud2b8\ub79c\uc7ad\uc158 URL hash"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc218\ud589 \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc5d0\ub7ec \uac74\uc218"),(0,l.kt)("td",{parentName:"tr",align:null},"u4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"\uc751\ub2f5\uc2dc\uac04\uc758 \ud569"),(0,l.kt)("td",{parentName:"tr",align:null},"u8")))))}d.isMDXComponent=!0}}]);