(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d36d0d30"],{"07b2":function(t,n,i){"use strict";var e=i("7db3"),s=i.n(e);s.a},"52e0":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"content"},[t._m(0),i("div",{staticClass:"pic"},t._l(t.singer,function(n){return i("div",{staticClass:"pic1"},[i("img",{attrs:{title:"歌手详情",src:n.picUrl},on:{click:function(i){return t.cnman(n.id)}}}),i("img"),i("p",[t._v(t._s(n.name))])])}),0)])},s=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"title"},[i("span",[t._v("华语男歌手")])])}],c=i("bc3a"),a=i.n(c),r={data:function(){return{singer:[]}},created:function(){this.getSinger()},methods:{getSinger:function(){var t=this;a.a.get("https://autumnfish.cn/artist/list?type=1&area=7&limit=25").then(function(n){t.singer=n.data.artists},function(t){})},cnman:function(t){this.$store.commit("singerId",t),this.$router.push({name:"singerdets"})}}},u=r,o=(i("07b2"),i("2877")),f=Object(o["a"])(u,e,s,!1,null,"10feff8a",null);n["default"]=f.exports},"7db3":function(t,n,i){}}]);
//# sourceMappingURL=chunk-d36d0d30.0bfa3b8a.js.map