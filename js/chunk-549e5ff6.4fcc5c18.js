(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-549e5ff6"],{"0d8b":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"content"},[t._m(0),i("div",{staticClass:"pic"},t._l(t.singer,function(n){return i("div",{staticClass:"pic1"},[i("img",{attrs:{title:"歌手详情",src:n.picUrl},on:{click:function(i){return t.jpman(n.id)}}}),i("img"),i("p",[t._v(t._s(n.name))])])}),0)])},s=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"title"},[i("span",[t._v("日本男歌手")])])}],c=i("bc3a"),a=i.n(c),r={data:function(){return{singer:[]}},created:function(){this.getSinger()},methods:{getSinger:function(){var t=this;a.a.get("https://autumnfish.cn/artist/list?type=1&area=8&limit=25").then(function(n){t.singer=n.data.artists},function(t){})},jpman:function(t){this.$store.commit("singerId",t),this.$router.push({name:"singerdets"})}}},u=r,o=(i("d0ee"),i("2877")),f=Object(o["a"])(u,e,s,!1,null,"7967af12",null);n["default"]=f.exports},"1dc6":function(t,n,i){},d0ee:function(t,n,i){"use strict";var e=i("1dc6"),s=i.n(e);s.a}}]);
//# sourceMappingURL=chunk-549e5ff6.4fcc5c18.js.map