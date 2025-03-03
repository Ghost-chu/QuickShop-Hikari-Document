"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[609],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>k});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=u(i),k=n,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||o;return i?r.createElement(d,s(s({ref:t},l),{},{components:i})):r.createElement(d,s({ref:t},l))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var u=2;u<o;u++)s[u]=i[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5259:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=i(7462),n=(i(7294),i(3905));const o={},s="Permission",a={unversionedId:"setup/permissions",id:"setup/permissions",title:"Permission",description:"Permissions control most QuickShop features, and you can control most features using QuickShop-Hikari's permissions.",source:"@site/docs/setup/permissions.md",sourceDirName:"setup",slug:"/setup/permissions",permalink:"/QuickShop-Hikari-Documents/zh-HK/docs/setup/permissions",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/zh-HK",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/QuickShop-Hikari-Documents/zh-HK/docs/setup/install"},next:{title:"FAQ",permalink:"/QuickShop-Hikari-Documents/zh-HK/docs/category/faq"}},p={},u=[{value:"Basic LuckPerms Guide",id:"basic-luckperms-guide",level:2},{value:"Simple Permissions",id:"simple-permissions",level:2},{value:"Details Permissions",id:"details-permissions",level:2}],l={toc:u};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"permission"},"Permission"),(0,n.kt)("p",null,"Permissions control most QuickShop features, and you can control most features using QuickShop-Hikari's permissions."),(0,n.kt)("h2",{id:"basic-luckperms-guide"},"Basic LuckPerms Guide"),(0,n.kt)("p",null,"To give a group a specific permission, you can use:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Grant"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"/lp group <group> permission set <permission> true"),"  "),(0,n.kt)("p",null,"To revoke it, execute:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Revoke"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"/lp group <group> permission unset <permission>")),(0,n.kt)("p",null,"If a permission is included in a ",(0,n.kt)("em",{parentName:"p"},"Simple Permission"),", you can explicitly override to disable it:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Force disable"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"/lp group <group> permission set <permission> false")),(0,n.kt)("p",null,"If you don't know what the name of your group is, use ",(0,n.kt)("inlineCode",{parentName:"p"},"default"),".",(0,n.kt)("br",{parentName:"p"}),"\n","To learn more about LuckPerms, read their wiki at ",(0,n.kt)("a",{parentName:"p",href:"https://luckperms.net/wiki/Home"},"here"),"."),(0,n.kt)("h2",{id:"simple-permissions"},"Simple Permissions"),(0,n.kt)("p",null,"QuickShop provides a simple permission that allows you to quickly setup permissions, they are:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"quickshop.player")," which contains all ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/QuickShop-Community/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/plugin.yml#L78"},"sub permission nodes")," that players required.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"quickshop.moderator")," which includes all ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/QuickShop-Community/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/plugin.yml#L101"},"sub permission nodes")," that moderators required.  "),(0,n.kt)("p",null,"The most significant advantage of using Simple Permission is that when a new permission is added to QuickShop, it will be automatically authorized without additional configuration."),(0,n.kt)("h2",{id:"details-permissions"},"Details Permissions"),(0,n.kt)("p",null,"There is a detailed list of all QuickShop-Hikari permission nodes, you can grant/revoke them by using command."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/QuickShop-Community/QuickShop-Hikari/blob/hikari/quickshop-bukkit/src/main/resources/plugin.yml"},"plugin.yml -> permissions")," node."))}c.isMDXComponent=!0}}]);