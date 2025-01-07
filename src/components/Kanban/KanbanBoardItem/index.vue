<template>
    <div class="list">
        <div :class="['kanban-item-list', { conceal: isCollapsed }]">
            <div class="list-header" v-if="!isCollapsed">
                <span class="title">{{ items.title }}</span>
                <a-button @click="collapsedHandle">
                    <template #icon>
                        <IconArrowLeft/>
                    </template>
                </a-button>
            </div>

            <DynamicScroller
                ref="scroller"
                :items="items.list"
                :min-item-size="24"
                class="list-cards"
                v-if="!isCollapsed"
            >
                <template #default="{ item, index, active }">
                    <DynamicScrollerItem
                        :item="item"
                        :active="active"
                        :data-index="index"
                        class="list-card"
                    >
                        <a-card
                            class="kanban-card"
                            :class="item.used?'used':''"
                        >
                            <div class="mb-1" v-if="item.tags">
                                <a-tag :color="tags.color" size="mini" class="mr-2" v-for="tags in item.tags"
                                       :key="tags.id">
                                    {{ tags.name }}
                                </a-tag>
                            </div>
                            <span class="title">{{ item.title }}</span>
                        </a-card>
                    </DynamicScrollerItem>
                </template>
            </DynamicScroller>

            <div class="list-footer" v-if="!isCollapsed">
                <a-button size="small">
                    <template #icon>
                        <IconPlus/>
                    </template>
                    添加计划
                </a-button>
            </div>

            <div class="collapseListButton" @click="collapsedHandle" v-if="isCollapsed">
                <a-button size="small">
                    <template #icon>
                        <IconArrowRight/>
                    </template>
                </a-button>
                <h2 class="list-name">{{ items.title }}</h2>
                <p class="list-count">{{ items.list.length }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {IconArrowLeft, IconArrowRight} from '@arco-design/web-vue/es/icon'
import {ref} from 'vue';

defineOptions({
    name: 'KanbanBoardItem'
})

const {items} = defineProps(['items'])
// const items = [
//     {
//         id: useId(),
//         title: '《NestJs》 中间件学习',
//         tags: ['Nestjs']
//     },
//     {
//         id: useId(),
//         title: 'Data Analytics podcast',
//         used: true
//     }
// ]
const isCollapsed = ref(false);

const collapsedHandle = (e) => {
    isCollapsed.value = !isCollapsed.value;
}
</script>

<style scoped lang="scss">

.list {
    @apply block shrink-0 h-full whitespace-nowrap;

    .kanban-item-list {
        @apply relative w-[270px] max-h-full flex flex-col mx-2 rounded-xl bg-zinc-100 shadow;

        scroll-margin: 8px;

        .list-header {
            @apply relative flex flex-row justify-between flex-nowrap items-start mt-2 mx-2;

            .title {
                @apply block text-sm font-bold m-0 py-2 overflow-hidden bg-transparent cursor-pointer w-[80%];

                white-space: normal;
                overflow-wrap: anywhere;

            }
        }

        .list-cards {
            @apply flex flex-col overflow-x-hidden overflow-y-auto list-none gap-4 flex-1 mb-3 px-2;
            scrollbar-color: #091e4224 #091e420f;
            scrollbar-width: thin;

            .list-card {
                @apply relative overflow-hidden flex flex-col gap-2;
                scroll-margin: 80px;
            }
        }

        .list-footer {
            @apply relative flex justify-between items-center mb-2 mx-2;
        }

        .collapseListButton {
            @apply flex flex-nowrap items-center overflow-hidden cursor-pointer gap-2;
            justify-content: revert;
            padding: 8px 4px 16px;
            border-radius: inherit;
            writing-mode: vertical-lr;

            .list-name {
                @apply text-sm font-bold;
            }

            .list-count {
                @apply text-base;
            }
        }

        &.conceal {
            @apply w-[45px]
        }
    }
}

.kanban-card {
    @apply relative overflow-hidden rounded shadow cursor-pointer hover:border-blue-500 mb-4 break-words whitespace-normal;

    :deep(.arco-card-body) {
        @apply px-3 py-2;
    }

    .title {
        @apply block text-sm font-bold;
    }

    &.used {
        @apply border-l-[3px] border-l-sky-300;
    }
}
</style>

<!--.kanban-item-list {
        @apply rounded-xl bg-zinc-200 h-full overflow-y-auto overflow-x-hidden;

    }-->