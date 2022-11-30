import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7375f123 = () => interopDefault(import('../src/pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _2a75f972 = () => interopDefault(import('../src/pages/daily-song.vue' /* webpackChunkName: "pages/daily-song" */))
const _57a9953d = () => interopDefault(import('../src/pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _15a2f912 = () => interopDefault(import('../src/pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _3a7abcf0 = () => interopDefault(import('../src/pages/songs.vue' /* webpackChunkName: "pages/songs" */))
const _271109a7 = () => interopDefault(import('../src/pages/me/contact.vue' /* webpackChunkName: "pages/me/contact" */))
const _84f75e90 = () => interopDefault(import('../src/pages/me/donate.vue' /* webpackChunkName: "pages/me/donate" */))
const _7c3b2f55 = () => interopDefault(import('../src/pages/me/hireme.vue' /* webpackChunkName: "pages/me/hireme" */))
const _7bd37008 = () => interopDefault(import('../src/pages/me/repos.vue' /* webpackChunkName: "pages/me/repos" */))
const _47418d56 = () => interopDefault(import('../src/pages/portfolio/bitcord.vue' /* webpackChunkName: "pages/portfolio/bitcord" */))
const _1ab697ae = () => interopDefault(import('../src/pages/portfolio/bitmine-v2.vue' /* webpackChunkName: "pages/portfolio/bitmine-v2" */))
const _1ac4af2f = () => interopDefault(import('../src/pages/portfolio/bitmine-v3.vue' /* webpackChunkName: "pages/portfolio/bitmine-v3" */))
const _8fa15020 = () => interopDefault(import('../src/pages/portfolio/graphics.vue' /* webpackChunkName: "pages/portfolio/graphics" */))
const _1164d9e4 = () => interopDefault(import('../src/pages/portfolio/portfolio1.vue' /* webpackChunkName: "pages/portfolio/portfolio1" */))
const _1148aae2 = () => interopDefault(import('../src/pages/portfolio/portfolio2.vue' /* webpackChunkName: "pages/portfolio/portfolio2" */))
const _112c7be0 = () => interopDefault(import('../src/pages/portfolio/portfolio3.vue' /* webpackChunkName: "pages/portfolio/portfolio3" */))
const _11104cde = () => interopDefault(import('../src/pages/portfolio/portfolio4.vue' /* webpackChunkName: "pages/portfolio/portfolio4" */))
const _7042b85b = () => interopDefault(import('../src/pages/projects/bitstore.vue' /* webpackChunkName: "pages/projects/bitstore" */))
const _0076df0f = () => interopDefault(import('../src/pages/projects/discord-bot.vue' /* webpackChunkName: "pages/projects/discord-bot" */))
const _7f026550 = () => interopDefault(import('../src/pages/projects/webstax/index.vue' /* webpackChunkName: "pages/projects/webstax/index" */))
const _563ad4b1 = () => interopDefault(import('../src/pages/shop/checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _78f1ebe1 = () => interopDefault(import('../src/pages/shop/shop.vue' /* webpackChunkName: "pages/shop/shop" */))
const _365fd358 = () => interopDefault(import('../src/pages/projects/webstax/custom-status.vue' /* webpackChunkName: "pages/projects/webstax/custom-status" */))
const _1ca61ebb = () => interopDefault(import('../src/pages/projects/webstax/mdcreator.vue' /* webpackChunkName: "pages/projects/webstax/mdcreator" */))
const _6b15b2b4 = () => interopDefault(import('../src/pages/shop/products/bitboost.vue' /* webpackChunkName: "pages/shop/products/bitboost" */))
const _1b297293 = () => interopDefault(import('../src/pages/shop/products/bitgen.vue' /* webpackChunkName: "pages/shop/products/bitgen" */))
const _0e490044 = () => interopDefault(import('../src/pages/shop/products/bitraider.vue' /* webpackChunkName: "pages/shop/products/bitraider" */))
const _e6d6bcae = () => interopDefault(import('../src/pages/shop/products/bitredeem.vue' /* webpackChunkName: "pages/shop/products/bitredeem" */))
const _b31f6636 = () => interopDefault(import('../src/pages/shop/products/bittool.vue' /* webpackChunkName: "pages/shop/products/bittool" */))
const _71bf4fdb = () => interopDefault(import('../src/pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _1868a478 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7375f123,
    name: "blog"
  }, {
    path: "/daily-song",
    component: _2a75f972,
    name: "daily-song"
  }, {
    path: "/portfolio",
    component: _57a9953d,
    name: "portfolio"
  }, {
    path: "/shop",
    component: _15a2f912,
    name: "shop"
  }, {
    path: "/songs",
    component: _3a7abcf0,
    name: "songs"
  }, {
    path: "/me/contact",
    component: _271109a7,
    name: "me-contact"
  }, {
    path: "/me/donate",
    component: _84f75e90,
    name: "me-donate"
  }, {
    path: "/me/hireme",
    component: _7c3b2f55,
    name: "me-hireme"
  }, {
    path: "/me/repos",
    component: _7bd37008,
    name: "me-repos"
  }, {
    path: "/portfolio/bitcord",
    component: _47418d56,
    name: "portfolio-bitcord"
  }, {
    path: "/portfolio/bitmine-v2",
    component: _1ab697ae,
    name: "portfolio-bitmine-v2"
  }, {
    path: "/portfolio/bitmine-v3",
    component: _1ac4af2f,
    name: "portfolio-bitmine-v3"
  }, {
    path: "/portfolio/graphics",
    component: _8fa15020,
    name: "portfolio-graphics"
  }, {
    path: "/portfolio/portfolio1",
    component: _1164d9e4,
    name: "portfolio-portfolio1"
  }, {
    path: "/portfolio/portfolio2",
    component: _1148aae2,
    name: "portfolio-portfolio2"
  }, {
    path: "/portfolio/portfolio3",
    component: _112c7be0,
    name: "portfolio-portfolio3"
  }, {
    path: "/portfolio/portfolio4",
    component: _11104cde,
    name: "portfolio-portfolio4"
  }, {
    path: "/projects/bitstore",
    component: _7042b85b,
    name: "projects-bitstore"
  }, {
    path: "/projects/discord-bot",
    component: _0076df0f,
    name: "projects-discord-bot"
  }, {
    path: "/projects/webstax",
    component: _7f026550,
    name: "projects-webstax"
  }, {
    path: "/shop/checkout",
    component: _563ad4b1,
    name: "shop-checkout"
  }, {
    path: "/shop/shop",
    component: _78f1ebe1,
    name: "shop-shop"
  }, {
    path: "/projects/webstax/custom-status",
    component: _365fd358,
    name: "projects-webstax-custom-status"
  }, {
    path: "/projects/webstax/mdcreator",
    component: _1ca61ebb,
    name: "projects-webstax-mdcreator"
  }, {
    path: "/shop/products/bitboost",
    component: _6b15b2b4,
    name: "shop-products-bitboost"
  }, {
    path: "/shop/products/bitgen",
    component: _1b297293,
    name: "shop-products-bitgen"
  }, {
    path: "/shop/products/bitraider",
    component: _0e490044,
    name: "shop-products-bitraider"
  }, {
    path: "/shop/products/bitredeem",
    component: _e6d6bcae,
    name: "shop-products-bitredeem"
  }, {
    path: "/shop/products/bittool",
    component: _b31f6636,
    name: "shop-products-bittool"
  }, {
    path: "/blog/:slug",
    component: _71bf4fdb,
    name: "blog-slug"
  }, {
    path: "/",
    component: _1868a478,
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
