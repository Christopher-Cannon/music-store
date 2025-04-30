<script setup>
const { image, alt, heading } = defineProps(["image", "alt", "heading"]);
</script>

<template>
    <div
        class="card card-transition shadow-md hover:shadow-lg rounded-md text-center"
    >
        <img
            :src="image"
            :alt="alt"
            class="block h-[250px] lg:h-[200px] object-cover w-full rounded-tl-md rounded-tr-md"
        />

        <div class="p-5">
            <h3 class="font-extrabold text-lg md:text-xl lg:text-2xl mb-3">
                {{ heading }}
            </h3>

            <p><slot /></p>
        </div>
    </div>
</template>

<style scoped>
@media screen and (min-width: 640px) and (max-width: 1024px) {
    .card {
        width: 45%;
    }
}

.card-transition {
    transition: box-shadow 0.1s ease-in-out;
}
</style>
