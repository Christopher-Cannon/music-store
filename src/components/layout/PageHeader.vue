<script setup>
import Wrapper from "../common/Wrapper.vue";
import NavLink from "../feature/page-header/NavLink.vue";
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
    <header class="sticky top-0 z-100 shadow-md py-2 bg-white">
        <Wrapper classes="flex justify-between items-center">
            <h1 class="text-3xl font-black max-md:py-0.5">
                <a href="#">Guitar<span class="text-red-700">Devil</span></a>
            </h1>

            <nav
                class="fixed top-[59px] left-0 md:static lg:shadow-none md:shadow-none shadow-md bg-white w-full md:w-auto"
                :class="{ 'hidden-mobile': isHidden }"
                id="navigation"
            >
                <ul
                    class="flex flex-col md:flex-row md:gap-6 lg:gap-10 text-center"
                >
                    <li>
                        <NavLink url="#luthier-services" text="Services" />
                    </li>
                    <li>
                        <NavLink url="#" text="Case Studies" />
                    </li>
                    <li>
                        <NavLink url="#gallery" text="Gallery" />
                    </li>
                    <li>
                        <NavLink url="#contact" text="Contact Us" />
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
