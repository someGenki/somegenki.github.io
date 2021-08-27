import{d as e,U as t,p as a,f as n,e as l,o,s,j as i,x as r,i as d,Q as c,H as u,S as p,V as m,g as h,q as b,z as f,k as g,w as v,T as k,W as x,l as w,X as y,M as C,u as S,P as T,F as _,t as V,Y as M,Z as I,r as B,n as P,_ as L,$ as z}from"./vendor.a5408c18.js";import{u as H,a as U,r as q,b as W,c as j}from"./index.b458eea4.js";import{_ as E}from"./dio.e8119c58.js";const $=e("style",{state:()=>({"primary-color":"#02bf6f","primary-color-tinge":"#75d2de","primary-text-color":"#000000a6","primary-text-color-tinge":"#00000070"}),getters:{elMenuStyle:e=>({text:"#dcdcdc",background:"#304156",activeText:e["primary-color"]})},actions:{injectCssVarToRoot(){const e=document.documentElement.style,a=t(this.$state);Object.keys(a).forEach((t=>{e.setProperty("--"+t,a[t])}))}}});const A={name:"SettingItem",props:{desc:{type:String,required:!0},modelValue:{type:[Boolean,String,Number],required:!0},type:{type:String,default:"el-switch"}},emits:["update:modelValue","change"],setup:(e,{emit:t})=>({value:l({get:()=>e.modelValue,set:e=>t("update:modelValue",e)})})};a("data-v-090f2a44");const F={class:"setting-item"},O={style:{"font-size":"14px"}};n(),A.render=function(e,t,a,n,l,p){return o(),s("div",F,[i("span",O,r(a.desc),1),(o(),d(u(a.type),c(e.$attrs,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)}),null,16,["modelValue"]))])},A.__scopeId="data-v-090f2a44";const R={name:"Settings",components:{SettingItem:A},setup(){const e=H(),{showLogo:t,showTabBar:a,fixedHeader:n,showSettings:l,sUnfoldWidth:o,toggleSettings:s}=p(e);function i(e){27===e.keyCode&&(l.value=!1)}return m(l,(e=>{!0===e?document.addEventListener("keydown",i):document.removeEventListener("keydown",i)})),{toggleSettings:s,showSettings:l,sUnfoldWidth:o,fixedHeader:n,showTabBar:a,showLogo:t}}};a("data-v-b91a50a8");const N={key:0,class:"settings-panel-content"},D={class:"settings-panel-header"},X=i("span",null,"项目配置",-1),Y=["textContent"],G={class:"settings-panel-body"},Q=i("span",{style:{"font-size":"16px"}},"界面显示",-1);n(),R.render=function(e,t,a,n,l,c){const u=h("el-divider"),p=h("setting-item");return o(),d(x,{to:"body"},[n.showSettings?(o(),s("div",{key:0,class:"mask-zIndex99",onClick:t[0]||(t[0]=b((e=>n.toggleSettings(!1)),["stop","prevent","self"]))})):f("",!0),g(k,{name:"show-transform"},{default:v((()=>[n.showSettings?(o(),s("div",N,[i("div",D,[X,i("button",{onClick:t[1]||(t[1]=e=>n.toggleSettings(!1)),class:"close-btn",textContent:r("❌")},null,8,Y)]),i("div",G,[g(u,null,{default:v((()=>[Q])),_:1}),g(p,{modelValue:n.fixedHeader,"onUpdate:modelValue":t[2]||(t[2]=e=>n.fixedHeader=e),type:"el-switch",desc:"固定头部"},null,8,["modelValue"]),g(p,{modelValue:n.showLogo,"onUpdate:modelValue":t[3]||(t[3]=e=>n.showLogo=e),type:"el-switch",desc:"侧边栏Logo"},null,8,["modelValue"]),g(p,{modelValue:n.showTabBar,"onUpdate:modelValue":t[4]||(t[4]=e=>n.showTabBar=e),type:"el-switch",desc:"标签栏导航"},null,8,["modelValue"]),g(p,{modelValue:n.sUnfoldWidth,"onUpdate:modelValue":t[5]||(t[5]=e=>n.sUnfoldWidth=e),step:5,min:160,max:260,type:"el-input-number",desc:"侧边栏宽度",size:"mini"},null,8,["modelValue"])])])):f("",!0)])),_:1})])},R.__scopeId="data-v-b91a50a8";const Z={name:"SidebarLogo",props:{toPath:{default:"/"},isCollapse:{default:!1},textColor:{default:"#dcdcdc"},title:{default:"Admin-Template"},backgroundColor:{default:"#2f343d"}}};a("data-v-1040498d");const J=i("img",{src:"/assets/logo2.c8486c4e.ico",alt:"logo"},null,-1);n(),Z.render=function(e,t,a,n,l,s){const c=h("router-link");return o(),d(c,{to:a.toPath,class:"MutableLogo-wrapper",style:C({backgroundColor:a.backgroundColor,color:a.textColor})},{default:v((()=>[J,w(i("h4",{style:{"margin-left":"6px"}},r(a.title),513),[[y,a.isCollapse]])])),_:1},8,["to","style"])},Z.__scopeId="data-v-1040498d";const K={name:"SidebarItem",props:{item:{type:Object,required:!0}},setup(e){const t=e.item,a=S();var n;return{realPath:(n=t.path,!/^(https?:|mailto:|tel:)/.test(n)&&t.name?a.resolve({name:t.name}).path:t.path)}}};K.render=function(e,t,a,n,l,c){const u=h("app-icon"),p=h("sidebar-item",!0),m=h("el-sub-menu"),b=h("el-menu-item"),f=h("app-link");return a.item.children&&a.item.children.length>0?(o(),d(m,{key:0,index:a.item.path},{title:v((()=>[g(u,{icon:a.item.icon||"el-icon-s-grid"},null,8,["icon"]),i("span",null,r(a.item.title),1)])),default:v((()=>[(o(!0),s(_,null,T(a.item.children,(e=>(o(),d(p,{key:e.path,item:e},null,8,["item"])))),128))])),_:1},8,["index"])):(o(),d(f,{key:1,to:n.realPath},{default:v((()=>[g(b,{index:n.realPath},{title:v((()=>[V(r(a.item.title),1)])),default:v((()=>[g(u,{icon:a.item.icon||"el-icon-menu"},null,8,["icon"])])),_:1},8,["index"])])),_:1},8,["to"]))};const ee={name:"Sidebar",components:{SidebarLogo:Z,SidebarItem:K},setup(){const e=H(),t=$(),a=function(e){const t=[];function a(e){if(!e.meta&&e.children&&1===e.children.length){let t=e.children[0];if(t.meta&&t.meta.title)return"/"!==t.path[0]&&(t.path=e.path+"/"+t.path),t}return null}function n(e){return{title:e.meta.title,icon:e.meta.icon,path:e.path,name:e.name}}for(const l of e)if(!l.hidden){if("/ex-link"===l.path){t.push(l.children[0]);continue}let e=a(l);if(e){t.push(e);continue}!e&&l.meta&&l.meta.title&&t.push(l)}return function e(t){let a=[];for(const l of t)if(!l.hidden)if("/ex-link"===l.path)a.push(n(l.children[0]));else if(l.children&&l.children.length>0){let t=e(l.children),o=n(l);t.length>0&&(o.children=t),a.push(o)}else a.push(n(l));return a}(t)}(U().addRoutes),{showLogo:n,unfoldSidebar:l,sidebarWidth:o}=p(e);return{menus:a,showLogo:n,sidebarWidth:o,unfoldSidebar:l,elMenuStyle:t.elMenuStyle}}};ee.render=function(e,t,a,n,l,i){const r=h("sidebar-logo"),c=h("sidebar-item"),u=h("el-menu");return o(),s("aside",{class:"sidebar-container",style:C({width:n.sidebarWidth})},[w(g(r,{"is-collapse":n.unfoldSidebar},null,8,["is-collapse"]),[[y,n.showLogo]]),g(u,{uniqueOpened:!0,"collapse-transition":!1,collapse:!n.unfoldSidebar,"default-active":e.$route.path,"text-color":n.elMenuStyle.text,"active-text-color":n.elMenuStyle.activeText,"background-color":n.elMenuStyle.background},{default:v((()=>[(o(!0),s(_,null,T(n.menus,(e=>(o(),d(c,{key:n.menus.path,item:e},null,8,["item"])))),128))])),_:1},8,["collapse","default-active","text-color","active-text-color","background-color"])],4)},ee.__scopeId="data-v-1fb51453";const te={name:"AppMain",setup:()=>({cachedViewNames:M(H(),"cachedViews")})};a("data-v-27b97b36");const ae={class:"app-main"};n(),te.render=function(e,t,a,n,l,i){const r=h("router-view");return o(),s("div",ae,[g(r,null,{default:v((({Component:e})=>[(o(),d(I,{include:n.cachedViewNames},[(o(),d(u(e)))],1032,["include"]))])),_:1})])},te.__scopeId="data-v-27b97b36";const ne={name:"TabBar",setup(){const e=S(),t=H(),{delTabBarItem:a,visitedViews:n}=function(){const{visitedViews:e}=p(H());return{visitedViews:e,delTabBarItem:function(t,a="self"){const n=e.value;let l=null;for(const[e,o]of n.entries())if(o.path===t.path){switch(a){case"self":l=n.splice(e,1);break;case"all":l=n.splice(0,n.length);break;case"left":l=n.splice(0,e);break;case"other":l=n.splice(0,n.length,o);break;case"right":l=n.splice(e+1,n.length);break;default:l=n.splice(e,1)}break}if(l&&l.some((e=>e.name===q.currentRoute.value.name))){const t=e.value.slice(-1)[0];t?q.push(t.fullPath):q.push("/")}}}}(),l=B({top:0,left:0,show:!1,selectedTab:null}),o=()=>l.show=!1;return m(M(l,"show"),(e=>{e?document.body.addEventListener("click",o):document.body.removeEventListener("click",o)})),{contextMenuProp:l,visitedViews:n,delTabBarItem:a,refreshView:()=>{const a=e.currentRoute.value;t.removeCachedView(a),a.path.indexOf("/redirect")>-1||e.replace({path:"/redirect"+a.fullPath})},markedTab:(e,t)=>e.mark=t,openMenu:(e,t)=>{l.left=t.pageX,l.top=t.pageY-5,l.selectedTab=e,l.show=!0}}}};a("data-v-1cd5b652");const le={class:"tabBar"},oe=["onMouseupCapture"],se=["onClick","onContextmenu","textContent"],ie=[i("i",{class:"el-icon-refresh"},null,-1)],re=i("hr",null,null,-1);n(),ne.render=function(e,t,a,n,l,c){const u=h("app-icon"),p=h("el-scrollbar");return o(),s("div",le,[g(p,{"view-style":"white-space:nowrap;display:flex;align-items: center;height: 100%;"},{default:v((()=>[(o(!0),s(_,null,T(n.visitedViews,(t=>(o(),s("span",{class:P(["tabBar-item",{active:e.$route.path===t.path,mark:t.mark}]),onMouseupCapture:b((e=>n.delTabBarItem(t)),["middle","stop"])},[i("span",{onClick:a=>e.$router.replace({path:t.path,query:t.query,fullPath:t.fullPath}),onContextmenu:b((e=>n.openMenu(t,e)),["prevent"]),textContent:r(t.title)},null,40,se),g(u,{onContextmenu:b((e=>n.openMenu(t,e)),["prevent"]),onClick:e=>n.delTabBarItem(t),class:"tab-close",icon:"el-icon-close",size:"12"},null,8,["onContextmenu","onClick"])],42,oe)))),256))])),_:1}),i("span",{class:"tabBar-refresh",onClick:t[0]||(t[0]=(...e)=>n.refreshView&&n.refreshView(...e)),title:"refresh"},ie),(o(),d(x,{to:"body"},[n.contextMenuProp.show?(o(),s("ul",{key:0,style:C({left:n.contextMenuProp.left+"px",top:n.contextMenuProp.top+"px"}),class:"tabBar-contextmenu"},[i("li",{onClick:t[1]||(t[1]=e=>n.delTabBarItem(n.contextMenuProp.selectedTab,"self"))}," 关闭所选标签页🤏 "),i("li",{onClick:t[2]||(t[2]=e=>n.delTabBarItem(n.contextMenuProp.selectedTab,"left"))}," 关闭左侧标签页👈 "),i("li",{onClick:t[3]||(t[3]=e=>n.delTabBarItem(n.contextMenuProp.selectedTab,"right"))}," 关闭右侧标签页👉 "),i("li",{onClick:t[4]||(t[4]=e=>n.delTabBarItem(n.contextMenuProp.selectedTab,"other"))}," 关闭其他标签页👐 "),i("li",{onClick:t[5]||(t[5]=e=>n.delTabBarItem(n.contextMenuProp.selectedTab,"all"))}," 关闭所有标签页💥 "),re,i("li",{onClick:t[6]||(t[6]=e=>n.markedTab(n.contextMenuProp.selectedTab,!0))}," 设置重要提醒 "),i("li",{onClick:t[7]||(t[7]=e=>n.markedTab(n.contextMenuProp.selectedTab,!1))}," 移除重要提醒 ")],4)):f("",!0)]))])},ne.__scopeId="data-v-1cd5b652";const de={name:"AvatarMenu",props:{items:{type:Array,required:!0},avatar:{},nickname:{}}};a("data-v-63b5f540");const ce=["src"];n(),de.render=function(e,t,a,n,l,c){const u=h("el-dropdown-item"),p=h("app-link"),m=h("el-dropdown-menu"),f=h("el-dropdown");return o(),s(_,null,[g(f,{size:"medium"},{dropdown:v((()=>[g(m,null,{default:v((()=>[(o(!0),s(_,null,T(a.items,(e=>(o(),s(_,{key:e.title},[e.path&&!e.disabled?(o(),d(p,{key:0,to:e.path},{default:v((()=>[g(u,{divided:e.divided,textContent:r(e.title)},null,8,["divided","textContent"])])),_:2},1032,["to"])):(o(),d(u,{key:1,textContent:r(e.title),divided:e.divided,disabled:e.disabled,onClick:b((t=>"function"==typeof e.handle?e.handle():null),["prevent"])},null,8,["textContent","divided","disabled","onClick"]))],64)))),128))])),_:1})])),default:v((()=>[i("img",{class:"dropdown-avatar",src:a.avatar,alt:"avatar"},null,8,ce)])),_:1}),w(i("p",{class:"menu-nickname"},r(a.nickname),513),[[y,a.nickname]])],64)},de.__scopeId="data-v-63b5f540";const ue={name:"Breadcrumb",props:["list"]};ue.render=function(e,t,a,n,l,i){const c=h("el-breadcrumb-item"),u=h("el-breadcrumb");return o(),d(u,{class:"app-breadcrumb",separator:"/"},{default:v((()=>[(o(!0),s(_,null,T(a.list,(e=>(o(),d(c,{to:{name:e.name}},{default:v((()=>[V(r(e.meta.title),1)])),_:2},1032,["to"])))),256))])),_:1})},ue.__scopeId="data-v-3a7dc7f2";const pe={name:"Hamburger",props:{unfold:{type:Boolean,require:!0}},emits:["toggleClick"]};a("data-v-e06e8b58");const me=[i("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"},null,-1)];n(),pe.render=function(e,t,a,n,l,i){return o(),s("div",{class:"hamburger-container",onClick:t[0]||(t[0]=t=>e.$emit("toggleClick"))},[(o(),s("svg",{class:P([{unfold:a.unfold},"hamburger"]),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},me,2))])},pe.__scopeId="data-v-e06e8b58";const he={name:"Navbar",components:{AvatarMenu:de,Breadcrumb:ue,Hamburger:pe},setup(){const e=H(),{unfoldSidebar:t,breadcrumbList:a,toggleSidebar:n,toggleSettings:l}=p(e),o=L([{title:"个人中心",path:"profile"},{title:"项目地址",path:"https://github.com/someGenki"},{title:"不可点击",path:"/",disabled:!0},{title:"退出登录",divided:!0,handle:()=>{alert("您选择了登出"),W(),location.reload()}}]);return{DioAvatar:E,toggleFull:function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()},dropdownItems:o,unfoldSidebar:t,toggleSidebar:n,toggleSettings:l,breadcrumbList:a}}};a("data-v-6424754b");const be={class:"navbar",role:"navigation"},fe={class:"right-menu-area"},ge={class:"right-menu-action"},ve=i("p",null,"TODO 消息通知",-1);n(),he.render=function(e,t,a,n,l,r){const d=h("Hamburger"),c=h("breadcrumb"),u=h("app-icon"),p=h("el-badge"),m=h("el-popover"),f=h("avatar-menu");return o(),s("div",be,[g(d,{unfold:n.unfoldSidebar,onToggleClick:n.toggleSidebar},null,8,["unfold","onToggleClick"]),g(c,{list:n.breadcrumbList},null,8,["list"]),i("div",fe,[g(u,{class:"right-menu-action",icon:"el-icon-search"}),g(u,{onClick:n.toggleFull,class:"right-menu-action",icon:"el-icon-full-screen"},null,8,["onClick"]),g(m,{trigger:"click"},{reference:v((()=>[i("span",ge,[g(p,{"is-dot":""},{default:v((()=>[g(u,{icon:"el-icon-bell"})])),_:1})])])),default:v((()=>[ve])),_:1}),g(f,{nickname:"管理员",items:n.dropdownItems,avatar:n.DioAvatar},null,8,["items","avatar"]),g(u,{size:"20",icon:"el-icon-setting",class:"right-menu-action",onClick:t[0]||(t[0]=b((e=>n.toggleSettings(!0)),["stop"]))})])])},he.__scopeId="data-v-6424754b";a("data-v-2958628c");const ke={class:"app-wrapper"};n();const xe={setup(e){const t=H(),a=$(),{isMobile:n,showTabBar:l,fixedHeader:r,sidebarWidth:c,toggleSidebar:u,unfoldSidebar:m,mainPaddingTopOnFixed:h}=p(t);return t.$subscribe(((e,t)=>{j(["showLogo","showTabBar","fixedHeader","sUnfoldWidth","unfoldSidebar"],t)})),a.injectCssVarToRoot(),(e,t)=>(o(),s("div",ke,[g(z(ee)),z(n)&&z(m)?(o(),s("div",{key:0,class:"mask-zIndex99",onClick:t[0]||(t[0]=b((e=>z(u)(!1)),["self","stop"]))})):f("",!0),i("div",{class:"main-container",style:C({paddingLeft:z(n)?0:z(c),paddingTop:z(h)})},[i("header",{class:P({"fixed-header":z(r)})},[g(z(he)),z(l)?(o(),d(z(ne),{key:0})):f("",!0)],2),g(z(te))],4),g(z(R))]))},__scopeId:"data-v-2958628c"};export{xe as default};
