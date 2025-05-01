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
        <form @submit.prevent="submitForm">
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
                class="btn bg-red-700 hover:bg-red-800 text-white rounded-md max-md:w-full"
            >
                Submit
            </button>
        </form>
    </PageSection>
</template>
