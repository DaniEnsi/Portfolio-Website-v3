<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
    data() {
        return {
            payment: {
                name: '',
                email: '',
                address: '',
                amount: 0,
                city: '',
                state: '',
                zip: '',
                country: '',
                card: '',
                exp: '',
                cvc: '',
            },
        };
    },




});

</script>

<template>
  <div class="pt-6">
    <div class="space-y-8">
      <div class="py-8 px-4">
        <Title size="2" :padding="false">Presence Metadata Creator</Title>

        <p>
          Create a metadata.json file for your amazing and new PreMiD service
          with an easy to use and free graphical user interface! Worry. You will
          still need to code the presence to get it working! Machines can't do
          everything 😅 (yet)
        </p>
      </div>

      <div class="space-y-12 mt-2">
        <!-- Author Information -->
        <div class="px-4">
          <Title :padding="false">Author Information</Title>

          <div class="mt-1 grid gap-3 sm:grid-cols-2">
            <input
              v-model="payment.name"
              class="input"
              placeholder="Your Discord username, without the #tag"
            />

            <input
              v-model="payment.card"
              class="input"
              placeholder="Your Discord ID"
            />
          </div>
        </div>

        <!-- Service Information -->
        <div class="px-4">
          <Title :padding="false">Service Information</Title>

          <div class="mt-1 grid gap-3 sm:grid-cols-2">
            <input
              v-model="payment.amount"
              class="input"
              placeholder="Name of the service"
            />
        </div>
    </div>
</div>
</div>
</div>
</template>
