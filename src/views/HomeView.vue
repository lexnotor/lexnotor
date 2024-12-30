<template>
    <header
        class="bg-radialPrimary h-screen shadow-lg min-h-[600px] flex flex-col justify-center px-[1rem]"
    >
        <section class="w-screen max-w-6xl mx-auto [&_p]:leading-[1] relative">
            <p class="text-[6rem]">Hey humans !</p>
            <p class="text-[4rem]">
                This is
                <span class="text-primary-400 font-semibold text-[6rem]"
                    >Alexandre</span
                >
            </p>
            <hr class="my-4 max-w-[37rem]" />
            <p class="text-[1.5rem] max-w-[37rem] !leading-[1.5]">
                Our TypeScript Developer & Database Manager
            </p>
            <div class="my-4" />
            <button
                class="rounded-xl border border-[#ffe054] text-[1.2rem] text-[#ffe054] px-[1rem] py-[.5rem]"
            >
                Contact him
            </button>
        </section>

        <section
            class="absolute bottom-[3rem] left-1/2 -translate-x-1/2 text-[4rem] animate-bounce cursor-pointer hover:text-primary-600 duration-500"
        >
            <BsChevronDoubleDown />
        </section>
    </header>

    <aside class="fixed bottom-[2rem] right-[3rem]">
        <ul class="flex flex-col gap-[2rem] text-[1.8rem]">
            <li class="flex justify-center items-center">
                <div class="h-[10rem] bg-primary-400 w-1 rounded-full"></div>
            </li>
            <li><BsFacebook /></li>
            <li><FaBandsXTwitter /></li>
            <li><AkGithubFill /></li>
            <li><AkLinkedinBoxFill /></li>
        </ul>
    </aside>

    <section class="bg-gradient-light h-screen min-h-[600px] py-[3rem]">
        <div class="max-w-6xl mx-auto flex flex-col justify-center">
            <h3>
                <p class="text-primary-600">My SERVICES</p>
                <p class="text-[3rem] font-semibold">What He likes to Do</p>
            </h3>
            <div class="my-[1.2rem]"></div>
            <ul
                class="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-[2rem]"
            >
                <li
                    class="bg-gradient-light shadow-lg rounded-lg aspect-[5/4] p-[2rem] flex flex-col gap-3"
                >
                    <header class="text-[3rem]"><AkDesktopDevice /></header>
                    <h4 class="font-semibold text-2xl">Desktop App</h4>
                    <p class="font-light text-[85%]">
                        It is common to install softwares on device when working
                        for companies. @lexnotor build for your, these software.
                    </p>
                </li>
                <li
                    class="bg-gradient-light shadow-lg rounded-lg aspect-[5/4] p-[2rem] flex flex-col gap-3"
                >
                    <header class="text-[3rem]"><BsDatabaseGear /></header>
                    <h4 class="font-semibold text-2xl">Database Design</h4>
                    <p class="font-light text-[85%]">
                        It is common to install softwares on device when working
                        for companies. @lexnotor build for your, these software.
                    </p>
                </li>
                <li
                    class="bg-gradient-light shadow-lg rounded-lg aspect-[5/4] p-[2rem] flex flex-col gap-3"
                >
                    <header class="text-[3rem]"><BsDatabaseGear /></header>
                    <h4 class="font-semibold text-2xl">Help developers</h4>
                    <p class="font-light text-[85%]">
                        It is common to install softwares on device when working
                        for companies. @lexnotor build for your, these software.
                    </p>
                </li>
            </ul>
        </div>
    </section>

    <section class="bg-gradient-light h-screen min-h-[600px] py-[3rem]">
        <div class="max-w-6xl mx-auto flex flex-col justify-center">
            <h3>
                <p class="text-primary-600">My STACKS</p>
                <p class="text-[3rem] font-semibold">His skills</p>
            </h3>
            <div class="my-[1.2rem]"></div>
            <ul
                class="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-[2rem]"
            >
                <li
                    class="bg-gradient-light shadow-lg rounded-lg aspect-[5/4] p-[2rem] flex flex-col items-center text-center gap-3"
                >
                    <header class="text-[3rem]">
                        <img :src="githubLogo" alt="Github" width="3rem" />
                    </header>
                    <h4 class="text-base">Desktop App</h4>
                </li>
                <li
                    class="bg-gradient-light shadow-lg rounded-lg aspect-[5/4] p-[2rem] flex flex-col items-center text-center gap-3"
                >
                    <header class="text-[3rem]"><BsDatabaseGear /></header>
                    <h4 class="text-base">Database Design</h4>
                </li>
                <li
                    class="bg-gradient-light shadow-lg rounded-lg aspect-[5/4] p-[2rem] flex flex-col items-center text-center gap-3"
                >
                    <header class="text-[3rem]"><BsDatabaseGear /></header>
                    <h4 class="text-base">Help developers</h4>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import {
    AkDesktopDevice,
    AkGithubFill,
    AkLinkedinBoxFill,
    BsChevronDoubleDown,
    BsDatabaseGear,
    FaBandsXTwitter,
} from "@kalimahapps/vue-icons";
import { BsFacebook } from "@kalimahapps/vue-icons";
import githubLogo from "@asset/logo/github_logo.svg";
</script>

<style scoped>
.bg-gradient-light {
    background-image: linear-gradient(to top left, #171717, #3030306a);
}
</style>
