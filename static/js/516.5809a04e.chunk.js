"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[516],{297:function(n,t,e){e.d(t,{Hq:function(){return l},xc:function(){return p},Y5:function(){return d},Hx:function(){return f},Tg:function(){return u}});var r=e(861),a=e(757),i=e.n(a),o=e(243),c=e.p+"static/media/backJPG.af1ff7099113e2ddb2ca.png";o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"f142a78acdaeb700a5127e9c79c73889",include_adults:!1};var s="https://image.tmdb.org/t/p/w200/",u=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o.Z.get("/trending/all/day?").then((function(n){return n.data.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:s+r}}))})).catch((function(n){alert(n.massage)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o.Z.get("/search/movie?query=".concat(t)).then((function(n){return n.data.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:s+r}}))})).catch((function(n){alert(n.massage)})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(n){return o.Z.get("/movie/".concat(n,"?")).then((function(n){var t=n.data,e=t.id,r=t.poster_path,a=t.title,i=t.release_date,o=t.vote_average,c=t.overview,u=t.genres;return{id:e,poster:s+r,title:a,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*o),overview:c,genres:u}})).catch((function(n){console.log(n.message)}))},p=function(n){return o.Z.get("/movie/".concat(n,"/credits?")).then((function(n){return n.data.cast.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return{id:t,name:e,character:r,photo:a?s+a:c}}))})).catch((function(n){alert(n.massage)}))},f=function(n){return o.Z.get("/movie/".concat(n,"/reviews?")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))})).catch((function(n){alert(n.massage)}))}},257:function(n,t,e){e.r(t),e.d(t,{default:function(){return Y}});var r,a,i,o,c,s,u,l,d=e(439),p=e(791),f=e(689),h=e(297),x=e(168),m=e(444),v=e(87),g=m.ZP.button(r||(r=(0,x.Z)(["\n  border: none;\n  background-color: transparent;\n  margin: 20px 0 0 35px;\n  padding: 0;\n  font-weight: 700;\n  cursor: pointer;\n"]))),Z=m.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n  padding: 30px;\n  background-color: #3f51b542;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n"]))),b=m.ZP.img(i||(i=(0,x.Z)(["\n  width: 300px;\n"]))),j=m.ZP.div(o||(o=(0,x.Z)(["\n  padding-left: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),w=m.ZP.h2(c||(c=(0,x.Z)(["\n  margin-left: 0;\n"]))),k=m.ZP.h3(s||(s=(0,x.Z)(["\n  margin-left: 35px;\n  margin-bottom: 0;\n"]))),_=m.ZP.ul(u||(u=(0,x.Z)(["\n  text-decoration: none;\n  margin-left: 0;\n  margin-top: 0;\n"]))),y=(0,m.ZP)(v.OL)(l||(l=(0,x.Z)(["\n  text-decoration: none;\n  color: black;\n  text-decoration: none;\n  font-weight: 600;\n  &.active {\n    color: #3f51b5;\n    font-weight: 700;\n    transform: scale(1.1);\n"]))),P=e(184),Y=function(){var n,t,e,r,a=(0,p.useState)(null),i=(0,d.Z)(a,2),o=i[0],c=i[1],s=(0,f.UO)().movieId,u=(0,f.TH)(),l=(0,f.s0)(),x=null!==(n=null===(t=u.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies",m=null!==o&&void 0!==o?o:{},v=m.poster,Y=m.title,C=m.releaseYear,S=m.userScore,H=m.overview,O=m.genres;(0,p.useEffect)((function(){(0,h.Y5)(s).then(c)}),[s]);return(0,P.jsxs)("div",{children:[(0,P.jsx)(g,{type:"button",onClick:function(){l(x)},children:"Back to movies"}),o&&(0,P.jsxs)("div",{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(b,{src:v,alt:Y}),(0,P.jsxs)(j,{children:[(0,P.jsxs)(w,{children:[Y," (",C,")"]}),(0,P.jsxs)("p",{children:["User Score: ",S,"%"]}),(0,P.jsx)("h3",{children:"Overview"}),(0,P.jsx)("p",{children:H}),(0,P.jsx)("h3",{children:"Genres"}),(0,P.jsx)("p",{children:O.map((function(n){return n.name})).join(" ")})]})]}),(0,P.jsx)(k,{children:"Additional information"}),(0,P.jsxs)(_,{children:[(0,P.jsx)("li",{children:(0,P.jsx)(y,{to:"cast",state:{from:null===u||void 0===u||null===(e=u.state)||void 0===e?void 0:e.from},children:"Cast"})}),(0,P.jsx)("li",{children:(0,P.jsx)(y,{to:"reviews",state:{from:null===u||void 0===u||null===(r=u.state)||void 0===r?void 0:r.from},children:"Reviews"})})]}),(0,P.jsx)(f.j3,{})]})]})}}}]);
//# sourceMappingURL=516.5809a04e.chunk.js.map