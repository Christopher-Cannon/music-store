<script setup>
import { ref } from "vue";
import PageSection from "../common/PageSection.vue";

const data = [
    {
        src: "/home-gallery/example-1.jpg",
        alt: "Restored blue guitar",
    },
    {
        src: "/home-gallery/example-2.jpg",
        alt: "Modified les paul guitar",
    },
    {
        src: "/home-gallery/example-3.jpg",
        alt: "Restored acoustic guitar",
    },
    {
        src: "/home-gallery/example-4.jpg",
        alt: "Repaired acoustic guitar",
    },
];

const activeIndex = ref(0);
</script>

<template>
    <PageSection
        heading="Gallery"
        bgColour="bg-stone-900"
        fgColour="text-white"
        id="gallery"
    >
        <div
            class="gallery-container relative h-[300px] md:h-[500px] lg:h-[700px] mt-8"
        >
            <img
                v-for="(item, index) in data"
                :key="index"
                :src="item.src"
                :alt="item.alt"
                class="absolute z-1 display-block object-cover h-[300px] md:h-[500px] lg:h-[700px] w-full rounded-md"
                :class="{ active: activeIndex === index }"
            />

            <button
                class="absolute cursor-pointer bg-stone-800 hover:bg-stone-700 z-10 top-[calc(50%-23px)] lg:top-[calc(50%-32px)] ml-1 lg:ml-2 rounded-full w-[46px] h-[46px] lg:w-[64px] lg:h-[64px]"
                @click="
                    activeIndex =
                        activeIndex - 1 < 0 ? data.length - 1 : activeIndex - 1
                "
            >
                <font-awesome-icon
                    :icon="['fas', 'angle-left']"
                    class="text-3xl lg:text-4xl mt-0.75"
                />
            </button>

            <button
                class="absolute cursor-pointer bg-stone-800 hover:bg-stone-700 z-10 top-[calc(50%-23px)] lg:top-[calc(50%-32px)] right-0 mr-1 lg:mr-2 rounded-full w-[46px] h-[46px] lg:w-[64px] lg:h-[64px]"
                @click="
                    activeIndex =
                        activeIndex + 1 === data.length ? 0 : activeIndex + 1
                "
            >
                <font-awesome-icon
                    :icon="['fas', 'angle-right']"
                    class="text-3xl lg:text-4xl mt-0.75"
                />
            </button>
        </div>
    </PageSection>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
    button {
        opacity: 0;
        visibility: hidden;
        transition: background-color 0.1s ease-in-out, opacity 0.1s ease-in-out,
            visibility 0.1s ease-in-out;
    }

    .gallery-container:hover button {
        opacity: 1;
        visibility: visible;
    }
}

img {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;
}

.active {
    opacity: 1;
    visibility: visible;
}
</style>
