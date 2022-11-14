<script lang="ts">
import Vue from "vue"
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default Vue.extend({
  components: {
    StripeCheckout,
  },
  data() {
    return {
      services: [
        {
          image: "https://i.vgy.me/vtpWBl.png",
          name: "BitGen Premium",
          describtion: "Discord Nitro Generator",
          price: "50€",
          href: "/shop/products/bitgen",
          buy: "",
        },
        {
          image: "https://i.vgy.me/Qqlhuv.png",
          name: "BitBoost Premium",
          describtion: "Discord Nitro Generator",
          price: "100€",
          href: "/shop/products/bitboost",
          buy: "",
        },
        {
          image: "https://i.vgy.me/LqnvOD.png",
          name: "BitRedeem Premium",
          describtion: "Discord Nitro Generator",
          price: "50€",
          href: "/shop/bitredeem",
          buy: "",
        },
        {
          image: "https://i.vgy.me/KthxwR.png",
          name: "BitTool Premium",
          describtion: "Discord Nitro Generator",
          price: "100€",
          href: "/shop/bittool",
          buy: "",
        },
        {
          image: "https://i.vgy.me/yqhsH6.png",
          name: "BitRaider Premium",
          describtion: "Discord Nitro Generator",
          price: "25$",
          href: "/shop/bitraider",
          buy: "",
        },
      ],
    }
  },
  head() {
    const title = "Shop"
    const description =
      "BitStore is a website that contains a bunch of tools and projects created by me, Webstax. It's a place where you can find all of my projects in one place."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "shop, products",
        url: "https://bitstore.dev/shop/shop",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/shop/shop",
        },
      ],
    }
  },
  created() {
    const sellix = document.createElement("script");
    sellix.setAttribute(
      "src",
      "https://cdn.sellix.io/static/js/embed.js"
    );
    document.head.appendChild(sellix);
  },
})
</script>

<template>
  <div class="py-4">
    <div class="space-y-12 text-gray-500  dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4 ">
        <h1 class="text-gray-700 text-4xl font-extrabold dark:text-neutral-300">BitStore™ Shop</h1>

        <p class="sm:w-9/10">
          Here you can find all of my products, from Discord bots to Discord Nitro generators. You can also find my Discord server, where you can get support for my products.
        </p>
      </header>
      <template>
        <div class="mt-4 grid gap-4 mx-4 md:grid-cols-1">
          <div v-for="(account, index) in services" :key="`account-${index}`" class="flex h-full w-full items-center">
            <div class="rounded-l bg-gray-200/75 dark:bg-neutral-800/50">
              <SmartImage :src="account.image" class="light:bg-neutral-300 light:opacity-100 rounded-l opacity-50 h-35 w-55" />
            </div>

            <div class="rounded-tr rounded-br flex h-full bg-gray-200/50 w-full pl-4 items-center dark:bg-neutral-800/75">
              <div class="w-3/5 min-w-30">
                <h3 class="font-medium text-lg text-gray-900 dark:text-neutral-300">
                  {{ account.name }}
                </h3>

                <p class="text-sm text-gray-500 dark:text-neutral-400">
                  {{ account.describtion }}
                </p>


                <span class="text-gray-800 dark:text-neutral-500">
                  Price: {{ account.price }}
                </span>
              </div>
              <div class="w-full flex pr-10 gap-5 justify-end items-center">
                <Button variant="github" class="my-2 hover:bg-neutral-500" :href="account.buy">
                  <template #icon>
                    <IconShoppingCart class="h-5 text-black dark:text-white w-7" />
                  </template>

                  Buy Now
                </Button>
                <Button variant="github" class="my-2  hover:bg-neutral-500" :href="account.href" >
                  <template #icon>
                    <IconSearch class="h-6 text-black dark:text-white w-7 " />
                  </template>

                  More Info
                </Button>
              </div>
            </div>
          </div>
        </div>

      </template>
    </div>
  </div>
</template>