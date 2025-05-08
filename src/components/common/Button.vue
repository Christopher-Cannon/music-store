<script setup>
const { url, text } = defineProps(["url", "text"]);
</script>

<template>
    <router-link
        :to="url"
        class="btn bg-red-700 hover:bg-red-800 text-white rounded-md"
        >{{ text }}</router-link
    >
</template>
