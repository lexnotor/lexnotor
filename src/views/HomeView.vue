<template>
    <header
        class="bg-radialPrimary h-screen shadow-lg min-h-[600px] flex flex-col justify-center px-[1rem]"
    >
        <section class="w-screen max-w-6xl mx-auto [&_p]:leading-[1] relative">
            <p class="text-[6rem]">Hello, I am</p>
            <p class="text-[4rem]">
                <span class="text-primary-400 font-semibold text-[6rem]"
                    >Alexandre Chambu</span
                >
            </p>
            <hr class="my-[3rem] max-w-[37rem]" />
            <p class="text-[1.5rem] max-w-[37rem] !leading-[1.5]">
                <b>Clean code advocate</b> and <b>backend specialist</b>,
                crafting innovative and high‑quality solutions with
                <b>NestJS</b>, <b>TypeScript</b>, <b>PostgreSQL</b>, and
                <b>cutting‑edge tools</b>.
            </p>
            <div class="my-[3rem]" />
            <div class="flex gap-4">
                <a
                    href="#contact"
                    class="rounded-lg border border-[#ffe054] text-[1rem] text-[#ffe054] px-[1.5rem] py-[.5rem]"
                >
                    Contact me
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/lexnotor"
                    class="rounded-lg border border-[#ffe054] text-[1rem] text-[#ffe054] px-[1.5rem] py-[.5rem]"
                >
                    Projects
                </a>
            </div>
        </section>

        <section
            class="absolute bottom-[3rem] left-1/2 -translate-x-1/2 text-[4rem] animate-bounce cursor-pointer hover:text-primary-600 duration-500"
        >
            <BsChevronDoubleDown />
        </section>
    </header>

    <aside class="fixed bottom-[2rem] right-[3rem]">
        <div class="flex flex-col gap-[2rem] text-[1.8rem]">
            <li class="flex justify-center items-center">
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

    <section class="bg-gradient-light h-screen min-h-[600px] py-[3rem]">
        <div class="max-w-6xl mx-auto flex flex-col justify-center h-full">
            <h3>
                <p class="text-primary-600">Technical Skills & Expertise</p>
                <p class="text-[3rem] font-semibold">Technical Competencies</p>
            </h3>
            <div class="my-[1.2rem]"></div>
            <div
                class="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-[2rem]"
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

    <section id="contact" class="bg-gradient-light min-h-[600px] py-[3rem]">
        <div class="max-w-6xl mx-auto flex flex-col justify-center h-full">
            <h3>
                <p class="text-primary-600">Start a Project</p>
                <p class="text-[3rem] font-semibold">
                    Have an Idea ? Let’s Talk
                </p>
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
