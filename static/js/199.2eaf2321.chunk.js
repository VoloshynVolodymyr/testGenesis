"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[199],{8081:function(t,e,n){n.d(e,{Et:function(){return l},LP:function(){return u},ng:function(){return p}});var r=n(5861),c=n(4687),a=n.n(c),o=n(1243).Z.create({baseURL:"https://api.wisey.app/api/v1"}),s=function(t){if(t)return o.defaults.headers.common.authorization="Bearer ".concat(t);o.defaults.headers.common.authorization=""},i=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.get("/auth/anonymous?platform=subscriptions");case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i();case 3:return n=t.sent,localStorage.setItem("token",n.data.token),t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token"),s(n),t.next=5,o.get("/core/preview-courses/".concat(e));case 5:return r=t.sent,c=r.data,t.abrupt("return",c);case 10:throw t.prev=10,t.t0=t.catch(0),s(),t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(){var e,n,r,c,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=localStorage.getItem("token"),s(e),t.next=5,o.get("/core/preview-courses");case 5:return n=t.sent,r=n.data,t.next=9,r;case 9:return c=t.sent,i=c.courses,t.abrupt("return",i);case 14:throw t.prev=14,t.t0=t.catch(0),s(),t.t0;case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}()},199:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r,c=n(9439),a=n(2791),o=n(7689),s=n(8081),i=n(168),u=n(9128),l=n(1087),p=n(82),f=n(184),d=(0,p.ZP)(l.rU)(r||(r=(0,i.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),h=function(t){var e=t.to,n=t.children;return(0,f.jsxs)(d,{to:e,children:[(0,f.jsx)(u.jTe,{size:"24"}),n]})},v=n(5984),x=n(6710),m=function(){var t,e,n=(0,o.UO)().id;(0,s.LP)();var r=(0,a.useState)([]),i=(0,c.Z)(r,2),u=i[0],l=i[1],p=(0,a.useState)(""),d=(0,c.Z)(p,2),m=d[0],g=d[1];(0,a.useEffect)((function(){(0,s.Et)(n).then((function(t){t&&l(t)}))}),[n]);var w=null!==(t=null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/products",k=u.lessons,b=function(t){g(t.currentTarget.value)};return(0,f.jsxs)("main",{children:[0===u.length&&(0,f.jsx)("p",{children:"Loading"}),(0,f.jsxs)("div",{children:[u&&(0,f.jsx)(h,{to:w,children:"Back to courses"}),u.length>0&&(0,f.jsx)("img",{src:"https://static.wixstatic.com/media/676f5c_0ed5b9bc7c4f45bc915590d42969c2d6~mv2.gif",alt:""}),u.description&&(0,f.jsx)("div",{children:u.description}),u.previewImageLink&&(0,f.jsx)("img",{src:"".concat(u.previewImageLink,"/cover.webp"),alt:"el.description"}),(0,f.jsx)("h3",{children:"Click on your course"}),k&&(0,f.jsx)("ul",{children:k.map((function(t){return(0,f.jsx)("li",{style:{listStyle:"none"},children:(0,f.jsx)("button",{value:t.link,type:"button",onClick:b,style:{marginBottom:"10px"},children:t.title})},(0,v.x0)())}))})]}),(0,f.jsx)("div",{children:0!==m&&(0,f.jsx)(x.Z,{url:m,playing:!0,loop:!0,config:{file:{attributes:{crossOrigin:"true",preload:"auto"}}},controls:!0})})]})}}}]);
//# sourceMappingURL=199.2eaf2321.chunk.js.map