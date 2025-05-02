<script setup>
const { url, text } = defineProps(["url", "text"]);
</script>

<template>
    <router-link
        :to="url"
        class="navlink navlink-transition font-medium p-[0.5rem] block max-md:hover:bg-red-700 max-md:hover:text-white md:hover:text-red-700"
        >{{ text }}</router-link
    >
</template>

<style scoped>
.navlink-transition {
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
}

@media screen and (min-width: 768px) {
    .navlink {
        position: relative;
    }

    .navlink::after {
        background-color: black;
        position: absolute;
        content: "";
        bottom: 8px;
        left: 0.5rem;
        height: 2px;
        width: 0;
        transition: width 0.1s ease-in-out;
    }

    .navlink:hover::after {
        background-color: #c10007;
        width: calc(100% - 1rem);
    }
}
</style>
