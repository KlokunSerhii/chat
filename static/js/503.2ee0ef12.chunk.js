"use strict";(self.webpackChunkchat_front=self.webpackChunkchat_front||[]).push([[503],{1503:function(e,a,s){s.r(a),s.d(a,{default:function(){return E}});var n=s(2791),r=s(7689),t=s(9439),c=s(1087),o=s(8820),i="Navigation_nav__7WdPp",u="Navigation_navLink__7PcdX",l="Navigation_icon__sGu5R",f=s(9421),_=s(6067),m=s(2215),h=s(184),d=function(){var e=(0,f.a)().isLoggedIn,a=(0,n.useState)({room:"",user:"",avatar:_}),s=(0,t.Z)(a,2),d=s[0],j=s[1],v=(0,r.TH)().search;return(0,n.useEffect)((function(){var e=Object.fromEntries(new URLSearchParams(v));j(e)}),[v]),(0,h.jsx)("nav",{className:i,children:e?(0,h.jsxs)(c.OL,{className:u,to:"/join",onClick:function(){return m.W.emit("leftRoom",{params:d})},children:["Chat",(0,h.jsx)(o.y2T,{className:l})]}):(0,h.jsxs)(c.OL,{className:u,to:"/",children:["Chat",(0,h.jsx)(o.y2T,{className:l})]})})},j=s(9434),v="UserMenu_container__KolyR",p="UserMenu_buttonIn__ksj5H",x="UserMenu_span__Saf-o",N="UserMenu_UserProfile__K0ZhM",k="UserMenu_name_title__9C2Ei",b="UserMenu_avatar__sRg9V",g="UserMenu_icon__k031v",L=s(5292),U=s(1213);var R=function(){var e=(0,n.useState)({room:"",user:"",avatar:_}),a=(0,t.Z)(e,2),s=a[0],o=a[1],i=(0,r.TH)().search,u=(0,j.I0)(),l=(0,f.a)().user;return(0,n.useEffect)((function(){var e=Object.fromEntries(new URLSearchParams(i));o(e)}),[i]),(0,h.jsxs)("div",{className:v,children:[(0,h.jsxs)("span",{className:x,children:[(0,h.jsx)("p",{className:k,children:"Hello,"}),(0,h.jsxs)(c.OL,{to:"/profile",onClick:function(){return m.W.emit("leftRoom",{params:s})},className:N,children:[(0,h.jsx)("img",{className:b,src:l.avatarURL,alt:"avatar"}),l.name]})]}),(0,h.jsxs)("button",{className:p,type:"button",onClick:function(){s||m.W.emit("leftRoom",{params:s}),u((0,L.kS)())},children:["Logout",(0,h.jsx)(U.pGv,{className:g})]})]})},C="App_header__v3fDp",M="App_headerLogin__2K6zY";var S=function(){var e=(0,f.a)().isLoggedIn,a=(0,n.useState)(C),s=(0,t.Z)(a,2),r=s[0],c=s[1];return(0,n.useEffect)((function(){c(e?M:C)}),[e]),(0,h.jsxs)("header",{className:r,children:[(0,h.jsx)(d,{}),e&&(0,h.jsx)(R,{})]})};var E=function(){return(0,h.jsxs)("div",{children:[(0,h.jsx)(S,{}),(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)("b",{children:"LOAD..."}),children:(0,h.jsx)(r.j3,{})})]})}},2215:function(e,a,s){s.d(a,{W:function(){return n}});var n=s(1608).ZP.connect("https://chat-back-end-6mf9.onrender.com")},6067:function(e,a,s){e.exports=s.p+"static/media/bot.5e07e4ff49733c98e02b.jpg"}}]);
//# sourceMappingURL=503.2ee0ef12.chunk.js.map