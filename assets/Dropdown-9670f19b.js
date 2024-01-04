import{r as k,w as ve,d as I,h as s,o as le,q as F,c as m,cT as ke,e as C,az as re,g as R,cU as Oe,c3 as _e,cV as Ie,K as J,a as B,cW as Ke,x as he,a7 as me,k as se,p as U,ai as be,S as G,aw as X,J as $e,au as Z,av as Te,aj as je,ah as ze,cO as De,G as Ae,i as L,t as z,cX as Le,ad as te,v as H,ax as Be}from"./index-e5e79e33.js";import{N as ge,p as de,V as Fe,a as Me,b as Ee,r as He}from"./Popover-46734b2d.js";import{f as Ue}from"./format-length-c9d165c6.js";import{h as ce,c as Ve}from"./Select-c86a4c52.js";import{u as qe}from"./use-merged-state-db90804d.js";import{u as Ge}from"./use-keyboard-adc79a7f.js";import{c as We}from"./create-ref-setter-f485918b.js";function Xe(e,t,i){if(!t)return e;const n=k(e.value);let r=null;return ve(e,o=>{r!==null&&window.clearTimeout(r),o===!0?i&&!i.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},t):n.value=!1}),n}const Ze=I({name:"ChevronRight",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Je=Object.assign(Object.assign({},de),F.props),Qe=I({name:"Tooltip",props:Je,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=le(e),i=F("Tooltip","-tooltip",void 0,ke,e,t),n=k(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(o){n.value.setShow(o)}}),{popoverRef:n,mergedTheme:i,popoverThemeOverrides:m(()=>i.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return s(ge,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Ye=C("ellipsis",{overflow:"hidden"},[re("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),R("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),R("cursor-pointer",`
 cursor: pointer;
 `)]);function ue(e){return`${e}-ellipsis--line-clamp`}function pe(e,t){return`${e}-ellipsis--cursor-${t}`}const eo=Object.assign(Object.assign({},F.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),xo=I({name:"Ellipsis",inheritAttrs:!1,props:eo,setup(e,{slots:t,attrs:i}){const n=Oe(),r=F("Ellipsis","-ellipsis",Ye,Ie,e,n),o=k(null),c=k(null),u=k(null),p=k(!1),S=m(()=>{const{lineClamp:l}=e,{value:v}=p;return l!==void 0?{textOverflow:"","-webkit-line-clamp":v?"":l}:{textOverflow:v?"":"ellipsis","-webkit-line-clamp":""}});function x(){let l=!1;const{value:v}=p;if(v)return!0;const{value:g}=o;if(g){const{lineClamp:T}=e;if(O(g),T!==void 0)l=g.scrollHeight<=g.offsetHeight;else{const{value:D}=c;D&&(l=D.getBoundingClientRect().width<=g.getBoundingClientRect().width)}$(g,l)}return l}const P=m(()=>e.expandTrigger==="click"?()=>{var l;const{value:v}=p;v&&((l=u.value)===null||l===void 0||l.setShow(!1)),p.value=!v}:void 0);_e(()=>{var l;e.tooltip&&((l=u.value)===null||l===void 0||l.setShow(!1))});const K=()=>s("span",Object.assign({},J(i,{class:[`${n.value}-ellipsis`,e.lineClamp!==void 0?ue(n.value):void 0,e.expandTrigger==="click"?pe(n.value,"pointer"):void 0],style:S.value}),{ref:"triggerRef",onClick:P.value,onMouseenter:e.expandTrigger==="click"?x:void 0}),e.lineClamp?t:s("span",{ref:"triggerInnerRef"},t));function O(l){if(!l)return;const v=S.value,g=ue(n.value);e.lineClamp!==void 0?_(l,g,"add"):_(l,g,"remove");for(const T in v)l.style[T]!==v[T]&&(l.style[T]=v[T])}function $(l,v){const g=pe(n.value,"pointer");e.expandTrigger==="click"&&!v?_(l,g,"add"):_(l,g,"remove")}function _(l,v,g){g==="add"?l.classList.contains(v)||l.classList.add(v):l.classList.contains(v)&&l.classList.remove(v)}return{mergedTheme:r,triggerRef:o,triggerInnerRef:c,tooltipRef:u,handleClick:P,renderTrigger:K,getTooltipDisabled:x}},render(){var e;const{tooltip:t,renderTrigger:i,$slots:n}=this;if(t){const{mergedTheme:r}=this;return s(Qe,Object.assign({ref:"tooltipRef",placement:"top"},t,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:i,default:(e=n.tooltip)!==null&&e!==void 0?e:n.default})}else return i()}}),we=I({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),oo=C("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[R("color-transition",{transition:"color .3s var(--n-bezier)"}),R("depth",{color:"var(--n-color)"},[B("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),B("svg",{height:"1em",width:"1em"})]),no=Object.assign(Object.assign({},F.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),to=I({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:no,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:i}=le(e),n=F("Icon","-icon",oo,Ke,e,t),r=m(()=>{const{depth:c}=e,{common:{cubicBezierEaseInOut:u},self:p}=n.value;if(c!==void 0){const{color:S,[`opacity${c}Depth`]:x}=p;return{"--n-bezier":u,"--n-color":S,"--n-opacity":x}}return{"--n-bezier":u,"--n-color":"","--n-opacity":""}}),o=i?he("icon",m(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:t,mergedStyle:m(()=>{const{size:c,color:u}=e;return{fontSize:Ue(c),color:u}}),cssVars:i?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$parent:t,depth:i,mergedClsPrefix:n,component:r,onRender:o,themeClass:c}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&me("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),s("i",J(this.$attrs,{role:"img",class:[`${n}-icon`,c,{[`${n}-icon--depth`]:i,[`${n}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?s(r):this.$slots)}}),ae=se("n-dropdown-menu"),Q=se("n-dropdown"),fe=se("n-dropdown-option");function ie(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function ro(e){return e.type==="group"}function ye(e){return e.type==="divider"}function io(e){return e.type==="render"}const xe=I({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=U(Q),{hoverKeyRef:i,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:o,activeKeyPathRef:c,animatedRef:u,mergedShowRef:p,renderLabelRef:S,renderIconRef:x,labelFieldRef:P,childrenFieldRef:K,renderOptionRef:O,nodePropsRef:$,menuPropsRef:_}=t,l=U(fe,null),v=U(ae),g=U(be),T=m(()=>e.tmNode.rawNode),D=m(()=>{const{value:a}=K;return ie(e.tmNode.rawNode,a)}),Y=m(()=>{const{disabled:a}=e.tmNode;return a}),ee=m(()=>{if(!D.value)return!1;const{key:a,disabled:y}=e.tmNode;if(y)return!1;const{value:j}=i,{value:M}=n,{value:ne}=r,{value:E}=o;return j!==null?E.includes(a):M!==null?E.includes(a)&&E[E.length-1]!==a:ne!==null?E.includes(a):!1}),oe=m(()=>n.value===null&&!u.value),W=Xe(ee,300,oe),V=m(()=>!!(l!=null&&l.enteringSubmenuRef.value)),q=k(!1);G(fe,{enteringSubmenuRef:q});function A(){q.value=!0}function d(){q.value=!1}function w(){const{parentKey:a,tmNode:y}=e;y.disabled||p.value&&(r.value=a,n.value=null,i.value=y.key)}function h(){const{tmNode:a}=e;a.disabled||p.value&&i.value!==a.key&&w()}function f(a){if(e.tmNode.disabled||!p.value)return;const{relatedTarget:y}=a;y&&!ce({target:y},"dropdownOption")&&!ce({target:y},"scrollbarRail")&&(i.value=null)}function N(){const{value:a}=D,{tmNode:y}=e;p.value&&!a&&!y.disabled&&(t.doSelect(y.key,y.rawNode),t.doUpdateShow(!1))}return{labelField:P,renderLabel:S,renderIcon:x,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:_,popoverBody:g,animated:u,mergedShowSubmenu:m(()=>W.value&&!V.value),rawNode:T,hasSubmenu:D,pending:X(()=>{const{value:a}=o,{key:y}=e.tmNode;return a.includes(y)}),childActive:X(()=>{const{value:a}=c,{key:y}=e.tmNode,j=a.findIndex(M=>y===M);return j===-1?!1:j<a.length-1}),active:X(()=>{const{value:a}=c,{key:y}=e.tmNode,j=a.findIndex(M=>y===M);return j===-1?!1:j===a.length-1}),mergedDisabled:Y,renderOption:O,nodeProps:$,handleClick:N,handleMouseMove:h,handleMouseEnter:w,handleMouseLeave:f,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:d}},render(){var e,t;const{animated:i,rawNode:n,mergedShowSubmenu:r,clsPrefix:o,siblingHasIcon:c,siblingHasSubmenu:u,renderLabel:p,renderIcon:S,renderOption:x,nodeProps:P,props:K,scrollable:O}=this;let $=null;if(r){const g=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);$=s(Se,Object.assign({},g,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const _={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},l=P==null?void 0:P(n),v=s("div",Object.assign({class:[`${o}-dropdown-option`,l==null?void 0:l.class],"data-dropdown-option":!0},l),s("div",J(_,K),[s("div",{class:[`${o}-dropdown-option-body__prefix`,c&&`${o}-dropdown-option-body__prefix--show-icon`]},[S?S(n):Z(n.icon)]),s("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},p?p(n):Z((t=n[this.labelField])!==null&&t!==void 0?t:n.title)),s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,u&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(to,null,{default:()=>s(Ze,null)}):null)]),this.hasSubmenu?s(Fe,null,{default:()=>[s(Me,null,{default:()=>s("div",{class:`${o}-dropdown-offset-container`},s(Ee,{show:this.mergedShowSubmenu,placement:this.placement,to:O&&this.popoverBody||void 0,teleportDisabled:!O},{default:()=>s("div",{class:`${o}-dropdown-menu-wrapper`},i?s($e,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>$}):$)}))})]}):null);return x?x({node:v,option:n}):v}}),lo=I({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=U(ae),{renderLabelRef:i,labelFieldRef:n,nodePropsRef:r,renderOptionRef:o}=U(Q);return{labelField:n,showIcon:e,hasSubmenu:t,renderLabel:i,nodeProps:r,renderOption:o}},render(){var e;const{clsPrefix:t,hasSubmenu:i,showIcon:n,nodeProps:r,renderLabel:o,renderOption:c}=this,{rawNode:u}=this.tmNode,p=s("div",Object.assign({class:`${t}-dropdown-option`},r==null?void 0:r(u)),s("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,n&&`${t}-dropdown-option-body__prefix--show-icon`]},Z(u.icon)),s("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(u):Z((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),s("div",{class:[`${t}-dropdown-option-body__suffix`,i&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:p,option:u}):p}}),so=I({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:i}=this,{children:n}=e;return s(Te,null,s(lo,{clsPrefix:i,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:o}=r;return o.show===!1?null:ye(o)?s(we,{clsPrefix:i,key:r.key}):r.isGroup?(me("dropdown","`group` node is not allowed to be put in `group` node."),null):s(xe,{clsPrefix:i,tmNode:r,parentKey:t,key:r.key})}))}}),ao=I({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return s("div",t,[e==null?void 0:e()])}}),Se=I({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:i}=U(Q);G(ae,{showIconRef:m(()=>{const r=t.value;return e.tmNodes.some(o=>{var c;if(o.isGroup)return(c=o.children)===null||c===void 0?void 0:c.some(({rawNode:p})=>r?r(p):p.icon);const{rawNode:u}=o;return r?r(u):u.icon})}),hasSubmenuRef:m(()=>{const{value:r}=i;return e.tmNodes.some(o=>{var c;if(o.isGroup)return(c=o.children)===null||c===void 0?void 0:c.some(({rawNode:p})=>ie(p,r));const{rawNode:u}=o;return ie(u,r)})})});const n=k(null);return G(je,null),G(ze,null),G(be,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:t,scrollable:i}=this,n=this.tmNodes.map(r=>{const{rawNode:o}=r;return o.show===!1?null:io(o)?s(ao,{tmNode:r,key:r.key}):ye(o)?s(we,{clsPrefix:t,key:r.key}):ro(o)?s(so,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):s(xe,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:o.props,scrollable:i})});return s("div",{class:[`${t}-dropdown-menu`,i&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},i?s(De,{contentClass:`${t}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?He({clsPrefix:t,arrowStyle:this.arrowStyle}):null)}}),co=C("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ae(),C("dropdown-option",`
 position: relative;
 `,[B("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[B("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),C("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[B("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),re("disabled",[R("pending",`
 color: var(--n-option-text-color-hover);
 `,[L("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),B("&::before","background-color: var(--n-option-color-hover);")]),R("active",`
 color: var(--n-option-text-color-active);
 `,[L("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),B("&::before","background-color: var(--n-option-color-active);")]),R("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[L("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),R("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),R("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[L("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[R("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),L("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[R("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),L("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),L("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[R("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),C("dropdown-menu","pointer-events: all;")]),C("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),C("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),C("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),B(">",[C("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),re("scrollable",`
 padding: var(--n-padding);
 `),R("scrollable",[L("content",`
 padding: var(--n-padding);
 `)])]),uo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},po=Object.keys(de),fo=Object.assign(Object.assign(Object.assign({},de),uo),F.props),So=I({name:"Dropdown",inheritAttrs:!1,props:fo,setup(e){const t=k(!1),i=qe(z(e,"show"),t),n=m(()=>{const{keyField:d,childrenField:w}=e;return Ve(e.options,{getKey(h){return h[d]},getDisabled(h){return h.disabled===!0},getIgnored(h){return h.type==="divider"||h.type==="render"},getChildren(h){return h[w]}})}),r=m(()=>n.value.treeNodes),o=k(null),c=k(null),u=k(null),p=m(()=>{var d,w,h;return(h=(w=(d=o.value)!==null&&d!==void 0?d:c.value)!==null&&w!==void 0?w:u.value)!==null&&h!==void 0?h:null}),S=m(()=>n.value.getPath(p.value).keyPath),x=m(()=>n.value.getPath(e.value).keyPath),P=X(()=>e.keyboard&&i.value);Ge({keydown:{ArrowUp:{prevent:!0,handler:Y},ArrowRight:{prevent:!0,handler:D},ArrowDown:{prevent:!0,handler:ee},ArrowLeft:{prevent:!0,handler:T},Enter:{prevent:!0,handler:oe},Escape:g}},P);const{mergedClsPrefixRef:K,inlineThemeDisabled:O}=le(e),$=F("Dropdown","-dropdown",co,Le,e,K);G(Q,{labelFieldRef:z(e,"labelField"),childrenFieldRef:z(e,"childrenField"),renderLabelRef:z(e,"renderLabel"),renderIconRef:z(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:c,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:S,activeKeyPathRef:x,animatedRef:z(e,"animated"),mergedShowRef:i,nodePropsRef:z(e,"nodeProps"),renderOptionRef:z(e,"renderOption"),menuPropsRef:z(e,"menuProps"),doSelect:_,doUpdateShow:l}),ve(i,d=>{!e.animated&&!d&&v()});function _(d,w){const{onSelect:h}=e;h&&te(h,d,w)}function l(d){const{"onUpdate:show":w,onUpdateShow:h}=e;w&&te(w,d),h&&te(h,d),t.value=d}function v(){o.value=null,c.value=null,u.value=null}function g(){l(!1)}function T(){V("left")}function D(){V("right")}function Y(){V("up")}function ee(){V("down")}function oe(){const d=W();d!=null&&d.isLeaf&&i.value&&(_(d.key,d.rawNode),l(!1))}function W(){var d;const{value:w}=n,{value:h}=p;return!w||h===null?null:(d=w.getNode(h))!==null&&d!==void 0?d:null}function V(d){const{value:w}=p,{value:{getFirstAvailableNode:h}}=n;let f=null;if(w===null){const N=h();N!==null&&(f=N.key)}else{const N=W();if(N){let a;switch(d){case"down":a=N.getNext();break;case"up":a=N.getPrev();break;case"right":a=N.getChild();break;case"left":a=N.getParent();break}a&&(f=a.key)}}f!==null&&(o.value=null,c.value=f)}const q=m(()=>{const{size:d,inverted:w}=e,{common:{cubicBezierEaseInOut:h},self:f}=$.value,{padding:N,dividerColor:a,borderRadius:y,optionOpacityDisabled:j,[H("optionIconSuffixWidth",d)]:M,[H("optionSuffixWidth",d)]:ne,[H("optionIconPrefixWidth",d)]:E,[H("optionPrefixWidth",d)]:Re,[H("fontSize",d)]:Pe,[H("optionHeight",d)]:Ne,[H("optionIconSize",d)]:Ce}=f,b={"--n-bezier":h,"--n-font-size":Pe,"--n-padding":N,"--n-border-radius":y,"--n-option-height":Ne,"--n-option-prefix-width":Re,"--n-option-icon-prefix-width":E,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":M,"--n-option-icon-size":Ce,"--n-divider-color":a,"--n-option-opacity-disabled":j};return w?(b["--n-color"]=f.colorInverted,b["--n-option-color-hover"]=f.optionColorHoverInverted,b["--n-option-color-active"]=f.optionColorActiveInverted,b["--n-option-text-color"]=f.optionTextColorInverted,b["--n-option-text-color-hover"]=f.optionTextColorHoverInverted,b["--n-option-text-color-active"]=f.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=f.optionTextColorChildActiveInverted,b["--n-prefix-color"]=f.prefixColorInverted,b["--n-suffix-color"]=f.suffixColorInverted,b["--n-group-header-text-color"]=f.groupHeaderTextColorInverted):(b["--n-color"]=f.color,b["--n-option-color-hover"]=f.optionColorHover,b["--n-option-color-active"]=f.optionColorActive,b["--n-option-text-color"]=f.optionTextColor,b["--n-option-text-color-hover"]=f.optionTextColorHover,b["--n-option-text-color-active"]=f.optionTextColorActive,b["--n-option-text-color-child-active"]=f.optionTextColorChildActive,b["--n-prefix-color"]=f.prefixColor,b["--n-suffix-color"]=f.suffixColor,b["--n-group-header-text-color"]=f.groupHeaderTextColor),b}),A=O?he("dropdown",m(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:K,mergedTheme:$,tmNodes:r,mergedShow:i,handleAfterLeave:()=>{e.animated&&v()},doUpdateShow:l,cssVars:O?void 0:q,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const e=(n,r,o,c,u)=>{var p;const{mergedClsPrefix:S,menuProps:x}=this;(p=this.onRender)===null||p===void 0||p.call(this);const P=(x==null?void 0:x(void 0,this.tmNodes.map(O=>O.rawNode)))||{},K={ref:We(r),class:[n,`${S}-dropdown`,this.themeClass],clsPrefix:S,tmNodes:this.tmNodes,style:[o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:u};return s(Se,J(this.$attrs,K,P))},{mergedTheme:t}=this,i={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(ge,Object.assign({},Be(this.$props,po),i),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}});export{Ze as C,xo as N,So as _,Qe as a,pe as b,ue as c,eo as e,Ye as s};
