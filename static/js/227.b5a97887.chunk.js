"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[227],{297:function(t,e,n){n.d(e,{Hq:function(){return p},xc:function(){return d},Y5:function(){return f},Hx:function(){return l},Tg:function(){return s}});var r=n(861),a=n(757),c=n.n(a),i=n(243),u=n.p+"static/media/backJPG.af1ff7099113e2ddb2ca.png";i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"f142a78acdaeb700a5127e9c79c73889",include_adults:!1};var o="https://image.tmdb.org/t/p/w200/",s=function(){var t=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.Z.get("/trending/all/day?").then((function(t){return t.data.results.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return{id:e,title:n,poster:o+r}}))})).catch((function(t){alert(t.massage)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.Z.get("/search/movie?query=".concat(e)).then((function(t){return t.data.results.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return{id:e,title:n,poster:o+r}}))})).catch((function(t){alert(t.massage)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){return i.Z.get("/movie/".concat(t,"?")).then((function(t){var e=t.data,n=e.id,r=e.poster_path,a=e.title,c=e.release_date,i=e.vote_average,u=e.overview,s=e.genres;return{id:n,poster:o+r,title:a,releaseYear:new Date(c).getFullYear(),userScore:Math.round(10*i),overview:u,genres:s}})).catch((function(t){console.log(t.message)}))},d=function(t){return i.Z.get("/movie/".concat(t,"/credits?")).then((function(t){return t.data.cast.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return{id:e,name:n,character:r,photo:a?o+a:u}}))})).catch((function(t){alert(t.massage)}))},l=function(t){return i.Z.get("/movie/".concat(t,"/reviews?")).then((function(t){return t.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}}))})).catch((function(t){alert(t.massage)}))}},387:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r,a=n(439),c=n(297),i=n(689),u=n(791),o=n(168),s=n(444).ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  padding: 30px;\n  background-color: #3f51b542;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  flex-direction: column;\n  align-items: center;\n"]))),p=n(184),f=function(){var t=(0,i.UO)("movieId").movieId,e=(0,u.useState)([]),n=(0,a.Z)(e,2),r=n[0],o=n[1];return(0,u.useEffect)((function(){(0,c.Hx)(t).then(o)}),[t]),(0,p.jsx)(s,{children:r.length>0?(0,p.jsx)("ul",{children:r.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:n}),(0,p.jsx)("p",{children:r})]},e)}))}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=227.b5a97887.chunk.js.map