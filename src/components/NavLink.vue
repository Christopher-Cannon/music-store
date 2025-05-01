<script setup>
const { url, text } = defineProps(["url", "text"]);
</script>

<template>
    <a
        :href="url"
        class="navlink-transition p-[0.5rem] block max-md:hover:bg-red-700 max-md:hover:text-white md:hover:text-red-700"
        >{{ text }}</a
    >
</template>

<style scoped>
.navlink-transition {
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
}
</style>
