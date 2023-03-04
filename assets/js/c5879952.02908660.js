"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[26601],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),k=m(a),d=r,u=k["".concat(o,".").concat(d)]||k[d]||c[d]||l;return a?n.createElement(u,p(p({ref:e},s),{},{components:a})):n.createElement(u,p({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},15125:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={id:"jetty",title:"Jetty",description:"Jetty \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84 \ud658\uacbd\uc5d0\uc11c JVM \uc635\uc158 \ucd94\uac00 \uc124\uc815\uc744 \uc644\ub8cc\ud558\uc138\uc694.",tags:["Java","Jetty"]},p=void 0,i={unversionedId:"java/add-jvm-opt/jetty",id:"java/add-jvm-opt/jetty",title:"Jetty",description:"Jetty \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84 \ud658\uacbd\uc5d0\uc11c JVM \uc635\uc158 \ucd94\uac00 \uc124\uc815\uc744 \uc644\ub8cc\ud558\uc138\uc694.",source:"@site/docs/java/add-jvm-opt/jetty.mdx",sourceDirName:"java/add-jvm-opt",slug:"/java/add-jvm-opt/jetty",permalink:"/java/add-jvm-opt/jetty",draft:!1,editUrl:"undefined/docs/java/add-jvm-opt/jetty.mdx",tags:[{label:"Java",permalink:"/tags/java"},{label:"Jetty",permalink:"/tags/jetty"}],version:"current",frontMatter:{id:"jetty",title:"Jetty",description:"Jetty \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84 \ud658\uacbd\uc5d0\uc11c JVM \uc635\uc158 \ucd94\uac00 \uc124\uc815\uc744 \uc644\ub8cc\ud558\uc138\uc694.",tags:["Java","Jetty"]},sidebar:"javaSidebar",previous:{title:"Liberty",permalink:"/java/add-jvm-opt/liberty"},next:{title:"Spring Boot",permalink:"/java/add-jvm-opt/spring-boot"}},o={},m=[{value:"JVM \uc635\uc158 \ucd94\uac00",id:"jvm-\uc635\uc158-\ucd94\uac00",level:2},{value:"Java \ubaa8\ub2c8\ud130\ub9c1 \uc2dc\uc791\ud558\uae30",id:"java-\ubaa8\ub2c8\ud130\ub9c1-\uc2dc\uc791\ud558\uae30",level:2},{value:"JETTY \ud638\ud658\uc131",id:"jetty-\ud638\ud658\uc131",level:2},{value:"Jetty DataSource",id:"jetty-datasource",level:2}],s={toc:m};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jetty\ub97c \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84 \ud658\uacbd\uc5d0\uc11c JVM \uc635\uc158\uc744 \ucd94\uac00\ud558\ub294 \ubc29\ubc95\uc744 \ud655\uc778\ud558\uc138\uc694. "),(0,r.kt)("h2",{id:"jvm-\uc635\uc158-\ucd94\uac00"},"JVM \uc635\uc158 \ucd94\uac00"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"jetty.sh")," \ud30c\uc77c\uc5d0 JVM \uc635\uc158 \ucd94\uac00"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='$JETTY_HOME/bin/jetty.sh' {2} showLineNumbers",title:"'$JETTY_HOME/bin/jetty.sh'","{2}":!0,showLineNumbers:!0},'...\nJAVA_OPTIONS+=("-javaagent:/home/vagrant/whatap/whatap.agent-X.Y.Z.jar -Dwhatap.port=8080")\nusage()\n{\n    echo "Usage: ${0##*/} [-d] {start|stop|run|restart|check|supervise} [ CONFIGS ... ] "\n    exit 1\n}\n[ $# -gt 0 ] || usage\n...\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc258 \uc2a4\ud06c\ub9bd\ud2b8 \uc5c6\uc774 Jetty \uc2dc\uc791\ud558\uae30"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ java -javaagent:/home/vagrant/whatap/whatap.agent-X.Y.Z.jar -Dwhatap.port=8080 -jar start.jar &\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Java 17 \ubc84\uc804 \uc774\uc0c1\uc758 \uacbd\uc6b0 reflection \uad00\ub828\ud55c \ub2e4\uc74c \uc635\uc158\uc744 \ucd94\uac00\ud558\uc138\uc694."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--add-opens=java.base/java.lang=ALL-UNNAMED\n\n"))),(0,r.kt)("h2",{id:"java-\ubaa8\ub2c8\ud130\ub9c1-\uc2dc\uc791\ud558\uae30"},"Java \ubaa8\ub2c8\ud130\ub9c1 \uc2dc\uc791\ud558\uae30"),(0,r.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\ub97c \ub2e4\uc2dc \uc2dc\uc791\ud558\uba74 \uc5d0\uc774\uc804\ud2b8\uac00 \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uae30 \uc2dc\uc791\ud569\ub2c8\ub2e4. ",(0,r.kt)("a",{parentName:"p",href:"/java/install-check"},"\ub2e4\uc74c \ubb38\uc11c"),"\ub97c \ud655\uc778\ud558\uc138\uc694."),(0,r.kt)("h2",{id:"jetty-\ud638\ud658\uc131"},"JETTY \ud638\ud658\uc131"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"WAS Ver."),(0,r.kt)("th",{parentName:"tr",align:"center"},"Java SE 6 (jdk1.6.0)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Java SE 7 (jdk1.7.0_80)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Java SE 8 (jdk1.8.0_91)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jetty 8.1.21"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-no"},"\u274c")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-ok"},"\u2705")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-ok"},"\u2705"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jetty 9.2.18"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-no"},"\u274c")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-ok"},"\u2705")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-ok"},"\u2705"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jetty 9.3.12"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-no"},"\u274c")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-no"},"\u274c")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-ok"},"\u2705"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"WAS Ver."),(0,r.kt)("th",{parentName:"tr",align:"center"},"ibm-java-x86_64-60"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ibm-java-x86_64-71"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ibm-java-x86_64-80"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jetty 8.1.21"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-no"},"\u274c")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-ok"},"\u2705")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-ok"},"\u2705"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jetty 9.2.18"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-no"},"\u274c")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-ok"},"\u2705")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-ok"},"\u2705"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jetty 9.3.12"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-no"},"\u274c")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-no"},"\u274c")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-ok"},"\u2705"))))),(0,r.kt)("h2",{id:"jetty-datasource"},"Jetty DataSource"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"DB"),(0,r.kt)("th",{parentName:"tr",align:null},"JDBC Driver \ud30c\uc77c\uba85"),(0,r.kt)("th",{parentName:"tr",align:null},"JDBC Ver."),(0,r.kt)("th",{parentName:"tr",align:null},"JDK Ver."),(0,r.kt)("th",{parentName:"tr",align:"center"},"\ud638\ud658\uc131"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql-connector-java-5.1.39-bin.jar"),(0,r.kt)("td",{parentName:"tr",align:null},"5.1.39"),(0,r.kt)("td",{parentName:"tr",align:null},"JDK 1.7.0_80"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-ok"},"\u2705"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"ojdbc6-11.2.0.2.0.jar"),(0,r.kt)("td",{parentName:"tr",align:null},"11.2.0.2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"JDK 1.7.0_80"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{class:"emoji-ok"},"\u2705"))))))}c.isMDXComponent=!0}}]);