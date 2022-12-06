<script lang="ts">
import { booleanLiteral, validate } from "@babel/types"
import { isEmailIdentifier } from "firebase-admin/lib/auth/identifier"
import { idText } from "typescript"
import Vue from "vue"

// set $fetchState to true untill all the pictures are loaded in the page
export default Vue.extend({
    data() {
        return {
            viewed: true,
            isDisabled: true,
            // id of the email input
            email: "",
            name: "",
            message: "",
            isemail: true,
            isname: true,
            ismessage: true,
        
        }
    },
  head() {
    const title = "Reqest CV"
    const description =
      "Request a CV from me, I will send you a CV in your email."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "Request CV, Curriculum Vitae, Resume",
        url: "https://bitstore.dev/requestcv",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/requestcv",
        },
      ],
    }
  },
    methods: {
        setPopup() {
            // check if the button is clickable
            if (this.isDisabled === false) {
                this.viewed = !this.viewed
                console.log(this.viewed)
                // Vue router push to home page after 1 second
                setTimeout(() => {
                    this.$router.push({ path: "/" });
                }, 1000);
            }
        },
    },
    watch: {
        email: function () {
            // check if the email is valid
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                this.isemail = false;
            } else {
                this.isemail = true;
            }
            // check if all the inputs are valid
            if (this.isname === false && this.isemail === false && this.ismessage === false) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
        },
        name: function () {
            // check if the name is valid
            if (this.name.length > 2) {
                this.isname = false;
            } else {
                this.isname = true;
            }
            // check if all the inputs are valid
            if (this.isname === false && this.isemail === false && this.ismessage === false) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
            
        },
        message: function () {
            // check if the message is valid
            if (this.message.length > 2) {
                this.ismessage = false;
            } else {
                this.ismessage = true;
            }
            // check if all the inputs are valid
            if (this.isname === false && this.isemail === false && this.ismessage === false) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
        },
    }
})
</script>

<template>
    <div>
    <Transition name="fade" mode="out-in">
        <div v-if="viewed == false" class="overlay background-when-supports">
        <div
            class="fixed div rounded-lg p-8 bg-neutral-500 shadow-md select-none text-center lg:w-1/4 ring-1 ring-white/10 dark:ring-white/20 ring-black/20 z-30 ">
            <div class=" items-center justify-between text-center gap-2">
                    <h3 class="font-medium leading-tight dark:text-white">
                        Reqest Successful 
                    </h3>
            </div>
    
            <p class="text-sm light:opacity-50 dark:text-white/50">
                Thank you for your request, I will send you a CV in your email. 
            </p>
        </div>
        </div>
    </Transition>
    <div class="text-gray-500 dark:text-neutral-600">
        <header class="space-y-2 my-12 px-4">
            <h1 class="text-gray-900 text-4xl dark:text-neutral-300">Curriculum Vitae</h1>
            <p>If you are interested in my CV, you can request it from here.</p>
        </header>
        <form name="Request" method="post" netlify>
            <div class="flex flex-col space-y-2 my-12 px-4">
                <div class="flex flex-col space-y-2">
                    <label for="name" class="text-gray-900 dark:text-neutral-300">Name</label>
                    <input type="text" id="name" name="name" v-model="name" placeholder="John Doe" class="input" />
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="email" class="text-gray-900 dark:text-neutral-300">Email</label>
                    <input type="email" id="email" v-model="email" name="email" placeholder="johndoe@gmail.com" class="input" />
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="message" class="text-gray-900 dark:text-neutral-300">Message</label>
                    <textarea id="message" name="message" v-model="message" placeholder="I would love to hire you for my company..." class="input h-xs"></textarea>
                </div>

                <div class="">
                    <Title :padding="false" class="pb-2 pt-5">Submit Request </Title>
                    <div class="space-y-4 items-center sm:(flex space-x-2 space-y-0)">
                        <Button variant="github" type="button" href="/me/contact" >
                            <template #icon>
                                <IconX class="h-6 text-black dark:text-white w-6 " />
                            </template>
                
                            Cancel Request
                        </Button>
                        <Button v-if="isDisabled === true" variant="github" class="button">
                            <template #icon>
                                <IconInbox class="h-6 text-black dark:text-white w-6 " />
                            </template>
                
                            Send Request
                        </Button>
                        <Button variant="github" type="submit" v-else="" @click.native="setPopup">
                            <template #icon>
                                <IconInbox class="h-6 text-black dark:text-white w-6 " />
                            </template>
                        
                            Send Request
                        </Button>
                    </div>
                </div>

            </div>
        </form>
    </div>
    </div>
</template>

<style lang="scss" scoped>
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

.div {
    //center the div in the page
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


}

.button {
    cursor: not-allowed;
    opacity: 0.5;

}
.overlay {
    opacity: 0.8;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 10;
}

.background-when-supports {
    @apply backdrop-blur-md backdrop-filter dark: bg-neutral-900;
}

@supports (backdrop-filter: blur()) {
    .background-when-supports {
        @apply backdrop-blur-sm backdrop-filter dark: bg-neutral-800/10;
    }
}
</style>