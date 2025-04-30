<script setup>
import PageSection from "./PageSection.vue";
</script>

<template>
    <PageSection
        heading="Luthier Services"
        bgColour="bg-stone-100"
        fgColour="text-black"
    >
        <p class="text-center mt-3 mb-8">
            A comprehensive range of services is offered for both vintage and
            modern guitars and basses, acoustic or electric, ukuleles, mandolins
            and other stringed instruments.
        </p>

        <div class="flex flex-col lg:flex-row flex-wrap justify-center">
            <div
                class="card-transition shadow-md hover:shadow-lg rounded-md text-center"
            >
                <img
                    src="/epiphone-repair/epiphone-1.jpg"
                    alt="epiphone eb3 bass broken neck"
                    class="block h-[250px] lg:h-[200px] object-cover w-full rounded-tl-md rounded-tr-md"
                />

                <div class="p-5">
                    <h3
                        class="font-extrabold text-lg md:text-xl lg:text-2xl mb-3"
                    >
                        Guitar Repairs
                    </h3>

                    <p>
                        We have the knowledge and expertise to repair
                        instruments with extreme major structural damage,
                        including ones that might look impossible or which are
                        in several pieces needing extensive rebuild.
                    </p>
                </div>
            </div>
        </div>
    </PageSection>
</template>

<style scoped>
.card-transition {
    transition: box-shadow 0.1s ease-in-out;
}
</style>
