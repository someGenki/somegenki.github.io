import{c as l,g as a,s as n,k as e,F as s,P as u,j as m,o,x as r}from"./vendor.a5408c18.js";const t={name:"scroll-page",setup:()=>({num:l(50)})},d=m("span",null,"设置h1标签数量：",-1);t.render=function(l,m,t,p,c,i){const f=a("el-input-number");return o(),n("div",null,[d,e(f,{modelValue:p.num,"onUpdate:modelValue":m[0]||(m[0]=l=>p.num=l),size:"small",min:1,max:1e3,label:"设置h1标签数量"},null,8,["modelValue"]),(o(!0),n(s,null,u(p.num,(l=>(o(),n("h1",null,"这是个标题-"+r(l),1)))),256))])};export{t as default};
