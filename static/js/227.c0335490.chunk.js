"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[227],{297:function(t,e,n){n.d(e,{Hq:function(){return p},xc:function(){return d},Y5:function(){return f},Hx:function(){return l},Tg:function(){return s}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i=n.p+"static/media/backJPG.af1ff7099113e2ddb2ca.png";u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"f142a78acdaeb700a5127e9c79c73889",include_adults:!1};var o="https://image.tmdb.org/t/p/w200/",s=function(){var t=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.Z.get("/trending/all/day?").then((function(t){return t.data.results.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return{id:e,title:n,poster:o+r}}))})).catch((function(t){alert(t.massage)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.Z.get("/search/movie?query=".concat(e)).then((function(t){return t.data.results.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return{id:e,title:n,poster:o+r}}))})).catch((function(t){alert(t.massage)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){return u.Z.get("/movie/".concat(t,"?")).then((function(t){var e=t.data,n=e.id,r=e.poster_path,a=e.title,c=e.release_date,u=e.vote_average,i=e.overview,s=e.genres;return{id:n,poster:o+r,title:a,releaseYear:new Date(c).getFullYear(),userScore:Math.round(10*u),overview:i,genres:s}})).catch((function(t){console.log(t.message)}))},d=function(t){return u.Z.get("/movie/".concat(t,"/credits?")).then((function(t){return t.data.cast.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return{id:e,name:n,character:r,photo:a?o+a:i}}))})).catch((function(t){alert(t.massage)}))},l=function(t){return u.Z.get("/movie/".concat(t,"/reviews?")).then((function(t){return t.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}}))})).catch((function(t){alert(t.massage)}))}},387:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r,a=n(861),c=n(439),u=n(757),i=n.n(u),o=n(297),s=n(689),p=n(791),f=n(168),d=n(444).ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  padding: 30px;\n  background-color: #3f51b542;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  flex-direction: column;\n  align-items: center;\n"]))),l=n(184),h=function(){var t=(0,s.UO)("movieId").movieId,e=(0,p.useState)([]),n=(0,c.Z)(e,2),r=n[0],u=n[1];return(0,p.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Hx)(t);case 3:n=e.sent,u(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,l.jsx)(d,{children:r.length>0?(0,l.jsx)("ul",{children:r.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,l.jsxs)("li",{children:[(0,l.jsx)("h3",{children:n}),(0,l.jsx)("p",{children:r})]},e)}))}):(0,l.jsx)("p",{children:"Loading..."})})}}}]);
//# sourceMappingURL=227.c0335490.chunk.js.map