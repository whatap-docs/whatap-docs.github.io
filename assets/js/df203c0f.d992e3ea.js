"use strict";(self.webpackChunkwhatap_origin=self.webpackChunkwhatap_origin||[]).push([[99924],{88824:(e,l,t)=>{t.d(l,{c:()=>i});var n=t(67294),a=t(52263);const c=["zero","one","two","few","many","other"];function s(e){return c.filter((l=>e.includes(l)))}const r={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,n.useMemo)((()=>{try{return function(e){const l=new Intl.PluralRules(e);return{locale:e,pluralForms:s(l.resolvedOptions().pluralCategories),select:e=>l.select(e)}}(e)}catch(l){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${l.message}\n`),r}}),[e])}function i(){const e=o();return{selectMessage:(l,t)=>function(e,l,t){const n=e.split("|");if(1===n.length)return n[0];n.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const a=t.select(l),c=t.pluralForms.indexOf(a);return n[Math.min(c,n.length-1)]}(t,l,e)}}},68089:(e,l,t)=>{t.r(l),t.d(l,{default:()=>m});var n=t(67294),a=t(86010),c=t(39960),s=t(88824),r=t(1944),o=t(35281),i=t(95999),u=t(78237),d=t(90197);function g(e){let{doc:l}=e;var t,a=l.permalink;return t=a.includes("java")?"Java \ubaa8\ub2c8\ud130\ub9c1":a.includes("php")?"PHP \ubaa8\ub2c8\ud130\ub9c1":a.includes("nodejs")?"Node.js \ubaa8\ub2c8\ud130\ub9c1":a.includes("python")?"Python \ubaa8\ub2c8\ud130\ub9c1":a.includes("dotnet")?".NET \ubaa8\ub2c8\ud130\ub9c1":a.includes("golang")?"Golang \ubaa8\ub2c8\ud130\ub9c1":a.includes("server")?"Server \ubaa8\ub2c8\ud130\ub9c1":a.includes("kubernetes")||a.includes("k8s")?"Kubernetes \ubaa8\ub2c8\ud130\ub9c1":a.includes("postgresql")?"PostgreSQL \ubaa8\ub2c8\ud130\ub9c1":a.includes("oracle")?"Oracle \ubaa8\ub2c8\ud130\ub9c1":a.includes("mysql")?"MySQL \ubaa8\ub2c8\ud130\ub9c1":a.includes("mssql")?"MS SQL Server \ubaa8\ub2c8\ud130\ub9c1":a.includes("tibero")?"Tibero \ubaa8\ub2c8\ud130\ub9c1":a.includes("cubrid")?"CUBRID \ubaa8\ub2c8\ud130\ub9c1":a.includes("altibase")?"Altibase \ubaa8\ub2c8\ud130\ub9c1":a.includes("redis")?"Redis \ubaa8\ub2c8\ud130\ub9c1":a.includes("mongodb")?"MongoDB \ubaa8\ub2c8\ud130\ub9c1":a.includes("url")?"URL \ubaa8\ub2c8\ud130\ub9c1":a.includes("cloudwatch")||a.includes("acw")?"Amazon CloudWatch":a.includes("ecs")?"Amazon ECS":a.includes("azure")?"Azure Moitor":a.includes("ncloud")?"Naver Cloud Monitor":a.includes("oracle-cloud")?"Oracle Cloud Monitor":a.includes("log")?"Log \ubaa8\ub2c8\ud130\ub9c1":a.includes("rum")?"\ube0c\ub77c\uc6b0\uc800 \ubaa8\ub2c8\ud130\ub9c1(RUM)":a.includes("telegraf")?"Telegraf":a.includes("focus")?"Focus":a.includes("ref-cloud")?"\ud074\ub77c\uc6b0\ub4dc \ubaa8\ub2c8\ud130\ub9c1":a.includes("mxql")?"\ucc38\uc870 \ubb38\uc11c > MXQL":a.includes("openapi")?"\ucc38\uc870 \ubb38\uc11c > Open API":a.includes("glossary")?"\uc6a9\uc5b4 \uc0ac\uc804":a.match(/billing|account|manage|group|maintenance|organization|project|rt-notification/g)?"\uad00\ub9ac \uae30\ub2a5":"...",n.createElement("article",{className:"margin-vert--lg"},n.createElement(c.Z,{to:l.permalink},n.createElement("h2",null,l.title)),t&&n.createElement("p",null,n.createElement("b",null,t)),l.description&&n.createElement("p",null,l.description))}function m(e){let{tag:l}=e;const t=function(){const{selectMessage:e}=(0,s.c)();return l=>e(l,(0,i.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:l}))}(),m=(0,i.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:t(l.count),tagName:l.label});return n.createElement(r.FG,{className:(0,a.Z)(o.k.wrapper.docsPages,o.k.page.docsTagDocListPage)},n.createElement(r.d,{title:m}),n.createElement(d.Z,{tag:"doc_tag_doc_list"}),n.createElement(u.Z,null,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("main",{className:"col col--8 col--offset-2"},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,m),n.createElement(c.Z,{href:l.allTagsPath},n.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement("section",{className:"margin-vert--lg"},l.items.map((e=>n.createElement(g,{key:e.id,doc:e})))))))))}}}]);