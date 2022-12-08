<script lang="ts">
import Vue from "vue"
import { MessageClient } from "cloudmailin"


// set $fetchState to true untill all the pictures are loaded in the page
export default Vue.extend({
    data() {
        return {
            // variables for the popup
            viewed: true,
            isDisabled: true,
            // store whether each field is filled
            isemail: true,
            isfirstname: true,
            islastname: true,
            istitle: true,
            isbudget: true,
            isdeadline: true,
            istype: true,
            // stores the values of each field
            email: "",
            firstname: "",
            lastname: "",
            title: "",
            budget: "",
            description: "",
            deadline: "",
            type: "",
        }
    },
  head() {
    const title = "Freelancer Form"
    const description =
      "Contact me, I will reply as soon as possible."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "Freelancer, Form, Email, DaniEnsi, Dani Ensi",
        url: "https://bitstore.dev/me/hireme-form",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/me/hireme-form",
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
                // send the email
                this.sendEmail()
                // Vue router push to home page after 1 second
                setTimeout(() => {
                    this.$router.push({ path: "/" });
                }, 3000);
            }
        },
        // check that isfirstname, islastname, isemail, istitle, isbudget, isdescription, isdeadline, istype are all false and set the button to clickable
        check: function () {
            if (this.isemail === false && this.isfirstname === false && this.islastname === false && this.istitle === false && this.isbudget === false &&  this.isdeadline === false && this.istype === false) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
            console.log(this.deadline)
            console.log(this.budget)
            console.log(this.description)
            console.log(this.firstname)
            console.log(this.lastname)
            console.log(this.email)
            console.log(this.title)
            console.log(this.type)
        },
        async sendEmail() {
            const client = new MessageClient({ username: "710506dea731b2f9", apiKey: "i9b1YzNd7HHSvZuT5YtTZSjE" });
            const response = await client.sendMessage({
                to: "daniensi@bitstore.dev",
                from: 'info@bitstore.dev',
                html: `<p>From: ${this.firstname} ${this.lastname}</p><p>Email: ${this.email}</p><p>Title: ${this.title} </p><p>Budget: ${this.budget} </p><p>Description: ${this.description} </p><p>Deadline: ${this.deadline} </p><p>Type: ${this.type} </p>`,
                subject: "Someone wants to hire you",
            });

        }
    },
    watch: {
        // check all the inputs are filled and set the button to clickable
        email: function () {
            // check if the email is valid
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                this.isemail = false;
            } else {
                this.isemail = true;
            }
            this.check();
        },
        firstname: function () {
            if (this.firstname.length > 3) {
                this.isfirstname = false;
            } else {
                this.isfirstname = true;
            }
            this.check();
        },
        lastname: function () {
            if (this.lastname.length > 3) {
                this.islastname = false;
            } else {
                this.islastname = true;
            }
            this.check();
        },
        title: function () {
            if (this.title.length > 3) {
                this.istitle = false;
            } else {
                this.istitle = true;
            }
            this.check();
        },
        budget: function () {
            if (this.budget.length !== 0) {
                this.isbudget = false;
            } else {
                this.isbudget = true;
            }
            this.check();
        },
        deadline: function () {
            if (this.deadline.length !== 0) {
                this.isdeadline = false;
            } else {
                this.isdeadline = true;
            }
            this.check();
        },
        type: function () {
            if (this.type.length !== 0) {
                this.istype = false;
            } else {
                this.istype = true;
            }
            this.check();
        },
    },
})
</script>

<template>
    <div>
    <Transition name="fade" mode="out-in">
        <div v-if="viewed == false" class="overlay background-when-supports">
        <div
            class="fixed div rounded-lg p-8 bg-neutral-600 shadow-md select-none text-center lg:w-1/4 ring-1 ring-white/10 dark:ring-white/20 ring-black/20 z-30 ">
            <div class=" items-center justify-between text-center gap-2">
                    <h3 class="font-medium leading-tight dark:text-white">
                        Contact Form Submitted 
                    </h3>
            </div>
    
            <p class="text-sm light:opacity-50 dark:text-white/50">
                Your requst has been submited successfully. I will reply as soon as possible.
            </p>
        </div>
        </div>
    </Transition>
    <div class="text-gray-500 dark:text-neutral-600">
        <header class="space-y-2 my-12 px-4">
            <h1 class="text-gray-900 text-4xl dark:text-neutral-300">Freelance Work</h1>
            <p>
                I am available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hello, then get in touch.</p>
        </header>
        <div class="space-y-12 mt-2">
            <!-- Author Information -->
            <div class="px-4">
                <Title :padding="false">Contact Data</Title>
        
                <div class="mt-1 grid gap-3 sm:grid-cols-2 <sm:grid-cols-1">
                    <input v-model="firstname" class="input " placeholder="First Name" />
        
                    <input v-model="lastname" class="input" placeholder="Last Name" />
                    <input v-model="email" class="input col-span-2 <sm:col-span-1" type="email" placeholder="Email address" />
                </div>
            </div>
        
            <!-- Payment Information -->
            <div class="px-4">
                <Title :padding="false">Information</Title>
        
                <div class="mt-1 grid gap-3 sm:grid-cols-3 <sm:grid-cols-1">
                    <input class="input col-span-2 align-text-top flex" placeholder="Project Title" v-model="description" />
                    
        
                    <input class="input <sm:col-span-2" v-model="budget" placeholder="Budget"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        type="number" maxlength="5" />

                    <input class="input col-span-2 row-span-2 align-text-top flex" placeholder="Project Describtion" v-model="title" />

                    <select class="select" v-model="type">
                        <option value="" disabled >Topic</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Development">Mobile Development</option>
                        <option value="Python Scripts">Python Scripts</option>
                        <option value="Discord Bot">Discord Bot</option>
                        <option value="Design">Design</option>
                        <option value="Contract">Contract</option>
                        <option value="Other">Other</option>
                    </select>
        
                    <select class="select" v-model="deadline">
                        <option value="" disabled selected>Timeframe</option>
                        <option v-for="n in 12" deadline="n < 10 ? '' + n : n" :key="n">
                            {{ 10 > n ? "" + n : n }} Weeks
                        </option>
                    </select>
        
                </div>
            </div>
            <div class="px-4">
            <Title :padding="false" class="pb-4" >Submit Form </Title>
            <div class="space-y-4 items-center sm:(flex space-x-2 space-y-0)">
                <Button variant="github" type="button" href="/me/hireme" >
                    <template #icon>
                        <IconX class="h-6 text-black dark:text-white w-6 " />
                    </template>
        
                    Cancel
                </Button>
                <Button v-if="isDisabled === true" variant="github" class="button">
                    <template #icon>
                        <IconInbox class="h-6 text-black dark:text-white w-6 " />
                    </template>
        
                    Submit Form
                </Button>
                <Button variant="github" type="submit" v-else="" @click.native="setPopup">
                    <template #icon>
                        <IconInbox class="h-6 text-black dark:text-white w-6 " />
                    </template>
                
                    Submit Form
                </Button>
            </div>
            </div>
        </div>
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

.select {
    @apply appearance-none dark: bg-neutral-700 bg-gray-200/40 py-2 px-4 dark: text-gray-400 text-gray-400 focus:outline-none;
    // when a otion has been selected, make the text white
    option {
        @apply text-gray-900 dark: text-gray-200;
    }


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


name
email
type of work
exact requirements for the project
budget
additional information
