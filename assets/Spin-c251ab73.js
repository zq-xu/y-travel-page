import{a as f,e as c,an as x,g as h,d as C,o as S,q as v,c as m,bU as k,v as $,x as w,r as T,A as R,h as o,bX as _,J as B,d1 as N}from"./index-7d88c287.js";import{u as P}from"./use-compitable-51841f38.js";const V=f([f("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c("spin-container",{position:"relative"},[c("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[x()])]),c("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[h("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),c("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[h("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),W={small:20,medium:18,large:16},I=Object.assign(Object.assign({},v.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),E=C({name:"Spin",props:I,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=S(e),t=v("Spin","-spin",V,N,e,r),d=m(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:a},self:u}=t.value,{opacitySpinning:y,color:g,textColor:b}=u,z=typeof s=="number"?k(s):u[$("size",s)];return{"--n-bezier":a,"--n-opacity-spinning":y,"--n-size":z,"--n-color":g,"--n-text-color":b}}),i=n?w("spin",m(()=>{const{size:s}=e;return typeof s=="number"?String(s):s[0]}),d,e):void 0,p=P(e,["spinning","show"]),l=T(!1);return R(s=>{let a;if(p.value){const{delay:u}=e;if(u){a=window.setTimeout(()=>{l.value=!0},u),s(()=>{clearTimeout(a)});return}}l.value=p.value}),{mergedClsPrefix:r,active:l,mergedStrokeWidth:m(()=>{const{strokeWidth:s}=e;if(s!==void 0)return s;const{size:a}=e;return W[typeof a=="number"?"medium":a]}),cssVars:n?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,r;const{$slots:n,mergedClsPrefix:t,description:d}=this,i=n.icon&&this.rotate,p=(d||n.description)&&o("div",{class:`${t}-spin-description`},d||((e=n.description)===null||e===void 0?void 0:e.call(n))),l=n.icon?o("div",{class:[`${t}-spin-body`,this.themeClass]},o("div",{class:[`${t}-spin`,i&&`${t}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),p):o("div",{class:[`${t}-spin-body`,this.themeClass]},o(_,{clsPrefix:t,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),p);return(r=this.onRender)===null||r===void 0||r.call(this),n.default?o("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},o("div",{class:[`${t}-spin-content`,this.active&&`${t}-spin-content--spinning`]},n),o(B,{name:"fade-in-transition"},{default:()=>this.active?l:null})):l}});export{E as _};
