"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{854:function(t,n,r){r.d(n,{a:function(){return u}});var e=r(748),a=r(184),u=function(){return(0,a.jsx)(e.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})}},368:function(t,n,r){r.d(n,{O:function(){return c}});var e=r(689),a=r(87),u=r(184),c=function(t){var n=t.movies,r=(0,e.TH)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:n.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{to:"/movies/".concat(t.id),state:{from:r},children:t.title})},t.id)}))})})}},680:function(t,n,r){r.r(n),r.d(n,{HomePage:function(){return l}});var e=r(861),a=r(439),u=r(757),c=r.n(u),i=r(791),s=r(409),o=r(368),p=r(854),f=r(184),l=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),r=n[0],u=n[1],l=(0,i.useState)(!1),d=(0,a.Z)(l,2),h=d[0],v=d[1];return(0,i.useEffect)((function(){function t(){return(t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,(0,s.wr)();case 4:n=t.sent,u(n.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:return t.prev=11,v(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today"}),h&&(0,f.jsx)(p.a,{}),(0,f.jsx)(o.O,{movies:r})]})}},409:function(t,n,r){r.d(n,{BG:function(){return o},FE:function(){return p},Me:function(){return l},uy:function(){return h},wr:function(){return i}});var e=r(861),a=r(757),u=r.n(a),c=r(243);function i(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"b0e90257c8451bf4533c703dab2143f0"};var o=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"?&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=680.0cd3ad50.chunk.js.map