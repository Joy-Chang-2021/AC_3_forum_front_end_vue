(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f51619e8"],{"9cab":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("Spinner"):[a("h1",{staticClass:"mt-5"},[t._v(" 最新動態 ")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("h3",[t._v("最新餐廳")]),a("NewestRestaurants",{attrs:{restaurants:t.restaurants}})],1),a("div",{staticClass:"col-md-6"},[a("h3",[t._v("最新評論")]),a("NewestComments",{attrs:{comments:t.comments}})],1)])]],2)},r=[],n=a("8bb1"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v(" 最新餐廳 ")]),a("div",{staticClass:"card-body"},t._l(t.restaurants,(function(s){return a("div",{key:s.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant",params:{id:s.id}}}},[t._v(" "+t._s(s.name)+" ")]),a("small",[t._v(" "+t._s(s.Category?s.Category.name:"未分類")+" ")])],1),a("p",[t._v(t._s(s.description))]),t._v(t._s(t._f("fromNow")(s.createdAt))+" "),a("hr")])})),0)])},c=[],o=a("2708"),d={props:{restaurants:{type:Array,required:!0}},mixins:[o["b"]]},u=d,l=(a("a7cc"),a("2877")),m=Object(l["a"])(u,i,c,!1,null,"5e48d723",null),v=m.exports,_=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v(" 最新評論 ")]),a("div",{staticClass:"card-body"},t._l(t.comments,(function(s){return a("div",{key:s.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant",params:{id:s.Restaurant.id}}}},[t._v(" "+t._s(s.Restaurant.name)+" ")])],1),a("p",[t._v(t._s(s.text))]),t._v("by "),a("router-link",{attrs:{to:{name:"user",params:{id:s.UserId}}}},[t._v(" "+t._s(s.User.name)+" ")]),t._v(" at "+t._s(t._f("fromNow")(s.createdAt))+" "),a("hr")],1)})),0)])},h=[],f={props:{comments:{type:Array,required:!0}},mixins:[o["b"]]},p=f,w=Object(l["a"])(p,_,h,!1,null,null,null),b=w.exports,C=a("2375"),y=a("c4c3"),g=a("2fa3"),x={name:"RestaurantsFeeds",components:{NavTabs:n["a"],NewestRestaurants:v,NewestComments:b,Spinner:C["a"]},data(){return{restaurants:[],comments:[],isLoading:!0}},methods:{async fetchFeeds(){try{this.isLoading=!0;const t=await y["a"].getFeeds();if("OK"!==t.statusText)throw new Error(t.statusText);const{comments:s,restaurants:a}=t.data;this.comments=s.filter(t=>t.Restaurant&&t.text),this.restaurants=a,this.isLoading=!1}catch(t){this.isLoading=!1,console.log(t),g["a"].fire({icon:"error",title:"無法取得最新動態資料，請稍後再試"})}}},created(){this.fetchFeeds()}},k=x,N=Object(l["a"])(k,e,r,!1,null,null,null);s["default"]=N.exports},a78f:function(t,s,a){},a7cc:function(t,s,a){"use strict";a("a78f")}}]);
//# sourceMappingURL=chunk-f51619e8.4512f476.js.map