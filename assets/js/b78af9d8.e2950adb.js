"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[80883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=o,m=s["".concat(c,".").concat(u)]||s[u]||g[u]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"agent-method",title:"Method \ucd94\uc801",description:"Golang \uc5d0\uc774\uc804\ud2b8\uc758 Method \ucd94\uc801 \uad00\ub828 \uc635\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:["Golang","Method \ucd94\uc801"]},l=void 0,i={unversionedId:"golang/agent-method",id:"golang/agent-method",title:"Method \ucd94\uc801",description:"Golang \uc5d0\uc774\uc804\ud2b8\uc758 Method \ucd94\uc801 \uad00\ub828 \uc635\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/docs/golang/agent-method.mdx",sourceDirName:"golang",slug:"/golang/agent-method",permalink:"/golang/agent-method",draft:!1,editUrl:"undefined/docs/golang/agent-method.mdx",tags:[{label:"Golang",permalink:"/tags/golang"},{label:"Method \ucd94\uc801",permalink:"/tags/method-\ucd94\uc801"}],version:"current",frontMatter:{id:"agent-method",title:"Method \ucd94\uc801",description:"Golang \uc5d0\uc774\uc804\ud2b8\uc758 Method \ucd94\uc801 \uad00\ub828 \uc635\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",tags:["Golang","Method \ucd94\uc801"]},sidebar:"goSidebar",previous:{title:"HTTP Call \ucd94\uc801",permalink:"/golang/agent-httpcall"},next:{title:"\uc0ac\uc6a9\uc790 \uc218",permalink:"/golang/agent-number-of-user"}},c={},p=[{value:"Method \ucd94\uc801",id:"method-\ucd94\uc801",level:2},{value:"API",id:"api",level:2},{value:"Whatap.conf \uc124\uc815",id:"whatapconf-\uc124\uc815",level:2}],d={toc:p};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"method-\ucd94\uc801"},"Method \ucd94\uc801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"title='GO'",title:"'GO'"},'func main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n\n    ctx, _ := trace.Start(context.Background(), "Trace Method")\n    defer trace.End(ctx, nil)\n\n    getUser(ctx)\n}\n\nfunc getUser(ctx context.Context) {\n    methodCtx, _ := method.Start(ctx, "getUser")\n    defer method.End(methodCtx, nil)\n    time.Sleep(time.Duration(1) * time.Second)\n}\n')),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"title='GO'",title:"'GO'"},"func Start(ctx context.Context, name string) (*MethodCtx, error)\n\nfunc End(methodCtx *MethodCtx, err error) error\n\nfunc Trace(ctx context.Context, name string, elapsed int, err error) error\n")),(0,o.kt)("h2",{id:"whatapconf-\uc124\uc815"},"Whatap.conf \uc124\uc815"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ignore_http_method_urls")," ",(0,o.kt)("span",{class:"type"},"String"),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"p"},"ignore_http_method")," ",(0,o.kt)("span",{class:"type"},"String")),(0,o.kt)("p",null,"\uc124\uc815\ud55c URI\uc5d0 \ub300\ud574\uc11c \ud2b9\uc815 HTTP Method\ub85c \uc694\uccad\ub418\ub294 \ud2b8\ub79c\uc7ad\uc158\uc758 \uc218\uc9d1\uc744 \uc81c\uc678\ud569\ub2c8\ub2e4. \uc27c\ud45c(,)\ub97c \uad6c\ubd84\uc790\ub85c \uc774\uc6a9\ud574 \uc5ec\ub7ec \uac1c\uc758 URI, Method\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub300\uc18c\ubb38\uc790 \uad6c\ubd84\uc740 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini",metastring:"title='\uc608\uc2dc'",title:"'\uc608\uc2dc'"},"ignore_http_method_urls=/index, /sql/select\nignore_http_method=options, connect\n")))}g.isMDXComponent=!0}}]);