<script setup>
import PageHeader from "./components/layout/PageHeader.vue";
import PageFooter from "./components/layout/PageFooter.vue";
</script>

<template>
    <div class="relative">
        <PageHeader />
        <router-view />
        <PageFooter />
    </div>
</template>
