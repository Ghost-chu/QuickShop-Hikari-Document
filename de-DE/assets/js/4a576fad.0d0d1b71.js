"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[6037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={},a="0x01 Getting Started",c={unversionedId:"development/getting-start",id:"development/getting-start",title:"0x01 Getting Started",description:"Hello! Welcome to QuickShop-Hikari's developer community!",source:"@site/i18n/de-DE/docusaurus-plugin-content-docs/current/development/01-getting-start.md",sourceDirName:"development",slug:"/development/getting-start",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/development/getting-start",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/de-DE",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"6.2.0.9",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/changelogs/6.2.0.9"},next:{title:"0x02 Getting Instances",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/development/get-api-instances"}},s={},u=[{value:"License",id:"license",level:2},{value:"\ud83d\udea7Don&#39;t trust Javadoc too much",id:"dont-trust-javadoc-too-much",level:2},{value:"Adding a Maven repository",id:"adding-a-maven-repository",level:2},{value:"Thread Control",id:"thread-control",level:2}],l={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0x01-getting-started"},"0x01 Getting Started"),(0,o.kt)("p",null,"Hello! Welcome to QuickShop-Hikari's developer community!"),(0,o.kt)("p",null,"This series of articles will help you build extensions for QuickShop-Hikari or integrate it deeply with your server."),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"QuickShop-Hikari is open source using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/quick-guide-gplv3.en.html"},"GPLv3")," license and you can always find our source code on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/QuickShop-Community/QuickShop-Hikari"},"Github"),".",(0,o.kt)("br",{parentName:"p"}),"\n","You are free to modify and use any part of QuickShop-Hikari's source code as long as you adhere to the GPLv3 agreement."),(0,o.kt)("h2",{id:"dont-trust-javadoc-too-much"},"\ud83d\udea7Don't trust Javadoc too much"),(0,o.kt)("p",null,"QuickShop is over 10 years old (since Jul 18, 2012 started by netherfoam) and Javadoc can be very old and inaccurate. Although we revise the Javadoc frequently, most of it is still quite old. When there is a conflict between the article and the content in the Javadoc, please refer to the article."),(0,o.kt)("h2",{id:"adding-a-maven-repository"},"Adding a Maven repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<repositories>\n    <repository>\n        <id>codemc</id>\n        <url>https://repo.codemc.io/repository/maven-public/</url>\n    </repository>\n</repositories>\n\n<dependencies>\n<dependency>\n    <groupId>com.ghostchu</groupId>\n    <artifactId>quickshop-bukkit</artifactId>\n    <version>VERSION HERE</version>\n    <scope>provided</scope>\n</dependency>\n\x3c!--You need also bring in quickshop-common module to your project so it will help you resolve our used 3rd-party libraries--\x3e\n<dependency>\n    <groupId>com.ghostchu</groupId>\n    <artifactId>quickshop-common</artifactId>\n    <version>VERSION HERE</version>\n    <scope>provided</scope>\n</dependency>\n</dependencies>\n")),(0,o.kt)("h2",{id:"thread-control"},"Thread Control"),(0,o.kt)("p",null,"QuickShop-Hikari divides operation sources into three types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Server Main Thread"),(0,o.kt)("li",{parentName:"ul"},"Async Thread (any other threads but not server main thread)"),(0,o.kt)("li",{parentName:"ul"},"Hybird")),(0,o.kt)("p",null,"If you access the API through the wrong thread, QuickShop-Hikari will force a runtime error to be thrown."),(0,o.kt)("p",null,"Although many parts of QuickShop-Hikari are internally designed to be thread-safe, the API for operating with the Bukkit API still requires you to use the main server thread for calls."),(0,o.kt)("p",null,"For APIs that may trigger network IO or long-time disk IO, you are required not to execute them on the Server Main Thread."),(0,o.kt)("p",null,"You can see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/QuickShop-Community/QuickShop-Hikari/blob/3d1d271e1106ea1c83cc6068f8232ab7c7860918/quickshop-bukkit/src/main/java/com/ghostchu/quickshop/util/Util.java#L351"},"Util.ensureThread()")," and find out the requirements of the different APIs by looking up their use. APIs that do not use Util.ensureThread() are allowed to be called from any thread by default."),(0,o.kt)("p",null,"You should never bypass this restriction, we only add this check if necessary, it is the most basic guarantee of plugin performance and server stability, if you trigger a thread check, please use the scheduler to complete your task."))}d.isMDXComponent=!0}}]);