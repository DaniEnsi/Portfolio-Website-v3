(window.webpackJsonp=window.webpackJsonp||[]).push([[75,2,25,54,63,64,65,66],{386:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{type:{type:String,required:!1,default:"block"},iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}}),l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return"repository"===t.type?e("SkeletonLoaderRepository"):"iframe"===t.type?e("SkeletonLoaderIframe",{attrs:{"iframe-url":t.iframeUrl}}):"song"===t.type?e("SkeletonLoaderSong"):"lastfm"===t.type?e("SkeletonLoaderLastfm"):"spinner"===t.type?e("SkeletonLoaderSpinner"):"block"===t.type?e("div",{staticClass:"bg-gray-100 rounded animate-pulse dark:bg-neutral-800"}):"rounded"===t.type?e("div",{staticClass:"bg-gray-100 rounded-full animate-pulse dark:bg-neutral-800"}):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoaderRepository:r(391).default,SkeletonLoaderIframe:r(390).default,SkeletonLoaderSong:r(392).default,SkeletonLoaderLastfm:r(394).default,SkeletonLoaderSpinner:r(393).default})},390:function(t,e,r){"use strict";r.r(e);var n={props:{iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}},l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{class:{"bg-gray-100 dark:bg-neutral-800 rounded animate-pulse":!1===t.itemLoaded}},[t.iframeUrl?e("iframe",{class:{"w-full h-full rounded":!0,invisible:!1===t.itemLoaded},attrs:{src:t.iframeUrl},on:{load:function(e){t.itemLoaded=!0}}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},391:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-md space-y-4 p-4"},[e("div",{staticClass:"rounded-md bg-gray-300 h-5 animate-pulse w-7/12 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"space-y-2"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 w-full animate-pulse dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-4/12 dark:bg-neutral-700/40"})]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-2/6 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})])])])}],!1,null,null,null);e.default=component.exports},392:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-lg cursor-pointer flex space-x-2 p-2 transition-shadow items-center select-none hover:shadow-md"},[e("div",{staticClass:"rounded-md bg-gray-200 flex-shrink-0 h-16 animate-pulse w-16 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"flex-grow space-y-1"},[e("div",{staticClass:"rounded bg-gray-200 h-4 animate-pulse w-2/3 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded bg-gray-200 h-4 animate-pulse w-1/3 dark:bg-neutral-700/40"})])])}],!1,null,null,null);e.default=component.exports},393:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center"},[t("svg",{staticClass:"w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[t("path",{staticClass:"fill-[#888888] dark:fill-white",attrs:{d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}}),this._v(" "),t("path",{attrs:{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"}},[t("animateTransform",{attrs:{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({computed:{getRandomItem:function(){return["w-2/3","w-3/4","w-2/5"][Math.floor(3*Math.random())]}}}),l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"rounded-md flex space-x-4 p-4 transition-colors focus-ring overflow-x-hidden items-center"},[e("div",{staticClass:"flex space-x-4 w-full items-center"},[e("SkeletonLoader",{staticClass:"rounded-md flex-shrink-0 h-16 w-16"}),t._v(" "),e("div",{staticClass:"flex flex-col space-y-1 w-full"},[e("SkeletonLoader",{staticClass:"h-5",class:t.getRandomItem}),t._v(" "),e("SkeletonLoader",{staticClass:"h-5 w-1/3"})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoader:r(386).default})},409:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{filled:{type:Boolean,required:!1,default:!1}}}),l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return!1===t.filled?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}})]):e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])}),[],!1,null,null,null);e.default=component.exports},443:function(t,e,r){"use strict";r.r(e);r(15),r(13),r(33),r(179);var n=r(0).a.extend({props:{name:{type:String,required:!0},language:{type:String,required:!1,default:null},stars:{type:[String,Number],required:!0},top:{type:Boolean,required:!1,default:!1},license:{type:String,required:!1,default:null},description:{type:String,required:!0}},computed:{getLanguageIcon:function(){return{Vue:"Vue.js"}[this.language]||this.language}}}),l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"rounded-lg cursor-pointer flex flex-col h-full p-4 transition-colors text-gray-500 justify-between focus-ring dark:text-neutral-500 hover:bg-gray-200/40 dark:hover:bg-neutral-800/40"},[e("div",{staticClass:"space-y-2"},[e("div",{class:t.top&&"flex justify-between space-x-2"},[e("h3",{staticClass:"text-gray-700 items-center truncate dark:text-neutral-400"},[e("span",{staticClass:"text-gray-400 dark:text-neutral-700"},[t._v("DaniEnsi / ")]),t._v(t._s(t.name)+"\n      ")]),t._v(" "),!0===t.top?e("IconStar",{staticClass:"h-6 text-yellow-600 w-6",attrs:{title:"Top repository",filled:""}}):t._e()],1),t._v(" "),e("p",{staticClass:"text-gray-500 line-clamp-2 dark:text-neutral-500"},[t._v("\n      "+t._s(t.description)+"\n    ")])]),t._v(" "),e("div",{staticClass:"mt-4"},[e("div",{staticClass:"flex items-center justify-between"},[e("span",[t._v("Stars:")]),t._v(" "),e("span",[t._v(t._s(t.stars))])]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("span",[t._v("Language:")]),t._v(" "),e("IconDev",{staticClass:"h-5 w-5",attrs:{brand:t.getLanguageIcon}})],1),t._v(" "),t.license?e("div",{staticClass:"flex items-center justify-between"},[e("span",[t._v("License:")]),t._v(" "),e("span",[t._v(t._s(t.license))])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconStar:r(409).default,IconDev:r(417).default})},557:function(t,e,r){"use strict";r.r(e);r(15),r(13),r(33);var n=r(9),l=(r(45),r(21),r(7),r(34),r(266),r(50),r(0).a.extend({data:function(){return{repos:[]}},fetchOnServer:!1,fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,filter,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return filter=["DaniEnsi"],e.next=3,t.$axios.get("https://api.github.com/users/daniensi/repos?per_page=100");case 3:n=e.sent.data,t.repos=null===(r=null==n?void 0:n.filter((function(t){return!1===t.fork&&!filter.includes(t.name)})))||void 0===r?void 0:r.sort((function(a,b){return(null==b?void 0:b.stargazers_count)-(null==a?void 0:a.stargazers_count)}));case 5:case"end":return e.stop()}}),e)})))()},head:function(){var title="GitHub Repositories";return{title:title,meta:this.$prepareMeta({title:title,description:"My public projects hosted on GitHub."})}}})),o=l,d=r(4),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-gray-500 dark:text-neutral-600"},[t._m(0),t._v(" "),e("main",[!0===t.$fetchState.pending?e("div",{staticClass:"grid gap-4 md:grid-cols-2"},t._l(9,(function(i){return e("SkeletonLoader",{key:"skeleton-".concat(i),attrs:{type:"repository"}})})),1):e("div",{staticClass:"grid gap-4 md:grid-cols-2"},t._l(t.repos,(function(t,r){return e("SmartLink",{key:"repo-".concat(r),attrs:{href:t.html_url,blank:""}},[e("CardRepository",{staticClass:"h-full",attrs:{name:t.name,language:t.language,stars:t.stargazers_count,description:t.description,license:t.license&&t.license.spdx_id,top:0===r}})],1)})),1)])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("header",{staticClass:"space-y-2 my-12 px-4"},[e("h1",{staticClass:"text-gray-900 text-4xl dark:text-neutral-300"},[t._v("Repositories")]),t._v(" "),e("p",[t._v("My public projects on GitHub.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoader:r(386).default,CardRepository:r(443).default,SmartLink:r(90).default})}}]);