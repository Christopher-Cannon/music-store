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
                class="navigation lg:shadow-none md:shadow-none shadow-md"
                :class="{ 'hidden-mobile': isHidden }"
                id="navigation"
            >
                <ul class="nav-list lg:gap-10 md:gap-6">
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact Us</a></li>
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
