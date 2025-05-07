<script setup>
import Wrapper from "../components/common/Wrapper.vue";
import projects from "../data/projects";
</script>

<template>
    <Wrapper>
        <h2 class="text-2xl md:text-3xl lg:text-4xl text-center font-black my-10">Portfolio</h2>

        <div v-for="project in projects" :key="project.id" class="my-10">
            <h3 class="font-black text-lg md:text-xl lg:text-2xl mt-5 lg:mt-10 mb-5">{{ project.title }}</h3>

            <p class="my-5">{{ project.description }}</p>

            <router-link :to="`/portfolio/${project.id}`" class="link">Read more...</router-link>
        </div>
    </Wrapper>
</template>
