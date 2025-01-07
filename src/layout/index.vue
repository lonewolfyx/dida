<template>
    <a-layout class="app-layout">
        <a-layout-header class="app-header">
            <Header/>
        </a-layout-header>
        <a-layout-content class="app-container">
            <RouterView/>
        </a-layout-content>
    </a-layout>
</template>

<script setup>
import Header from '@/layout/components/Header.vue'
</script>

<style scoped>
.app-layout {
    @apply h-full bg-cover bg-center;
    background-image: url('/cover/4.jpeg');
    background-size: cover;
    background-position: center center;

    .app-header {
        @apply relative w-full p-3 bg-black bg-opacity-[30%];
    }

    .app-container {
        @apply relative w-full h-screen overflow-y-auto p-3 z-20;

        &::before {
            content: '';
            @apply absolute inset-0 bg-black bg-opacity-[20%] z-10;
        }
    }
}
</style>