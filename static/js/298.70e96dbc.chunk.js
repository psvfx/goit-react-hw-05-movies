"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[298,527],{527:function(e,r,n){n.r(r),n.d(r,{ErrorMessage:function(){return u}});var t=n(184),u=function(){return(0,t.jsx)("div",{children:(0,t.jsx)("h3",{children:"Oops....Not found page! Please reload the page!"})})}},298:function(e,r,n){n.r(r),n.d(r,{Reviews:function(){return d}});var t=n(861),u=n(439),a=n(757),c=n.n(a),s=n(527),i=n(184),o=function(e){var r=e.review,n=r.author,t=r.content,u=e.index;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{children:["Author: ",(0,i.jsx)("span",{children:n})]}),(0,i.jsx)("p",{children:t})]},u)})},p=n(791),f=n(689),h=n(409),d=function(){var e=(0,p.useState)([]),r=(0,u.Z)(e,2),n=r[0],a=r[1],d=(0,f.UO)().moviesId,l=(0,p.useState)(null),v=(0,u.Z)(l,2),x=v[0],m=v[1];return(0,p.useEffect)((function(){function e(){return(e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.uy)(d);case 3:r=e.sent,a(r.results),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),m(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[d]),(0,i.jsxs)(i.Fragment,{children:[x&&(0,i.jsx)(s.ErrorMessage,{}),n&&(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:n.map((function(e,r){return(0,i.jsx)(o,{review:e,index:r})}))})})]})}},409:function(e,r,n){n.d(r,{BG:function(){return o},FE:function(){return p},Me:function(){return h},uy:function(){return l},wr:function(){return s}});var t=n(861),u=n(757),a=n.n(u),c=n(243);function s(){return i.apply(this,arguments)}function i(){return(i=(0,t.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"b0e90257c8451bf4533c703dab2143f0"};var o=function(){var e=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"?&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();function p(e){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/credits"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/reviews"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=298.70e96dbc.chunk.js.map