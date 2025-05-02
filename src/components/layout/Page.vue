<script setup>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";
</script>

<template>
    <div class="relative">
        <PageHeader />
        <slot />
        <PageFooter />
    </div>
</template>
