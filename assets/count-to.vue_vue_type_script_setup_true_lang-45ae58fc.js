import{d as w,r as c,dg as p,c as B,dh as E,w as N,A as S,z as T,aH as $,aI as k,aO as C,di as F}from"./index-7d88c287.js";const A=w({name:"CountTo",__name:"count-to",props:{startValue:{default:0},endValue:{default:2021},duration:{default:1500},autoplay:{type:Boolean,default:!0},decimals:{default:0},prefix:{default:""},suffix:{default:""},separator:{default:","},decimal:{default:"."},useEasing:{type:Boolean,default:!0},transition:{default:"linear"}},emits:["on-started","on-finished"],setup(m,{emit:r}){const t=m,e=c(t.startValue);let i=p(e);const x=B(()=>g(i.value)),h=c(!1);function V(){i=p(e,{disabled:h,duration:t.duration,onStarted:()=>r("on-started"),onFinished:()=>r("on-finished"),...t.useEasing?{transition:F[t.transition]}:{}})}function l(){V(),e.value=t.endValue}function g(a){if(a!==0&&!a)return"";const{decimals:d,decimal:_,separator:s,suffix:y,prefix:b}=t;let o=Number(a).toFixed(d);o=String(o);const u=o.split(".");let n=u[0];const v=u.length>1?_+u[1]:"",f=/(\d+)(\d{3})/;if(s&&!E(s))for(;f.test(n);)n=n.replace(f,`$1${s}$2`);return b+n+v+y}return N([()=>t.startValue,()=>t.endValue],()=>{t.autoplay&&l()}),S(()=>{e.value=t.startValue}),T(()=>{t.autoplay&&l()}),(a,d)=>($(),k("span",null,C(x.value),1))}});export{A as _};
