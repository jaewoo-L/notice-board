(function(t){function e(e){for(var r,i,o=e[0],l=e[1],u=e[2],c=0,m=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0080":function(t,e,a){"use strict";var r=a("aad8"),s=a.n(r);s.a},"034f":function(t,e,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"12dc":function(t,e,a){"use strict";var r=a("eb3b"),s=a.n(r);s.a},"145a":function(t,e,a){"use strict";var r=a("60f2"),s=a.n(r);s.a},"21c1":function(t,e,a){},"23cd":function(t,e,a){},3200:function(t,e,a){"use strict";var r=a("fe7d"),s=a.n(r);s.a},"326b":function(t,e,a){"use strict";var r=a("21c1"),s=a.n(r);s.a},"55fa":function(t,e,a){"use strict";var r=a("adac"),s=a.n(r);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view",{attrs:{name:"header"}}),a("router-view")],1)},n=[],i=a("7618"),o={created:function(){var t=this;this.$store.dispatch("tryAutoLogin").then((function(e){console.log("tryAutoLogin"),console.log(Object(i["a"])(t.$store.getters.isAdmin))}))}},l=o,u=(a("034f"),a("2877")),d=Object(u["a"])(l,s,n,!1,null,null,null),c=d.exports,m=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-default"},[a("div",{staticClass:"container-fluid"},[t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[t.auth?a("li",{staticClass:"navbar-text navbar-right"},[a("router-link",{staticClass:"navbar-link",attrs:{to:{name:"orders"},tag:"a"}},[t._v("주문조회")])],1):t._e(),t.auth?a("li",{staticClass:"navbar-text navbar-right"},[a("router-link",{staticClass:"navbar-link",attrs:{to:{name:"basket"},tag:"a"}},[t._v("장바구니")])],1):t._e(),t.auth?t._e():a("li",{staticClass:"navbar-text navbar-right"},[a("router-link",{staticClass:"navbar-link",attrs:{to:{name:"signUp"},tag:"a"}},[t._v("회원가입")])],1),t.auth?t._e():a("li",{staticClass:"navbar-text navbar-right"},[a("router-link",{staticClass:"navbar-link",attrs:{to:{name:"login"},tag:"a"}},[t._v("로그인")])],1),t.auth?a("li",{staticClass:"navbar-text navbar-right"},[a("router-link",{staticClass:"navbar-link",attrs:{to:{name:"logout"},tag:"a"}},[t._v("로그아웃")])],1):t._e(),t.auth?a("li",{staticClass:"navbar-text navbar-right"},[a("router-link",{staticClass:"navbar-link",attrs:{to:"",tag:"a"}},[t._v(t._s(t.username))])],1):t._e()]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[a("ul",{staticClass:"nav navbar-nav mL"},[a("router-link",{attrs:{tag:"li",to:{name:"products"},"active-class":"active",exact:""}},[a("a",[t._v("All Products")])]),a("router-link",{attrs:{tag:"li",to:{name:"tops"},"active-class":"active"}},[a("a",[t._v("Tops")])]),a("router-link",{attrs:{tag:"li",to:{name:"bottoms"},"active-class":"active"}},[a("a",[t._v("Bottoms")])]),a("router-link",{attrs:{tag:"li",to:{name:"accs"},"active-class":"active"}},[a("a",[t._v("Accs")])])],1),t._m(1)])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"navbar-form navbar-right",attrs:{role:"search"}},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}})]),a("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[a("i",{staticClass:"fas fa-search"})])])}],h={computed:{auth:function(){return this.$store.getters.isAuthenticated},username:function(){return this.$store.getters.username}}},f=h,g=(a("7bd1"),Object(u["a"])(f,p,v,!1,null,"305ff458",null)),b=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movies"},[a("h1",[t._v("영화 목록")]),t._l(t.movies,(function(e){return a("div",{staticClass:"movie"},[a("img",{staticClass:"poster",attrs:{src:e.poster}}),a("div",[a("strong",[t._v(t._s(e.name))]),t._v(", "),a("i",[t._v(t._s(e.director))]),t._v(" ["+t._s(e.year)+"]\n      "),a("router-link",{attrs:{to:{name:"show",params:{id:e.id}}}},[t._v("더보기")])],1)])}))],2)},$=[],x={created:function(){var t=this;this.$http.get("/api/movies").then((function(e){t.movies=e.data}))},data:function(){return{movies:[]}}},w=x,C=Object(u["a"])(w,_,$,!1,null,null,null),k=C.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v(" All products ")]),t.isAdmin?a("button",{on:{click:t.createProduct}},[t._v("등록")]):t._e(),a("hr"),t._l(t.products,(function(e){return a("div",{staticClass:"col-sm-4 col-md-3"},[a("div",{staticClass:"row"},[a("a",{attrs:{href:"/products/"+e._id}},[a("div",{staticClass:"thumbnail"},[a("img",{attrs:{src:e.thumbnail}}),a("div",{staticClass:"caption"},[a("h4",[t._v(t._s(e.brand))]),a("p",[t._v(t._s(e.name))]),a("p",[t._v(t._s(e.price)+"￦")])])])])])])}))],2)},N=[],A={data:function(){return{products:[]}},computed:{isAdmin:function(){return console.log(this.$store.getters.isAdmin),this.$store.getters.isAdmin}},methods:{createProduct:function(){this.$router.push("/products/new")}},created:function(){var t=this;this.$http.get("/api/products").then((function(e){t.products=e.data}))}},q=A,O=Object(u["a"])(q,P,N,!1,null,null,null),j=O.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v(" Tops Products ")]),t.isAdmin?a("button",{on:{click:t.createProduct}},[t._v("등록")]):t._e(),a("hr"),t._l(t.products,(function(e){return a("div",{staticClass:"col-sm-4 col-md-3"},[a("div",{staticClass:"row"},[a("a",{attrs:{href:"/products/"+e._id}},[a("div",{staticClass:"thumbnail"},[a("img",{attrs:{src:e.thumbnail}}),a("div",{staticClass:"caption"},[a("h4",[t._v(t._s(e.brand))]),a("p",[t._v(t._s(e.name))]),a("p",[t._v(t._s(e.price)+"￦")])])])])])])}))],2)},E=[],U={data:function(){return{products:[]}},computed:{isAdmin:function(){return this.$store.getters.isAdmin}},methods:{createProduct:function(){this.$router.push("/products/new")}},created:function(){var t=this;this.isAdmin=this.$store.state.isAdmin,this.$http.get("/api/products/tops").then((function(e){t.products=e.data}))}},S=U,L=Object(u["a"])(S,y,E,!1,null,null,null),I=L.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v(" Bottoms Products ")]),t.isAdmin?a("button",{on:{click:t.createProduct}},[t._v("등록")]):t._e(),a("hr"),t._l(t.products,(function(e){return a("div",{staticClass:"col-sm-4 col-md-3"},[a("div",{staticClass:"row"},[a("a",{attrs:{href:"/products/"+e._id}},[a("div",{staticClass:"thumbnail"},[a("img",{attrs:{src:e.thumbnail}}),a("div",{staticClass:"caption"},[a("h4",[t._v(t._s(e.brand))]),a("p",[t._v(t._s(e.name))]),a("p",[t._v(t._s(e.price)+"￦")])])])])])])}))],2)},T=[],D={data:function(){return{products:[]}},computed:{isAdmin:function(){return this.$store.getters.isAdmin}},methods:{createProduct:function(){this.$router.push("/products/new")}},created:function(){var t=this;this.isAdmin=this.$store.state.isAdmin,this.$http.get("/api/products/bottoms").then((function(e){t.products=e.data}))}},F=D,B=Object(u["a"])(F,M,T,!1,null,null,null),V=B.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v(" Accs Products ")]),t.isAdmin?a("button",{on:{click:t.createProduct}},[t._v("등록")]):t._e(),a("hr"),t._l(t.products,(function(e){return a("div",{staticClass:"col-sm-4 col-md-3"},[a("div",{staticClass:"row"},[a("a",{attrs:{href:"/products/"+e._id}},[a("div",{staticClass:"thumbnail"},[a("img",{attrs:{src:e.thumbnail}}),a("div",{staticClass:"caption"},[a("h4",[t._v(t._s(e.brand))]),a("p",[t._v(t._s(e.name))]),a("p",[t._v(t._s(e.price)+"￦")])])])])])])}))],2)},R=[],z={data:function(){return{products:[]}},computed:{isAdmin:function(){return this.$store.getters.isAdmin}},methods:{createProduct:function(){this.$router.push("/products/new")}},created:function(){var t=this;this.isAdmin=this.$store.state.isAdmin,this.$http.get("/api/products/accs").then((function(e){t.products=e.data}))}},G=z,H=Object(u["a"])(G,J,R,!1,null,null,null),K=H.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Details page")]),t.isAdmin?a("button",{on:{click:t.editProduct}},[t._v("수정")]):t._e(),t.isAdmin?a("button",{on:{click:t.deleteProduct}},[t._v("삭제")]):t._e(),a("hr"),a("p",[t._v(t._s(t.product.name))]),a("img",{attrs:{src:t.product.detailed_image}}),a("p",[t._v(t._s(t.product.price)+"￦")]),a("button",{class:{likeBtn:t.istrue},attrs:{disabled:!t.token},on:{click:t.likeProduct}},[t._v("like("+t._s(t.likes.length)+")")])])},W=[],X={data:function(){return{product:{},likes:[],istrue:null}},computed:{isAdmin:function(){return console.log("isAmin 변경"),console.log(this.$store.getters.isAdmin),this.$store.getters.isAdmin},token:function(){return this.$store.getters.token}},methods:{editProduct:function(){this.$router.push("/products/"+this.$route.params.id+"/edit")},deleteProduct:function(){var t=this;this.$http.delete("/api/products/"+this.$route.params.id).then((function(e){"success"==e.data.result?(alert("삭제 성공했습니다."),t.$router.push("/products")):"fail"==e.data.result&&alert("삭제 실패했습니다.")})).catch((function(t){alert(t)}))},likeProduct:function(){var t=this;this.$http.post("/api/products/"+this.$route.params.id+"/like",{userid:this.$store.getters.token}).then((function(e){t.likes=e.data;var a=t.token;t.istrue=!t.istrue,console.log(t.likes),console.log(a)}))}},created:function(){var t=this;this.isAdmin=this.$store.state.isAdmin,this.$http.get("/api/products/"+this.$route.params.id).then((function(e){for(var a in t.product=e.data,t.likes=e.data.likes,console.log(e.data),e.data.likes)e.data.likes[a]._id==t.$store.getters.token?t.istrue=!0:t.istrue=!1}))}},Y=X,Z=(a("3200"),Object(u["a"])(Y,Q,W,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"newProduct"}},[a("div",{staticClass:"newProduct-box"},[a("h1",[t._v(" 제품등록 ")]),a("div",{staticClass:"text-box",class:{invalid:t.$v.name.$error}},[a("label",{attrs:{for:"productName"}},[t._v("Name : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"productName",name:"name",placeholder:"이름"},domProps:{value:t.name},on:{blur:function(e){return t.$v.name.$touch()},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t.$v.name.$error?a("p",[t._v("작성해 주세요.")]):t._e()]),a("div",{staticClass:"text-box",class:{invalid:t.$v.price.$error}},[a("label",{attrs:{for:"price"}},[t._v("Price : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{id:"price",name:"price",maxlength:"8",placeholder:"가격"},domProps:{value:t.price},on:{blur:function(e){return t.$v.price.$touch()},input:function(e){e.target.composing||(t.price=e.target.value)}}}),t.$v.price.$error?a("p",[t._v("작성해 주세요.")]):t._e()]),a("div",{staticClass:"text-box",class:{invalid:t.$v.thumbnail.$error}},[a("label",{attrs:{for:"thumbnail"}},[t._v("thumbnail : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.thumbnail,expression:"thumbnail"}],attrs:{id:"thumbnail",name:"thumbnail",placeholder:"썸네일"},domProps:{value:t.thumbnail},on:{blur:function(e){return t.$v.thumbnail.$touch()},input:function(e){e.target.composing||(t.thumbnail=e.target.value)}}}),t.$v.thumbnail.$error?a("p",[t._v("썸네일 등록을 해주세요.")]):t._e()]),a("div",{staticClass:"text-box",class:{invalid:t.$v.detailed_image.$error}},[a("label",{attrs:{for:"detailed_image"}},[t._v("detailed_image : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.detailed_image,expression:"detailed_image"}],attrs:{id:"detailed_image",name:"detailed_image",placeholder:"상세 이미지"},domProps:{value:t.detailed_image},on:{blur:function(e){return t.$v.detailed_image.$touch()},input:function(e){e.target.composing||(t.detailed_image=e.target.value)}}}),t.$v.detailed_image.$error?a("p",[t._v("이미지 등록을 해주세요.")]):t._e()]),a("div",{staticClass:"text-box",class:{invalid:t.$v.kinds.$error}},[a("label",{attrs:{for:"kinds"}},[t._v("kinds : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.kinds,expression:"kinds"}],attrs:{id:"kinds",name:"kinds",placeholder:"ex)tops, bottoms, accs"},domProps:{value:t.kinds},on:{blur:function(e){return t.$v.kinds.$touch()},input:function(e){e.target.composing||(t.kinds=e.target.value)}}}),t.$v.kinds.$error?a("p",[t._v("종류를 작성 해주세요.")]):t._e()]),a("div",{staticClass:"text-box",class:{invalid:t.$v.brand.$error}},[a("label",{attrs:{for:"brand"}},[t._v("brand : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.brand,expression:"brand"}],attrs:{id:"brand",name:"brand",placeholder:"브랜드"},domProps:{value:t.brand},on:{blur:function(e){return t.$v.brand.$touch()},input:function(e){e.target.composing||(t.brand=e.target.value)}}}),t.$v.brand.$error?a("p",[t._v(" 브랜드 등록을 해주세요.")]):t._e()]),a("div",{staticClass:"text-box",class:{invalid:t.$v.items.$error}},[a("label",{attrs:{for:"items"}},[t._v("items : ")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.items,expression:"items",modifiers:{number:!0}}],attrs:{id:"items",name:"items",placeholder:"상품갯수"},domProps:{value:t.items},on:{blur:[function(e){return t.$v.items.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||(t.items=t._n(e.target.value))}}}),t.$v.items.$error?a("p",[t._v("상품갯수 등록을 해주세요.")]):t._e()]),a("div",{staticClass:"text-box",class:{invalid:t.$v.avatar.$error}},[a("label",{attrs:{for:"avatar"}},[t._v("avatar : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.avatar,expression:"avatar"}],attrs:{id:"avatar",name:"avatar",placeholder:"성별"},domProps:{value:t.avatar},on:{blur:function(e){return t.$v.avatar.$touch()},input:function(e){e.target.composing||(t.avatar=e.target.value)}}}),t.$v.avatar.$error?a("p",[t._v("성별 등록을 해주세요.")]):t._e()]),a("button",{on:{click:t.createProduct}},[t._v("등록")])])])},at=[],rt=(a("7f7f"),a("b5ae")),st={data:function(){return{isAdmin:!1,name:"",price:"",thumbnail:"",detailed_image:"",kinds:"",brand:"",items:"",avatar:""}},methods:{createProduct:function(){var t=this;this.$http.post("/api/products",{name:this.name,price:this.price,thumbnail:this.thumbnail,detailed_image:this.detailed_image,kinds:this.kinds,brand:this.brand,items:this.items,avatar:this.avatar}).then((function(e){e.data?alert("제품 등록 완료"):alert("제품 등록 오류"),t.$router.push("/products")})).catch((function(t){console.log(t)}))}},validations:{name:{required:rt["required"]},price:{required:rt["required"]},thumbnail:{required:rt["required"]},detailed_image:{required:rt["required"]},kinds:{required:rt["required"]},brand:{required:rt["required"]},items:{required:rt["required"],numeric:rt["numeric"]},avatar:{required:rt["required"]}}},nt=st,it=(a("326b"),Object(u["a"])(nt,et,at,!1,null,null,null)),ot=it.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"newProduct"}},[a("div",{staticClass:"newProduct-box"},[a("h1",[t._v(" 제품수정 ")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.editProduct(e)}}},[a("div",{staticClass:"text-box"},[a("label",{attrs:{for:"productName"}},[t._v("Name : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],attrs:{id:"productName",name:"name",required:""},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}})]),a("div",{staticClass:"text-box"},[a("label",{attrs:{for:"price"}},[t._v("Price : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],attrs:{id:"price",name:"price",maxlength:"8",required:""},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})]),a("div",{staticClass:"text-box"},[a("label",{attrs:{for:"thumbnail"}},[t._v("thumbnail : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.thumbnail,expression:"product.thumbnail"}],attrs:{id:"thumbnail",name:"thumbnail",required:""},domProps:{value:t.product.thumbnail},on:{input:function(e){e.target.composing||t.$set(t.product,"thumbnail",e.target.value)}}})]),a("div",{staticClass:"text-box"},[a("label",{attrs:{for:"detailed_image"}},[t._v("detailed_image : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.detailed_image,expression:"product.detailed_image"}],attrs:{id:"detailed_image",name:"detailed_image",required:""},domProps:{value:t.product.detailed_image},on:{input:function(e){e.target.composing||t.$set(t.product,"detailed_image",e.target.value)}}})]),a("div",{staticClass:"text-box"},[a("label",{attrs:{for:"kinds"}},[t._v("kinds : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.kinds,expression:"product.kinds"}],attrs:{id:"kinds",name:"kinds",required:""},domProps:{value:t.product.kinds},on:{input:function(e){e.target.composing||t.$set(t.product,"kinds",e.target.value)}}})]),a("div",{staticClass:"text-box"},[a("label",{attrs:{for:"brand"}},[t._v("brand : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.brand,expression:"product.brand"}],attrs:{id:"brand",name:"brand",required:""},domProps:{value:t.product.brand},on:{input:function(e){e.target.composing||t.$set(t.product,"brand",e.target.value)}}})]),a("div",{staticClass:"text-box"},[a("label",{attrs:{for:"items"}},[t._v("items : ")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.product.items,expression:"product.items",modifiers:{number:!0}}],attrs:{id:"items",name:"items",required:""},domProps:{value:t.product.items},on:{input:function(e){e.target.composing||t.$set(t.product,"items",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"text-box"},[a("label",{attrs:{for:"avatar"}},[t._v("avatar : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.avatar,expression:"product.avatar"}],attrs:{id:"avatar",name:"avatar",required:""},domProps:{value:t.product.avatar},on:{input:function(e){e.target.composing||t.$set(t.product,"avatar",e.target.value)}}})]),a("button",{attrs:{type:"submit"}},[t._v("수정")])])])])},ut=[],dt={data:function(){return{product:{}}},methods:{editProduct:function(){var t=this;this.$http.put("/api/products/"+this.$route.params.id,{product:this.product}).then((function(e){e.data.result?alert("수정 실패"):(console.log(e.data),t.$router.push("/products/"+t.$route.params.id))})).catch((function(t){alert(t)}))}},created:function(){var t=this;this.$http.get("/api/products/"+this.$route.params.id+"/edit").then((function(e){t.product=e.data,console.log(e.data),console.log(t.product)}))}},ct=dt,mt=(a("145a"),Object(u["a"])(ct,lt,ut,!1,null,null,null)),pt=mt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("div",{staticClass:"login-box"},[a("h1",[t._v(" Login ")]),a("div",{staticClass:"text-box"},[a("i",{staticClass:"fas fa-user-alt"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{name:"username",placeholder:"E-mail"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("div",{staticClass:"text-box"},[a("i",{staticClass:"fas fa-lock"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("a",{attrs:{href:t.url.signUpUrl}},[t._v("회원가입")]),a("a",{staticStyle:{float:"right"},attrs:{href:t.url.forgotUrl}},[t._v(" 비밀번호가 기억나지 않나요? ")]),a("button",{staticClass:"btn",on:{click:t.login}},[t._v("login")])])])},ht=[],ft={data:function(){return{username:"",password:"",url:{signUpUrl:"/signUp",forgotUrl:"/forgot"}}},methods:{login:function(t){var e=this;this.$http.post("/api/login",{username:this.username,password:this.password}).then((function(t){alert("success login"+t.data.username),console.log(t.data.session);var a=t.data.session,r=t.data.username,s=t.data.isAdmin;localStorage.setItem("access_token",a),localStorage.setItem("username",r),localStorage.setItem("isAdmin",s),e.$store.state.username=r,e.$store.state.token=a,e.$store.state.isAdmin=s,e.$router.push("/")}),(function(t){alert("undifind error: "+t.response.data.error)})).catch((function(t){alert("catch error: "+t)}))}}},gt=ft,bt=(a("8505"),Object(u["a"])(gt,vt,ht,!1,null,"6595c890",null)),_t=bt.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},xt=[],wt={created:function(){var t=this;this.$http.get("/api/login/logout").then((function(e){alert(e.data.msg),t.$store.dispatch("logout"),t.$router.push("/login")}))}},Ct=wt,kt=Object(u["a"])(Ct,$t,xt,!1,null,null,null),Pt=kt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"SignUp"}},[a("div",{staticClass:"signUp-box"},[a("h1",[t._v(" Sign Up ")]),a("div",{staticClass:"text-box",class:{invalid:t.$v.username.$error}},[a("label",{attrs:{for:"username"}},[t._v("ID : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{id:"username",name:"username",placeholder:"E-mail"},domProps:{value:t.username},on:{blur:function(e){return t.$v.username.$touch()},input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("button",{staticClass:"doubleCheck",on:{click:t.doubleCheck}},[t._v("중복확인")]),t.$v.username.$error?a("p",[t._v("E-mail 형식을 확인하세요.")]):t._e()]),a("div",{staticClass:"text-box",class:{invalid:t.$v.password.$error}},[a("label",{attrs:{for:"password"}},[t._v("비밀번호 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",name:"password",type:"password",maxlength:"15",placeholder:"Password"},domProps:{value:t.password},on:{blur:function(e){return t.$v.password.$touch()},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.$v.password.$error?a("p",[t._v("최소 6자 이상 최대 15자 이하로 작성하세요.")]):t._e()]),a("div",{staticClass:"text-box",class:{invalid:t.$v.confirmPassword.$error}},[a("label",{attrs:{for:"confirm-password"}},[t._v("비밀번호확인 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],attrs:{id:"confirm-password",name:"confirmPassword",type:"password",maxlength:"15",placeholder:"ConfirmPassword"},domProps:{value:t.confirmPassword},on:{blur:function(e){return t.$v.confirmPassword.$touch()},input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}}),t.$v.confirmPassword.$error?a("p",[t._v("패스워드가 일치하지 않습니다.")]):t._e()]),a("div",{staticClass:"text-box"},[a("label",{attrs:{for:"lastName"}},[t._v("성 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{id:"lastName",name:"lastName",placeholder:"성(性)"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),a("div",{staticClass:"text-box"},[a("label",{attrs:{for:"firstName"}},[t._v("이름 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{id:"firstName",name:"firstName",placeholder:"이름"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),a("div",{staticClass:"text-box"},[a("label",[t._v("성별 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],attrs:{type:"radio",id:"male",value:"Male"},domProps:{checked:t._q(t.gender,"Male")},on:{change:function(e){t.gender="Male"}}}),t._v(" Male\n              "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],attrs:{type:"radio",id:"female",value:"Female"},domProps:{checked:t._q(t.gender,"Female")},on:{change:function(e){t.gender="Female"}}}),t._v(" Female  \n      ")]),a("div",{staticClass:"text-box",class:{invalid:t.$v.age.$error}},[a("label",{attrs:{for:"age"}},[t._v("나이 : ")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.age,expression:"age",modifiers:{number:!0}}],attrs:{id:"age",name:"age",maxlength:"2",placeholder:"20"},domProps:{value:t.age},on:{input:[function(e){e.target.composing||(t.age=t._n(e.target.value))},function(e){return t.$v.age.$touch()}],blur:function(e){return t.$forceUpdate()}}}),t.$v.age.$error?a("p",[t._v("숫자를 입력하세요.")]):t._e()]),a("div",{staticClass:"text-box"},[a("label",{attrs:{for:"address"}},[t._v("주소 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{id:"address",name:"address",placeholder:"주소"},domProps:{value:t.address},on:{input:[function(e){e.target.composing||(t.address=e.target.value)},function(e){return t.$v.address.$touch()}]}})]),a("div",{staticClass:"text-box"},[a("label",[t._v("핸드폰 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone_first,expression:"phone_first"}],staticClass:"phone",attrs:{name:"phone_first",maxlength:"3",placeholder:"010"},domProps:{value:t.phone_first},on:{input:[function(e){e.target.composing||(t.phone_first=e.target.value)},function(e){return t.$v.phone_first.$touch()}]}}),t._v(" - "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone_middle,expression:"phone_middle"}],staticClass:"phone",attrs:{name:"phone_middle",maxlength:"4",placeholder:"3333"},domProps:{value:t.phone_middle},on:{input:[function(e){e.target.composing||(t.phone_middle=e.target.value)},function(e){return t.$v.phone_middle.$touch()}]}}),t._v(" - "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone_last,expression:"phone_last"}],staticClass:"phone",attrs:{name:"phone_last",maxlength:"4",placeholder:"8888"},domProps:{value:t.phone_last},on:{input:[function(e){e.target.composing||(t.phone_last=e.target.value)},function(e){return t.$v.phone_last.$touch()}]}})]),a("div",{staticClass:"submit"},[a("button",{staticClass:"btn",attrs:{disabled:t.$v.$invalid},on:{click:t.signUp}},[t._v("회원가입")])])])])},At=[],qt={data:function(){return{username:"",password:"",confirmPassword:"",lastName:"",firstName:"",gender:"",age:"",address:"",phone_first:"",phone_middle:"",phone_last:"",currentUser:[],doubleCheckVariable:!1}},methods:{signUp:function(t){var e=this;this.doubleCheckVariable?this.$http.post("/api/login/signUp",{username:this.username,password:this.password,lastName:this.lastName,firstName:this.firstName,gender:this.gender,age:this.age,address:this.address,phone_first:this.phone_first,phone_middle:this.phone_middle,phone_last:this.phone_last}).then((function(t){console.log("response"),console.log(t.data),0==t.data.result&&alert("Error, please, try again"),1==t.data.result&&(alert("Success"),e.$router.push("/login"))})).catch((function(t){alert("frontend error"),console.log(t)})):alert("E-mail 중복확인이 필요합니다.")},doubleCheck:function(){for(var t in this.currentUser)if(this.currentUser[t].username==this.username)return void alert("이미 존재하는 아이디 입니다.");alert("사용가능한 아이디 입니다."),this.doubleCheckVariable=!0}},validations:{username:{required:rt["required"],email:rt["email"]},password:{required:rt["required"],minLength:Object(rt["minLength"])(6),maxLength:Object(rt["maxLength"])(15)},confirmPassword:{sameAs:Object(rt["sameAs"])("password")},age:{numeric:rt["numeric"]},address:{required:rt["required"]},phone_first:{required:rt["required"],maxLength:Object(rt["maxLength"])(3)},phone_middle:{required:rt["required"],maxLength:Object(rt["maxLength"])(4)},phone_last:{required:rt["required"],maxLength:Object(rt["maxLength"])(4)}},created:function(){var t=this;this.$http.get("/api/login/signUp").then((function(e){t.currentUser=e.data}))}},Ot=qt,jt=(a("0080"),Object(u["a"])(Ot,Nt,At,!1,null,"191a0754",null)),yt=jt.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"forgot"}},[a("div",{staticClass:"forgot-box"},[a("h1",[t._v("Forgot Password")]),a("div",{staticClass:"text-box"},[a("label",{attrs:{for:"username"}},[t._v("이메일을 입력하세요.")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{id:"username",name:"username",placeholder:"abc@gmail.com"},domProps:{value:t.username},on:{input:[function(e){e.target.composing||(t.username=e.target.value)},function(e){return t.$v.username.$touch()}]}})]),a("button",{staticClass:"btn",on:{click:t.sendMail}},[t._v("메일 보내기")])])])},Ut=[],St={data:function(){return{username:""}},validations:{username:{required:rt["required"],email:rt["email"]}},methods:{sendMail:function(){this.$http.post("/api/login/forgot",{username:this.username}).then((function(t){alert(t.data.result)}))}}},Lt=St,It=(a("55fa"),Object(u["a"])(Lt,Et,Ut,!1,null,"3cb49cbf",null)),Mt=It.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"reset"}},[a("div",{staticClass:"reset-box"},[a("h1",[t._v("Reset Password")]),a("div",{staticClass:"text-box",class:{invalid:t.$v.password.$error}},[a("label",{attrs:{for:"password"}},[t._v("변경할 비밀번호 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",name:"password",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{blur:function(e){return t.$v.password.$touch()},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.$v.password.$error?a("p",[t._v("최소 6자 이상 최대 15자 이하로 작성하세요.")]):t._e()]),a("div",{staticClass:"text-box",class:{invalid:t.$v.confirmPassword.$error}},[a("label",{attrs:{for:"confirm-password"}},[t._v("비밀번호확인 : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],attrs:{id:"confirm-password",name:"confirmPassword",type:"password",placeholder:"ConfirmPassword"},domProps:{value:t.confirmPassword},on:{blur:function(e){return t.$v.confirmPassword.$touch()},input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}}),t.$v.confirmPassword.$error?a("p",[t._v("패스워드가 일치하지 않습니다.")]):t._e()]),a("button",{staticClass:"btn",attrs:{disabled:t.$v.$invalid},on:{click:t.updatePassword}},[t._v("비밀번호 변경")])])])},Dt=[],Ft={data:function(){return{password:"",confirmPassword:""}},validations:{password:{required:rt["required"],minLength:Object(rt["minLength"])(6),maxLength:Object(rt["maxLength"])(15)},confirmPassword:{sameAs:Object(rt["sameAs"])("password")}},methods:{updatePassword:function(){var t=this;this.$http.post("/api/login/reset/"+this.$route.params.token,{password:this.password}).then((function(e){alert(e.data.result),t.$router.push("/")}))}}},Bt=Ft,Vt=(a("12dc"),Object(u["a"])(Bt,Tt,Dt,!1,null,"ef1fc522",null)),Jt=Vt.exports,Rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},zt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movies"},[a("p",[t._v("basket page")])])}],Gt={},Ht=Gt,Kt=Object(u["a"])(Ht,Rt,zt,!1,null,null,null),Qt=Kt.exports,Wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movies"},[a("p",[t._v("orders page")])])}],Yt={},Zt=Yt,te=Object(u["a"])(Zt,Wt,Xt,!1,null,null,null),ee=te.exports,ae=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},re=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movies"},[a("p",[t._v("new comments page")])])}],se={},ne=se,ie=Object(u["a"])(ne,ae,re,!1,null,null,null),oe=ie.exports,le=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ue=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movies"},[a("p",[t._v("edit comments page")])])}],de={},ce=de,me=Object(u["a"])(ce,le,ue,!1,null,null,null),pe=me.exports,ve=a("2f62");r["a"].use(ve["a"]);var he=new ve["a"].Store({state:{username:null,token:null,isAdmin:null},getters:{username:function(t){return t.username},isAuthenticated:function(t){return null!==t.token},isAdmin:function(t){return"true"==t.isAdmin},token:function(t){return t.token}},mutations:{clearAuthData:function(t){t.username=null,t.token=null,t.isAdmin=null},authUser:function(t,e){t.token=e.token,t.username=e.username,t.isAdmin=e.isAdmin}},actions:{tryAutoLogin:function(t){var e=t.commit,a=localStorage.getItem("access_token"),r=localStorage.getItem("username"),s=localStorage.getItem("isAdmin");a&&e("authUser",{token:a,username:r,isAdmin:s})},logout:function(t){var e=t.commit;e("clearAuthData"),localStorage.removeItem("access_token"),localStorage.removeItem("username"),localStorage.removeItem("isAdmin")}}});r["a"].use(m["a"]);var fe=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"index",components:{header:b,default:k}},{path:"/products",name:"products",components:{header:b,default:j}},{path:"/products/tops",name:"tops",components:{header:b,default:I}},{path:"/products/bottoms",name:"bottoms",components:{header:b,default:V}},{path:"/products/accs",name:"accs",components:{header:b,default:K}},{path:"/products/new",name:"createProduct",components:{header:b,default:ot}},{path:"/products/:id",name:"details",components:{header:b,default:tt}},{path:"/products/:id/edit",name:"editProduct",components:{header:b,default:pt}},{path:"/login",name:"login",components:{header:b,default:_t}},{path:"/logout",name:"logout",components:{header:b,default:Pt}},{path:"/signup",name:"signUp",components:{header:b,default:yt}},{path:"/forgot",name:"forgot",components:{header:b,default:Mt}},{path:"/reset/:token",name:"reset",components:{header:b,default:Jt}},{path:"/basket",name:"basket",components:{header:b,default:Qt},beforeEnter:function(t,e,a){he.state.token?a():(alert("login first please"),a("/login"))}},{path:"/orders",name:"orders",components:{header:b,default:ee},beforeEnter:function(t,e,a){he.state.token?a():(alert("login first please"),a("/login"))}},{path:"/products/:id/comments/new",name:"newComments",components:{header:b,default:oe}},{path:"/products/:id/comments/:comments_id/edit",name:"editComments",components:{header:b,default:pe}}]}),ge=a("bc3a"),be=a.n(ge),_e=a("1dce"),$e=a.n(_e);r["a"].use($e.a),r["a"].prototype.$http=be.a,r["a"].config.productionTip=!1,new r["a"]({router:fe,store:he,render:function(t){return t(c)}}).$mount("#app")},"60f2":function(t,e,a){},"64a9":function(t,e,a){},"6f91":function(t,e,a){},"7bd1":function(t,e,a){"use strict";var r=a("23cd"),s=a.n(r);s.a},8505:function(t,e,a){"use strict";var r=a("6f91"),s=a.n(r);s.a},aad8:function(t,e,a){},adac:function(t,e,a){},eb3b:function(t,e,a){},fe7d:function(t,e,a){}});
//# sourceMappingURL=app.6415cfda.js.map