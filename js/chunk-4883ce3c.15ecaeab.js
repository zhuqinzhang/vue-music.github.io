(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4883ce3c"],{"1f73":function(t,n,i){},"9ccc":function(t,n,i){"use strict";var e=i("1f73"),s=i.n(e);s.a},cb0e:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"content"},[t._m(0),i("div",{staticClass:"pic"},t._l(t.singer,function(n){return i("div",{staticClass:"pic1"},[i("img",{attrs:{title:"歌手详情",src:n.picUrl},on:{click:function(i){return t.usaman(n.id)}}}),i("img"),i("p",[t._v(t._s(n.name))])])}),0)])},s=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"title"},[i("span",[t._v("欧美男歌手")])])}],c=i("bc3a"),a=i.n(c),r={data:function(){return{singer:[]}},created:function(){this.getSinger()},methods:{getSinger:function(){var t=this;a.a.get("https://autumnfish.cn/artist/list?type=1&area=96&limit=25").then(function(n){t.singer=n.data.artists},function(t){})},usaman:function(t){this.$store.commit("singerId",t),this.$router.push({name:"singerdets"})}}},u=r,o=(i("9ccc"),i("2877")),l=Object(o["a"])(u,e,s,!1,null,"66e0e20e",null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4883ce3c.15ecaeab.js.map