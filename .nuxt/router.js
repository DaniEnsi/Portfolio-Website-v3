import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _719c9e04 = () => interopDefault(import('../src/pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _2e289fb0 = () => interopDefault(import('../src/pages/daily-song.vue' /* webpackChunkName: "pages/daily-song" */))
const _42c0ccfc = () => interopDefault(import('../src/pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _19559f50 = () => interopDefault(import('../src/pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _2de1c76f = () => interopDefault(import('../src/pages/songs.vue' /* webpackChunkName: "pages/songs" */))
const _2537b688 = () => interopDefault(import('../src/pages/me/contact.vue' /* webpackChunkName: "pages/me/contact" */))
const _395403b7 = () => interopDefault(import('../src/pages/me/donate.vue' /* webpackChunkName: "pages/me/donate" */))
const _0fea3b58 = () => interopDefault(import('../src/pages/me/hireme.vue' /* webpackChunkName: "pages/me/hireme" */))
const _7fd1e129 = () => interopDefault(import('../src/pages/me/repos.vue' /* webpackChunkName: "pages/me/repos" */))
const _6d2c5d56 = () => interopDefault(import('../src/pages/portfolio/bitcord.vue' /* webpackChunkName: "pages/portfolio/bitcord" */))
const _b3114162 = () => interopDefault(import('../src/pages/portfolio/bitmine-v2.vue' /* webpackChunkName: "pages/portfolio/bitmine-v2" */))
const _b2f51260 = () => interopDefault(import('../src/pages/portfolio/bitmine-v3.vue' /* webpackChunkName: "pages/portfolio/bitmine-v3" */))
const _7b0f93d1 = () => interopDefault(import('../src/pages/portfolio/graphics.vue' /* webpackChunkName: "pages/portfolio/graphics" */))
const _f9e34aa2 = () => interopDefault(import('../src/pages/portfolio/portfolio1.vue' /* webpackChunkName: "pages/portfolio/portfolio1" */))
const _f9c71ba0 = () => interopDefault(import('../src/pages/portfolio/portfolio2.vue' /* webpackChunkName: "pages/portfolio/portfolio2" */))
const _f9aaec9e = () => interopDefault(import('../src/pages/portfolio/portfolio3.vue' /* webpackChunkName: "pages/portfolio/portfolio3" */))
const _f98ebd9c = () => interopDefault(import('../src/pages/portfolio/portfolio4.vue' /* webpackChunkName: "pages/portfolio/portfolio4" */))
const _1b2a074c = () => interopDefault(import('../src/pages/projects/bitstore.vue' /* webpackChunkName: "pages/projects/bitstore" */))
const _e790b2a0 = () => interopDefault(import('../src/pages/projects/discord-bot.vue' /* webpackChunkName: "pages/projects/discord-bot" */))
const _5f2c30b9 = () => interopDefault(import('../src/pages/projects/webstax/index.vue' /* webpackChunkName: "pages/projects/webstax/index" */))
const _2ceaf030 = () => interopDefault(import('../src/pages/shop/checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _167cc240 = () => interopDefault(import('../src/pages/shop/shop.vue' /* webpackChunkName: "pages/shop/shop" */))
const _2b5888b5 = () => interopDefault(import('../src/pages/projects/webstax/custom-status.vue' /* webpackChunkName: "pages/projects/webstax/custom-status" */))
const _1540e99c = () => interopDefault(import('../src/pages/projects/webstax/mdcreator.vue' /* webpackChunkName: "pages/projects/webstax/mdcreator" */))
const _69228a07 = () => interopDefault(import('../src/pages/shop/products/bitboost.vue' /* webpackChunkName: "pages/shop/products/bitboost" */))
const _b22b8b98 = () => interopDefault(import('../src/pages/shop/products/bitgen.vue' /* webpackChunkName: "pages/shop/products/bitgen" */))
const _45480903 = () => interopDefault(import('../src/pages/shop/products/bitraider.vue' /* webpackChunkName: "pages/shop/products/bitraider" */))
const _78d8ab30 = () => interopDefault(import('../src/pages/shop/products/bitredeem.vue' /* webpackChunkName: "pages/shop/products/bitredeem" */))
const _da6f0d38 = () => interopDefault(import('../src/pages/shop/products/bittool.vue' /* webpackChunkName: "pages/shop/products/bittool" */))
const _6fe5fcbc = () => interopDefault(import('../src/pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _319a8f7a = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _719c9e04,
    name: "blog"
  }, {
    path: "/daily-song",
    component: _2e289fb0,
    name: "daily-song"
  }, {
    path: "/portfolio",
    component: _42c0ccfc,
    name: "portfolio"
  }, {
    path: "/shop",
    component: _19559f50,
    name: "shop"
  }, {
    path: "/songs",
    component: _2de1c76f,
    name: "songs"
  }, {
    path: "/me/contact",
    component: _2537b688,
    name: "me-contact"
  }, {
    path: "/me/donate",
    component: _395403b7,
    name: "me-donate"
  }, {
    path: "/me/hireme",
    component: _0fea3b58,
    name: "me-hireme"
  }, {
    path: "/me/repos",
    component: _7fd1e129,
    name: "me-repos"
  }, {
    path: "/portfolio/bitcord",
    component: _6d2c5d56,
    name: "portfolio-bitcord"
  }, {
    path: "/portfolio/bitmine-v2",
    component: _b3114162,
    name: "portfolio-bitmine-v2"
  }, {
    path: "/portfolio/bitmine-v3",
    component: _b2f51260,
    name: "portfolio-bitmine-v3"
  }, {
    path: "/portfolio/graphics",
    component: _7b0f93d1,
    name: "portfolio-graphics"
  }, {
    path: "/portfolio/portfolio1",
    component: _f9e34aa2,
    name: "portfolio-portfolio1"
  }, {
    path: "/portfolio/portfolio2",
    component: _f9c71ba0,
    name: "portfolio-portfolio2"
  }, {
    path: "/portfolio/portfolio3",
    component: _f9aaec9e,
    name: "portfolio-portfolio3"
  }, {
    path: "/portfolio/portfolio4",
    component: _f98ebd9c,
    name: "portfolio-portfolio4"
  }, {
    path: "/projects/bitstore",
    component: _1b2a074c,
    name: "projects-bitstore"
  }, {
    path: "/projects/discord-bot",
    component: _e790b2a0,
    name: "projects-discord-bot"
  }, {
    path: "/projects/webstax",
    component: _5f2c30b9,
    name: "projects-webstax"
  }, {
    path: "/shop/checkout",
    component: _2ceaf030,
    name: "shop-checkout"
  }, {
    path: "/shop/shop",
    component: _167cc240,
    name: "shop-shop"
  }, {
    path: "/projects/webstax/custom-status",
    component: _2b5888b5,
    name: "projects-webstax-custom-status"
  }, {
    path: "/projects/webstax/mdcreator",
    component: _1540e99c,
    name: "projects-webstax-mdcreator"
  }, {
    path: "/shop/products/bitboost",
    component: _69228a07,
    name: "shop-products-bitboost"
  }, {
    path: "/shop/products/bitgen",
    component: _b22b8b98,
    name: "shop-products-bitgen"
  }, {
    path: "/shop/products/bitraider",
    component: _45480903,
    name: "shop-products-bitraider"
  }, {
    path: "/shop/products/bitredeem",
    component: _78d8ab30,
    name: "shop-products-bitredeem"
  }, {
    path: "/shop/products/bittool",
    component: _da6f0d38,
    name: "shop-products-bittool"
  }, {
    path: "/blog/:slug",
    component: _6fe5fcbc,
    name: "blog-slug"
  }, {
    path: "/",
    component: _319a8f7a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
