<script setup>
const { classes } = defineProps(["classes"]);
</script>

<template>
    <div class="wrapper" :class="{ [classes]: classes }">
        <slot />
    </div>
</template>
