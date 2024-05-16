"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[8167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={},a="DisplayControl Addon",l={unversionedId:"addon/displaycontrol",id:"addon/displaycontrol",title:"DisplayControl Addon",description:"Can't find where to download the JAR? Click here.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/addon/displaycontrol.md",sourceDirName:"addon",slug:"/addon/displaycontrol",permalink:"/QuickShop-Hikari-Documents/zh-TW/docs/addon/displaycontrol",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/zh-TW",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Discount Addon",permalink:"/QuickShop-Hikari-Documents/zh-TW/docs/addon/discount"},next:{title:"Dynmap Addon",permalink:"/QuickShop-Hikari-Documents/zh-TW/docs/addon/dynmap"}},s={},d=[{value:"Requirement",id:"requirement",level:2},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Demo",id:"demo",level:2}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"displaycontrol-addon"},"DisplayControl Addon"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Can't find where to download the JAR? ",(0,o.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/zh-TW/docs/faq/where-addons-compacts-at"},"Click here"),".")),(0,o.kt)("p",null,"DisplayControl Addon gives you the ability to allow player controls the display item behavior on different clients."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"THIS ADDON ONLY WORKS WITH VIRTUAL DISPLAY ITEM TOGETHER")),(0,o.kt)("h2",{id:"requirement"},"Requirement"),(0,o.kt)("p",null,"If you Bukkit/Spigot server behind a BungeeCord, you will need to install ",(0,o.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/zh-TW/docs/compat-modules/bungeecord-geyser"},"Compat-BungeeCord-Geyser Bridge")," on your BungeeCord instance. Otherwise, it will doesn't work at all."),(0,o.kt)("h2",{id:"\u6307\u4ee4"},"\u6307\u4ee4"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/quickshop displaycontrol <auto/enable/disable>")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auto")," - Default behavior, will enable display on Java Edition clients, and disable on Bedrock clients."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enable")," - Always enable display on all clients. ",(0,o.kt)("em",{parentName:"li"},"If the server disabled display items, this option will respect the server global settings.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"disable")," - Always disable display on all clients.")),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"quickshopaddon.displaycontrol.use")," - Allows players to use ",(0,o.kt)("inlineCode",{parentName:"li"},"/quickshop displaycontrol")," commands")),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"display-control demo",src:n(890).Z,width:"844",height:"534"})))}p.isMDXComponent=!0},890:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/display-control-1ec287edb28c440796c58cb5407b27c6.gif"}}]);