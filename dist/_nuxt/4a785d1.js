(window.webpackJsonp=window.webpackJsonp||[]).push([[59,2,61,62,63,64],{387:function(e,t,l){"use strict";l.r(t);var r=l(0).a.extend({props:{type:{type:String,required:!1,default:"block"},iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}}),n=l(4),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return"repository"===e.type?t("SkeletonLoaderRepository"):"iframe"===e.type?t("SkeletonLoaderIframe",{attrs:{"iframe-url":e.iframeUrl}}):"song"===e.type?t("SkeletonLoaderSong"):"lastfm"===e.type?t("SkeletonLoaderLastfm"):"spinner"===e.type?t("SkeletonLoaderSpinner"):"block"===e.type?t("div",{staticClass:"bg-gray-100 rounded animate-pulse dark:bg-neutral-800"}):"rounded"===e.type?t("div",{staticClass:"bg-gray-100 rounded-full animate-pulse dark:bg-neutral-800"}):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SkeletonLoaderRepository:l(391).default,SkeletonLoaderIframe:l(390).default,SkeletonLoaderSong:l(392).default,SkeletonLoaderLastfm:l(394).default,SkeletonLoaderSpinner:l(393).default})},390:function(e,t,l){"use strict";l.r(t);var r={props:{iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}},n=l(4),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:{"bg-gray-100 dark:bg-neutral-800 rounded animate-pulse":!1===e.itemLoaded}},[e.iframeUrl?t("iframe",{class:{"w-full h-full rounded":!0,invisible:!1===e.itemLoaded},attrs:{src:e.iframeUrl},on:{load:function(t){e.itemLoaded=!0}}}):e._e()])}),[],!1,null,null,null);t.default=component.exports},391:function(e,t,l){"use strict";l.r(t);var r=l(4),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"rounded-md space-y-4 p-4"},[t("div",{staticClass:"rounded-md bg-gray-300 h-5 animate-pulse w-7/12 dark:bg-neutral-700/40"}),e._v(" "),t("div",{staticClass:"space-y-2"},[t("div",{staticClass:"rounded-md bg-gray-300 h-4 w-full animate-pulse dark:bg-neutral-700/40"}),e._v(" "),t("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-4/12 dark:bg-neutral-700/40"})]),e._v(" "),t("div",{staticClass:"space-y-2"},[t("div",{staticClass:"flex items-center justify-between"},[t("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"}),e._v(" "),t("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})]),e._v(" "),t("div",{staticClass:"flex items-center justify-between"},[t("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-2/6 dark:bg-neutral-700/40"}),e._v(" "),t("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})]),e._v(" "),t("div",{staticClass:"flex items-center justify-between"},[t("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"}),e._v(" "),t("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})])])])}],!1,null,null,null);t.default=component.exports},392:function(e,t,l){"use strict";l.r(t);var r=l(4),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"rounded-lg cursor-pointer flex space-x-2 p-2 transition-shadow items-center select-none hover:shadow-md"},[t("div",{staticClass:"rounded-md bg-gray-200 flex-shrink-0 h-16 animate-pulse w-16 dark:bg-neutral-700/40"}),e._v(" "),t("div",{staticClass:"flex-grow space-y-1"},[t("div",{staticClass:"rounded bg-gray-200 h-4 animate-pulse w-2/3 dark:bg-neutral-700/40"}),e._v(" "),t("div",{staticClass:"rounded bg-gray-200 h-4 animate-pulse w-1/3 dark:bg-neutral-700/40"})])])}],!1,null,null,null);t.default=component.exports},393:function(e,t,l){"use strict";l.r(t);var r=l(4),component=Object(r.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"flex items-center justify-center"},[e("svg",{staticClass:"w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{staticClass:"fill-[#888888] dark:fill-white",attrs:{d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}}),this._v(" "),e("path",{attrs:{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"}},[e("animateTransform",{attrs:{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"}})],1)])])}),[],!1,null,null,null);t.default=component.exports},394:function(e,t,l){"use strict";l.r(t);var r=l(0).a.extend({computed:{getRandomItem:function(){return["w-2/3","w-3/4","w-2/5"][Math.floor(3*Math.random())]}}}),n=l(4),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"rounded-md flex space-x-4 p-4 transition-colors focus-ring overflow-x-hidden items-center"},[t("div",{staticClass:"flex space-x-4 w-full items-center"},[t("SkeletonLoader",{staticClass:"rounded-md flex-shrink-0 h-16 w-16"}),e._v(" "),t("div",{staticClass:"flex flex-col space-y-1 w-full"},[t("SkeletonLoader",{staticClass:"h-5",class:e.getRandomItem}),e._v(" "),t("SkeletonLoader",{staticClass:"h-5 w-1/3"})],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SkeletonLoader:l(387).default})},574:function(e,t,l){"use strict";l.r(t);var r=l(4),component=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"space-y-12 px-4 text-gray-500 dark:text-neutral-600"},[t("header",{staticClass:"space-y-2 my-12"},[t("SkeletonLoader",{staticClass:"h-10 w-1/6"}),e._v(" "),t("SkeletonLoader",{staticClass:"h-5 w-4/12"}),e._v(" "),t("SkeletonLoader",{staticClass:"h-4 w-1/6"})],1),e._v(" "),t("div",{staticClass:"space-y-9"},e._l(6,(function(l){return t("div",{key:l,staticClass:"space-y-4"},[t("SkeletonLoader",{staticClass:"h-6 w-1/6"}),e._v(" "),t("div",{staticClass:"space-y-2"},e._l(3,(function(l){return t("div",{key:"inline-".concat(l),staticClass:"flex space-x-2 items-center"},[t("SkeletonLoader",{staticClass:"h-5 w-5"}),e._v(" "),t("SkeletonLoader",{staticClass:"h-5",class:l%2==0?"w-3/12":"w-1/5"})],1)})),0)],1)})),0)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SkeletonLoader:l(387).default})}}]);