<script setup>
import { computed } from "vue";
import projects from "../data/projects";
// Tighter coupled with the router
// import { useRoute } from "vue-router";
// const route = useRoute();
// const id = route.params.id;
const { id } = defineProps({ id: String });

const project = computed(() => projects.find((p) => p.id === id));
</script>

<template>
    <div v-if="project">
        <h1>{{ project.title }}</h1>

        <p>{{ project.description }}</p>

        <ul>
            <li v-for="img in project.images" :key="img">
                Image: <img :src="`${img}`" :alt="project.title" />
            </li>
        </ul>
    </div>
    <div v-else>
        <p>Nothing here</p>
    </div>
</template>
