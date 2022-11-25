"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[1360],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(o),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return o?n.createElement(m,p(p({ref:t},s),{},{components:o})):n.createElement(m,p({ref:t},s))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<a;c++)p[c]=o[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4280:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={},p="Shop Protection",i={unversionedId:"modules/shops/protection",id:"modules/shops/protection",title:"Shop Protection",description:"Player Protection",source:"@site/docs/modules/shops/protection.md",sourceDirName:"modules/shops",slug:"/modules/shops/protection",permalink:"/QuickShop-Hikari-Documents/zh-Hans/docs/modules/shops/protection",draft:!1,editUrl:"https://github.com/Ghost-chu/QuickShop-Hikari-Documents/tree/master/docs/modules/shops/protection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Protection Checker",permalink:"/QuickShop-Hikari-Documents/zh-Hans/docs/modules/shops/protection-checker"},next:{title:"Ranks",permalink:"/QuickShop-Hikari-Documents/zh-Hans/docs/modules/shops/ranks"}},l={},c=[{value:"Player Protection",id:"player-protection",level:2},{value:"Entity, Block, Explosion and Hopper protection",id:"entity-block-explosion-and-hopper-protection",level:2}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shop-protection"},"Shop Protection"),(0,r.kt)("h2",{id:"player-protection"},"Player Protection"),(0,r.kt)("p",null,"By default, players that doesn't have permission or not the owner cannot remove another player's shop.",(0,r.kt)("br",{parentName:"p"}),"\n","And they also cannot open the shop container, put in items or take out items."),(0,r.kt)("p",null,"But of some reason, you don't want QuicKShop handle shop protection, you can disable by tweak config settings to disable it like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  #Should QS try to lock shops for other players?\n  #This prevents players from stealing from them.\n  lock: false\n")),(0,r.kt)("h2",{id:"entity-block-explosion-and-hopper-protection"},"Entity, Block, Explosion and Hopper protection"),(0,r.kt)("p",null,"By default, QuickShop will protect shop container and shop sign from entity, block, explode breaks or hopper I/O.  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Block"),(0,r.kt)("th",{parentName:"tr",align:null},"Entity"),(0,r.kt)("th",{parentName:"tr",align:null},"Explode"),(0,r.kt)("th",{parentName:"tr",align:null},"Hopper ",(0,r.kt)("br",null),"(include Hopper Minecart)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"block-protect",src:o(3712).Z,width:"1024",height:"1024"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"entity-protect",src:o(8454).Z,width:"1024",height:"1024"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"explode-protect",src:o(5613).Z,width:"1024",height:"1024"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"hopper-protect",src:o(4710).Z,width:"1024",height:"1024"}))))),(0,r.kt)("p",null,"You can toggle the protections above by tweak settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#The protection that a shop should check.\nprotect:\n  explode: true\n  hopper: true\n  # Should we allow shop owner placed hoppers?\n  hopper-owner-exclude: false\n  entity: true\n")))}u.isMDXComponent=!0},3712:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/protection-block-7cbfd1536ac00f76fb2613ec25c1ccfb.png"},8454:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/protection-entity-fa71455e57bf4c5779eab51c1d75b92b.png"},5613:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/protection-explode-71dcdff744b0d5398c58ab65850c863e.png"},4710:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/protection-hopper-9ee7978947581dce39835b03519f80e7.png"}}]);