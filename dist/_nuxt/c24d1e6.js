(window.webpackJsonp=window.webpackJsonp||[]).push([[67,2,21,22,23,24,36,41,43,45,61,62,63,64],{382:function(t,e,r){"use strict";r.r(e);r(34),r(383);var n=r(0).a.extend({props:{padding:{type:Boolean,required:!1,default:!0},size:{type:String,required:!1,default:"3"},uppercase:{type:Boolean,required:!1,default:!0},bold:{type:Boolean,required:!1,default:!1}}}),l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(["sm","xs"].includes(t.size)?"h3":"h".concat(t.size),{tag:"component",staticClass:"text-lg text-gray-400 dark:text-neutral-700",class:{"px-4":!0===t.padding,"text-2xl":"1"===t.size,"text-xl":"2"===t.size,"text-sm":"sm"===t.size,"text-xs":"xs"===t.size,"text-lg":!["1","2","sm","xs"].includes(t.size),"font-bold":!0===t.bold,"font-medium":!1===t.bold,uppercase:!0===t.uppercase}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{type:{type:String,required:!1,default:"block"},iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}}),l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return"repository"===t.type?e("SkeletonLoaderRepository"):"iframe"===t.type?e("SkeletonLoaderIframe",{attrs:{"iframe-url":t.iframeUrl}}):"song"===t.type?e("SkeletonLoaderSong"):"lastfm"===t.type?e("SkeletonLoaderLastfm"):"spinner"===t.type?e("SkeletonLoaderSpinner"):"block"===t.type?e("div",{staticClass:"bg-gray-100 rounded animate-pulse dark:bg-neutral-800"}):"rounded"===t.type?e("div",{staticClass:"bg-gray-100 rounded-full animate-pulse dark:bg-neutral-800"}):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoaderRepository:r(391).default,SkeletonLoaderIframe:r(390).default,SkeletonLoaderSong:r(392).default,SkeletonLoaderLastfm:r(394).default,SkeletonLoaderSpinner:r(393).default})},389:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}})])}),[],!1,null,null,null);e.default=component.exports},390:function(t,e,r){"use strict";r.r(e);var n={props:{iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}},l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{class:{"bg-gray-100 dark:bg-neutral-800 rounded animate-pulse":!1===t.itemLoaded}},[t.iframeUrl?e("iframe",{class:{"w-full h-full rounded":!0,invisible:!1===t.itemLoaded},attrs:{src:t.iframeUrl},on:{load:function(e){t.itemLoaded=!0}}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},391:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-md space-y-4 p-4"},[e("div",{staticClass:"rounded-md bg-gray-300 h-5 animate-pulse w-7/12 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"space-y-2"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 w-full animate-pulse dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-4/12 dark:bg-neutral-700/40"})]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-2/6 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})])])])}],!1,null,null,null);e.default=component.exports},392:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-lg cursor-pointer flex space-x-2 p-2 transition-shadow items-center select-none hover:shadow-md"},[e("div",{staticClass:"rounded-md bg-gray-200 flex-shrink-0 h-16 animate-pulse w-16 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"flex-grow space-y-1"},[e("div",{staticClass:"rounded bg-gray-200 h-4 animate-pulse w-2/3 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded bg-gray-200 h-4 animate-pulse w-1/3 dark:bg-neutral-700/40"})])])}],!1,null,null,null);e.default=component.exports},393:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center"},[t("svg",{staticClass:"w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[t("path",{staticClass:"fill-[#888888] dark:fill-white",attrs:{d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}}),this._v(" "),t("path",{attrs:{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"}},[t("animateTransform",{attrs:{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({computed:{getRandomItem:function(){return["w-2/3","w-3/4","w-2/5"][Math.floor(3*Math.random())]}}}),l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"rounded-md flex space-x-4 p-4 transition-colors focus-ring overflow-x-hidden items-center"},[e("div",{staticClass:"flex space-x-4 w-full items-center"},[e("SkeletonLoader",{staticClass:"rounded-md flex-shrink-0 h-16 w-16"}),t._v(" "),e("div",{staticClass:"flex flex-col space-y-1 w-full"},[e("SkeletonLoader",{staticClass:"h-5",class:t.getRandomItem}),t._v(" "),e("SkeletonLoader",{staticClass:"h-5 w-1/3"})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoader:r(387).default})},395:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},398:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}})])}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,r){"use strict";r.r(e);r(13),r(33);var n=r(0).a.extend({props:{meta:{type:Object,required:!0,default:function(){}}},data:function(){return{hovered:!1}}}),l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.meta?e("div",{staticClass:"overflow-hidden",on:{mouseover:function(e){t.hovered=!0},mouseleave:function(e){t.hovered=!1}}},[e("SmartLink",{staticClass:"rounded-lg cursor-pointer space-y-2 focus-ring",attrs:{title:t.meta.title,href:{name:"blog-slug",params:{slug:t.meta.slug}}}},[e("div",{staticClass:"relative"},[e("SmartImage",{staticClass:"rounded h-40 w-full filter dark:brightness-75",attrs:{src:t.meta.image}}),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.hovered,expression:"hovered"}],staticClass:"flex bg-black/50 inset-0 absolute items-center justify-center"},[e("IconLink",{staticClass:"h-6 text-white w-6"})],1)])],1),t._v(" "),e("div",{staticClass:"flex flex-col space-y-1"},[e("h2",{staticClass:"font-medium text-lg leading-tight text-gray-700 truncate dark:text-gray-200 hover:underline"},[t._v("\n        "+t._s(t.meta.title)+"\n      ")]),t._v(" "),e("p",{staticClass:"text-neutral-500 line-clamp-2"},[t._v("\n        "+t._s(t.meta.description)+"\n      ")])])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartImage:r(134).default,IconLink:r(389).default,SmartLink:r(89).default})},403:function(t,e,r){"use strict";r.r(e);r(13),r(33);var n=r(0).a.extend({props:{meta:{type:Object,required:!0,default:function(){}}}}),l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.meta?e("SmartLink",{staticClass:"rounded-lg cursor-pointer flex space-x-4 p-3 transition-colors focus-ring items-center md:px-4 hover:bg-gray-200/40 dark:hover:bg-neutral-800/40",attrs:{title:t.meta.title,href:{name:"blog-slug",params:{slug:t.meta.slug}}}},[e("SmartImage",{staticClass:"rounded flex-shrink-0 h-20 w-24 filter dark:brightness-75",attrs:{src:t.meta.image}}),t._v(" "),e("div",{staticClass:"flex flex-col overflow-x-hidden"},[e("h2",{staticClass:"font-medium text-lg text-gray-800 truncate dark:text-gray-200"},[t._v("\n      "+t._s(t.meta.title)+"\n    ")]),t._v(" "),e("p",{staticClass:"text-neutral-500 line-clamp-2"},[t._v("\n      "+t._s(t.meta.description)+"\n    ")])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartImage:r(134).default,SmartLink:r(89).default})},404:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{meta:{type:Object,required:!0,default:function(){}}},computed:{getPostDate:function(){return this.meta&&this.meta.date?this.$getReadableDate(this.meta.date):null}}}),l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.meta?e("SmartLink",{staticClass:"rounded-lg cursor-pointer flex flex-col p-3 px-4 transition-colors focus-ring truncate hover:bg-gray-200/40 dark:hover:bg-neutral-800/40",attrs:{title:t.meta.title,href:{name:"blog-slug",params:{slug:t.meta.slug}}}},[e("h2",{staticClass:"font-medium text-lg text-gray-800 truncate dark:text-gray-200"},[t._v("\n    "+t._s(t.meta.title)+"\n  ")]),t._v(" "),e("div",{staticClass:"flex space-x-1 items-center"},[t.meta.special?e("IconFire",{directives:[{name:"tippy",rawName:"v-tippy",value:{content:"Popular Posts",placement:"bottom"},expression:"{\n        content: 'Popular Posts',\n        placement: 'bottom',\n      }"}],staticClass:"flex-shrink-0 h-5 text-red-600 w-5 dark:text-red-500"}):t._e(),t._v(" "),e("div",{staticClass:"flex space-x-2 text-gray-700 truncate items-center dark:text-gray-400"},[e("IconClock",{staticClass:"flex-shrink-0 h-5 w-5"}),t._v(" "),e("span",{staticClass:"truncate"},[t._v(t._s(t.getPostDate))])],1)],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconFire:r(395).default,IconClock:r(398).default,SmartLink:r(89).default})},414:function(t,e,r){"use strict";r.r(e);r(13),r(33);var n=r(0).a.extend({props:{post:{type:Object,required:!0,default:function(){}},type:{type:String,required:!1,default:"normal"}},data:function(){return{hovered:!1}},computed:{getPostMeta:function(){var t,e,r,n,l;if(!this.post)return{};var image=(null===(t=this.post)||void 0===t?void 0:t.image)||"/assets/images/posts/".concat(null===(e=this.post)||void 0===e?void 0:e.slug,".jpg")||"";return{title:this.post.title||"",description:this.post.description||"",slug:this.post.slug||"",special:this.post.special||!1,tag:(null===(n=null===(r=this.post)||void 0===r?void 0:r.tags)||void 0===n?void 0:n[0])||"",date:null===(l=this.post)||void 0===l?void 0:l.createdAt,image:image}}}}),l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return"normal"===t.type?e("CardPostNormal",{attrs:{meta:t.getPostMeta}}):"text"===t.type?e("CardPostText",{attrs:{meta:t.getPostMeta}}):"text-only-title"===t.type?e("CardPostTextTitle",{attrs:{meta:t.getPostMeta}}):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardPostNormal:r(402).default,CardPostText:r(403).default,CardPostTextTitle:r(404).default})},444:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}})])}),[],!1,null,null,null);e.default=component.exports},527:function(t,e,r){"use strict";r.r(e);var n=r(12),l=(r(47),r(15),r(41),r(42),r(113)),o=r(9);r(45),r(420),r(21),r(7),r(34),r(49),r(452),r(24),r(457),r(459),r(460),r(461),r(462),r(463),r(464),r(465),r(466),r(467),r(468),r(469),r(470),r(471),r(472),r(473),r(26),r(265),r(22),r(68),r(13),r(33),r(474),r(476),r(477),r(478),r(479),r(480),r(481),r(483),r(484),r(485),r(486),r(487),r(488),r(489),r(40),r(39);function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){d=!0,l=t},f:function(){try{o||null==r.return||r.return()}finally{if(d)throw l}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var f=r(0).a.extend({data:function(){return{query:this.$route.query,pagination:0,posts:{latest:[],discord:[],linux:[],rest:[]},categories:["Discord","MacOS","Artificial Intelligence","Frontend","Site"],selectedCategory:"MacOS"}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,l,o,c,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog").sortBy("createdAt","desc").limit(3).without(["body"]).fetch();case 2:return r=e.sent,e.next=5,t.$content("blog").where({tags:{$contains:"discord"}}).sortBy("createdAt","desc").limit(3).without(["body"]).fetch();case 5:return n=e.sent,e.next=8,t.$content("blog").where({tags:{$contains:"MacOS"}}).sortBy("createdAt","desc").limit(3).without(["body"]).fetch();case 8:return l=e.sent,e.next=11,t.$content("blog").sortBy("createdAt","desc").skip(3).without(["body"]).fetch();case 11:o=e.sent,c=d(o);try{for(v=function(){var t=f.value,e=function(e){return e.slug===t.slug};-1===n.findIndex(e)&&-1===l.findIndex(e)||(o=o.filter((function(e){return e.slug!==t.slug})))},c.s();!(f=c.n()).done;)v()}catch(t){c.e(t)}finally{c.f()}t.posts={latest:r||[],discord:n||[],linux:l||[],rest:o||[]};case 15:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Blog",meta:this.$prepareMeta({title:"Dani's Blog",description:"Dani's blog page in which Eggsy talks about daily life, experience, holds what he wants to show or tell what he wants to show in a more organized and professional way."})}},computed:{getCategoryResults:function(){var t=this,e=this.posts,r=e.rest.concat(e.discord,e.linux).filter((function(e){var r,n;return null===(r=null==e?void 0:e.tags)||void 0===r?void 0:r.includes(null===(n=t.selectedCategory)||void 0===n?void 0:n.toLowerCase())}));return Object(l.a)(new Set(Object(l.a)(r).sort((function(a,b){return(null==a?void 0:a.createdAt)&&(null==b?void 0:b.createdAt)?a.createdAt>b.createdAt?-1:a.createdAt<b.createdAt?1:0:0}))))},isFetchPending:function(){var t;return!0===(null===(t=this.$fetchState)||void 0===t?void 0:t.pending)&&null!==this.$fetchState.error},getFilteredPosts:function(){var t=this.query,q=t.q,e=t.search,r=t.query,n=t.ara,o=t.sorgu,d=t.etiket;if(!(q||e||r||n||o||d))return!1;q=null==q?void 0:q.toLowerCase(),e=null==e?void 0:e.toLowerCase(),r=null==r?void 0:r.toLowerCase(),n=null==n?void 0:n.toLowerCase(),o=null==o?void 0:o.toLowerCase(),d=null==d?void 0:d.toLowerCase();var c=this.posts,f=c.latest,v=c.discord,m=c.linux,h=c.rest,y=[].concat(Object(l.a)(f),Object(l.a)(v),Object(l.a)(m),Object(l.a)(h));if(d)return y.filter((function(t){var e,r;return null===(r=null===(e=t.tags)||void 0===e?void 0:e.filter((function(t){var e;return null===(e=null==t?void 0:t.toLowerCase())||void 0===e?void 0:e.includes(d||"")})))||void 0===r?void 0:r.length}));var x=y.filter((function(t){var l,d,c,f;return(null===(d=null===(l=t.title)||void 0===l?void 0:l.toLowerCase())||void 0===d?void 0:d.includes(q||e||r||n||o||""))||(null===(f=null===(c=t.description)||void 0===c?void 0:c.toLowerCase())||void 0===f?void 0:f.includes(q||e||r||n||o||""))}));return Object(l.a)(new Map(x.map((function(t){return[t.title,t]}))).values())},getTotalPages:function(){var t,e;return Math.ceil((null===(e=null===(t=this.posts)||void 0===t?void 0:t.rest)||void 0===e?void 0:e.length)/15)},getPaginatedPosts:function(){var t=15*this.pagination,e=t+15;return this.posts.rest.slice(t,e)}},watch:{"$route.query":"setQuery"},mounted:function(){this.setQuery()},methods:{setQuery:function(){this.query=this.$route.query}}}),v=r(4),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"pt-6"},[!1===t.getFilteredPosts?e("div",[e("Title",[t._v(" Neue Artikel ")]),t._v(" "),e("div",{staticClass:"mt-2 grid px-4 gap-4 md:grid-cols-3"},[t.isFetchPending?t._l(3,(function(i){return e("SkeletonLoader",{key:i,attrs:{type:"repository"}})})):t._l(t.posts.latest,(function(t,r){return e("CardPost",{key:"latest-".concat(r),attrs:{post:t}})}))],2),t._v(" "),e("div",{staticClass:"space-y-6 mt-20"},[e("div",{staticClass:"flex space-x-4 px-4 overflow-x-auto"},t._l(t.categories,(function(text){return e("div",{key:text,staticClass:"rounded-lg cursor-pointer py-1 px-6 transition-colors text-gray-600 select-none dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800",class:t.selectedCategory===text&&"bg-gray-100 dark:bg-neutral-800",attrs:{title:t.selectedCategory===text?"All ".concat(text," See your sent"):""},on:{click:function(e){t.selectedCategory!==text?t.selectedCategory=text:t.$router.push({query:{etiket:text.toLowerCase()}})}}},[t._v("\n          "+t._s(text)+"\n        ")])})),0),t._v(" "),e("div",{staticClass:"flex flex-col space-y-4 max-h-50vh overflow-y-auto md:overflow-y-visible md:grid md:grid-cols-2 md:max-h-full md:gap-4 md:space-y-0"},t._l(t.getCategoryResults,(function(r,n){return e("CardPost",{key:"".concat(t.selectedCategory,"-").concat(n),attrs:{post:r,type:"text"}})})),1)]),t._v(" "),e("div",{staticClass:"mt-16"},[e("Title",[t._v(" All posts ")]),t._v(" "),e("div",{staticClass:"mt-4 grid gap-3 md:grid-cols-3"},[t.isFetchPending?t._l(18,(function(i){return e("SkeletonLoader",{key:i,attrs:{type:"repository"}})})):t._l(t.getPaginatedPosts,(function(t,r){return e("CardPost",{key:"linux-".concat(r),attrs:{post:t,type:"text-only-title"}})}))],2),t._v(" "),e("div",{staticClass:"flex flex-wrap space-x-2 mt-4 items-center justify-center"},t._l(t.getTotalPages,(function(r){return e("div",{key:"pagination-".concat(r),staticClass:"rounded-full cursor-pointer flex font-medium bg-gray-200 h-10 transition-colors ring-1 ring-gray-300 text-gray-900 w-10 items-center justify-center select-none dark:bg-neutral-800 dark:ring-neutral-800 dark:text-gray-100 dark:hover:bg-neutral-700 hover:bg-gray-300",class:{"bg-gray-300 dark:bg-neutral-700":t.pagination+1===r},on:{click:function(e){t.pagination=r-1}}},[t._v("\n          "+t._s(r)+"\n        ")])})),0)],1)],1):"object"===Object(n.a)(t.getFilteredPosts)?e("div",[!1===t.isFetchPending&&0===t.getFilteredPosts.length?e("div",{staticClass:"space-y-10 mt-8"},[e("h1",{staticClass:"font-semibold px-4 text-2xl text-gray-900 md:text-4xl dark:text-gray-100"},[t._v("\n        No posts for your call were found.\n      ")]),t._v(" "),t._m(0),t._v(" "),e("Button",{attrs:{href:{name:"blog"}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconHome",{staticClass:"h-6 w-6"})]},proxy:!0}],null,!1,958992574)},[t._v(" "),e("span",[t._v("Blog Homepage")])])],1):e("div",{staticClass:"space-y-2 mt-8"},[e("Title",[t._v("\n        Serch Results:\n      ")]),t._v(" "),e("div",{staticClass:"space-y-2"},t._l(t.getFilteredPosts,(function(t,r){return e("CardPost",{key:"linux-".concat(r),attrs:{post:t,type:"text"}})})),1)],1)]):t._e()])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"px-4 md:w-4/6"},[e("h3",{staticClass:"text-lg text-gray-900 dark:text-gray-100"},[t._v("\n          Methods you can try:\n        ")]),t._v(" "),e("ul",{staticClass:"list-disc pl-4 text-gray-700 dark:text-gray-300"},[e("li",[t._v("Try using keywords in your search.")]),t._v(" "),e("li",[t._v("Try using Tags.")]),t._v(" "),e("li",[t._v("\n            Search with words in the title or description of the post\n            Try to do it.\n          ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:r(382).default,SkeletonLoader:r(387).default,CardPost:r(414).default,IconHome:r(444).default,Button:r(90).default})}}]);