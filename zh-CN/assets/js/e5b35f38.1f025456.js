"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[4429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},o="\u60ac\u6d6e\u7269",i={unversionedId:"modules/shops/display-system",id:"modules/shops/display-system",title:"\u60ac\u6d6e\u7269",description:"QuickShop \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f88\u9177\u7684\u529f\u80fd\uff0c\u8ba9\u73a9\u5bb6\u8bc6\u522b\u5546\u5e97\u7269\u54c1\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/shops/display-system.md",sourceDirName:"modules/shops",slug:"/modules/shops/display-system",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/modules/shops/display-system",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9ed1\u540d\u5355\u7cfb\u7edf",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/modules/shops/blacklist"},next:{title:"Shop History",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/modules/shops/history"}},p={},s=[{value:"\u5de5\u4f5c\u6a21\u5f0f",id:"\u5de5\u4f5c\u6a21\u5f0f",level:2},{value:"\u771f\u5b9e\u60ac\u6d6e\u7269",id:"\u771f\u5b9e\u60ac\u6d6e\u7269",level:2},{value:"\u865a\u62df\u60ac\u6d6e\u7269",id:"\u865a\u62df\u60ac\u6d6e\u7269",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5168\u5c40\u7981\u7528\u60ac\u6d6e\u7269",id:"\u5168\u5c40\u7981\u7528\u60ac\u6d6e\u7269",level:2},{value:"\u5355\u72ec\u63a7\u5236\u663e\u793a\u60ac\u6d6e\u7269",id:"\u5355\u72ec\u63a7\u5236\u663e\u793a\u60ac\u6d6e\u7269",level:2},{value:"\u60ac\u6d6e\u7269\u9632\u62a4",id:"\u60ac\u6d6e\u7269\u9632\u62a4",level:2},{value:"\u60ac\u6d6e\u7269\u81ea\u52a8\u53d6\u6d88\u751f\u6210\uff08\u4e0d\u63a8\u8350\uff09",id:"\u60ac\u6d6e\u7269\u81ea\u52a8\u53d6\u6d88\u751f\u6210\u4e0d\u63a8\u8350",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u60ac\u6d6e\u7269"},"\u60ac\u6d6e\u7269"),(0,r.kt)("p",null,"QuickShop \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f88\u9177\u7684\u529f\u80fd\uff0c\u8ba9\u73a9\u5bb6\u8bc6\u522b\u5546\u5e97\u7269\u54c1\u3002"),(0,r.kt)("h2",{id:"\u5de5\u4f5c\u6a21\u5f0f"},"\u5de5\u4f5c\u6a21\u5f0f"),(0,r.kt)("p",null,"\u60ac\u6d6e\u7269\u6709\u4e24\u4e2a\u4e0d\u540c\u7684\u5de5\u4f5c\u6a21\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u771f\u5b9e\u60ac\u6d6e\u7269"),(0,r.kt)("li",{parentName:"ul"},"\u865a\u62df\u60ac\u6d6e\u7269")),(0,r.kt)("h2",{id:"\u771f\u5b9e\u60ac\u6d6e\u7269"},"\u771f\u5b9e\u60ac\u6d6e\u7269"),(0,r.kt)("p",null,"\u6b64\u5de5\u4f5c\u6a21\u5f0f\u5c06\u5728\u5546\u5e97\u5bb9\u5668\u4e0a\u751f\u6210\u4e00\u4e2a\u7269\u54c1\uff0c\u8fd9\u662f\u539f\u59cb\u663e\u793a\u6a21\u5f0f\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u771f\u5b9e\u60ac\u6d6e\u7269\u8d85\u51fa\u4e86\u65b9\u6846\uff0c\u4e14\u4e0d\u9700\u8981\u4efb\u4f55\u914d\u7f6e\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f46\uff0c\u5f53\u8bb8\u591a\u5546\u5e97\u540c\u65f6\u52a0\u8f7d\u65f6\uff0c\u5b83\u4f1a\u4e25\u91cd\u5f71\u54cd\u670d\u52a1\u5668\u6027\u80fd\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e5f\u6709\u5141\u8bb8\u73a9\u5bb6\u4f2a\u9020\u7269\u54c1\u7684\u98ce\u9669\uff0c\u56e0\u4e3a\u8be5\u7269\u54c1\u5728\u670d\u52a1\u5668\u4e0a\u662f\u771f\u5b9e\u5b58\u5728\u7684\u3002"),(0,r.kt)("h2",{id:"\u865a\u62df\u60ac\u6d6e\u7269"},"\u865a\u62df\u60ac\u6d6e\u7269"),(0,r.kt)("p",null,"\u6b64\u5de5\u4f5c\u6a21\u5f0f\u5c06\u5411\u73a9\u5bb6\u7684\u5ba2\u6237\u7aef\u53d1\u9001\u4e00\u4e2a\u6570\u636e\u5305\uff0c\u4ee5\u6b3a\u9a97\u5ba2\u6237\u7aef\u5728\u5546\u5e97\u5bb9\u5668\u4e0a\u65b9\u751f\u6210\u4e00\u4e2a\u60ac\u6d6e\u7269\u54c1\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u73a9\u5bb6** \u53ef\u4ee5\u770b\u5230\u8be5\u7269\u54c1\uff0c\u4f46\u5b83\u5b9e\u9645\u4e0a\u4e0d\u5b58\u5728\u4e8e\u670d\u52a1\u5668\u4e0a\uff0c\u5b83\u4e0d\u4f1a\u5f71\u54cd\u670d\u52a1\u5668\u6027\u80fd\u548c\u66f4\u9ad8\u7684\u5b89\u5168\u6027\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u60a8\u9700\u8981\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/protocollib.1997/"},"ProtocolLib")," \u5e76\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"display-type")," \u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  #The display type you want use.\n  #Old mode, ArmorStand (display-type=1) is Outdated and could not be used\n  #0=Normal Dropped Item\n  #2=Virtual Item (Requires ProtocolLib, fallback to type 0 if ProtocolLib is not installed)\n  display-type: 2\n")),(0,r.kt)("h2",{id:"\u5168\u5c40\u7981\u7528\u60ac\u6d6e\u7269"},"\u5168\u5c40\u7981\u7528\u60ac\u6d6e\u7269"),(0,r.kt)("p",null,"\u51fa\u4e8e\u67d0\u4e9b\u539f\u56e0\uff0c\u60a8\u4e0d\u60f3\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u7684\u5546\u5e97\u751f\u6210\u60ac\u6d6e\u7269\uff0c\u60a8\u53ef\u4ee5\u5728 config.yml \u4e2d\u7981\u7528\u6b64\u529f\u80fd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  #Should we place display items on the chests?\n  #This may cause duped items, especially for modded servers!\n  #Virtual DisplayItem is safe for dupe\n  display-items: false\n")),(0,r.kt)("h2",{id:"\u5355\u72ec\u63a7\u5236\u663e\u793a\u60ac\u6d6e\u7269"},"\u5355\u72ec\u63a7\u5236\u663e\u793a\u60ac\u6d6e\u7269"),(0,r.kt)("p",null,"\u540c\u4e00\u533a\u5757\u592a\u591a\u60ac\u6d6e\u7269\u53ef\u80fd\u4f1a\u635f\u5bb3\u5ba2\u6237\u7aef fps\uff0c\u5c24\u5176\u662f\u5f53\u60a8\u5728\u8d2d\u7269\u4e2d\u5fc3\u65f6\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u5546\u5e97\u5e76\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u7981\u7528\u6216\u542f\u7528\u5355\u4e2a\u5546\u5e97\u7684\u60ac\u6d6e\u7269\u662f\u5426\u663e\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mcfunction"},"/quickshop toggledisplay\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u5df2\u7981\u7528\u60ac\u6d6e\u7269\u751f\u6210\uff0c\u5b83\u4e0d\u4f1a\u5f3a\u5236\u751f\u6210\u60ac\u6d6e\u7269\u3002"),(0,r.kt)("h2",{id:"\u60ac\u6d6e\u7269\u9632\u62a4"},"\u60ac\u6d6e\u7269\u9632\u62a4"),(0,r.kt)("p",null,"\u5f53QuickShop\u5728",(0,r.kt)("strong",{parentName:"p"},"Real DisplayItem\u6a21\u5f0f\u4e0b"),"\u5de5\u4f5c\u65f6\uff0cDisplayItem Guard\u5c06\u542f\u7528\u4ee5\u4fdd\u62a4DisplayItem \u88ab\u6f0f\u6597\u548c\u6c34\u7b49\u8fdb\u884c\u590d\u5236\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","\u670d\u52a1\u5668\u7ba1\u7406\u5458\u5c06\u5728\u73a9\u5bb6\u5c1d\u8bd5\u590d\u5236\u7269\u54c1\u65f6\u6536\u5230\u8b66\u62a5\u3002"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u8bbe\u7f6e\u6765\u7981\u7528\u8b66\u62a5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#Allow QuickShop to send alerts when someone tries to make a displayItem exploit.\nsend-display-item-protection-alert: false\n")),(0,r.kt)("p",null,"QuickShop\u8fd8\u5c06\u68c0\u67e5\u6240\u6709\u663e\u793a\u7269\u54c1\uff0c\u4ee5\u786e\u4fdd\u5b83\u4eec\u4ecd\u7136\u5904\u4e8e\u5e94\u6709\u7684\u4f4d\u7f6e\uff0c\u5e76\u5728\u9700\u8981\u65f6\u91cd\u7f6e\u6216\u8005\u91cd\u65b0\u751f\u6210\u5b83\u4eec\u3002 \u60a8\u53ef\u4ee5\u8c03\u6574\u66f4\u6539\u4e0b\u9762\u7684\u9009\u9879\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  #QuickShop will check if the display item is in a valid position every specified amount of ticks.\n  #Set to 0 to disable it.\n  display-items-check-ticks: 6000\n  #The interval (in ticks) at which QS checks the shops range to despawn/spawn displays.\n  display-check-time: 40\n")),(0,r.kt)("h2",{id:"\u60ac\u6d6e\u7269\u81ea\u52a8\u53d6\u6d88\u751f\u6210\u4e0d\u63a8\u8350"},"\u60ac\u6d6e\u7269\u81ea\u52a8\u53d6\u6d88\u751f\u6210\uff08\u4e0d\u63a8\u8350\uff09"),(0,r.kt)("p",null,"\u6b64\u529f\u80fd\u5b8c\u5168\u662f\u5bf9\u5ba2\u6237\u7aef\u6e32\u67d3\u6027\u80fd\u7684\u59a5\u534f\uff0c\u4f1a\u5927\u5927\u589e\u52a0\u670d\u52a1\u5668\u7684\u538b\u529b\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u6b64\u529f\u80fd\u5141\u8bb8\u60a8\u5728\u73a9\u5bb6\u8ddd\u79bb\u5546\u5e97\u592a\u8fdc\u65f6\u9690\u85cf\u865a\u62df\u60ac\u6d6e\u7269\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  #Allow QuickShop to automatically despawn displays when no players are in range of the shop.\n  display-auto-despawn: false\n\n  #The range at which displays will despawn.\n  display-despawn-range: 20\n")))}u.isMDXComponent=!0}}]);