"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{197:function(n,t,e){e.d(t,{Hq:function(){return u},Hx:function(){return l},Tg:function(){return c},Y5:function(){return s},xc:function(){return p}});var r=e(5861),a=e(7757),i=e.n(a),o=e(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"f142a78acdaeb700a5127e9c79c73889",include_adults:!1};var c=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o.Z.get("/trending/all/day?").then((function(n){return n.data.results.map((function(n){return{id:n.id,title:n.title,poster:n.poster_path}}))})).catch((function(n){alert(n.massage)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o.Z.get("/search/movie?query=".concat(t)).then((function(n){return n.data.results.map((function(n){return{id:n.id,title:n.title,poster:n.poster_path}}))})).catch((function(n){alert(n.massage)})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(n){return o.Z.get("/movie/".concat(n,"?")).then((function(n){var t=n.data,e=t.id,r=t.poster_path,a=t.title,i=t.release_date,o=t.vote_average,c=t.overview,u=t.genres;return{id:e,poster:r,title:a,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*o),overview:c,genres:u}})).catch((function(n){console.log(n.message)}))},p=function(n){return o.Z.get("/movie/".concat(n,"/credits?")).then((function(n){return n.data.cast.map((function(n){return{id:n.id,name:n.name,character:n.character,poster:n.profile_path}}))})).catch((function(n){alert(n.massage)}))},l=function(n){return o.Z.get("/movie/".concat(n,"/reviews?")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))})).catch((function(n){alert(n.massage)}))}},6368:function(n,t,e){var r=e(7689),a=e(7398),i=e(184);t.Z=function(n){var t=n.movies,e=(0,r.TH)();return(0,i.jsx)(a.eW,{children:t.map((function(n){var t=n.id,r=n.title,o=n.original_title,c=n.poster;return(0,i.jsx)(a.H2,{children:(0,i.jsxs)(a.up,{to:"/movies/".concat(t),state:{from:e},children:[(0,i.jsx)(a.Ei,{src:c?"https://image.tmdb.org/t/p/w200/".concat(c):"https://naked-science.ru/wp-content/uploads/2016/04/article_face.jpg",alt:r}),(0,i.jsx)(a.rS,{children:(0,i.jsx)("h3",{children:r||o})})]})},t)}))})}},9544:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),i=e(7757),o=e.n(i),c=e(2791),u=e(197),s=e(6368),p=e(7398),l=e(9649),f=e(184);t.default=function(){var n=(0,c.useState)(null),t=(0,a.Z)(n,2),e=t[0],i=t[1],d=(0,c.useState)(!1),h=(0,a.Z)(d,2),x=h[0],g=h[1],m=(0,c.useState)(""),v=(0,a.Z)(m,2),Z=v[0],w=v[1];return(0,c.useEffect)((function(){g(!0);var n=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.Tg)();case 3:t=n.sent,i(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),w(n.t0);case 10:return n.prev=10,g(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)(p.l3,{children:[(0,f.jsx)(p.eA,{children:"Trending today"}),x&&(0,f.jsx)(l.Z,{}),Z&&(0,f.jsx)("p",{children:"Something went wrong!"}),e&&(0,f.jsx)(s.Z,{movies:e})]})}},7398:function(n,t,e){e.d(t,{Ei:function(){return v},H2:function(){return g},eA:function(){return h},eW:function(){return x},l3:function(){return d},rS:function(){return Z},up:function(){return m}});var r,a,i,o,c,u,s,p=e(168),l=e(6444),f=e(1087),d=l.ZP.div(r||(r=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n  }\n"]))),h=l.ZP.h1(a||(a=(0,p.Z)(["\n  font-weight: 700;\n  color: #3f51b5;\n  margin: 30px, 0;\n  text-decoration: none;\n  }\n"]))),x=l.ZP.ul(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n"]))),g=l.ZP.li(o||(o=(0,p.Z)(["\n  background: rgb(255, 255, 255);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 200px;\n  margin: 10px;\n  border-radius: 5px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;\n  }\n"]))),m=(0,l.ZP)(f.rU)(c||(c=(0,p.Z)(["\n  text-decoration: none;\n"]))),v=l.ZP.img(u||(u=(0,p.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n"]))),Z=l.ZP.div(s||(s=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px;\n  margin: 0px;\n  font-size: 10px;\n  color: #3f51b5;\n"])))}}]);
//# sourceMappingURL=544.28931654.chunk.js.map