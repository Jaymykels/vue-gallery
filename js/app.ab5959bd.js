(function(t){function e(e){for(var a,i,o=e[0],s=e[1],c=e[2],d=0,f=[];d<o.length;d++)i=o[d],r[i]&&f.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(f.length)f.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(l.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},l=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-gallery/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=s;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"113a":function(t,e,n){},"1b3d":function(t,e,n){"use strict";var a=n("113a"),r=n.n(a);r.a},"1fc2":function(t,e,n){},"353d":function(t,e,n){"use strict";var a=n("1fc2"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Gallery")],1)},l=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-center lg:my-12 my-4 mx-auto lg:px-12 px-4"},[n("SearchInput",{attrs:{loading:t.loading},on:{search:function(e){return t.search(e)},reset:function(e){return t.load()}}}),n("div",{staticClass:"mx-auto z-10 w-3/4 grid"},t._l(t.items||Array(6).fill({}),function(e,a){return n("ImageCard",{key:a,attrs:{data:e,loading:t.loading},nativeOn:{click:function(n){return t.view(e)}}})}),1),t.modal?n("div",{staticClass:"fixed inset-0 z-50 overflow-auto bg-smoke flex",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.modal=!1}}},[n("span",{staticClass:"absolute inset-y-auto right-0 p-16",on:{click:function(e){t.modal=!1}}},[n("svg",{staticClass:"h-6 w-6 fill-current text-white",attrs:{role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("title",[t._v("Close")]),n("path",{attrs:{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}})])]),n("Preview",{attrs:{image:t.item}})],1):t._e()],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-300 lg:h-64 h-32 lg:-mb-12 -mb-6"},[n("div",{staticClass:"lg:py-24 lg:px-24 px-8 py-8"},[t.isSearch?n("div",{staticClass:"flex justify-between"},[n("h1",{staticClass:"text-gray-800 lg:pl-10 lg:text-4xl text-xl font-semibold"},[t._v("\n        "+t._s(t.loading?"Searching for ":"Search Results for ")+"\n        "),n("span",{staticClass:"text-gray-500"},[t._v('"'+t._s(t.keyword)+'"')])]),n("svg",{staticClass:"fill-current cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 18 18"},on:{click:function(e){return t.reset()}}},[n("path",{attrs:{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"}})])]):n("div",{staticClass:"relative"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"w-full h-16 pl-16 rounded focus:outline-none text-xl text-black px-8 shadow-lg",attrs:{type:"search",placeholder:"Search for photo"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),n("svg",{staticClass:"absolute m-6 svg-icon fill-current top-0",attrs:{width:"20",height:"20",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896\n          c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519\n          c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461\n          s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"}})])])])])},c=[],u={props:{loading:{type:Boolean,default:!1}},data:function(){return{keyword:"",isSearch:!1}},methods:{search:function(){this.isSearch=!0,this.$emit("search",this.keyword)},reset:function(){this.isSearch=!1,this.keyword="",this.$emit("reset")}}},d=u,f=n("2877"),p=Object(f["a"])(d,s,c,!1,null,null,null),h=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2 w-full h-full"},[n("figure",{staticClass:"overflow-hidden rounded-lg relative"},[t.loading?n("SkelentonBox",{attrs:{width:"100%",height:Math.floor(200*Math.random()+200)+"px"}}):n("img",{staticClass:"block h-auto w-full cursor-pointer",attrs:{src:t.data.urls.small,alt:"Unplash Image"}}),t.data.user||t.loading?n("div",{staticClass:"absolute p-4 bottom-0 w-full text-white antialiased",staticStyle:{background:"linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%)"}},[t.loading?n("div",t._l(2,function(t){return n("SkelentonBox",{key:t})}),1):n("div",[n("p",[t._v(t._s(t.data.user.name))]),n("p",{staticClass:"text-xs"},[t._v(t._s(t.data.user.location))])])]):t._e()],1)])},m=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"loading",style:{height:t.height,width:t.computedWidth}})},b=[],y=(n("c5f6"),{props:{maxWidth:{default:100,type:Number},minWidth:{default:80,type:Number},height:{default:"1em",type:String},width:{default:null,type:String}},computed:{computedWidth:function(){return this.width||"".concat(Math.floor(Math.random()*(this.maxWidth-this.minWidth)+this.minWidth),"%")}}}),w=y,x=(n("1b3d"),Object(f["a"])(w,v,b,!1,null,null,null)),_=x.exports,C={props:{data:{type:Object,default:function(){}},loading:{type:Boolean,default:!0}},components:{SkelentonBox:_}},k=C,S=Object(f["a"])(k,g,m,!1,null,null,null),O=S.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-8 w-full max-w-lg flex flex-col m-auto"},[n("figure",{staticClass:"overflow-hidden rounded-lg shadow-lg"},[n("img",{staticClass:"h-auto block w-full",attrs:{src:t.image.urls.full,alt:"Unplash Image"}}),n("div",{staticClass:"p-4 pl-10 bg-white"},[n("h3",{staticClass:"text-gray-800 font-bold"},[t._v(t._s(t.image.user.name))]),n("p",{staticClass:"py-2 text-xs text-gray-600"},[t._v(t._s(t.image.user.location))])])])])},M=[],P={props:{image:{type:Object,default:function(){}}}},$=P,B=Object(f["a"])($,j,M,!1,null,null,null),E=B.exports,W=n("bc3a"),z=n.n(W),I="a17353f670b92d2b48b4d012ae4ccf46c8265131fbf8d4f637d04abfbca132c2",L={components:{SearchInput:h,ImageCard:O,Preview:E},methods:{search:function(t){var e=this;this.loading=!0,z.a.get("https://api.unsplash.com/search/photos?client_id=".concat(I,"&query=").concat(t)).then(function(t){e.items=t.data.results,e.loading=!1}).catch(function(){return alert("Oops! Something happened connecting to server.")})},load:function(){var t=this;this.loading=!0,z.a.get("https://api.unsplash.com/search/photos?client_id=".concat(I,"&query=african")).then(function(e){t.items=e.data.results.slice(0,8),t.loading=!1}).catch(function(){return alert("Oops! Something happened connecting to server.")})},view:function(t){this.modal=!0,this.item=t}},data:function(){return{items:null,loading:!0,modal:!1,item:{}}},mounted:function(){var t=this;setTimeout(function(){t.load()},3e3)}},T=L,N=(n("7c2b"),Object(f["a"])(T,i,o,!1,null,null,null)),q=N.exports,G={name:"app",components:{Gallery:q}},J=G,U=(n("353d"),Object(f["a"])(J,r,l,!1,null,null,null)),A=U.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(A)}}).$mount("#app")},"7c2b":function(t,e,n){"use strict";var a=n("80c6"),r=n.n(a);r.a},"80c6":function(t,e,n){}});
//# sourceMappingURL=app.ab5959bd.js.map