<script setup>
import Wrapper from "./Wrapper.vue";

const { heading, bgColour, fgColour } = defineProps([
    "heading",
    "bgColour",
    "fgColour",
]);
</script>

<template>
    <section
        class="pt-20 pb-28"
        :class="{ [bgColour]: bgColour, [fgColour]: fgColour }"
    >
        <Wrapper>
            <h2 class="text-2xl md:text-3xl lg:text-4xl text-center font-black">
                {{ heading }}
            </h2>

            <slot />
        </Wrapper>
    </section>
</template>
