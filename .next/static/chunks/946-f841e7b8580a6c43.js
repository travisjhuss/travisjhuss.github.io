(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{3984:(e,t,r)=>{"use strict";r.d(t,{AH:()=>u,i7:()=>d,mL:()=>c});var o=r(1329),n=r(1321),i=r(9461),l=r(5820),a=r(9212);r(8049),r(605);var s=function(e,t){var r=arguments;if(null==t||!o.h.call(t,"css"))return n.createElement.apply(void 0,r);var i=r.length,l=Array(i);l[0]=o.E,l[1]=(0,o.c)(e,t);for(var a=2;a<i;a++)l[a]=r[a];return n.createElement.apply(null,l)};!function(e){var t;t||(t=e.JSX||(e.JSX={}))}(s||(s={}));var c=(0,o.w)(function(e,t){var r=e.styles,s=(0,a.J)([r],void 0,n.useContext(o.T)),c=n.useRef();return(0,l.i)(function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,n=document.querySelector('style[data-emotion="'+e+" "+s.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==n&&(o=!0,n.setAttribute("data-emotion",e),r.hydrate([n])),c.current=[r,o],function(){r.flush()}},[t]),(0,l.i)(function(){var e=c.current,r=e[0];if(e[1]){e[1]=!1;return}if(void 0!==s.next&&(0,i.sk)(t,s.next,!0),r.tags.length){var o=r.tags[r.tags.length-1].nextElementSibling;r.before=o,r.flush()}t.insert("",s,r,!1)},[t,s.name]),null});function u(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.J)(t)}function d(){var e=u.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},2465:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"}},7017:(e,t,r)=>{"use strict";r.d(t,{default:()=>s}),r(1321);var o=r(7007),n=r(9243),i=r(1133);function l(e){let{theme:t,...r}=e,l=n.A in t?t[n.A]:void 0;return(0,i.jsx)(o.default,{...r,themeId:l?n.A:void 0,theme:l||t})}var a=r(7300);function s(e){let{theme:t,...r}=e;return"function"!=typeof t&&"colorSchemes"in(n.A in t?t[n.A]:t)?(0,i.jsx)(a.CssVarsProvider,{theme:t,...r}):(0,i.jsx)(l,{theme:t,...r})}},7300:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CssVarsProvider:()=>y,Experimental_CssVarsProvider:()=>m,getInitColorSchemeScript:()=>h,useColorScheme:()=>d}),r(1321);var o=r(8981),n=r(9135),i=r(4401),l=r(8653),a=r(9243),s=r(1133);let c={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:u,useColorScheme:d,getInitColorSchemeScript:f}=(0,n.default)({themeId:a.A,theme:()=>(0,i.A)({cssVariables:!0}),colorSchemeStorageKey:c.colorSchemeStorageKey,modeStorageKey:c.modeStorageKey,defaultColorScheme:{light:c.defaultLightColorScheme,dark:c.defaultDarkColorScheme},resolveTheme:e=>{let t={...e,typography:(0,l.A)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,o.A)({sx:e,theme:this})},t}});function m(e){return(0,s.jsx)(u,{...e})}let p=!1,h=e=>(p||(console.warn("MUI: The getInitColorSchemeScript function has been deprecated.\n\nYou should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`\nand replace the function call with `<InitColorSchemeScript />` instead."),p=!0),f(e)),y=u},8407:(e,t,r)=>{"use strict";r.d(t,{default:()=>l}),r(1321);var o=r(9475),n=r(2894),i=r(9243);function l(){let e=(0,o.default)(n.A);return e[i.A]||e}},9910:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var o=r(6925),n=r(2894),i=r(9243);function l(e){let{props:t,name:r}=e;return(0,o.default)({props:t,name:r,defaultTheme:n.A,themeId:i.A})}},6744:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=r(1321).createContext(null)},9848:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var o=r(1321),n=r(6744);function i(){return o.useContext(n.A)}},7019:(e,t,r)=>{"use strict";r.d(t,{default:()=>i}),r(1321);var o=r(3984),n=r(1133);function i(e){let{styles:t,defaultTheme:r={}}=e,i="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?r:e):t;return(0,n.jsx)(o.mL,{styles:i})}},2762:(e,t,r)=>{"use strict";let o;r.d(t,{default:()=>s}),r(1321);var n=r(1329),i=r(8049),l=r(9387),a=r(1133);if("object"==typeof document){let e=document.querySelector('[name="emotion-insertion-point"]');if(!e){(e=document.createElement("meta")).setAttribute("name","emotion-insertion-point"),e.setAttribute("content","");let t=document.querySelector("head");t&&t.prepend(e)}class t extends l.v{insert(t,r){return this.key&&this.key.endsWith("global")&&(this.before=e),super.insert(t,r)}}o=((e,t)=>{let r=(0,i.A)(e);return r.sheet=new t({key:r.key,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy,prepend:r.sheet.prepend,insertionPoint:r.sheet.insertionPoint}),r})({key:"css",insertionPoint:e},t)}function s(e){let{injectFirst:t,children:r}=e;return t&&o?(0,a.jsx)(n.C,{value:o,children:r}):r}},9458:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var o=r(5654),n=r(1225);let i=(0,r(3092).A)("MuiBox",["root"]),l=(0,n.default)({defaultClassName:i.root,generateClassName:o.A.generate})},38:(e,t,r)=>{"use strict";r.d(t,{default:()=>y});var o=r(1321),n=r(4549),i=r(8624),l=r(4962),a=r(1014),s=r(6925),c=r(2577),u=r(6971),d=r(1133);let f=(0,u.A)(),m=(0,c.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,a.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),p=e=>(0,s.default)({props:e,name:"MuiContainer",defaultTheme:f}),h=(e,t)=>{let{classes:r,fixed:o,disableGutters:n,maxWidth:s}=e,c={root:["root",s&&`maxWidth${(0,a.A)(String(s))}`,o&&"fixed",n&&"disableGutters"]};return(0,l.A)(c,e=>(0,i.Ay)(t,e),r)},y=function(e={}){let{createStyledComponent:t=m,useThemeProps:r=p,componentName:i="MuiContainer"}=e,l=t(({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let o=e.breakpoints.values[r];return 0!==o&&(t[e.breakpoints.up(r)]={maxWidth:`${o}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return o.forwardRef(function(e,t){let o=r(e),{className:a,component:s="div",disableGutters:c=!1,fixed:u=!1,maxWidth:f="lg",classes:m,...p}=o,y={...o,component:s,disableGutters:c,fixed:u,maxWidth:f},g=h(y,i);return(0,d.jsx)(l,{as:s,ownerState:y,className:(0,n.A)(g.root,a),ref:t,...p})})}()},2249:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l}),r(1321);var o=r(7019),n=r(9475),i=r(1133);let l=function(e){let{styles:t,themeId:r,defaultTheme:l={}}=e,a=(0,n.default)(l),s="function"==typeof t?t(r&&a[r]||a):t;return(0,i.jsx)(o.default,{styles:s})}},7532:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>I});var o=r(1321),n=r(4549),i=r(9760),l=r(8624),a=r(4962),s=r(2577),c=r(6925),u=r(9475),d=r(3475),f=r(6971);let m=(e,t)=>e.filter(e=>t.includes(e)),p=(e,t,r)=>{let o=e.keys[0];Array.isArray(t)?t.forEach((t,o)=>{r((t,r)=>{o<=e.keys.length-1&&(0===o?Object.assign(t,r):t[e.up(e.keys[o])]=r)},t)}):t&&"object"==typeof t?(Object.keys(t).length>e.keys.length?e.keys:m(e.keys,Object.keys(t))).forEach(n=>{if(e.keys.includes(n)){let i=t[n];void 0!==i&&r((t,r)=>{o===n?Object.assign(t,r):t[e.up(n)]=r},i)}}):("number"==typeof t||"string"==typeof t)&&r((e,t)=>{Object.assign(e,t)},t)};function h(e){return`--Grid-${e}Spacing`}function y(e){return`--Grid-parent-${e}Spacing`}let g="--Grid-columns",v="--Grid-parent-columns",S=({theme:e,ownerState:t})=>{let r={};return p(e.breakpoints,t.size,(e,t)=>{let o={};"grow"===t&&(o={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===t&&(o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof t&&(o={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${t} / var(${v}) - (var(${v}) - ${t}) * (var(${y("column")}) / var(${v})))`}),e(r,o)}),r},b=({theme:e,ownerState:t})=>{let r={};return p(e.breakpoints,t.offset,(e,t)=>{let o={};"auto"===t&&(o={marginLeft:"auto"}),"number"==typeof t&&(o={marginLeft:0===t?"0px":`calc(100% * ${t} / var(${v}) + var(${y("column")}) * ${t} / var(${v}))`}),e(r,o)}),r},k=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={[g]:12};return p(e.breakpoints,t.columns,(e,t)=>{let o=t??12;e(r,{[g]:o,"> *":{[v]:o}})}),r},x=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return p(e.breakpoints,t.rowSpacing,(t,o)=>{let n="string"==typeof o?o:e.spacing?.(o);t(r,{[h("row")]:n,"> *":{[y("row")]:n}})}),r},w=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return p(e.breakpoints,t.columnSpacing,(t,o)=>{let n="string"==typeof o?o:e.spacing?.(o);t(r,{[h("column")]:n,"> *":{[y("column")]:n}})}),r},$=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return p(e.breakpoints,t.direction,(e,t)=>{e(r,{flexDirection:t})}),r},A=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},gap:`var(${h("row")}) var(${h("column")})`}}),j=e=>{let t=[];return Object.entries(e).forEach(([e,r])=>{!1!==r&&void 0!==r&&t.push(`grid-${e}-${String(r)}`)}),t},C=(e,t="xs")=>{function r(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(r(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let t=[];return Object.entries(e).forEach(([e,o])=>{r(o)&&t.push(`spacing-${e}-${String(o)}`)}),t}return[]},M=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,t])=>`direction-${e}-${t}`):[`direction-xs-${String(e)}`];var _=r(1133);let E=(0,f.A)(),P=(0,s.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function O(e){return(0,c.default)({props:e,name:"MuiGrid",defaultTheme:E})}let I=function(e={}){let{createStyledComponent:t=P,useThemeProps:r=O,useTheme:s=u.default,componentName:c="MuiGrid"}=e,f=(e,t)=>{let{container:r,direction:o,spacing:n,wrap:i,size:s}=e,u={root:["root",r&&"container","wrap"!==i&&`wrap-xs-${String(i)}`,...M(o),...j(s),...r?C(n,t.breakpoints.keys[0]):[]]};return(0,a.A)(u,e=>(0,l.Ay)(c,e),{})};function m(e,t,r=()=>!0){let o={};return null===e||(Array.isArray(e)?e.forEach((e,n)=>{null!==e&&r(e)&&t.keys[n]&&(o[t.keys[n]]=e)}):"object"==typeof e?Object.keys(e).forEach(t=>{let n=e[t];null!=n&&r(n)&&(o[t]=n)}):o[t.keys[0]]=e),o}let p=t(k,w,x,S,$,A,b),h=o.forwardRef(function(e,t){let l=s(),a=r(e),c=(0,d.A)(a),{className:u,children:h,columns:y=12,container:g=!1,component:v="div",direction:S="row",wrap:b="wrap",size:k={},offset:x={},spacing:w=0,rowSpacing:$=w,columnSpacing:A=w,unstable_level:j=0,...C}=c,M=m(k,l.breakpoints,e=>!1!==e),E=m(x,l.breakpoints),P=e.columns??(j?void 0:y),O=e.spacing??(j?void 0:w),I=e.rowSpacing??e.spacing??(j?void 0:$),W=e.columnSpacing??e.spacing??(j?void 0:A),N={...c,level:j,columns:P,container:g,direction:S,wrap:b,spacing:O,rowSpacing:I,columnSpacing:W,size:M,offset:E},L=f(N,l);return(0,_.jsx)(p,{ref:t,as:v,ownerState:N,className:(0,n.A)(L.root,u),...C,children:o.Children.map(h,e=>o.isValidElement(e)&&(0,i.A)(e,["Grid"])&&g&&e.props.container?o.cloneElement(e,{unstable_level:e.props?.unstable_level??j+1}):e)})});return h.muiName="Grid",h}()},1130:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,useRtl:()=>l});var o=r(1321),n=r(1133);let i=o.createContext(),l=()=>{let e=o.useContext(i);return null!=e&&e},a=function(e){let{value:t,...r}=e;return(0,n.jsx)(i.Provider,{value:null==t||t,...r})}},5332:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var o=r(1321),n=r(4549),i=r(620),l=r(8624),a=r(4962),s=r(2577),c=r(6925),u=r(3475),d=r(6971),f=r(325),m=r(6030),p=r(1133);let h=(0,d.A)(),y=(0,s.A)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function g(e){return(0,c.default)({props:e,name:"MuiStack",defaultTheme:h})}let v=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],S=({ownerState:e,theme:t})=>{let r={display:"flex",flexDirection:"column",...(0,f.NI)({theme:t},(0,f.kW)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let o=(0,m.LX)(t),n=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),l=(0,f.kW)({values:e.direction,base:n}),a=(0,f.kW)({values:e.spacing,base:n});"object"==typeof l&&Object.keys(l).forEach((e,t,r)=>{if(!l[e]){let o=t>0?l[r[t-1]]:"column";l[e]=o}}),r=(0,i.A)(r,(0,f.NI)({theme:t},a,(t,r)=>e.useFlexGap?{gap:(0,m._W)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${v(r?l[r]:e.direction)}`]:(0,m._W)(o,t)}}))}return(0,f.iZ)(t.breakpoints,r)},b=function(e={}){let{createStyledComponent:t=y,useThemeProps:r=g,componentName:i="MuiStack"}=e,s=()=>(0,a.A)({root:["root"]},e=>(0,l.Ay)(i,e),{}),c=t(S);return o.forwardRef(function(e,t){let i=r(e),{component:l="div",direction:a="column",spacing:d=0,divider:f,children:m,className:h,useFlexGap:y=!1,...g}=(0,u.A)(i),v=s();return(0,p.jsx)(c,{as:l,ownerState:{direction:a,spacing:d,useFlexGap:y},ref:t,className:(0,n.A)(v.root,h),...g,children:f?function(e,t){let r=o.Children.toArray(e).filter(Boolean);return r.reduce((e,n,i)=>(e.push(n),i<r.length-1&&e.push(o.cloneElement(t,{key:`separator-${i}`})),e),[])}(m,f):m})})}()},7007:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var o=r(1321),n=r(9848),i=r(6744);let l="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var a=r(1133);let s=function(e){let{children:t,theme:r}=e,s=(0,n.A)(),c=o.useMemo(()=>{let e=null===s?{...r}:"function"==typeof r?r(s):{...s,...r};return null!=e&&(e[l]=null!==s),e},[r,s]);return(0,a.jsx)(i.A.Provider,{value:c,children:t})};var c=r(1329),u=r(5797),d=r(1130),f=r(1135);let m={};function p(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return o.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof r){let i=r(o),l=e?{...t,[e]:i}:i;return n?()=>l:l}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,n])}let h=function(e){let{children:t,theme:r,themeId:o}=e,i=(0,u.default)(m),l=(0,n.A)()||m,h=p(o,i,r),y=p(o,l,r,!0),g="rtl"===(o?h[o]:h).direction;return(0,a.jsx)(s,{theme:y,children:(0,a.jsx)(c.T.Provider,{value:h,children:(0,a.jsx)(d.default,{value:g,children:(0,a.jsx)(f.A,{value:o?h[o].components:h.components,children:t})})})})}},9135:(e,t,r)=>{"use strict";r.r(t),r.d(t,{DISABLE_CSS_TRANSITION:()=>p,default:()=>h});var o=r(1321),n=r(7019),i=r(9848),l=r(8144),a=r(7007),s=r(1133);let c="mode",u="color-scheme";function d(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function f(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function m(e,t){let r;if("undefined"!=typeof window){try{(r=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return r||t}}let p="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function h(e){let{themeId:t,theme:r={},modeStorageKey:h=c,colorSchemeStorageKey:y=u,disableTransitionOnChange:g=!1,defaultColorScheme:v,resolveTheme:S}=e,b={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},k=o.createContext(void 0),x={},w={},$="string"==typeof v?v:v.light,A="string"==typeof v?v:v.dark;return{CssVarsProvider:function(e){var b,$,A,j;let{children:C,theme:M,modeStorageKey:_=h,colorSchemeStorageKey:E=y,disableTransitionOnChange:P=g,storageWindow:O="undefined"==typeof window?void 0:window,documentNode:I="undefined"==typeof document?void 0:document,colorSchemeNode:W="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:N=!1,disableStyleSheetGeneration:L=!1,defaultMode:T="system",noSsr:R}=e,G=o.useRef(!1),F=(0,i.A)(),V=o.useContext(k),D=!!V&&!N,B=o.useMemo(()=>M||("function"==typeof r?r():r),[M]),K=B[t],z=K||B,{colorSchemes:q=x,components:H=w,cssVarPrefix:J}=z,X=Object.keys(q).filter(e=>!!q[e]).join(","),U=o.useMemo(()=>X.split(","),[X]),Y="string"==typeof v?v:v.light,Z="string"==typeof v?v:v.dark,Q=q[Y]&&q[Z]?T:(null===($=q[z.defaultColorScheme])||void 0===$?void 0:null===(b=$.palette)||void 0===b?void 0:b.mode)||(null===(A=z.palette)||void 0===A?void 0:A.mode),{mode:ee,setMode:et,systemMode:er,lightColorScheme:eo,darkColorScheme:en,colorScheme:ei,setColorScheme:el}=function(e){let{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:n,supportedColorSchemes:i=[],modeStorageKey:l=c,colorSchemeStorageKey:a=u,storageWindow:s="undefined"==typeof window?void 0:window,noSsr:p=!1}=e,h=i.join(","),y=i.length>1,[g,v]=o.useState(()=>{let e=m(l,t),o=m("".concat(a,"-light"),r),i=m("".concat(a,"-dark"),n);return{mode:e,systemMode:d(e),lightColorScheme:o,darkColorScheme:i}}),[S,b]=o.useState(p||!y);o.useEffect(()=>{b(!0)},[]);let k=f(g,e=>"light"===e?g.lightColorScheme:"dark"===e?g.darkColorScheme:void 0),x=o.useCallback(e=>{v(r=>{if(e===r.mode)return r;let o=null!=e?e:t;try{localStorage.setItem(l,o)}catch(e){}return{...r,mode:o,systemMode:d(o)}})},[l,t]),w=o.useCallback(e=>{e?"string"==typeof e?e&&!h.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):v(t=>{let r={...t};return f(t,t=>{try{localStorage.setItem("".concat(a,"-").concat(t),e)}catch(e){}"light"===t&&(r.lightColorScheme=e),"dark"===t&&(r.darkColorScheme=e)}),r}):v(t=>{let o={...t},i=null===e.light?r:e.light,l=null===e.dark?n:e.dark;if(i){if(h.includes(i)){o.lightColorScheme=i;try{localStorage.setItem("".concat(a,"-light"),i)}catch(e){}}else console.error("`".concat(i,"` does not exist in `theme.colorSchemes`."))}if(l){if(h.includes(l)){o.darkColorScheme=l;try{localStorage.setItem("".concat(a,"-dark"),l)}catch(e){}}else console.error("`".concat(l,"` does not exist in `theme.colorSchemes`."))}return o}):v(e=>{try{localStorage.setItem("".concat(a,"-light"),r),localStorage.setItem("".concat(a,"-dark"),n)}catch(e){}return{...e,lightColorScheme:r,darkColorScheme:n}})},[h,a,r,n]),$=o.useCallback(e=>{"system"===g.mode&&v(t=>{let r=(null==e?void 0:e.matches)?"dark":"light";return t.systemMode===r?t:{...t,systemMode:r}})},[g.mode]),A=o.useRef($);return A.current=$,o.useEffect(()=>{if("function"!=typeof window.matchMedia||!y)return;let e=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return A.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[y]),o.useEffect(()=>{if(s&&y){let e=e=>{let r=e.newValue;"string"==typeof e.key&&e.key.startsWith(a)&&(!r||h.match(r))&&(e.key.endsWith("light")&&w({light:r}),e.key.endsWith("dark")&&w({dark:r})),e.key===l&&(!r||["light","dark","system"].includes(r))&&x(r||t)};return s.addEventListener("storage",e),()=>{s.removeEventListener("storage",e)}}},[w,x,l,a,h,t,s,y]),{...g,mode:S?g.mode:void 0,systemMode:S?g.systemMode:void 0,colorScheme:S?k:void 0,setMode:x,setColorScheme:w}}({supportedColorSchemes:U,defaultLightColorScheme:Y,defaultDarkColorScheme:Z,modeStorageKey:_,colorSchemeStorageKey:E,defaultMode:Q,storageWindow:O,noSsr:R}),ea=ee,es=ei;D&&(ea=V.mode,es=V.colorScheme);let ec=o.useMemo(()=>{var e;let t=es||z.defaultColorScheme,r=(null===(e=z.generateThemeVars)||void 0===e?void 0:e.call(z))||z.vars,o={...z,components:H,colorSchemes:q,cssVarPrefix:J,vars:r};if("function"==typeof o.generateSpacing&&(o.spacing=o.generateSpacing()),t){let e=q[t];e&&"object"==typeof e&&Object.keys(e).forEach(t=>{e[t]&&"object"==typeof e[t]?o[t]={...o[t],...e[t]}:o[t]=e[t]})}return S?S(o):o},[z,es,H,q,J]),eu=z.colorSchemeSelector;(0,l.A)(()=>{if(es&&W&&eu&&"media"!==eu){let e=eu;if("class"===eu&&(e=".%s"),"data"===eu&&(e="[data-%s]"),(null==eu?void 0:eu.startsWith("data-"))&&!eu.includes("%s")&&(e="[".concat(eu,'="%s"]')),e.startsWith("."))W.classList.remove(...U.map(t=>e.substring(1).replace("%s",t))),W.classList.add(e.substring(1).replace("%s",es));else{let t=e.replace("%s",es).match(/\[([^\]]+)\]/);if(t){let[e,r]=t[1].split("=");r||U.forEach(t=>{W.removeAttribute(e.replace(es,t))}),W.setAttribute(e,r?r.replace(/"|'/g,""):"")}else W.setAttribute(e,es)}}},[es,eu,W,U]),o.useEffect(()=>{let e;if(P&&G.current&&I){let t=I.createElement("style");t.appendChild(I.createTextNode(p)),I.head.appendChild(t),window.getComputedStyle(I.body),e=setTimeout(()=>{I.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[es,P,I]),o.useEffect(()=>(G.current=!0,()=>{G.current=!1}),[]);let ed=o.useMemo(()=>({allColorSchemes:U,colorScheme:es,darkColorScheme:en,lightColorScheme:eo,mode:ea,setColorScheme:el,setMode:et,systemMode:er}),[U,es,en,eo,ea,el,et,er,ec.colorSchemeSelector]),ef=!0;(L||!1===z.cssVariables||D&&(null==F?void 0:F.cssVarPrefix)===J)&&(ef=!1);let em=(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(a.default,{themeId:K?t:void 0,theme:ec,children:C}),ef&&(0,s.jsx)(n.default,{styles:(null===(j=ec.generateStyleSheets)||void 0===j?void 0:j.call(ec))||[]})]});return D?em:(0,s.jsx)(k.Provider,{value:ed,children:em})},useColorScheme:()=>o.useContext(k)||b,getInitColorSchemeScript:e=>(function(e){let{defaultMode:t="system",defaultLightColorScheme:r="light",defaultDarkColorScheme:o="dark",modeStorageKey:n=c,colorSchemeStorageKey:i=u,attribute:l="data-color-scheme",colorSchemeNode:a="document.documentElement",nonce:d}=e||{},f="",m=l;if("class"===l&&(m=".%s"),"data"===l&&(m="[data-%s]"),m.startsWith(".")){let e=m.substring(1);f+=`${a}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${a}.classList.add('${e}'.replace('%s', colorScheme));`}let p=m.match(/\[([^\]]+)\]/);if(p){let[e,t]=p[1].split("=");t||(f+=`${a}.removeAttribute('${e}'.replace('%s', light));
      ${a}.removeAttribute('${e}'.replace('%s', dark));`),f+=`
      ${a}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else f+=`${a}.setAttribute('${m}', colorScheme);`;return(0,s.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${n}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${o}';
  const light = localStorage.getItem('${i}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${f}
  }
} catch(e){}})();`}},"mui-color-scheme-init")})({colorSchemeStorageKey:y,defaultLightColorScheme:$,defaultDarkColorScheme:A,modeStorageKey:h,...e})}}},2577:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(1497).Ay)()},6925:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var o=r(662),n=r(9475);function i(e){let{props:t,name:r,defaultTheme:i,themeId:l}=e,a=(0,n.default)(i);return l&&(a=a[l]||a),(0,o.A)({theme:a,name:r,props:t})}},9760:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var o=r(1321);function n(e,t){return o.isValidElement(e)&&-1!==t.indexOf(e.type.muiName??e.type?._payload?.value?.muiName)}},605:(e,t,r)=>{"use strict";var o=r(2435),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function s(e){return o.isMemo(e)?l:a[e.$$typeof]||n}a[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[o.Memo]=l;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(p){var n=m(r);n&&n!==p&&e(t,n,o)}var l=u(r);d&&(l=l.concat(d(r)));for(var a=s(t),h=s(r),y=0;y<l.length;++y){var g=l[y];if(!i[g]&&!(o&&o[g])&&!(h&&h[g])&&!(a&&a[g])){var v=f(r,g);try{c(t,g,v)}catch(e){}}}}return t}},13:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var o=r(5454),n=r.n(o)},5454:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let o=r(6878)._(r(214));function n(e,t){var r;let n={};"function"==typeof e&&(n.loader=e);let i={...n,...t};return(0,o.default)({...i,modules:null==(r=i.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7613:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let o=r(2673);function n(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new o.BailoutToCSRError(t);return r}},214:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let o=r(1133),n=r(1321),i=r(7613),l=r(6752);function a(e){return{default:e&&"default"in e?e.default:e}}let s={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},c=function(e){let t={...s,...e},r=(0,n.lazy)(()=>t.loader().then(a)),c=t.loading;function u(e){let a=c?(0,o.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,s=!t.ssr||!!t.loading,u=s?n.Suspense:n.Fragment,d=t.ssr?(0,o.jsxs)(o.Fragment,{children:["undefined"==typeof window?(0,o.jsx)(l.PreloadChunks,{moduleIds:t.modules}):null,(0,o.jsx)(r,{...e})]}):(0,o.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,o.jsx)(r,{...e})});return(0,o.jsx)(u,{...s?{fallback:a}:{},children:d})}return u.displayName="LoadableComponent",u}},6752:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return a}});let o=r(1133),n=r(8892),i=r(7231),l=r(5478);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=i.workAsyncStorage.getStore();if(void 0===r)return null;let a=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files;a.push(...t)}}return 0===a.length?null:(0,o.jsx)(o.Fragment,{children:a.map(e=>{let t=r.assetPrefix+"/_next/"+(0,l.encodeURIPath)(e);return e.endsWith(".css")?(0,o.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,n.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},2260:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,S=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case d:case i:case a:case l:case m:return e;default:switch(e=e&&e.$$typeof){case c:case f:case y:case h:case s:return e;default:return t}}case n:return t}}}function x(e){return k(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=s,t.Element=o,t.ForwardRef=f,t.Fragment=i,t.Lazy=y,t.Memo=h,t.Portal=n,t.Profiler=a,t.StrictMode=l,t.Suspense=m,t.isAsyncMode=function(e){return x(e)||k(e)===u},t.isConcurrentMode=x,t.isContextConsumer=function(e){return k(e)===c},t.isContextProvider=function(e){return k(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return k(e)===f},t.isFragment=function(e){return k(e)===i},t.isLazy=function(e){return k(e)===y},t.isMemo=function(e){return k(e)===h},t.isPortal=function(e){return k(e)===n},t.isProfiler=function(e){return k(e)===a},t.isStrictMode=function(e){return k(e)===l},t.isSuspense=function(e){return k(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===l||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===s||e.$$typeof===c||e.$$typeof===f||e.$$typeof===v||e.$$typeof===S||e.$$typeof===b||e.$$typeof===g)},t.typeOf=k},2435:(e,t,r)=>{"use strict";e.exports=r(2260)},2225:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_3da555"}},6375:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_cd454e"}}}]);