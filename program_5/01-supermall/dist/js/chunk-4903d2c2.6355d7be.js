(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4903d2c2"],{"21c7":function(t,i,a){"use strict";a("aa6b")},"466d":function(t,i,a){"use strict";var e=a("d784"),n=a("825a"),s=a("50c4"),o=a("1d80"),c=a("8aa5"),r=a("14c3");e("match",1,(function(t,i,a){return[function(i){var a=o(this),e=void 0==i?void 0:i[t];return void 0!==e?e.call(i,a):new RegExp(i)[t](String(a))},function(t){var e=a(i,t,this);if(e.done)return e.value;var o=n(t),l=String(this);if(!o.global)return r(o,l);var d=o.unicode;o.lastIndex=0;var u,m=[],v=0;while(null!==(u=r(o,l))){var p=String(u[0]);m[v]=p,""===p&&(o.lastIndex=c(l,s(o.lastIndex),d)),v++}return 0===v?null:m}]}))},9977:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"goods-list-item"},[a("a",{on:{click:t.goodsClick}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.image,expression:"item.image"}],attrs:{alt:""},on:{load:t.imageLoad}}),a("div",{staticClass:"goods-info"},[a("p",[t._v(t._s(t.item.title))]),a("span",{staticClass:"price"},[t._v(t._s(t.item.price))]),a("span",{staticClass:"collect"},[t._v(t._s(t.item.cfavos))])])])])},n=[],s=(a("ac1f"),a("466d"),{name:"GoodsListItem",components:{},props:{item:{type:Object}},methods:{imageLoad:function(){this.$bus.$emit("itemImageLoad")},goodsClick:function(){var t=this.item.image,i=t.match(/([a-zA-Z0-9]*)\.png$/);this.$router.push("/detail/"+i[1])}}}),o=s,c=(a("21c7"),a("2877")),r=Object(c["a"])(o,e,n,!1,null,"24d737d3",null);i["default"]=r.exports},aa6b:function(t,i,a){}}]);
//# sourceMappingURL=chunk-4903d2c2.6355d7be.js.map