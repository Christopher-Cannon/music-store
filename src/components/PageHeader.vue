<script setup>
import Wrapper from "./Wrapper.vue";
import { ref } from "vue";

const isHidden = ref(true);

function toggleActive() {
    isHidden.value = !isHidden.value;

    // Sometimes clicking the mobile nav button selects nav text, this removes that
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        document.selection.empty();
    }
}
</script>

<template>
    <header class="sticky top-0 shadow-md py-2">
        <Wrapper classes="flex justify-between items-center">
            <h1 class="text-3xl font-bold">
                Guitar<span class="text-red-700">Devil</span>
            </h1>

            <nav
                class="fixed top-[59px] left-0 md:static lg:shadow-none md:shadow-none shadow-md bg-white w-full md:w-auto"
                :class="{ 'hidden-mobile': isHidden }"
                id="navigation"
            >
                <ul
                    class="flex flex-col md:flex-row lg:gap-10 md:gap-6 text-center"
                >
                    <li>
                        <a
                            href="#"
                            class="p-[0.5rem] block max-md:hover:bg-red-700 max-md:hover:text-white md:hover:text-red-700 md:hover:underline"
                            >Services</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="p-[0.5rem] block max-md:hover:bg-red-700 max-md:hover:text-white md:hover:text-red-700 md:hover:underline"
                            >Case Studies</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="p-[0.5rem] block max-md:hover:bg-red-700 max-md:hover:text-white md:hover:text-red-700 md:hover:underline"
                            >Gallery</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="p-[0.5rem] block max-md:hover:bg-red-700 max-md:hover:text-white md:hover:text-red-700 md:hover:underline"
                            >Contact Us</a
                        >
                    </li>
                </ul>
            </nav>

            <div
                class="mt-0.25 cursor-pointer hidden-desktop"
                @click="toggleActive"
            >
                <font-awesome-icon
                    :icon="['fas', 'bars']"
                    :class="{ hidden: !isHidden }"
                    class="text-3xl mt-0.5"
                />
                <font-awesome-icon
                    :icon="['fas', 'xmark']"
                    :class="{ hidden: isHidden }"
                    class="text-3xl"
                />
            </div>
        </Wrapper>
    </header>
</template>
