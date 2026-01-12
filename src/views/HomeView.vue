<template>
    <header
        class="bg-radialPrimary md:h-screen shadow-lg min-h-[600px] flex flex-col justify-center px-[1rem]"
    >
        <section
            class="w-full md:w-screen max-w-6xl mx-auto [&_p]:leading-[1] relative"
        >
            <img :src="banner" class="w-full" />

            <div class="max-md:my-[3rem]" />

            <p class="text-[2rem] md:text-[6rem]">Hello, I am</p>

            <p class="pt-[1rem]">
                <span
                    class="text-primary-400 font-semibold text-[2rem] md:text-[5rem]"
                    >Alexandre Chambu</span
                >
            </p>
            <hr
                class="my-[1rem] md:my-[3rem] max-w-[42rem] max-md:border-transparent"
            />
            <p
                class="font-light [&_b]:font-medium text-[1rem] md:text-[1.5rem] w-full max-w-[45rem] !leading-[2] md:!leading-[1.5]"
            >
                <b>Clean code advocate</b> and <b>backend specialist</b>,
                crafting innovative and high‑quality solutions with
                <b>NestJS</b>, <b>TypeScript</b>, <b>PostgreSQL</b>, and
                cutting‑edge tools.
            </p>
            <div class="my-[3rem]" />
            <div class="flex gap-4 max-md:justify-between">
                <a
                    href="#contact"
                    class="rounded-lg duration-300 hover:text-white hover:bg-[#333333] border border-[#ffe054] text-[1rem] text-[#ffe054] px-[1.5rem] py-[.5rem]"
                >
                    Contact me
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/lexnotor"
                    class="rounded-lg duration-300 hover:text-white hover:bg-[#333333] border border-[#ffe054] text-[1rem] text-[#ffe054] px-[1.5rem] py-[.5rem]"
                >
                    Projects
                </a>
            </div>
        </section>

        <section
            class="max-md:hidden absolute bottom-[3rem] left-1/2 -translate-x-1/2 text-[4rem] animate-bounce cursor-pointer hover:text-primary-600 duration-500"
        >
            <a href="#tech-skills"><BsChevronDoubleDown /></a>
        </section>
    </header>

    <aside class="md:fixed bottom-[2rem] right-[3rem]">
        <div
            class="flex md:flex-col max-md:justify-around max-md:px-4 max-md:py-6 gap-[2rem] text-[1.8rem]"
        >
            <li class="hidden md:flex justify-center items-center">
                <div class="h-[10rem] bg-primary-400 w-1 rounded-full"></div>
            </li>
            <a
                v-for="{ Icon, link } in sideContact"
                :key="link"
                target="_blank"
                rel="noreferrer"
                :href="link"
            >
                <span><component :is="Icon" /></span>
            </a>
        </div>
    </aside>

    <section
        id="tech-skills"
        class="bg-gradient-light min-h-screen py-[3rem] max-md:px-4"
    >
        <div class="max-w-6xl mx-auto flex flex-col justify-center h-full">
            <h3>
                <p class="text-primary-600">Technical Skills & Expertise</p>
                <p class="text-[3rem] font-semibold leading-[1]">
                    Technical Competencies
                </p>
            </h3>
            <div class="my-[1.2rem]"></div>
            <div
                class="grid max-md:justify-center grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-[2rem]"
            >
                <SkillCard
                    v-for="tech in techs"
                    :key="tech.title"
                    :-card-icon="tech.icon"
                    :title="tech.title"
                    :skills="tech.skills"
                    :description="tech.description"
                />
            </div>
        </div>
    </section>

    <section
        id="contact"
        class="bg-gradient-light min-h-[600px] py-[3rem] max-md:px-4"
    >
        <div class="max-w-6xl mx-auto flex flex-col justify-center h-full">
            <h3>
                <p class="text-primary-600">Start a Project</p>
                <p class="text-[3rem] font-semibold leading-[1]">
                    Have an Idea ? Let’s Talk
                </p>
                <div class="my-[2rem]"></div>
                <p class="font-normal max-w-[40rem]">
                    Open to new opportunities, impactful projects, and
                    meaningful collaborations. Let’s build something great
                    together.
                </p>
            </h3>
            <div class="my-[2rem]"></div>
            <div
                class="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-[2rem]"
            >
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://linkedin.com/in/lexnotor"
                    class="bg-gradient-light shadow-lg rounded-lg aspect-[5/4] p-[2rem] flex flex-col items-center justify-center gap-3"
                >
                    <span class="text-5xl"><AkLinkedinBoxFill /></span>
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:amanichambu48@gmail.com"
                    class="bg-gradient-light shadow-lg rounded-lg aspect-[5/4] p-[2rem] flex flex-col items-center justify-center gap-3"
                >
                    <span class="text-5xl"><CoBrandGmail /></span>
                </a>
            </div>
        </div>
    </section>

    <footer class="bg-white text-center text-[#333333] py-[3rem] max-md:px-4">
        <span
            >Made with ❤️ in Vue • Hosted on Github Page •
            <a
                class="cursor-pointer underline text-[#e4bf1c]"
                href="https://github.com/lexnotor/lexnotor"
                >Star repo</a
            >
        </span>
    </footer>
</template>

<script setup lang="ts">
import {
    AkGithubFill,
    AkLinkedinBoxFill,
    BsChevronDoubleDown,
    BsDatabaseGear,
    CaIbmCloudVirtualServerVpc,
    CaServerDns,
    CoBrandGmail,
    CoBrandSuperuser,
    FaBandsXTwitter,
    UnServers,
} from "@kalimahapps/vue-icons";
import { BsFacebook } from "@kalimahapps/vue-icons";
import SkillCard from "@comps/SkillCard.vue";
import banner from "@asset/setting-banner-dark.svg";

const techs = [
    {
        icon: UnServers,
        title: "Languages",
        skills: ["TypeScript", "JavaScript", "SQL", "Bash", "Python", "Dart"],
    },
    {
        icon: BsDatabaseGear,
        title: "Backend & Architecture",
        skills: ["GraphQL", "REST APIs", "NestJS", "Microservices"],
    },
    {
        icon: CaServerDns,
        title: "Technologies & Frameworks",
        skills: ["NestJS", "NextJS", "TypeORM", "NodeJs", "TailwindCSS"],
    },
    {
        icon: CoBrandSuperuser,
        title: "Best Practices",
        description:
            "Writing clean, readable, and maintainable code by following best practices, design patterns, and industry standards.",
        skills: [],
    },
    {
        icon: CaIbmCloudVirtualServerVpc,
        title: "DevOps & Tooling",
        skills: ["Git", "GitHub", "Docker", "AI"],
    },
];

const sideContact = [
    { Icon: BsFacebook, link: "https://facebook.com/amani.chambu" },
    { Icon: FaBandsXTwitter, link: "https://x.com/lexnotor" },
    { Icon: AkGithubFill, link: "https://github.com/lexnotor" },
    { Icon: AkLinkedinBoxFill, link: "https://linkedin.com/in/lexnotor" },
];
</script>

<style scoped>
.bg-gradient-light {
    background-image: linear-gradient(to top left, #171717, #3030306a);
}
</style>
