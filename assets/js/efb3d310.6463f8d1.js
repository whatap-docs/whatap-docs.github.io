"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[59579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),o=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=o(n),m=r,d=h["".concat(i,".").concat(m)]||h[m]||c[m]||p;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<p;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const p="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(p,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),p=n(86010),l=n(12466),s=n(76775),i=n(91980),o=n(67392),u=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),p=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(p),(0,r.useCallback)((e=>{if(!p)return;const t=new URLSearchParams(a.location.search);t.set(p,e),a.replace({...a.location,search:t.toString()})}),[p,a])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,p=h(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:p}))),[i,o]=d({queryString:n,groupId:a}),[c,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,p]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&p.set(e)}),[n,p])]}({groupId:a}),b=(()=>{const e=i??c;return m({value:e,tabValues:p})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:p}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),x(e)}),[o,x,p]),tabValues:p}}var b=n(72389);const f="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),h=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==s&&(c(t),i(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:h},l,{className:(0,p.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":s===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=x(e);return r.createElement("div",{className:(0,p.Z)("tabs-container",f)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},68403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),p=n(74866),l=n(85162);const s={id:"redhat-centos",title:"RedHat/CentOS",description:"RedHat/CentOS",tags:["RedHat","CentOSX","Linux","PHP"]},i=void 0,o={unversionedId:"php/php-os/redhat-centos",id:"php/php-os/redhat-centos",title:"RedHat/CentOS",description:"RedHat/CentOS",source:"@site/docs/php/php-os/redhat-centos.mdx",sourceDirName:"php/php-os",slug:"/php/php-os/redhat-centos",permalink:"/php/php-os/redhat-centos",draft:!1,editUrl:"undefined/docs/php/php-os/redhat-centos.mdx",tags:[{label:"RedHat",permalink:"/tags/red-hat"},{label:"CentOSX",permalink:"/tags/cent-osx"},{label:"Linux",permalink:"/tags/linux"},{label:"PHP",permalink:"/tags/php"}],version:"current",frontMatter:{id:"redhat-centos",title:"RedHat/CentOS",description:"RedHat/CentOS",tags:["RedHat","CentOSX","Linux","PHP"]},sidebar:"phpSidebar",previous:{title:"\uc5d0\uc774\uc804\ud2b8 \uc124\uce58",permalink:"/php/install-agent"},next:{title:"Debian/Ubuntu",permalink:"/php/php-os/debian-ubuntu"}},u={},c=[{value:"PHP \ud655\uc7a5 \ubaa8\ub4c8 \ubc0f whatap-php \uc11c\ube44\uc2a4 \ub4f1\ub85d",id:"php-\ud655\uc7a5-\ubaa8\ub4c8-\ubc0f-whatap-php-\uc11c\ube44\uc2a4-\ub4f1\ub85d",level:4},{value:"\uc124\uc815 \uc2a4\ud2b8\ub9bd\ud2b8 install.sh",id:"\uc124\uc815-\uc2a4\ud2b8\ub9bd\ud2b8-installsh",level:4}],h={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc640\ud0ed ",(0,r.kt)("strong",{parentName:"p"},"\ub9ac\ud3ec\uc9c0\ud1a0\ub9ac"),"\ub97c \ub4f1\ub85d\ud558\uc138\uc694."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"$ sudo rpm -Uvh http://repo.whatap.io/centos/5/noarch/whatap-repo-1.0-1.noarch.rpm\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 ",(0,r.kt)("strong",{parentName:"p"},"\ud328\ud0a4\uc9c0"),"\ub97c \uc124\uce58\ud558\uc138\uc694. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"$ sudo yum install whatap-php\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"install.sh")," ",(0,r.kt)("strong",{parentName:"p"},"\uc124\uc815 \uc2a4\ud06c\ub9bd\ud2b8"),"\ub97c \uc2e4\ud589\ud558\uc138\uc694. \uc2a4\ud06c\ub9bd\ud2b8 \uc2e4\ud589\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"p"},"PHP \ud655\uc7a5 \ubaa8\ub4c8")," \uc124\uc815\uacfc ",(0,r.kt)("strong",{parentName:"p"},"whatap-php \uc11c\ube44\uc2a4")," \ub370\ubaac\uc774 \ub4f1\ub85d\ub429\ub2c8\ub2e4. \uc790\uc138\ud55c \uacfc\uc815\uc740 \ub2e4\uc74c\uc744 \ucc38\uace0\ud558\uc138\uc694."))),(0,r.kt)("h4",{id:"php-\ud655\uc7a5-\ubaa8\ub4c8-\ubc0f-whatap-php-\uc11c\ube44\uc2a4-\ub4f1\ub85d"},"PHP \ud655\uc7a5 \ubaa8\ub4c8 \ubc0f whatap-php \uc11c\ube44\uc2a4 \ub4f1\ub85d"),(0,r.kt)("p",null,"PHP \ud655\uc7a5 \ubaa8\ub4c8 \ubc0f whatap-php \uc11c\ube44\uc2a4\ub97c \uc790\ub3d9\uc73c\ub85c \uc124\uce58\ud560 \uacbd\uc6b0 \uc544\ub798\uc640 \uac19\uc774 \uc801\uc6a9\ud558\uc138\uc694."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"$ sudo /usr/whatap/php/install.sh\nInput license key\nxxxxxxxxxxxxxxxx                          # \ubc1c\uae09\ub41c \ud504\ub85c\uc81d\ud2b8 \uc561\uc138\uc2a4 \ud0a4 \uc785\ub825\n\nInput whatap.server.host\n192.x.x.x                                  # \ubc1c\uae09\ub41c \uc11c\ubc84 IP \uc785\ub825\n")),(0,r.kt)("p",null,"PHP \ud655\uc7a5 \ubaa8\ub4c8 \ubc0f whatap-php \uc11c\ube44\uc2a4\ub97c \uc790\ub3d9\uc73c\ub85c \uc778\uc2dd\ud558\uc9c0 \ubabb\ud558\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc120\ud0dd \uc124\uce58\ub97c \uc9c4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc8fc\ub85c Apache \uba85\ub839\uc5b4(",(0,r.kt)("inlineCode",{parentName:"p"},"apachectl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"httpd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"apache2"),") \ubc0f PHP \uba85\ub839\uc5b4(CLI)\uac00 \uae30\ubcf8 \uacbd\ub85c(",(0,r.kt)("em",{parentName:"p"},"$PATH"),")\uc5d0 \uc124\uc815\ub418\uc5b4 \uc788\uc9c0 \uc54a\uac70\ub098, \uc5ec\ub7ec \uac1c\uc758 PHP\uac00 \uc124\uce58\ub418\uc5b4 PHP \uba85\ub839\uc5b4(CLI)\uac00 \uc5ec\ub7ec \uac1c\uc77c \uacbd\uc6b0(",(0,r.kt)("inlineCode",{parentName:"p"},"php5"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"php70"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"php-zts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"zts-php"),"\u2026) \uc2e4\uc81c\ub85c \uc801\uc6a9\ud558\uace0 \uc788\ub294 \ubc84\uc804\uc744 \uc120\ud0dd\ud574 \uc9c4\ud589\ud558\uc138\uc694."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"$ sudo /usr/whatap/php/install.sh manual\n\nInput license key\nxxxxxxxxxxxxxxxx                            # \ubc1c\uae09\ub41c \ud504\ub85c\uc81d\ud2b8 \uc561\uc138\uc2a4 \ud0a4 \uc785\ub825\n\nInput whatap.server.host\n192.x.x.x                                    # \ubc1c\uae09\ub41c \uc11c\ubc84 IP \uc785\ub825\n\nInput : which apache or php-fpm ex)/usr/sbin/httpd, /usr/sbin/apache2, /usr/sbin/php-fpm ...\n/usr/sbin/httpd                             # apache \ubc0f php-fpm \uba85\ub839\uc5b4 \uc704\uce58 \uc785\ub825\n\nInput : which php ex) /usr/bin/php, /usr/bin/php5, /usr/bin/php70 ...\n/usr/bin/php5                                # php \uba85\ub839\uc5b4 \uc704\uce58 \uc785\ub825\n")),(0,r.kt)("h4",{id:"\uc124\uc815-\uc2a4\ud2b8\ub9bd\ud2b8-installsh"},"\uc124\uc815 \uc2a4\ud2b8\ub9bd\ud2b8 install.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"Usage: install.sh [ commands manual|remove ]\n    install.sh -l <license> -s <server> -v <php version> -i <php config file> -p <process_name> [-z ]\n    install.sh -l <license> -s <server> -e <php command> -p <process_name> [-z ]\nCommands\n    auto(default) Auto scan web server and php environment\n    manual User input web server and php environment\n    remove Remove php extension and service(whatap-php)\nOptions\n    -v <php version>     PHP version ex) 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0                        -v 5.3\n                           --php-version 5.3\n    -i <php config file> PHP config file\n                           -i /etc/php.ini\n                           --php-ini /etc/php.ini\n    -e <php cli>         PHP CLI(command line interface)\n                           -e /usr/bin/php\n                           --php-exe: /usr/bin/php-fpm\n    -p <process name>    Web server or PHP-FPM process name. for get used memory\n                           -p httpd\n                           -p httpd.worker, -process-name: php-fpm\n    -l <license>         License key\n                           -l xxxxxxxxxxxxxxx,\n                           --license: xxxxxxxxxxxxx\n    -s <server>          WhaTap Server Host\n                           -s xx.xx.xx.xx/yy.yy.yy.yy,\n                           --server xxx.xxx.xxx.xxx\n    -z                   PHP thread safe\n                           -z ,\n                           --php-zts\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"license"),(0,r.kt)("br",{parentName:"p"}),"\n","\ubc1c\uae09\ub41c \ud504\ub85c\uc81d\ud2b8 \uc561\uc138\uc2a4 \ud0a4 \uc785\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"server"),(0,r.kt)("br",{parentName:"p"}),"\n","\ubc1c\uae09\ub41c \uc11c\ubc84 IP \uc785\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"php version"),(0,r.kt)("br",{parentName:"p"}),"\n","\uc11c\ubc84\uc5d0 \uc124\uce58\ub41c php \ubc84\uc804 \uc815\ubcf4(5.2. 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0)\uc785\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"php config file"),(0,r.kt)("br",{parentName:"p"}),"\n","\uc11c\ubc84\uc5d0 \uc124\uce58\ub41c php.ini\uc758 \uc804\uccb4 \uacbd\ub85c(",(0,r.kt)("em",{parentName:"p"},"/etc/php.ini"),") PHP Extension\uc5d0 \ub300\ud55c \uc124\uc815\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"php cli"),(0,r.kt)("br",{parentName:"p"}),"\n","\ucee4\ub9e8\ub4dc \ub77c\uc778\uc73c\ub85c \uc2e4\ud589 \uac00\ub2a5\ud55c php \uba85\ub839\uc5b4\uc758 \uc804\uccb4 \uacbd\ub85c(",(0,r.kt)("em",{parentName:"p"},"/usr/bin/php"),") \ud574\ub2f9 \uba85\ub839\uc5b4\ub85c PHP \uae30\ubcf8 \ud658\uacbd\uc744 \ud655\uc778\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"process name"),(0,r.kt)("br",{parentName:"p"}),"\n","Apache \uc2e4\ud589 \ud504\ub85c\uc138\uc2a4\uba85(",(0,r.kt)("inlineCode",{parentName:"p"},"httpd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"apache2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"httpd.worker"),"\u2026) \ub610\ub294 PHP-FPM\uc758 \uc2e4\ud589 \ud504\ub85c\uc138\uc2a4\uba85(",(0,r.kt)("inlineCode",{parentName:"p"},"php-fpm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"php5-fpm"),")\uc73c\ub85c \uc0ac\uc6a9 \uba54\ubaa8\ub9ac \uc815\ubcf4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"zts"),(0,r.kt)("br",{parentName:"p"}),"\n","Zend Thread Safe \uc9c0\uc6d0 \uc5ec\ubd80\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. "))),(0,r.kt)(p.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"phpvs",label:"PHP \ubc84\uc804 \uc9c0\uc815 \uc124\uce58",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"$ /usr/whatap/php/install.sh -l [\ubc1c\uae09\ub41c \ud504\ub85c\uc81d\ud2b8 \uc561\uc138\uc2a4 \ud0a4] -s [\ubc1c\uae09\ub41c \uc11c\ubc84 IP] -v [PHP \ubc84\uc804 x.x] -i [php.ini\uc758 \uc804\uccb4 \uacbd\ub85c] -p [\ud504\ub85c\uc138\uc2a4\uba85]\n$ /usr/whatap/php/install.sh -l xxxxx -s 1.1.1.1/2.2.2.2 -v 7.0 -i /etc/php.ini -p httpd [-z]\n"))),(0,r.kt)(l.Z,{value:"phcli",label:"PHP Cli \uba85\ub839\uc5b4 \uc9c0\uc815 \uc124\uce58",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=SH",title:"SH"},"$ /usr/whatap/php/install.sh -l [\ubc1c\uae09\ub41c \ud504\ub85c\uc81d\ud2b8 \uc561\uc138\uc2a4 \ud0a4] -s [\ubc1c\uae09\ub41c \uc11c\ubc84 IP] -e [PHP Cli] -p [\ud504\ub85c\uc138\uc2a4\uba85]\n$ /usr/whatap/php/install.sh -l xxxxx -s 1.1.1.1/2.2.2.2 -e /opt/php/bin/php -p apache2\n$ /usr/whatap/php/install.sh -l xxxxx -s 1.1.1.1/2.2.2.2 -e /opt/php/bin/php-fpm -p php-fpm\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Apache \ubc0f PHP-FPM \ub2e4\uc2dc \uc2dc\uc791 \ud6c4 \uc801\uc6a9\ub429\ub2c8\ub2e4.")))}m.isMDXComponent=!0}}]);