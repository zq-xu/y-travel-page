import{jW as l,jX as m,aS as e,h as r,dh as n,d,r as p,aH as u,aK as c,aL as _,aQ as f,aM as o,by as g}from"./index-7d88c287.js";import{c as y}from"./crud-ca5eec89.js";import{_ as h}from"./ListTable.vue_vue_type_script_setup_true_lang-f17df0df.js";import{N as a,d as k}from"./time-8155d1fb.js";import"./refresh-a3259f6e.js";import"./use-loading-37c1118f.js";import"./vuedraggable.umd-64e6f377.js";import"./Checkbox-9ba985cc.js";import"./use-merged-state-25180a9d.js";import"./Popover-5b10a0f7.js";import"./Suffix-e9302ec1.js";import"./get-c991346f.js";import"./format-length-c9d165c6.js";import"./cssr-b4c9f431.js";import"./use-compitable-51841f38.js";import"./next-frame-once-7035a838.js";import"./Space-9d9d608e.js";import"./DataTable-895cc5c9.js";import"./Dropdown-7051e15f.js";import"./Select-303f22e9.js";import"./Tag-f9ad861a.js";import"./Ellipsis-0f9030da.js";import"./create-ref-setter-f485918b.js";import"./PerformantEllipsis-328d4c5a.js";import"./Pagination-a07528c5.js";import"./Input-ffdad1fe.js";import"./Forward-1c09c58f.js";const T=`/${m}/auditlogs`,b=y(l,T);function A(){return[{key:"userName",title:e("yTravel.user.userName"),align:"center",width:200,render:t=>r(a,{},{default:()=>t.user.userName})},{key:"url",title:e("yTravel.auditlog.url"),align:"center",width:200},{key:"method",title:e("yTravel.auditlog.method"),align:"center",width:200},{key:"body",title:e("yTravel.auditlog.body"),align:"center",ellipsis:{tooltip:!0}},{key:"createdAt",title:e("yTravel.auditlog.operatedAt"),align:"center",render:t=>r(a,{},{default:()=>n(t.createdAt)?k(t.createdAt):""})}]}const Y=d({__name:"index",setup(t){const i=p();return(N,v)=>{const s=g;return u(),c(s,{bordered:!1,class:"rounded-16px shadow-sm"},{default:_(()=>[f(h,{ref_key:"listTable",ref:i,"columns-fn":o(A),"load-data":o(b).list},null,8,["columns-fn","load-data"])]),_:1})}}});export{Y as default};
