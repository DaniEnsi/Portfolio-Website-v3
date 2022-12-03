<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      pricenum : 0,
      price: "error",
      item: "Error",
      creditCardNumber: "",
      expireMonth: "",
      expireYear: "",
      firstname: "",
      lastname: "",
      email: "",
      cvv: "",
      currentYear: new Date().getFullYear(),
    };
  },
  mounted() {
    // get price and item in from vuex storage
    this.price = this.$store.state?.shop?.price2
    this.pricenum = Number(this.price)
    this.item = this.$store.state?.shop?.item2
    if (this.price == "error" || this.item == "error") {
      this.$router.push("/shop/shop")
    }
    
  },
  watch: {
    creditCardNumber() {
      // Card number without dash (-)
      let realNumber = this.creditCardNumber.replace(/-/gi, '')

      // Generate dashed number
      if (realNumber.length != 0) {
        var dashedNumber = realNumber.match(/.{1,4}/g).join('-')
        this.creditCardNumber = dashedNumber
      }
    },
  },
    head() {
        const title = 'Checkout';
        const description = 'Buy Premium Tools on bitsore.dev/shop';

        return {
            title,
            meta: this.$prepareMeta({
                title,
                description,
                keywords: 'shop, products',
                url: 'https://bitstore.dev/shop/shop/checkout',
            }),
            link: [
                {
                    rel: 'canonical',
                    href: 'https://bitstore.dev/shop/shop/checkout',
                },
            ],
              }}
})
</script>

<template>
  <div class="py-4">
    <div class="space-y-12 text-gray-500  dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4 ">
        <h1 class="text-gray-700 text-4xl font-extrabold dark:text-neutral-300 mb-4">Checkout: {{item}}</h1>
          <p >
            Checkout to buy the the Premium version of BitBoost. You will get access to all of the features of BitBoost, including the ability to use the BitBoost API. You will also get access to the BitBoost Discord server, where you can get support for BitBoost.
          </p>
      </header>
      
      <div class="space-y-12 mt-2">
        <!-- Author Information -->
        <div class="px-4">
          <Title :padding="false">Contact Data</Title>

          <div class="mt-1 grid gap-3 sm:grid-cols-2">
            <input
              :value="firstname"
              class="input"
              placeholder="First Name"
            />

            <input
              :value="lastname"
              class="input"
              placeholder="Last Name"
            />
            <input :value="email" class="input col-span-2" type="email" placeholder="Email address" />
          </div>
        </div>

        <!-- Payment Information -->
        <div class="px-4">
          <Title :padding="false">Payment Data</Title>
        
          <div class="mt-1 grid gap-3 sm:grid-cols-3 ">
            <div class="col-span-3 input space-x-3">
            <IconCreditcard class="text-black dark:text-white w-6 float-left flex " />
            <input class="h-full bg-transparent" placeholder="Card Number" v-model="creditCardNumber" maxlength="19" pattern="[0-9]*" inputmode="numeric" type="text"
            />
            </div>
            
            <input class="input"  :value="cvv" placeholder="CVV" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number" maxlength = "3"/>
    
            <select class="select" v-model="expireMonth">
              <option value="" disabled selected>Month</option>
              <option v-for="n in 12" :value="n < 10 ? '0' + n : n" :key="n">
                {{ 10 > n ? "0" + n : n }}
              </option>
            </select>

            <select class="select" v-model="expireYear">
              <option value="" disabled selected>Year</option>
              <option v-for="(n, $index) in 12" :value="$index + currentYear" :key="n">
                {{ $index + currentYear }}
              </option>
            </select>
          </div>
        </div>
        <div class="px-4">
          <Title :padding="false" class="pb-4" >Complete Purchase</Title>
          <div class="gap-3 flex">
            <Button variant="github" type="button" href="/shop/shop">
              <template #icon>
                <IconX class="h-6 text-black dark:text-white w-6 " />
              </template>
            
              Cancel Payment
            </Button>
            
            <Button variant="github" type="button">
              <template #icon>
                <IconCash class="h-6 text-black dark:text-white w-6 " />
              </template>
            
              Pay {{price}}$ with Stripe
            </Button>
          </div>
          <div class="pt-10 flex">
          <a>
            By clicking the button above, you agree to our <SmartLink href="/terms" class="text-blue-500 hover:text-blue-600">Terms of Service</SmartLink>.
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>






<style lang="scss" scoped>
p,


.control-button {
  @apply rounded py-2 px-4 transition-colors text-gray-900 select-none dark: text-gray-100;

  &:not(.no-background) {
    @apply bg-gray-100 dark: (bg-neutral-800 hover:bg-neutral-700) hover:bg-gray-200;
  }

  &:not(.cursor-not-allowed) {
    @apply cursor-pointer;
  }
}



.select {
  @apply appearance-none dark:bg-neutral-700 bg-gray-200/40 py-2 px-4 dark: text-gray-400 text-gray-400 focus:outline-none
}

.input {
  @apply py-2 px-4 dark: text-gray-200 focus:outline-none;

  &:not(.no-bg) {
    @apply bg-gray-200/40 dark: bg-neutral-700;
  }

  &:not(.rounded-none) {
    @apply rounded-md;
  }

  &:not(.ring-0) {
    @apply ring-offset-gray-100 ring-gray-200 ring-offset-2 dark: (ring-neutral-800 ring-offset-neutral-900) focus:ring-1;
  }
}



pre[class*="language-"] {
  @apply bg-neutral-900;
}

.ring {
  @apply ring-1 ring-offset-2 ring-offset-gray-100 ring-gray-200 dark: (ring-neutral-800 ring-offset-neutral-900);
}
</style>

