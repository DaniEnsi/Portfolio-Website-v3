(window.webpackJsonp=window.webpackJsonp||[]).push([[96,2,17,33,41,49,60,61,62,63,64,65],{380:function(t,e,l){var r=l(5),n=l(38),o=l(20),d=/"/g,c=r("".replace);t.exports=function(t,e,l,r){var f=o(n(t)),v="<"+e;return""!==l&&(v+=" "+l+'="'+c(o(r),d,"&quot;")+'"'),v+">"+f+"</"+e+">"}},381:function(t,e,l){var r=l(6);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},382:function(t,e,l){"use strict";l.r(e);l(34),l(383);var r=l(0).a.extend({props:{padding:{type:Boolean,required:!1,default:!0},size:{type:String,required:!1,default:"3"},uppercase:{type:Boolean,required:!1,default:!0},bold:{type:Boolean,required:!1,default:!1}}}),n=l(4),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(["sm","xs"].includes(t.size)?"h3":"h".concat(t.size),{tag:"component",staticClass:"text-lg text-gray-400 dark:text-neutral-700",class:{"px-4":!0===t.padding,"text-2xl":"1"===t.size,"text-xl":"2"===t.size,"text-sm":"sm"===t.size,"text-xs":"xs"===t.size,"text-lg":!["1","2","sm","xs"].includes(t.size),"font-bold":!0===t.bold,"font-medium":!1===t.bold,uppercase:!0===t.uppercase}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,l){"use strict";var r=l(3),n=l(380);r({target:"String",proto:!0,forced:l(381)("bold")},{bold:function(){return n(this,"b","","")}})},387:function(t,e,l){"use strict";l.r(e);var r=l(0).a.extend({props:{type:{type:String,required:!1,default:"block"},iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}}),n=l(4),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return"repository"===t.type?e("SkeletonLoaderRepository"):"iframe"===t.type?e("SkeletonLoaderIframe",{attrs:{"iframe-url":t.iframeUrl}}):"song"===t.type?e("SkeletonLoaderSong"):"lastfm"===t.type?e("SkeletonLoaderLastfm"):"spinner"===t.type?e("SkeletonLoaderSpinner"):"block"===t.type?e("div",{staticClass:"bg-gray-100 rounded animate-pulse dark:bg-neutral-800"}):"rounded"===t.type?e("div",{staticClass:"bg-gray-100 rounded-full animate-pulse dark:bg-neutral-800"}):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoaderRepository:l(391).default,SkeletonLoaderIframe:l(390).default,SkeletonLoaderSong:l(392).default,SkeletonLoaderLastfm:l(394).default,SkeletonLoaderSpinner:l(393).default})},390:function(t,e,l){"use strict";l.r(e);var r={props:{iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}},n=l(4),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:{"bg-gray-100 dark:bg-neutral-800 rounded animate-pulse":!1===t.itemLoaded}},[t.iframeUrl?e("iframe",{class:{"w-full h-full rounded":!0,invisible:!1===t.itemLoaded},attrs:{src:t.iframeUrl},on:{load:function(e){t.itemLoaded=!0}}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},391:function(t,e,l){"use strict";l.r(e);var r=l(4),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-md space-y-4 p-4"},[e("div",{staticClass:"rounded-md bg-gray-300 h-5 animate-pulse w-7/12 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"space-y-2"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 w-full animate-pulse dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-4/12 dark:bg-neutral-700/40"})]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-2/6 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})])])])}],!1,null,null,null);e.default=component.exports},392:function(t,e,l){"use strict";l.r(e);var r=l(4),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-lg cursor-pointer flex space-x-2 p-2 transition-shadow items-center select-none hover:shadow-md"},[e("div",{staticClass:"rounded-md bg-gray-200 flex-shrink-0 h-16 animate-pulse w-16 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"flex-grow space-y-1"},[e("div",{staticClass:"rounded bg-gray-200 h-4 animate-pulse w-2/3 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded bg-gray-200 h-4 animate-pulse w-1/3 dark:bg-neutral-700/40"})])])}],!1,null,null,null);e.default=component.exports},393:function(t,e,l){"use strict";l.r(e);var r=l(4),component=Object(r.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center"},[t("svg",{staticClass:"w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[t("path",{staticClass:"fill-[#888888] dark:fill-white",attrs:{d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}}),this._v(" "),t("path",{attrs:{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"}},[t("animateTransform",{attrs:{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,l){"use strict";l.r(e);var r=l(0).a.extend({computed:{getRandomItem:function(){return["w-2/3","w-3/4","w-2/5"][Math.floor(3*Math.random())]}}}),n=l(4),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"rounded-md flex space-x-4 p-4 transition-colors focus-ring overflow-x-hidden items-center"},[e("div",{staticClass:"flex space-x-4 w-full items-center"},[e("SkeletonLoader",{staticClass:"rounded-md flex-shrink-0 h-16 w-16"}),t._v(" "),e("div",{staticClass:"flex flex-col space-y-1 w-full"},[e("SkeletonLoader",{staticClass:"h-5",class:t.getRandomItem}),t._v(" "),e("SkeletonLoader",{staticClass:"h-5 w-1/3"})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoader:l(387).default})},395:function(t,e,l){"use strict";l.r(e);var r=l(4),component=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,l){"use strict";l.r(e);var r=l(4),component=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M17.886 9.874L9.89 4.429a2.46 2.46 0 00-2.57-.126c-.4.219-.734.544-.966.942A2.594 2.594 0 006 6.559v10.887c0 .462.123.916.356 1.313.232.396.566.72.965.939a2.46 2.46 0 002.569-.127l7.996-5.445c.343-.233.624-.55.818-.92a2.597 2.597 0 000-2.41 2.536 2.536 0 00-.818-.92v-.002 0z",fill:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,l){"use strict";l.r(e);l(15),l(177);var r=l(0).a.extend({props:{name:{type:String,required:!0},artist:{type:String,required:!1,default:null},url:{type:String,required:!0},image:{type:String,required:!0},nowPlaying:{type:Boolean,required:!1,default:!1},plays:{type:Number,required:!1,default:null}}}),n=l(4),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("SmartLink",{staticClass:"rounded-md flex space-x-4 p-4 transition-colors focus-ring overflow-x-hidden items-center hover:bg-gray-100 dark:hover:bg-neutral-800",class:{"justify-between":null!==t.plays},attrs:{href:t.url,title:t.name,blank:""}},[e("div",{staticClass:"flex space-x-4 truncate items-center"},[e("div",{staticClass:"flex-shrink-0 h-16 w-16 relative"},[e("SmartImage",{staticClass:"rounded-md",attrs:{src:t.image}}),t._v(" "),t.nowPlaying?e("div",{staticClass:"rounded-md flex bg-black/75 inset-0 items-center justify-center absolute",attrs:{title:"Playing now..."}},[e("IconPlay",{staticClass:"h-6 text-neutral-300 w-6"})],1):t._e()],1),t._v(" "),e("div",{staticClass:"flex flex-col truncate"},[e("span",{staticClass:"text-neutral-700 truncate dark:text-neutral-400"},[t._v(t._s(t.name))]),t._v(" "),t.artist?e("span",{staticClass:"text-xs truncate"},[t._v("by "+t._s(t.artist))]):t._e()])]),t._v(" "),t.plays?e("div",{staticClass:"rounded-full font-semibold flex-shrink-0 text-sm p-2"},[t._v("\n    "+t._s(t.plays)+" plays\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartImage:l(134).default,IconPlay:l(409).default,SmartLink:l(89).default})},419:function(t,e,l){"use strict";l.r(e);var r=l(4),component=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}})])}),[],!1,null,null,null);e.default=component.exports},445:function(t,e,l){"use strict";l.r(e);var r=l(4),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("main",{staticClass:"space-y-20"},[e("div",[e("Title",{staticClass:"mb-4"},[t._v("Details")]),t._v(" "),e("div",{staticClass:"grid px-4 gap-x-0 gap-y-4 md:gap-x-12 md:grid-cols-2"},[e("div",{staticClass:"flex space-x-4 items-center"},[e("span",[t._v("Profile")]),t._v(" "),e("div",{staticClass:"flex space-x-2 w-full justify-end items-center"},[e("SkeletonLoader",{staticClass:"h-5 w-1/2"}),t._v(" "),e("SkeletonLoader",{staticClass:"h-6 w-6 !rounded-full"})],1)]),t._v(" "),e("div",{staticClass:"flex space-x-4 items-center justify-between"},[e("span",{staticClass:"flex-shrink-0"},[t._v("Total Plays")]),t._v(" "),e("div",{staticClass:"flex space-x-2 w-full justify-end items-center"},[e("SkeletonLoader",{staticClass:"h-5 w-1/3"}),t._v(" "),e("SkeletonLoader",{staticClass:"h-6 w-6 !rounded-full"})],1)]),t._v(" "),e("div",{staticClass:"flex space-x-4 items-center justify-between"},[e("span",{staticClass:"flex-shrink-0"},[t._v("Account Age")]),t._v(" "),e("div",{staticClass:"flex space-x-2 w-full justify-end items-center"},[e("SkeletonLoader",{staticClass:"h-5 w-1/4"}),t._v(" "),e("SkeletonLoader",{staticClass:"h-6 w-6 !rounded-full"})],1)])])],1),t._v(" "),e("div",[e("Title",{staticClass:"mb-4"},[t._v("Recent Songs")]),t._v(" "),e("div",{staticClass:"grid gap-2 md:grid-cols-2"},t._l(15,(function(t){return e("SkeletonLoader",{key:t,attrs:{type:"lastfm"}})})),1)],1),t._v(" "),e("div",[e("Title",{staticClass:"mb-4"},[t._v("Top Songs (last 7 days)")]),t._v(" "),e("div",{staticClass:"grid gap-2 md:grid-cols-2"},t._l(6,(function(t){return e("SkeletonLoader",{key:t,attrs:{type:"lastfm"}})})),1)],1),t._v(" "),e("div",[e("Title",{staticClass:"mb-4"},[t._v("Top Artists (last 7 days)")]),t._v(" "),e("div",{staticClass:"grid gap-2 md:grid-cols-2"},t._l(4,(function(t){return e("SkeletonLoader",{key:t,attrs:{type:"lastfm"}})})),1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:l(382).default,SkeletonLoader:l(387).default})},531:function(t,e,l){"use strict";l.r(e);l(15);var r=l(9),n=(l(45),l(0).a.extend({data:function(){return{lastFm:{}}},fetchOnServer:!1,fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://bitstore.dev/.netlify/functions/getLastFmSongs",e.next=3,t.$axios("https://bitstore.dev/.netlify/functions/getLastFmSongs");case 3:l=e.sent,r=l.data,t.lastFm=r;case 6:case"end":return e.stop()}}),e)})))()},head:function(){var title="My Songs";return{title:title,meta:this.$prepareMeta({title:title,description:"Songs that I recently listened and the songs that I listened most as well as some more information from Last.fm, all of that information is on this page!"})}}})),o=n,d=l(4),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-gray-500 dark:text-neutral-600"},[e("header",{staticClass:"space-y-2 my-12 px-4"},[e("h1",{staticClass:"text-gray-900 text-4xl dark:text-neutral-300"},[t._v("Songs")]),t._v(" "),e("p",[t._v("\n      My latest activity on Last FM. Don't forget to check out my\n      "),e("SmartLink",{staticClass:"underline",attrs:{href:"/daily-song"}},[t._v("daily song suggestions")]),t._v("\n      page as well!\n    ")],1)]),t._v(" "),!0===t.$fetchState.pending||null!==t.$fetchState.error?e("LoadersSongs"):e("main",{staticClass:"space-y-20"},[e("div",[e("Title",{staticClass:"mb-4"},[t._v("Details")]),t._v(" "),e("div",{staticClass:"grid px-4 gap-x-0 gap-y-4 md:gap-x-12 md:grid-cols-2"},[e("div",{staticClass:"flex space-x-4 items-center justify-between"},[e("span",[t._v("Profile")]),t._v(" "),e("div",{staticClass:"flex space-x-2 items-center"},[e("SmartLink",{staticClass:"flex-shrink-0",attrs:{href:"https://last.fm/user/Dani_Duese",blank:""}},[t._v("@"+t._s(t.lastFm.user.name))]),t._v(" "),e("SmartImage",{staticClass:"rounded-full h-6 w-6",attrs:{src:t.lastFm.user.image}})],1)]),t._v(" "),e("div",{staticClass:"flex space-x-4 items-center justify-between"},[e("span",{staticClass:"flex-shrink-0"},[t._v("Total Plays")]),t._v(" "),e("div",{staticClass:"flex space-x-2 items-center"},[e("div",{staticClass:"truncate"},[t._v(t._s(73*t.lastFm.user.totalPlays))]),t._v(" "),e("IconFire",{staticClass:"h-6 text-red-700 w-6 dark:text-current",attrs:{filled:""}})],1)]),t._v(" "),e("div",{staticClass:"flex space-x-4 items-center justify-between"},[e("span",{staticClass:"flex-shrink-0"},[t._v("Account Age")]),t._v(" "),e("div",{staticClass:"flex space-x-2 items-center"},[e("div",{staticClass:"truncate"},[t._v("\n              "+t._s((new Date).getFullYear()-new Date(1e3*t.lastFm.user.registered).getFullYear())+"\n\n              year(s)\n            ")]),t._v(" "),e("IconCalendar",{staticClass:"h-6 w-6"})],1)])])],1),t._v(" "),e("div",[e("Title",{staticClass:"mb-4"},[t._v("Recent Songs")]),t._v(" "),e("div",{staticClass:"grid gap-2 md:grid-cols-2"},t._l(t.lastFm.recentTracks,(function(t){return e("CardLastFm",{key:t.name,attrs:{name:t.name,artist:t.artist,image:t.image,"now-playing":t.nowPlaying,url:t.url}})})),1)],1),t._v(" "),e("div",[e("Title",{staticClass:"mb-4"},[t._v("Top Songs (last 7 days)")]),t._v(" "),e("div",{staticClass:"grid gap-2 md:grid-cols-2"},t._l(t.lastFm.topTracks,(function(t){return e("CardLastFm",{key:t.name,attrs:{name:t.name,artist:t.artist,image:t.image,"now-playing":t.nowPlaying,plays:t.plays,url:t.url}})})),1)],1),t._v(" "),e("div",[e("Title",{staticClass:"mb-4"},[t._v("Top Artists (last 7 days)")]),t._v(" "),e("div",{staticClass:"grid gap-2 md:grid-cols-2"},t._l(t.lastFm.topArtists,(function(t){return e("CardLastFm",{key:t.name,attrs:{name:t.name,plays:t.plays,image:t.image,url:t.url}})})),1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartLink:l(89).default,LoadersSongs:l(445).default,Title:l(382).default,SmartImage:l(134).default,IconFire:l(395).default,IconCalendar:l(419).default,CardLastFm:l(415).default})}}]);