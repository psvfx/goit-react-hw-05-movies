"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[298,527],{527:function(e,n,t){t.r(n);var r=t(184);n.default=function(){return(0,r.jsx)("div",{children:(0,r.jsx)("h3",{children:" Oops....Not found page! Please reload the page !"})})}},298:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(861),u=t(439),a=t(757),c=t.n(a),s=t(527),i=t(184),o=function(e){var n=e.review,t=n.author,r=n.content,u=e.index;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{children:["Author: ",(0,i.jsx)("span",{children:t})]}),(0,i.jsx)("p",{children:r})]},u)})},p=t(791),f=t(689),h=t(409),l=function(){var e=(0,p.useState)([]),n=(0,u.Z)(e,2),t=n[0],a=n[1],l=(0,f.UO)().moviesId,d=(0,p.useState)(null),v=(0,u.Z)(d,2),x=v[0],m=v[1];return(0,p.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.uy)(l);case 3:n=e.sent,a(n.results),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),m(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[l]),(0,i.jsxs)(i.Fragment,{children:[x&&(0,i.jsx)(s.default,{}),t&&(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:t.map((function(e,n){return(0,i.jsx)(o,{review:e,index:n})}))})})]})}},409:function(e,n,t){t.d(n,{BG:function(){return o},FE:function(){return p},Me:function(){return h},uy:function(){return d},wr:function(){return s}});var r=t(861),u=t(757),a=t.n(u),c=t(243);function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"b0e90257c8451bf4533c703dab2143f0"};var o=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"?&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=298.0e80addc.chunk.js.map