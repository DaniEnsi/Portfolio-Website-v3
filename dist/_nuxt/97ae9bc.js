(window.webpackJsonp=window.webpackJsonp||[]).push([[20,51],{399:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"bi bi-basket",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"}})])}),[],!1,null,null,null);e.default=component.exports},406:function(t,e,r){"use strict";r.r(e);r(13),r(33);var n=r(0).a.extend({props:{meta:{type:Object,required:!0,default:function(){}}},data:function(){return{hovered:!1}}}),l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.meta?e("div",{staticClass:"overflow-hidden",on:{mouseover:function(e){t.hovered=!0},mouseleave:function(e){t.hovered=!1}}},[e("SmartLink",{staticClass:"rounded-lg cursor-pointer space-y-2 focus-ring",attrs:{title:t.meta.title,href:t.meta.href}},[e("div",{staticClass:"relative"},[e("SmartImage",{staticClass:"rounded h-40 w-full flex filter bg-neutral-300 dark:bg-neutral-800 dark:brightness-100 rounded-xl",attrs:{src:t.meta.image}}),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.hovered,expression:"hovered"}],staticClass:"flex bg-black/50 inset-0 absolute items-center justify-center rounded-xl"},[e("IconShoppingCart",{staticClass:"h-6 text-white w-6"})],1)])],1),t._v(" "),e("div",{staticClass:"flex flex-col space-y-1 items-center"},[e("h2",{staticClass:"font-medium text-lg leading-tight text-gray-700 truncate dark:text-gray-200"},[t._v("\n        "+t._s(t.meta.title)+"\n      ")]),t._v(" "),e("p",{staticClass:"text-neutral-500 line-clamp-2 flex items-center"},[t._v("\n        "+t._s(t.meta.description)+"\n      ")])])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartImage:r(134).default,IconShoppingCart:r(399).default,SmartLink:r(89).default})}}]);