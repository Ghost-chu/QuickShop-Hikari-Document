"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[3250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="ShopItemOnly Addon",c={unversionedId:"addon/shopitemonly",id:"addon/shopitemonly",title:"ShopItemOnly Addon",description:"\u6b64\u63d2\u4ef6\u5728 4.1.0.0-SNAPSHOT \u6dfb\u52a0\u5230 QuickShop-Hikari \u4e2d",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/addon/shopitemonly.md",sourceDirName:"addon",slug:"/addon/shopitemonly",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/addon/shopitemonly",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plan \u62d3\u5c55\u7ec4\u4ef6",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/addon/plan"},next:{title:"Addon (Unofficial)",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/category/addon-unofficial"}},p={},l=[{value:"\u9884\u89c8",id:"\u9884\u89c8",level:2}],u={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shopitemonly-addon"},"ShopItemOnly Addon"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6b64\u63d2\u4ef6\u5728 4.1.0.0-SNAPSHOT \u6dfb\u52a0\u5230 QuickShop-Hikari \u4e2d")),(0,o.kt)("p",null,"\u6b64\u63d2\u4ef6\u53ef\u9632\u6b62\u73a9\u5bb6\u5c06\u975e\u5546\u5e97\u7269\u54c1\u653e\u5165\u5546\u5e97\u5bb9\u5668\u4e2d\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e0d\u9002\u7528\u4e8e InventoryWrapper API \u63a7\u5236\u7684\u5546\u5e97\u3002"),(0,o.kt)("p",null,"\u6b64\u63d2\u4ef6\u5c06\u5728\u8bf8\u5982\u73a9\u5bb6\u5173\u95ed\u5bb9\u5668\u6216\u6f0f\u6597\u8bbf\u95ee\u7b49\u4e8b\u4ef6\u4e2d\u68c0\u67e5\u5bb9\u5668\u4e2d\u7684\uff08\u6216\u8f6c\u79fb\u7684\uff09\u7269\u54c1\u3002"),(0,o.kt)("h2",{id:"\u9884\u89c8"},"\u9884\u89c8"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"shop-item-only",src:n(8737).Z,width:"1127",height:"595"})))}d.isMDXComponent=!0},8737:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shopitemonly-deb063ccd45aaaedfbaa8e6608c24df1.png"}}]);