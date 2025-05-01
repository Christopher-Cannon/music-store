<script setup>
import PageSection from "./PageSection.vue";
import { ref } from "vue";

const form = ref({
    fullname: "",
    email: "",
    message: "",
});

// This will be an async function once implemented
function submitForm() {
    console.log("Submitted");
}
</script>

<template>
    <PageSection
        heading="Contact Us"
        bgColour="bg-stone-100"
        fgColour="text-black"
    >
        <div class="lg:flex justify-between gap-15 lg:mt-3">
            <form @submit.prevent="submitForm" class="flex-1">
                <label for="fullname">Full Name</label>
                <input
                    v-model="form.fullname"
                    type="text"
                    name="fullname"
                    class="rounded-md border-black focus:border-red-700 border-1 outline-0 focus:outline-red-700 focus:outline-1 focus:outline-solid"
                />

                <label for="email">Email Address</label>
                <input
                    v-model="form.email"
                    type="email"
                    name="email"
                    class="rounded-md border-black focus:border-red-700 border-1 outline-0 focus:outline-red-700 focus:outline-1 focus:outline-solid"
                />

                <label for="message">Your Message</label>
                <textarea
                    v-model="form.message"
                    name="message"
                    class="rounded-md border-black focus:border-red-700 border-1 outline-0 focus:outline-red-700 focus:outline-1 focus:outline-solid"
                ></textarea>

                <button
                    type="submit"
                    class="btn bg-red-700 hover:bg-red-800 text-white rounded-md max-md:w-full mt-5"
                >
                    Submit
                </button>
            </form>

            <hr
                class="lg:hidden my-10 h-0.5 border-0 bg-black max-w-100 m-auto"
            />

            <div class="md:flex justify-around gap:10 lg:block flex-1">
                <div class="flex-1">
                    <h3 class="font-black text-lg md:text-xl lg:text-2xl my-5">
                        Address
                    </h3>

                    <p>
                        123 Somewhere Road<br />Some City<br />Some County<br />SC99
                        9AZ
                    </p>
                </div>

                <div class="flex-1">
                    <h3 class="font-black text-lg md:text-xl lg:text-2xl my-5">
                        Contact Information
                    </h3>

                    <p>
                        <b>Telephone: </b>07123 666999<br /><b
                            >Email Address: </b
                        ><a href="mailto:dantas@guitardevil.com" class="link"
                            >dantas@guitardevil.com</a
                        >
                    </p>
                </div>
            </div>
        </div>
    </PageSection>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
    form {
        position: relative;
    }

    form::after {
        background-color: black;
        content: "";
        position: absolute;
        top: 1.5rem;
        right: -2rem;
        height: 76%;
        width: 2px;
    }
}
</style>
