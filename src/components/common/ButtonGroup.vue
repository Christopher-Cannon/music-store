<script setup>
import Button from "./Button.vue";

const { data } = defineProps(["data"]);
</script>

<template>
    <div class="flex flex-col md:flex-row gap-5 justify-center">
        <Button
            v-for="(item, index) in data"
            :key="index"
            :url="item.url"
            :text="item.text"
        />
    </div>
</template>
