"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[7383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,k=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?o.createElement(k,i(i({ref:t},p),{},{components:r})):o.createElement(k,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={},i="Reremake Migrator Addon",s={unversionedId:"addon/reremake-migrator",id:"addon/reremake-migrator",title:"Reremake Migrator Addon",description:"This addon was added into QuickShop-Hikari at 5.1.1.0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/addon/reremake-migrator.md",sourceDirName:"addon",slug:"/addon/reremake-migrator",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/addon/reremake-migrator",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reforges Addon",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/addon/reforges"},next:{title:"ShopItemOnly Addon",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/addon/shopitemonly"}},l={},c=[{value:"Step by step tutorial",id:"step-by-step-tutorial",level:2},{value:"Backup everything",id:"backup-everything",level:3},{value:"Configure QuickShop-Hikari",id:"configure-quickshop-hikari",level:3},{value:"Prepare for convert",id:"prepare-for-convert",level:3},{value:"Begin for convert",id:"begin-for-convert",level:3},{value:"Converting",id:"converting",level:3},{value:"Finished",id:"finished",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reremake-migrator-addon"},"Reremake Migrator Addon"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This addon was added into QuickShop-Hikari at 5.1.1.0")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This Addon is still in an experimental stage, so please manage your backup files properly before using it. Use at your own risk.")),(0,n.kt)("p",null,"This addon added a migrator that allow users easily migrate from ",(0,n.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/62575/"},"QuickShop-Reremake")," to QuickShop-Hikari."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"preview",src:r(8751).Z,width:"2560",height:"1526"})),(0,n.kt)("h2",{id:"step-by-step-tutorial"},"Step by step tutorial"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please note that if you are unable to understand the content of this tutorial, please join our Discord channel or ask other professional server owners / operators.")),(0,n.kt)("h3",{id:"backup-everything"},"Backup everything"),(0,n.kt)("p",null,"There are risks involved in performing data conversions, so you'd better create a full backup of all your data including the world, database, and plugin folders in order to restore them in case the conversion fails."),(0,n.kt)("h3",{id:"configure-quickshop-hikari"},"Configure QuickShop-Hikari"),(0,n.kt)("p",null,"Follow the usual steps to set up QuickShop-Hikari and Addon-Reremake-Migrator, making sure that QuickShop-Hikari,  QuickShop-Reremake Addon-Reremake-Migrator are installed on the server at the sasme time."),(0,n.kt)("p",null,"Afterwards, configure QuickShop-Hikari's database settings. If QuickShop-Hikari and QuickShop-Reremake are using the same MySQL database, ",(0,n.kt)("strong",{parentName:"p"},"YOU MUST to set a different table prefix for QuickShop-Hikari, otherwise the data for both will be corrupted and the conversion will fail"),". ",(0,n.kt)("em",{parentName:"p"},"The path of the table prefix in the configuration file is ",(0,n.kt)("inlineCode",{parentName:"em"},"database.prefix"),".")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This is not necessary if you are using an H2 database.")),(0,n.kt)("h3",{id:"prepare-for-convert"},"Prepare for convert"),(0,n.kt)("p",null,"To avoid data corruption, no players (including administrators) are allowed on the server while data conversion is being performed, and all operations will be performed on the console.",(0,n.kt)("br",{parentName:"p"}),"\n","If a player is in the server, the conversion cannot be started."),(0,n.kt)("p",null,"Once the conversion has begun, the server will be locked during the conversion process and no players will be able to join the server during the conversion."),(0,n.kt)("p",null,"At the end of the conversion, regardless of whether the conversion was successful or not, the server will be locked and no players will be able to join the server until the server is restarted."),(0,n.kt)("h3",{id:"begin-for-convert"},"Begin for convert"),(0,n.kt)("p",null,"Execute the command in the console:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"/quickshop-hikari:quickshop migratefromreremake (overwrite)\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"(overwrite): When a Reremake conflicts with a Hikari store during conversion, is the converter allowed to overwrite this conflicting Hikari store with data from the Reremake. It accepts ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"/quickshop-hikari:quickshop: Since QuickShop-Hikari and QuickShop-Reremake are installed at the same time, there will be command contention issues. This command uses namespaces in order to solve the problem of commands being grabbed by Reremake.")),(0,n.kt)("p",null,"The following is a example of this command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"/quickshop-hikari:quickshop migratefromreremake true\n")),(0,n.kt)("h3",{id:"converting"},"Converting"),(0,n.kt)("p",null,"Once the command is executed, the conversion begins immediately. The converter will convert the configuration information for most of the features to QuickShop-Hikari format."),(0,n.kt)("p",null,"The time it takes to convert depends on the number of stores you have, processor performance, and database performance."),(0,n.kt)("p",null,"The vast majority of data and configuration will be converted, but transaction logs, interaction-behavior are not supported. Please check the configuration file again after the conversion to make sure that all configurations are converted as you expected. If not, you may be required to configure it manually."),(0,n.kt)("h3",{id:"finished"},"Finished"),(0,n.kt)("p",null,"After the conversion is complete, QuickShop-Reremake will be temporarily closed (but not uninstalled) by QuickShop-Hikari."),(0,n.kt)("p",null,"You need to shut down the server and remove the QuickShop-Reremake and Addon-Reremake-Migrator JAR files. If all goes well, all your stores will now be taken over by QuickShop-Hikari and will work properly as expected."))}u.isMDXComponent=!0},8751:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/reremake-migrator-f70727bc37e13bf9b4f79d12368b1309.jpg"}}]);