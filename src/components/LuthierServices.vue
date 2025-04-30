<script setup>
import PageSection from "./PageSection.vue";
import ImageCard from "./ImageCard.vue";
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

        <div class="flex lg:flex-row justify-center max-lg:flex-wrap gap-10">
            <ImageCard
                image="/epiphone-repair/epiphone-1.jpg"
                alt="epiphone eb3 bass guitar broken neck"
                heading="Repair"
            >
                Our traditional approach to repair techniques uses appropriate
                materials and tooling and we always advise the repair and
                servicing of existing parts where possible to retain originality
                and value.
            </ImageCard>

            <ImageCard
                image="/gretsch-restoration/gretsch-4.jpg"
                alt="restored gretsch guitar"
                heading="Restoration"
            >
                We have the knowledge and expertise to repair instruments with
                extreme major structural damage, including ones that might look
                impossible or which are in several pieces needing extensive
                rebuild.
            </ImageCard>

            <ImageCard
                image="/home-gallery/example-2.jpg"
                alt="modified les paul guitar"
                heading="Modification"
            >
                A fair proportion of our work involves modifying modern
                instruments and we offer a full range of professional services
                to get your guitars, basses and folk instruments modified the
                way you want them.
            </ImageCard>
        </div>
    </PageSection>
</template>
