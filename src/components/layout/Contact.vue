<script setup>
import PageSection from "../common/PageSection.vue";
import { ref } from "vue";

const form = ref({
    fullname: "",
    email: "",
    work: "inquiry",
    message: "",
});

// This will be an async function once implemented
function submitForm() {
    console.log("Submitted");
}

const subtitle =
    "Whether you need specific work done on an instrument or just want to ask a question, feel free to get in touch via any of the methods listed here.";
</script>

<template>
    <PageSection
        heading="Contact Us"
        bgColour="bg-stone-100"
        fgColour="text-black"
        id="contact"
    >
        <p class="lg:hidden mt-5 text-center">{{ subtitle }}</p>

        <div class="lg:flex justify-between gap-15 mt-8">
            <form @submit.prevent="submitForm" class="relative flex-1">
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

                <label for="work">Work Sought</label>
                <select
                    v-model="form.work"
                    name="work"
                    class="rounded-md border-black focus:border-red-700 border-1 outline-0 focus:outline-red-700 focus:outline-1 focus:outline-solid"
                >
                    <option value="inquiry">General inquiry</option>
                    <option value="repair">Repair</option>
                    <option value="restoration">Restoration</option>
                    <option value="modification">Modification</option>
                    <option value="other">Other</option>
                </select>

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
                class="lg:hidden mt-12 mb-6 h-0.5 border-0 bg-black max-w-100 m-auto"
            />

            <div class="md:flex justify-around gap-10 lg:block flex-1">
                <div class="flex-1">
                    <p class="max-lg:hidden">{{ subtitle }}</p>

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

        <div>
            <h3
                class="font-black text-lg md:text-xl lg:text-2xl mt-5 lg:mt-10 mb-5"
            >
                Find Us
            </h3>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58727.01550748981!2d-1.5523654925765331!3d52.92679174766864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879f6cc4dc442b9%3A0x2f752bc1ed6d5893!2sKingsway%20Retail%20Park!5e1!3m2!1sen!2suk!4v1746085906153!5m2!1sen!2suk"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-[450px] border-0 rounded-md"
            ></iframe>
        </div>
    </PageSection>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
    form::after {
        background-color: black;
        content: "";
        position: absolute;
        top: 0;
        right: -2rem;
        height: 100%;
        width: 2px;
    }
}
</style>
