(()=>{"use strict";var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var a in i)e.o(i,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:i[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{DISMISS_ALERT:()=>d});const i=window.wp.domReady;var a=e.n(i);const o=window.jQuery;var s=e.n(o);const n=window.wp.i18n,r=window.lodash,c=window.wp.data,l=window.yoast.externals.redux;function d({alertKey:e}){return new Promise((t=>wpseoApi.post("alerts/dismiss",{key:e},(()=>t()))))}const{currentPromotions:p,dismissedAlerts:m,isPremium:h,linkParams:f}=l.reducers,{isAlertDismissed:g,getIsPremium:w,isPromotionActive:u,selectLinkParams:y}=l.selectors,{dismissAlert:b,setCurrentPromotions:E,setDismissedAlerts:v,setLinkParams:_,setIsPremium:k}=l.actions,x=window.React,S=window.wp.element,D=window.yoast.styledComponents,P=window.yoast.propTypes;var z=e.n(P);const A=(0,window.wp.compose.compose)([(0,c.withSelect)(((e,t)=>{const{isAlertDismissed:i}=e(t.store||"yoast-seo/editor");return{isAlertDismissed:i(t.alertKey)}})),(0,c.withDispatch)(((e,t)=>{const{dismissAlert:i}=e(t.store||"yoast-seo/editor");return{onDismissed:()=>i(t.alertKey)}}))]),M=A,C=({children:e,id:t,hasIcon:i=!0,title:a,image:o=null,isAlertDismissed:s,onDismissed:r})=>s?null:(0,x.createElement)("div",{id:t,className:"notice-yoast yoast is-dismissible"},(0,x.createElement)("div",{className:"notice-yoast__container"},(0,x.createElement)("div",null,(0,x.createElement)("div",{className:"notice-yoast__header"},i&&(0,x.createElement)("span",{className:"yoast-icon"}),(0,x.createElement)("h2",{className:"notice-yoast__header-heading"},a)),(0,x.createElement)("p",null,e)),o&&(0,x.createElement)(o,{height:"60"})),(0,x.createElement)("button",{type:"button",className:"notice-dismiss",onClick:r},(0,x.createElement)("span",{className:"screen-reader-text"},(0,n.__)("Dismiss this notice.","wordpress-seo"))));C.propTypes={children:z().node.isRequired,id:z().string.isRequired,hasIcon:z().bool,title:z().any.isRequired,image:z().elementType,isAlertDismissed:z().bool.isRequired,onDismissed:z().func.isRequired};const T=M(C);var I,R,O,L,N,j,q,B,K,F,J,$,H,U,W,Q,V,Y,G,X,Z,ee,te,ie,ae,oe,se,ne,re,ce,le,de,pe,me,he,fe,ge,we,ue,ye,be,Ee,ve,_e,ke,xe,Se;function De(){return De=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},De.apply(this,arguments)}const Pe=e=>x.createElement("svg",De({xmlns:"https://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 448 360"},e),I||(I=x.createElement("circle",{cx:226,cy:211,r:149,fill:"#f0ecf0"})),R||(R=x.createElement("path",{fill:"#fbd2a6",d:"M173.53 189.38s-35.47-5.3-41.78-11c-9.39-24.93-29.61-48-35.47-66.21-.71-2.24 3.72-11.39 3.53-15.41s-5.34-11.64-5.23-14-.09-15.27-.09-15.27l-4.75-.72s-5.13 6.07-3.56 9.87c-1.73-4.19 4.3 7.93.5 9.35 0 0-6-5.94-11.76-8.27s-19.57-3.65-19.57-3.65L43.19 73l-4.42.6L31 69.7l-2.85 5.12 7.53 5.29L40.86 92l17.19 10.2 10.2 10.56 9.86 3.56s26.49 79.67 45 92c17 11.33 37.23 15.92 37.23 15.92z"})),O||(O=x.createElement("path",{fill:"#a4286a",d:"M270.52 345.13c2.76-14.59 15.94-35.73 30.24-54.58 16.22-21.39 14-79.66-33.19-91.46-17.3-4.32-52.25-1-59.85-3.41C186.54 189 170 187 168 190.17c-5 10.51-7.73 27.81-5.51 36.26 1.18 4.73 3.54 5.91 20.49 13.4-5.12 15-16.35 26.3-22.86 37s7.88 27.2 7.1 33.51c-.48 3.8-4.26 21.13-7.18 34.25a149.47 149.47 0 0 0 110.3 8.66 25.66 25.66 0 0 1 .18-8.12z"})),L||(L=x.createElement("path",{fill:"#9a5815",d:"M206.76 66.43c-5 14.4-1.42 25.67-3.93 40.74-10 60.34-24.08 43.92-31.44 93.6 7.24-14.19 14.32-15.82 20.63-23.11-.83 3.09-10.25 13.75-8.05 34.81 9.85-8.51 6.35-8.75 11.86-8.54.36 3.25 3.53 3.22-3.59 10.53 2.52.69 17.42-14.32 20.16-12.66s0 5.72-6 7.76c2.15 2.2 30.47-3.87 43.81-14.71 4.93-4 10-13.16 13.38-18.2 7.17-10.62 12.38-24.77 17.71-36.6 8.94-19.87 15.09-39.34 16.11-61.31.53-10.44-3.41-18.44-4.41-28.86-2.57-27.8-67.63-37.26-86.24 16.55z"})),N||(N=x.createElement("path",{fill:"#efb17c",d:"M277.74 179.06c.62-.79 1.24-1.59 1.84-2.39-.85 2.59-1.52 3.73-1.84 2.39z"})),j||(j=x.createElement("path",{fill:"#fbd2a6",d:"M216.1 206.72c3.69-5.42 8.28-3.35 15.57-8.28 3.76-3.06 1.57-9.46 1.77-11.82 18.25 4.56 37.38-1.18 49.07-16 .62 5.16-2.77 22.27-.2 27 4.73 8.67 13.4 18.92 13.4 18.92-35.47-2.76-63.45 39-89.86 44.54 5.52-28.74-2.36-35.84 10.25-54.36z"})),q||(q=x.createElement("path",{fill:"#f6b488",d:"m235.21 167.9 53.21-25.23s-3.65 24-6.5 32.72c-64.05 62.66-46.47-7.33-46.71-7.49z"})),B||(B=x.createElement("path",{fill:"#fbd2a6",d:"M226.86 50.64C215 59.31 206.37 93.21 204 95.57c-19.46 19.47-3.59 41.39-3.94 51.24-.2 5.52-4.14 25.42 5.72 29.36 22.22 8.89 60-3.48 67.19-12.61 13.28-16.75 40.89-94.78 17.74-108.19-7.92-4.58-42.78-20.18-63.85-4.73z"})),K||(K=x.createElement("path",{fill:"#e5766c",d:"M243.69 143.66c-10.7-6.16-8.56-6.73-19.76-12.71-3.86-2.07-3.94.64-6.32 0-2.91-.79-1.39-2.74-5.37-3.48-6.52-1.21-3.67 3.63-3.15 6 1.32 6.15-8.17 17.3 3.26 21.42 12.65 4.55 21.38-9.41 31.34-11.23z"})),F||(F=x.createElement("path",{fill:"#fff",d:"M240.68 143.9c-11.49-5.53-11.65-8.17-24.64-11.69-8.6-2.32-5.53 1-5.69 4.42-.2 4.16-1.26 9.87 4.9 12.66 9 4.09 18.16-6.02 25.43-5.39zm.7-40.9c-.16 1.26-.06 4.9 5.46 8.25 11.43-4.73 16.36-2.56 17-3.33 1.48-1.76-2-8.87-7.88-9.85-5.58-.94-14.14 1.24-14.58 4.93z"})),J||(J=x.createElement("path",{fill:"#000001",d:"M263.53 108.19c-4.32-4.33-6.85-6.24-12.26-8.21-2.77-1-6.18.18-8.65 1.67a3.65 3.65 0 0 0-1.24 1.23h-.12a3.73 3.73 0 0 1 1-1.52 12.53 12.53 0 0 1 11.93-3c4.73 1 9.43 4.63 9.42 9.82z"})),$||($=x.createElement("circle",{cx:254.13,cy:104.05,r:4.19,fill:"#000001"})),H||(H=x.createElement("path",{fill:"#fff",d:"M225.26 99.22c-.29 1-6.6 3.45-10.92 1.48-1.15-3.24-5-6.43-5.25-6.71-.5-2.86 5.55-8 10.06-6.3a10.21 10.21 0 0 1 6.11 11.53z"})),U||(U=x.createElement("path",{fill:"#000001",d:"M209.29 94.21c-.19-2.34 1.84-4.1 3.65-5.2 7-3.87 13.18 3 12.43 10h-.12c-.14-4-2.38-8.44-6.47-9.11a3.19 3.19 0 0 0-2.42.31c-1.37.85-2.38 2-3.89 2.56-1 .45-1.92.42-3 1.4h-.22z"})),W||(W=x.createElement("circle",{cx:219.55,cy:95.28,r:4,fill:"#000001"})),Q||(Q=x.createElement("path",{fill:"#efb17c",d:"M218.66 120.27a27.32 27.32 0 0 0 4.54 3.45c-2.29-.72-4.28-.69-6.32-2.27-2.53-2-3.39-5.16-.73-7.72 10.24-9.82 12.56-13.82 14.77-24.42-1 12.37-6 17.77-10.63 23.18-2.53 2.97-4.68 5.06-1.63 7.78z"})),V||(V=x.createElement("path",{fill:"#a57c52",d:"M231.22 69.91c-.67-3.41-8.78-2.83-11.06-1.93-3.48 1.39-6.08 5.22-7.13 8.53 2.9-4.3 6.74-8.12 12.46-6 1.16.42 3.18 2.35 4.48 1.85s1.03-2.2 1.25-2.45zm32.16 8.56c-2.75-1.66-12.24-5.08-12.18.82 2.56.24 5-.19 7.64.95 11.22 4.76 12.77 17.61 12.85 17.86.2-.53.1 1.26.23.7-.02.2.95-12.12-8.54-20.33z"})),Y||(Y=x.createElement("path",{fill:"#fbd2a6",d:"M53.43 250.73c6.29 0-.6-.17 7.34 0 1.89.05-2.38-.7 0-.69 4.54-4.2 12.48-.74 20.6-2.45 4.55.35 3.93 1.35 5.59 4.19 4.89 8.38 4.78 14.21 14 19.56 16.42 8.38 66 12.92 88.49 18.86 5.52.83 42.64-20.15 61-23.75 6.51 10.74 11.46 28.68 8.39 34.93-6.54 13.3-57.07 25.4-75.91 25.15C156.47 326.18 94 294 92.2 293c-.94-.57.7-.7-7.68 0s-10.15.72-17.47-1.4c-3-.87-4.61-1.33-6.33-3.54-2 .22-3.39.2-4.78-1-3.15-2.74-4.84-6.61-2.73-10.06h-.12c-3.35-2.48-6.54-7.69-3.08-11.72 1-1.18 6.06-1.94 7.77-2.28-1.58-.29-6.37.19-7.49-.72-3.06-2.5-4.96-11.55 3.14-11.55z"})),G||(G=x.createElement("path",{fill:"#a4286a",d:"M303.22 237.52c-9.87-11.88-41.59 8.19-47.8 12.34s-14.89 17.95-14.89 17.95c6 9.43 8.36 31 5.65 46.34l30.51-3s18-15.62 22.59-28.7 6.3-42.54 6.3-42.54"})),X||(X=x.createElement("path",{fill:"#cb9833",d:"M278.63 31.67c-6.08 0-22.91 4.07-22.93 12.91 0 11 47.9 38.38 16.14 85.85 10.21-.79 10.79-8.12 14.92-14.93-3.66 77-49.38 93.58-40.51 142.25 7.68-25.81 20.3-11.62 38.13-33.84 3.45 4.88 9 18.28-9.46 33.78 50-31.26 57.31-56.6 51.92-95C319.93 113.53 348.7 42 278.63 31.67z"})),Z||(Z=x.createElement("path",{fill:"#fbd2a6",d:"M283.64 126.83c-2.42 9.67-8 15.76-1.48 16.46A21.26 21.26 0 0 0 302 132.6c5.17-8.52 3.93-16.44-2.46-18s-13.48 2.56-15.9 12.23z"})),ee||(ee=x.createElement("path",{fill:"#efb17c",d:"M38 73.45c1.92 2 4.25 9.21 6.32 10.91 2.25 1.85 5.71 2.12 8.1 4.45 3.66-2 6-8.72 10-9.31-2.59 1.31-4.42 3.5-6.93 4.88-1.42.8-3 1.31-4.38 2.25-2.16-1.46-4.27-1.77-6.26-3.38-2.52-2.02-5.31-8-6.85-9.8z"})),te||(te=x.createElement("path",{fill:"#efb17c",d:"M39 74.4c4.83 1.1 12.52 6.44 15.89 10-3.22-1.34-14.73-6.15-15.89-10zm.62-1.5c6.71-.79 18 1.54 23.29 5.9-3.85-.2-5.42-1.48-9-2.94-4.08-1.69-8.83-2.03-14.29-2.96zm46.43 14.58c-3.72-1.32-10.52-1.13-13.22 3.52 2-1.16 1.84-2.11 4.18-1.72-3.81-4.15 8.16-.74 11.6-.24m-2.78 13.15c.56-3.29-8-7.81-10.58-9.17-6.25-3.29-12.16 1.36-19.33-4.53 5.94 6.1 14.23 2.5 19.55 5.76 3.06 1.88 8.65 6.09 9.35 9.38-.23-.4 1.29-1.44 1.01-1.44z"})),ie||(ie=x.createElement("circle",{cx:38.13,cy:30.03,r:3.14,fill:"#b89ac8"})),ae||(ae=x.createElement("circle",{cx:60.26,cy:39.96,r:3.14,fill:"#e31e0c"})),oe||(oe=x.createElement("circle",{cx:50.29,cy:25.63,r:3.14,fill:"#3baa45"})),se||(se=x.createElement("circle",{cx:22.19,cy:19.21,r:3.14,fill:"#2ca9e1"})),ne||(ne=x.createElement("circle",{cx:22.19,cy:30.03,r:3.14,fill:"#e31e0c"})),re||(re=x.createElement("circle",{cx:26.86,cy:8.28,r:3.14,fill:"#3baa45"})),ce||(ce=x.createElement("circle",{cx:49.32,cy:39.99,r:3.14,fill:"#e31e0c"})),le||(le=x.createElement("circle",{cx:63.86,cy:59.52,r:3.14,fill:"#f8ad39"})),de||(de=x.createElement("circle",{cx:50.88,cy:50.72,r:3.14,fill:"#3baa45"})),pe||(pe=x.createElement("circle",{cx:63.47,cy:76.17,r:3.14,fill:"#e31e0c"})),me||(me=x.createElement("circle",{cx:38.34,cy:14.83,r:3.14,fill:"#2ca9e1"})),he||(he=x.createElement("circle",{cx:44.44,cy:5.92,r:3.14,fill:"#f8ad39"})),fe||(fe=x.createElement("circle",{cx:57.42,cy:10.24,r:3.14,fill:"#e31e0c"})),ge||(ge=x.createElement("circle",{cx:66.81,cy:12.4,r:3.14,fill:"#2ca9e1"})),we||(we=x.createElement("circle",{cx:77.95,cy:5.14,r:3.14,fill:"#b89ac8"})),ue||(ue=x.createElement("circle",{cx:77.95,cy:30.34,r:3.14,fill:"#e31e0c"})),ye||(ye=x.createElement("circle",{cx:80.97,cy:16.55,r:3.14,fill:"#f8ad39"})),be||(be=x.createElement("circle",{cx:62.96,cy:27.27,r:3.14,fill:"#3baa45"})),Ee||(Ee=x.createElement("circle",{cx:75.36,cy:48.67,r:3.14,fill:"#2ca9e1"})),ve||(ve=x.createElement("circle",{cx:76.11,cy:65.31,r:3.14,fill:"#3baa45"})),_e||(_e=x.createElement("path",{fill:"#71b026",d:"M78.58 178.43C54.36 167.26 32 198.93 5 198.93c19.56 20.49 63.53 1.52 69 15.5 1.48-14.01 4.11-30.9 4.58-36z"})),ke||(ke=x.createElement("path",{fill:"#074a67",d:"M67.75 251.08c0-4.65 10.13-72.65 10.13-72.65h2.8l-9.09 72.3z"})),xe||(xe=x.createElement("ellipse",{cx:255.38,cy:103.18,fill:"#fff",rx:1.84,ry:1.77})),Se||(Se=x.createElement("ellipse",{cx:221.24,cy:94.75,fill:"#fff",rx:1.84,ry:1.77}))),ze=({store:e="yoast-seo/editor",image:t=Pe,url:i,...a})=>(0,c.useSelect)((t=>t(e).getIsPremium()))?null:(0,x.createElement)(T,{alertKey:"webinar-promo-notification",store:e,id:"webinar-promo-notification",title:(0,n.__)("Join our FREE webinar for SEO success","wordpress-seo"),image:t,url:i,...a},(0,n.__)("Feeling lost when it comes to optimizing your site for the search engines? Join our FREE webinar to gain the confidence that you need in order to start optimizing like a pro! You'll obtain the knowledge and tools to start effectively implementing SEO.","wordpress-seo")," ",(0,x.createElement)("a",{href:i,target:"_blank",rel:"noreferrer"},(0,n.__)("Sign up today!","wordpress-seo")));ze.propTypes={store:z().string,image:z().elementType,url:z().string.isRequired};const Ae=ze,Me=window.wp.url,Ce=({store:e="yoast-seo/editor",image:t=null,title:i,promoId:a,alertKey:o,children:s,...n})=>(0,c.select)(e).isPromotionActive(a)&&(0,x.createElement)(T,{alertKey:o,store:e,id:o,title:i,image:t,...n},s);Ce.propTypes={store:z().string,image:z().elementType,title:z().any.isRequired,promoId:z().string.isRequired,alertKey:z().string.isRequired,children:z().node};const Te=({store:e="yoast-seo/editor",...t})=>{const i=(0,c.useSelect)((t=>t(e).selectLinkParams()),[e]),a=(0,S.createInterpolateElement)((0,n.sprintf)((0,n.__)("The %1$s %2$sultimate Black Friday checklist%3$s helps you prepare in time, so you can boost your results during this sale.","wordpress-seo"),"Yoast","<strong>","</strong>"),{strong:(0,x.createElement)("strong",null)});return(0,x.createElement)(Ce,{id:"black-friday-2023-sidebar-checklist",promoId:"black-friday-2023-checklist",alertKey:"black-friday-2023-sidebar-checklist",store:e,title:(0,n.__)("Is your WooCommerce store ready for Black Friday?","wordpress-seo"),...t},a," ",(0,x.createElement)("a",{href:(0,Me.addQueryArgs)("https://yoa.st/black-friday-checklist",i),target:"_blank",rel:"noreferrer"},(0,n.__)("Get the checklist and start optimizing now!","wordpress-seo")))};Te.propTypes={store:z().string};const Ie=()=>{const e=document.getElementById("yst-settings-header-root"),t=Boolean((0,r.get)(window,"wpseoScriptData.isRtl",!1)),i=(0,r.get)(window,"wpseoScriptData.webinarIntroSettingsUrl","https://yoa.st/webinar-intro-settings"),a=(0,r.get)(window,"wpseoScriptData.isWooCommerceActive","");e&&(0,S.render)((0,x.createElement)(D.ThemeProvider,{theme:{isRtl:t}},a&&(0,x.createElement)(Te,{store:"yoast-seo/settings"}),((e="yoast-seo/editor")=>{const t=(0,c.select)(e).isPromotionActive("black-friday-2023-checklist"),i=(0,c.select)(e).isAlertDismissed("black-friday-2023-sidebar-checklist");return!t||i})("yoast-seo/settings")&&(0,x.createElement)(Ae,{store:"yoast-seo/settings",url:i})),e)};var Re;!function(e){function t(){e("#copy-home-meta-description").on("click",(function(){e("#open_graph_frontpage_desc").val(e("#meta_description").val())}))}function i(){var t=e("#wpseo-conf");if(t.length){var i=t.attr("action").split("#")[0];t.attr("action",i+window.location.hash)}}function a(){var t=window.location.hash.replace("#top#","");-1!==t.search("#top")&&(t=window.location.hash.replace("#top%23","")),""!==t&&"#"!==t.charAt(0)||(t=e(".wpseotab").attr("id")),e("#"+t).addClass("active"),e("#"+t+"-tab").addClass("nav-tab-active").trigger("click")}function o(t){const i=e("#noindex-author-noposts-wpseo-container");t?i.show():i.hide()}e.fn._wpseoIsInViewport=function(){const t=e(this).offset().top,i=t+e(this).outerHeight(),a=e(window).scrollTop(),o=a+e(window).height();return t>a&&i<o},e(window).on("hashchange",(function(){a(),i()})),window.setWPOption=function(t,i,a,o){e.post(ajaxurl,{action:"wpseo_set_option",option:t,newval:i,_wpnonce:o},(function(t){t&&e("#"+a).hide()}))},window.wpseoCopyHomeMeta=t,window.wpseoSetTabHash=i,e(document).ready((function(){i(),"function"==typeof window.wpseoRedirectOldFeaturesTabToNewSettings&&window.wpseoRedirectOldFeaturesTabToNewSettings(),e("#disable-author input[type='radio']").on("change",(function(){e(this).is(":checked")&&e("#author-archives-titles-metas-content").toggle("off"===e(this).val())})).trigger("change");const s=e("#noindex-author-wpseo-off"),c=e("#noindex-author-wpseo-on");s.is(":checked")||o(!1),c.on("change",(()=>{e(this).is(":checked")||o(!1)})),s.on("change",(()=>{e(this).is(":checked")||o(!0)})),e("#disable-date input[type='radio']").on("change",(function(){e(this).is(":checked")&&e("#date-archives-titles-metas-content").toggle("off"===e(this).val())})).trigger("change"),e("#disable-attachment input[type='radio']").on("change",(function(){e(this).is(":checked")&&e("#media_settings").toggle("off"===e(this).val())})).trigger("change"),e("#disable-post_format").on("change",(function(){e("#post_format-titles-metas").toggle(e(this).is(":not(:checked)"))})).trigger("change"),e("#zapier_integration_active input[type='radio']").on("change",(function(){e(this).is(":checked")&&e("#zapier-connection").toggle("on"===e(this).val())})).trigger("change"),e("#wpseo-tabs").find("a").on("click",(function(t){var i,a,o,s=!0;if(i=e(this),a=!!e("#first-time-configuration-tab").filter(".nav-tab-active").length,o=!!i.filter("#first-time-configuration-tab").length,a&&!o&&window.isStepBeingEdited&&(s=confirm((0,n.__)("There are unsaved changes in one or more steps. Leaving means that those changes may not be saved. Are you sure you want to leave?","wordpress-seo"))),s){window.isStepBeingEdited=!1,e("#wpseo-tabs").find("a").removeClass("nav-tab-active"),e(".wpseotab").removeClass("active");var r=e(this).attr("id").replace("-tab",""),c=e("#"+r);c.addClass("active"),e(this).addClass("nav-tab-active"),c.hasClass("nosave")?e("#wpseo-submit-container").hide():e("#wpseo-submit-container").show(),e(window).trigger("yoast-seo-tab-change"),"first-time-configuration"===r?(e(".notice-yoast").slideUp(),e(".yoast_premium_upsell").slideUp(),e("#sidebar-container").hide()):(e(".notice-yoast").slideDown(),e(".yoast_premium_upsell").slideDown(),e("#sidebar-container").show())}else t.preventDefault(),e("#first-time-configuration-tab").trigger("focus")})),e("#yoast-first-time-configuration-notice a").on("click",(function(){e("#first-time-configuration-tab").click()})),e("#company_or_person").on("change",(function(){var t=e(this).val();"company"===t?(e("#knowledge-graph-company").show(),e("#knowledge-graph-person").hide()):"person"===t?(e("#knowledge-graph-company").hide(),e("#knowledge-graph-person").show()):(e("#knowledge-graph-company").hide(),e("#knowledge-graph-person").hide())})).trigger("change"),e(".switch-yoast-seo input").on("keydown",(function(e){"keydown"===e.type&&13===e.which&&e.preventDefault()})),e("body").on("click","button.toggleable-container-trigger",(t=>{const i=e(t.currentTarget),a=i.parent().siblings(".toggleable-container");a.toggleClass("toggleable-container-hidden"),i.attr("aria-expanded",!a.hasClass("toggleable-container-hidden")).find("span").toggleClass("dashicons-arrow-up-alt2 dashicons-arrow-down-alt2")}));const l=e("#opengraph"),d=e("#wpseo-opengraph-settings");l.length&&d.length&&(d.toggle(l[0].checked),l.on("change",(e=>{d.toggle(e.target.checked)}))),t(),a(),function(){if(!e("#enable_xml_sitemap input[type=radio]").length)return;const t=e("#yoast-seo-sitemaps-disabled-warning");e("#enable_xml_sitemap input[type=radio]").on("change",(function(){"off"===this.value?t.show():t.hide()}))}(),function(){const t=e("#wpseo-submit-container-float"),i=e("#wpseo-submit-container-fixed");if(!t.length||!i.length)return;function a(){t._wpseoIsInViewport()?i.hide():i.show()}e(window).on("resize scroll",(0,r.debounce)(a,100)),e(window).on("yoast-seo-tab-change",a);const o=e(".wpseo-message");o.length&&window.setTimeout((()=>{o.fadeOut()}),5e3),a()}(),"undefined"!=typeof ClipboardJS&&new ClipboardJS("#copy-zapier-api-key").on("success",(function(t){t.clearSelection(),e(t.trigger).trigger("focus")}))}))}(s()),wpseoScriptData&&(void 0!==wpseoScriptData.media&&s()(document).ready((function(e){void 0!==wp.media&&e(".wpseo_image_upload_button").each((function(t,i){const a=function(t){let i=(t=e(t)).data("target");return i&&""!==i||(i=e(t).attr("id").replace(/_button$/,"")),i}(i),o=e(i).data("target-id"),s=e("#"+a),n=e("#"+o);var r=wp.media.frames.file_frame=wp.media({title:wpseoScriptData.media.choose_image,button:{text:wpseoScriptData.media.choose_image},multiple:!1,library:{type:"image"}});r.on("select",(function(){var e=r.state().get("selection").first().toJSON();s.val(e.url),n.val(e.id)}));const c=e(i);c.click((function(e){e.preventDefault(),r.open()})),c.siblings(".wpseo_image_remove_button").on("click",(e=>{e.preventDefault(),s.val(""),n.val("")}))}))})),void 0!==wpseoScriptData.dismissedAlerts&&((Re=(0,c.registerStore)("yoast-seo/settings",{reducer:(0,c.combineReducers)({currentPromotions:p,dismissedAlerts:m,isPremium:h,linkParams:f}),selectors:{isAlertDismissed:g,getIsPremium:w,isPromotionActive:u,selectLinkParams:y},actions:{dismissAlert:b,setCurrentPromotions:E,setDismissedAlerts:v,setLinkParams:_,setIsPremium:k},controls:t})).dispatch(v((0,r.get)(window,"wpseoScriptData.dismissedAlerts",{}))),Re.dispatch(k(Boolean((0,r.get)(window,"wpseoScriptData.isPremium",!1)))),Re.dispatch(E((0,r.get)(window,"wpseoScriptData.currentPromotions",{}))),Re.dispatch(_((0,r.get)(window,"wpseoScriptData.linkParams",{})))),a()((()=>{Ie()})))})();