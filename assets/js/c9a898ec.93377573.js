"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4197],{4665:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),i=n(6010),o=n(1976),a=n(8746),c=n(1699),s=n(1614);const l="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:o,description:a}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:o},n," ",o),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",u),title:a},a))}function f(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function E(e){var t;let{item:n}=e;const i=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:i,title:n.label,description:null==a?void 0:a.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(E,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const a=(0,o.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(3117),i=(n(7294),n(3905)),o=n(4665),a=n(1976);const c={title:"Introduction",tags:["enterprise-edition"]},s="Admin Enterprise Edition",l={unversionedId:"docs/core/admin/ee/intro",id:"docs/core/admin/ee/intro",title:"Introduction",description:"This section is an overview of all the features related to the Enterprise Edition in Admin:",source:"@site/docs/docs/01-core/admin/01-ee/00-intro.md",sourceDirName:"docs/01-core/admin/01-ee",slug:"/docs/core/admin/ee/intro",permalink:"/docs/core/admin/ee/intro",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/01-ee/00-intro.md",tags:[{label:"enterprise-edition",permalink:"/tags/enterprise-edition"}],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",tags:["enterprise-edition"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/core/admin/intro"},next:{title:"Review Workflows",permalink:"/docs/core/admin/ee/review-workflows"}},d={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"admin-enterprise-edition"},"Admin Enterprise Edition"),(0,i.kt)("p",null,"This section is an overview of all the features related to the Enterprise Edition in Admin:"),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}),(0,i.kt)("h1",{id:"promoting-ee-features-in-ce-projects"},"Promoting EE features in CE projects"),(0,i.kt)("p",null,"Everytime a new EE feature is added in Strapi, in the settings menu, you should add the following condition to ensure that the feature promotes itself in CE:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"packages/core/admin/admin/src/hooks/useSettingsMenu/index.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n \n ...(!window.strapi.features.isEnabled(window.strapi.features.NEW_EE_FEATURE) &&\n    window.strapi?.flags?.promoteEE\n      ? [\n          {\n            intlLabel: {\n              id: 'Settings.new-ee-feature.page.title',\n              defaultMessage: 'NEW EE FEATURE',\n            },\n            to: '/settings/purchase-new-ee-feature',\n            id: 'new-ee-feature',\n            lockIcon: true,\n          },\n        ]\n      : []),\n...\n")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);