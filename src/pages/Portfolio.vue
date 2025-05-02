<script setup>
import projects from "../data/projects";
</script>

<template>
    <h1>Portfolio</h1>

    <ul>
        <li v-for="project in projects" :key="project.id">
            <router-link :to="`/portfolio/${project.id}`">{{
                project.title
            }}</router-link>
        </li>
    </ul>
</template>
