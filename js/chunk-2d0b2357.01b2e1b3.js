(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2357"],{"22ab":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container py-5"},[e("NavTabs"),t.isLoading?e("Spinner"):[e("h1",{staticClass:"mt-5"},[t._v("美食達人")]),e("hr"),e("div",{staticClass:"row text-center"},t._l(t.users,(function(s){return e("div",{key:s.id,staticClass:"col-3"},[e("router-link",{attrs:{to:{name:"user",params:{id:s.id}}}},[e("img",{attrs:{src:s.image,width:"140px",height:"140px"}})]),e("h2",[t._v(t._s(s.name))]),e("span",{staticClass:"badge badge-secondary"},[t._v("追蹤人數："+t._s(s.followerCount))]),e("p",{staticClass:"mt-3"},[s.isFollowed?e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.deleteFollowed(s.id)}}},[t._v("取消追蹤")]):e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addFollowed(s.id)}}},[t._v("追蹤")])])],1)})),0)]],2)},a=[],r=e("8bb1"),i=e("2375"),n=e("4cce"),l=e("2fa3"),c={components:{NavTabs:r["a"],Spinner:i["a"]},data(){return{users:[],isLoading:!0}},methods:{async fetchUsers(){try{this.isLoading=!0;const{data:t}=await n["a"].getTopUsers();this.users=t.users.map(t=>({id:t.id,name:t.name,image:t.image,followerCount:t.FollowerCount,isFollowed:t.isFollowed})),this.isLoading=!1}catch(t){this.isLoading=!1,l["a"].fire({icon:"error",title:"無法取得美食達人，請稍後再試"}),console.log("error",t)}},async addFollowed(t){try{const{data:s}=await n["a"].addFollowing({userId:t});if("success"!==s.status)throw new Error(s.message);this.users=this.users.map(s=>s.id!==t?s:{...s,isFollowed:!0,followerCount:s.followerCount+1})}catch(s){l["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"}),console.log("error",s)}},async deleteFollowed(t){try{const{data:s}=await n["a"].deleteFollowing({userId:t});if("success"!==s.status)throw new Error(s.message);this.users=this.users.map(s=>s.id!==t?s:{...s,isFollowed:!1,followerCount:s.followerCount-1})}catch(s){l["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"}),console.log("error",s)}}},created(){this.fetchUsers()}},d=c,u=e("2877"),w=Object(u["a"])(d,o,a,!1,null,null,null);s["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0b2357.01b2e1b3.js.map