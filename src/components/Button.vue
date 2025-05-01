<script setup>
const { url, text } = defineProps(["url", "text"]);
</script>

<template>
    <a
        :href="url"
        class="btn bg-red-700 hover:bg-red-800 text-white rounded-md text-center"
        >{{ text }}</a
    >
</template>
