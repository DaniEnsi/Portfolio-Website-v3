<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      shop: [
        {
          image: "https://i.vgy.me/vtpWBl.png",
          title: "BitGen Premium",
          description: "Discord Nitro Generator",
          href: "/shop/products/bitgen",
        },
        {
          image: "https://i.vgy.me/Qqlhuv.png",
          title: "BitBoost Premium",
          description: "Server Boosting Script",
          href: "/shop/products/bitboost",
        },
        {
          image: "https://i.vgy.me/LqnvOD.png",
          title: "BitRedeem Premium",
          description: "Nitro Token Generator",
          href: "/shop/products/bitredeem",
        },
      ],
    }
  },
  head() {
    const title = "BitStore"
    const description =
      "BitStore is a website that contains a bunch of tools and projects created by me. It's a place where you can find all of my projects in one place."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "BitStore, discord, tools",
        url: "https://bitstore.dev/shop",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/shop",
        },
      ],
    }
  },
})

</script>

<template>
  <div class="py-4">
    <div class="space-y-12 text-gray-500  dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4 ">
        <h1 class="text-gray-700 text-4xl font-extrabold dark:text-neutral-300">BitStore™ Shop</h1>

        <p class="sm:w-9/10">
          This is the BitStore™ where you can buy my projects and tools. All of my projects are made using the latest technologies and are very easy to use. If you are looking for the free version of my projects, you can find them on my <SmartLink class="text-center sm:truncate hover:underline text-neutral-500" href="/portfolio">Portfolio</SmartLink>.
        </p>
        <SmartImage
          src="https://i.vgy.me/xtTWgH.png"
          alt="BitStore"
        />
      </header>
      <template>
        <div class="pt-0">
          <Title>Featured Products</Title>

          <div class="mt-2 pt-4 grid px-4 gap-4 md:grid-cols-3">

            <template>
              <CardPortfolio type="shop" v-for="(account, index) in shop" :key="`new-${index}`" :portfolio="account" />
            </template>
          </div>
          <div class="flex flex-wrap gap-x-4 gap-y-2 mx-4 pt-10 items-center justify-center">
            <Button variant="github" class="w-full lg:w-max" href="/shop/shop" >
              <template #icon>
                <IconSearch class="h-6 text-black dark:text-white w-7 " />
              </template>

              Show all Products
            </Button>
          </div>
        </div>
      </template>
    </div>
  </div>

</template>

