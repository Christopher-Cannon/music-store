<script setup>
import Wrapper from "./Wrapper.vue";
</script>

<template>
    <div class="bg-stone-900 text-white py-10">
        <Wrapper>
            <div class="md:flex justify-between">
                <div class="max-md:text-center max-md:mb-5">
                    <span class="font-black"
                        >Guitar<span class="text-red-500">Devil</span></span
                    >
                    // Copyright &copy;2025
                </div>

                <ul
                    class="flex flex-col md:flex-row justify-between gap-5 md:gap-10 max-md:text-center"
                >
                    <li>
                        <a href="#" class="link lighter"
                            >Terms &amp; Conditions</a
                        >
                    </li>
                    <li>
                        <a href="#" class="link lighter">Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </Wrapper>
    </div>
</template>
