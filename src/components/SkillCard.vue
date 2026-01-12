<template>
    <div
        class="bg-gradient-light shadow-lg rounded-lg aspect-[5/4] p-[2rem] flex flex-col gap-3"
    >
        <header class="text-[3rem] text-primary-400"><CardIcon /></header>
        <h4 class="font-semibold text-2xl">{{ title }}</h4>
        <div
            v-if="skills?.length"
            class="flex gap-2 flex-wrap font-medium text-[85%]"
        >
            <div
                v-for="skill in skills"
                :key="skill"
                class="py-2 px-4 bg-neutral-100 text-neutral-900 rounded-md"
            >
                <span>{{ skill }}</span>
            </div>
        </div>
        <div class="font-normal" v-else-if="!!description">
            {{ description }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";

defineProps<{
    CardIcon: Component;
    title: string;
    description?: string;
    skills?: string[];
}>();
</script>
