<template>
    <div class="flex justify-between items-center">
        <div class="w-6 h-full">
            <img src="/logo.svg" alt="dida"/>
        </div>
        <div>
            <a-avatar
                :size="24"
                imageUrl="https://p3-pc.douyinpic.com/aweme/200x200/aweme-avatar/tos-cn-avt-0015_639893ceb86df861026d75e86e691c45.jpeg"
                class="border"
            />
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: 'Header'
})
</script>

<style scoped>

</style>