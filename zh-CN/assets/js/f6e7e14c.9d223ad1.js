"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[7155],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?n.createElement(h,a(a({ref:r},l),{},{components:t})):n.createElement(h,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7911:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const i={},a="0x05 \u5206\u5546\u5e97\u6743\u9650",p={unversionedId:"development/per-shop-permission-management",id:"development/per-shop-permission-management",title:"0x05 \u5206\u5546\u5e97\u6743\u9650",description:"QuickShop-Hikari \u6709\u4e00\u4e2a\u5206\u5546\u5e97\u7ba1\u7406\u6743\u9650\u7684\u7cfb\u7edf\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/05-per-shop-permission-management.md",sourceDirName:"development",slug:"/development/per-shop-permission-management",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/development/per-shop-permission-management",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/zh-CN",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"0x04 \u9ed1\u540d\u5355\uff08Blacklist\uff09\u4e0e\u4ef7\u683c\u9650\u5236\uff08PriceLimiter\uff09",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/development/blacklist-price-limiter"},next:{title:"Packet System for Virtual Display Items",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/development/protocol-system"}},s={},c=[{value:"\u68c0\u67e5\u5546\u5e97",id:"\u68c0\u67e5\u5546\u5e97",level:2},{value:"\u6ce8\u518c\u81ea\u5df1\u7684\u5206\u5546\u5e97\u6743\u9650",id:"\u6ce8\u518c\u81ea\u5df1\u7684\u5206\u5546\u5e97\u6743\u9650",level:2}],l={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0x05-\u5206\u5546\u5e97\u6743\u9650"},"0x05 \u5206\u5546\u5e97\u6743\u9650"),(0,o.kt)("p",null,"QuickShop-Hikari \u6709\u4e00\u4e2a\u5206\u5546\u5e97\u7ba1\u7406\u6743\u9650\u7684\u7cfb\u7edf\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u56e0\u6b64\uff0c\u76f4\u63a5\u5bf9\u6743\u9650\u8fdb\u884c\u5224\u65ad\u662f\u4e0d\u591f\u7684\uff0c\u4f60\u8fd8\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u989d\u5916\u7684\u68c0\u67e5\u3002"),(0,o.kt)("h2",{id:"\u68c0\u67e5\u5546\u5e97"},"\u68c0\u67e5\u5546\u5e97"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// \u68c0\u67e5\u73a9\u5bb6\u662f\u5426\u6709\u6743\u9650\u641c\u7d22\u6b64\u5546\u5e97 (\u5426\u5219\u5c06\u5176\u5728\u641c\u7d22\u7ed3\u679c\u4e2d\u9690\u85cf)\nboolean visible = shop.playerAuthorize(UUID, BuiltInPermission);\n")),(0,o.kt)("p",null,"\u82e5\u4f60\u9700\u8981\u68c0\u67e5\u7684\u6743\u9650\u6765\u81ea\u5176\u4ed6\u63d2\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// \u73a9\u5bb6 uuid, \u63d2\u4ef6\u5b9e\u4f8b, \u68c0\u67e5\u6743\u9650\nboolean visible = shop.playerAuthorize(UUID, JavaPlugin, String);\n")),(0,o.kt)("h2",{id:"\u6ce8\u518c\u81ea\u5df1\u7684\u5206\u5546\u5e97\u6743\u9650"},"\u6ce8\u518c\u81ea\u5df1\u7684\u5206\u5546\u5e97\u6743\u9650"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'QuickShop internalInstance = ....;\nShopPermissionManager permManager = internalInstance.getShopPermissionManager();\npermManager.registerPermission(BuiltInShopPermissionGroup.<GROUP_NAME>.getNamespacedNode(), this, "<permission node name here>");\n// \u793a\u4f8b\npermManager.registerPermission(BuiltInShopPermissionGroup.STAFF.getNamespacedNode(), this, "receive-discord-alert");\n// \u4f60\u9700\u8981\u4e3a\u60f3\u8981\u6dfb\u52a0\u7684\u6bcf\u4e2a\u7ec4\u90fd\u6ce8\u518c\u4e00\u6b21\uff0c\u8be5\u5185\u5bb9\u4e0d\u4f1a\u7ee7\u627f\n')))}u.isMDXComponent=!0}}]);