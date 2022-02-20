(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8d68"],{"571a":function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container py-5"},[s("NavTabs"),t.isLoading?s("Spinner"):[s("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),s("hr"),t._l(t.restaurants,(function(a){return s("div",{key:a.id,staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-md-4"},[s("router-link",{attrs:{to:{name:"restaurant",params:{id:a.id}}}},[s("img",{staticClass:"card-img",attrs:{src:a.image}})])],1),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(a.name))]),s("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(a.FavoriteCount))]),s("p",{staticClass:"card-text"},[t._v(" "+t._s(a.description)+" ")]),s("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"restaurant",params:{id:a.id}}}},[t._v(" Show ")]),a.isFavorited?s("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(s){return t.deletaFavorite(a.id)}}},[t._v(" 移除最愛 ")]):s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){return t.addFavorate(a.id)}}},[t._v(" 加到最愛 ")])],1)])])])}))]],2)},e=[],i=s("8bb1"),n=s("2375"),o=s("c4c3"),c=s("4cce"),d=s("2fa3"),u={components:{NavTabs:i["a"],Spinner:n["a"]},data(){return{restaurants:[],isLoading:!0}},created(){this.fetchTopRestaurants()},methods:{async fetchTopRestaurants(){try{this.isLoading=!0;const t=await o["a"].getTopRestaurants();if("OK"!==t.statusText)throw new Error(t.statusText);this.restaurants=t.data.restaurants,this.isLoading=!1}catch(t){this.isLoading=!1,d["a"].fire({icon:"error",title:"無法取得人氣餐廳資料，請稍後再試"}),console.log("error",t)}},async addFavorate(t){try{const a=await c["a"].addFavorite({restaurantId:t});if("OK"!==a.statusText)throw new Error(a.statusText);this.restaurants=this.restaurants.map(a=>a.id!==t?a:{...a,FavoriteCount:a.FavoriteCount+1,isFavorited:!0})}catch(a){d["a"].fire({icon:"error",title:"無法加至最愛餐廳，請稍後再試"}),console.log("error",a)}},async deletaFavorite(t){try{const a=await c["a"].deleteFavorite({restaurantId:t});if("OK"!==a.statusText)throw new Error(a.statusText);this.restaurants=this.restaurants.map(a=>a.id!==t?a:{...a,FavoriteCount:a.FavoriteCount-1,isFavorited:!1})}catch(a){d["a"].fire({icon:"error",title:"無法移除最愛餐廳，請稍後再試"}),console.log("error",a)}}}},l=u,v=s("2877"),h=Object(v["a"])(l,r,e,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0c8d68.acf5ffe9.js.map