<script setup>
import Wrapper from "../common/Wrapper.vue";
import ButtonGroup from "../common/ButtonGroup.vue";

const data = [
    {
        url: "/portfolio",
        text: "See Our Work",
    },
    {
        url: "/#contact",
        text: "Get In Touch",
    },
];
</script>

<template>
    <div
        class="min-h-[calc(100vh-63px)] bg-[url(/jonny-swales-guitar-repair.jpg)] bg-center bg-cover"
    >
        <Wrapper
            classes="min-h-[calc(100vh-63px)] flex flex-col justify-center"
        >
            <h2
                class="font-black text-2xl md:text-3xl lg:text-4xl text-center text-white text-shadow-lg"
            >
                We specialise in vintage guitar restoration and repair
            </h2>

            <p
                class="font-medium text-md md:text-lg lg:text-xl text-center text-white text-shadow-lg my-10"
            >
                Led by Damien Antas, a professional luthier for over 30 years,
                we possess an extensive knowledge and understanding of vintage
                instruments, construction, finishing techniques, materials and
                processes to ensure work is carried out to exacting high
                standards.
            </p>

            <ButtonGroup :data="data" />

            <!-- <div class="flex justify-center gap-6">
                <a
                    href="#"
                    class="btn bg-red-700 hover:bg-red-800 text-white rounded-md"
                    >See Our Work</a
                >
                <a
                    href="#"
                    class="btn bg-red-700 hover:bg-red-800 text-white rounded-md"
                    >Get In Touch</a
                >
            </div> -->
        </Wrapper>
    </div>
</template>
