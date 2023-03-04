"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[36057],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(t),k=r,u=s["".concat(c,".").concat(k)]||s[k]||d[k]||o;return t?n.createElement(u,p(p({ref:a},m),{},{components:t})):n.createElement(u,p({ref:a},m))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=s;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4546:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const o={id:"docker",title:"Docker",description:"Docker \ud658\uacbd\uc5d0\uc11c \uc640\ud0ed \uc5d0\uc774\uc804\ud2b8 \uc801\uc6a9\uc744 \uc644\ub8cc\ud558\uc138\uc694.",tags:["Java","Docker"]},p=void 0,i={unversionedId:"java/add-jvm-opt/docker",id:"java/add-jvm-opt/docker",title:"Docker",description:"Docker \ud658\uacbd\uc5d0\uc11c \uc640\ud0ed \uc5d0\uc774\uc804\ud2b8 \uc801\uc6a9\uc744 \uc644\ub8cc\ud558\uc138\uc694.",source:"@site/docs/java/add-jvm-opt/docker.mdx",sourceDirName:"java/add-jvm-opt",slug:"/java/add-jvm-opt/docker",permalink:"/java/add-jvm-opt/docker",draft:!1,editUrl:"undefined/docs/java/add-jvm-opt/docker.mdx",tags:[{label:"Java",permalink:"/tags/java"},{label:"Docker",permalink:"/tags/docker"}],version:"current",frontMatter:{id:"docker",title:"Docker",description:"Docker \ud658\uacbd\uc5d0\uc11c \uc640\ud0ed \uc5d0\uc774\uc804\ud2b8 \uc801\uc6a9\uc744 \uc644\ub8cc\ud558\uc138\uc694.",tags:["Java","Docker"]},sidebar:"javaSidebar",previous:{title:"Elastic Beanstalk",permalink:"/java/add-jvm-opt/elastic-beanstalk"},next:{title:"\ubc30\uce58 \uc560\ud50c\ub9ac\ucf00\uc774\uc158",permalink:"/java/add-jvm-opt/batch-app"}},c={},l=[],m={toc:l};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uae30\uc874 Docker \uc774\ubbf8\uc9c0\ub97c \ubc14\ud0d5\uc73c\ub85c \uc640\ud0ed \uc5d0\uc774\uc804\ud2b8 \uc124\uc815\uc744 \ucd94\uac00\ud55c \uc774\ubbf8\uc9c0\ub97c \ube4c\ub4dc\ud558\uc138\uc694."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\ubcf8\ubb38\uc5d0\uc11c\ub294 Java \uc5d0\uc774\uc804\ud2b8\ub97c \uc124\uce58\ud558\ub294 \uacbd\uc6b0\ub9cc\uc744 \ub2e4\ub8f9\ub2c8\ub2e4. \uc640\ud0ed \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ubaa8\ub2c8\ud130\ub9c1\uacfc \ud568\uaed8 \uc801\uc6a9\ud558\ub294 \uacbd\uc6b0 \ubcc4\ub3c4 \uc808\ucc28\ub97c \ucc38\uace0\ud558\uc138\uc694.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Docker \ube4c\ub4dc \ub514\ub809\ud130\ub9ac\ub97c \uc0dd\uc131\ud558\uc138\uc694."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p {Docker build dir}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"whatap.conf")," \ud30c\uc77c\uc744 \uc0dd\uc131\ud558\uc138\uc694."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-docker",metastring:"{3,5} showLineNumbers","{3,5}":!0,showLineNumbers:!0},"cat >{Docker build Dir}/whatap.conf <<EOL\n#\ud504\ub85c\uc81d\ud2b8 \uc561\uc138\uc2a4 \ud0a4\ub97c \uc785\ub825\ud558\uc138\uc694.\nlicense=XXXXXXXXXXXXXX-XXXXXXXXXXXXXX-XXXXXXXXXXXXXX \n#Proxy IP \uc815\ubcf4\ub97c \uc785\ub825\ud558\uc138\uc694.\nwhatap.server.host=xx.xx.xx.xx/yy.yy.yy.yy \nEOL\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dockerfile\uc744 \uc0dd\uc131\ud558\uc138\uc694.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc774\ubbf8\uc9c0\ub97c \ube4c\ub4dc\ud560 \uacbd\uc6b0 \uc640\ud0ed \uc774\ubbf8\uc9c0\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"-javaagent")," \uc635\uc158\uc5d0 \uc801\uc6a9\ud560 jar \ud30c\uc77c\uc744 \ubcf5\uc0ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"cat >/home/silver/whatap/docker/Dockerfile <<EOL\nFROM whatap/kube_mon as build\n## \uc2e4\uc81c \uc774\ubbf8\uc9c0 \uc0dd\uc131 (\uae30\uc874 \uc774\ubbf8\uc9c0\uc5d0 Whatap \ucd94\uac00)\n## $Image_Name(\uc774\ubbf8\uc9c0\uba85)\nFROM $Image_Name\nRUN mkdir -p /whatap\nCOPY --from=build /data/agent/micro/whatap.agent-*.jar /whatap\nCOPY ./whatap.conf /whatap/\n#...\nEOL\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_OPT"),"\uc5d0 \ub2e4\uc74c \ub0b4\uc6a9\uc744 \ucd94\uac00\ud558\uc138\uc694."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'WHATAP_HOME=/whatap\nWHATAP_JAR=ls ${WHATAP_HOME}/whatap.agent-*.jar | sort | tail -1\nexport JAVA_OPTS="-javaagent:${WHATAP_JAR} "\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Docker\ub97c \ube4c\ub4dc\ud558\uc138\uc694."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker\ndocker build -t $Image_Name\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Java 17 \ubc84\uc804 \uc774\uc0c1\uc758 \uacbd\uc6b0 reflection \uad00\ub828\ud55c \ub2e4\uc74c \uc635\uc158\uc744 \ucd94\uac00\ud558\uc138\uc694."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--add-opens=java.base/java.lang=ALL-UNNAMED\n\n"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Java \uc5d0\uc774\uc804\ud2b8 \ud30c\uc77c \uc774\ub984\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Rename")," \uae30\ub2a5\uc744 \ud65c\uc6a9\ud574 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Java \uc5d0\uc774\uc804\ud2b8\uc758 \uc774\ub984\uc744 \uc218\uc815\ud588\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_OPTS"),"\uc5d0 \uc0c8\ub85c\uc6b4 Java \uc5d0\uc774\uc804\ud2b8 \uc774\ub984\uc744 \ub4f1\ub85d\ud558\uc138\uc694."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='Java \uc5d0\uc774\uc804\ud2b8 \uc774\ub984 \uc218\uc815 \ubc29\ubc95 \uc608\uc2dc'",title:"'Java","\uc5d0\uc774\uc804\ud2b8":!0,"\uc774\ub984":!0,"\uc218\uc815":!0,"\ubc29\ubc95":!0,"\uc608\uc2dc'":!0},"java -cp whatap.agent-X.Y.Z.jar whatap.agent.setup.Rename -from whatap.agent-X.Y.Z.jar -to whatap.agent.jar\n"))))}d.isMDXComponent=!0}}]);