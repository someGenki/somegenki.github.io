import{r as l,g as a,i as e,k as n,P as s,Q as u,j as m,o,F as r}from"./vendor.1e478acf.js";const t={name:"scroll-page",setup:()=>({num:l(50)})},d=m("span",null,"设置h1标签数量：",-1);t.render=function(l,m,t,i,p,c){const f=a("el-input-number");return o(),e("div",null,[d,n(f,{modelValue:i.num,"onUpdate:modelValue":m[0]||(m[0]=l=>i.num=l),size:"small",min:1,max:1e3,label:"设置h1标签数量"},null,8,["modelValue"]),(o(!0),e(s,null,u(i.num,(l=>(o(),e("h1",null,"这是个标题-"+r(l),1)))),256))])};export{t as default};
