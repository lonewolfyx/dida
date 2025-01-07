<template>
    <div class="kanban-board">
        <DynamicScroller
            :items="items"
            :min-item-size="54"
            direction="horizontal"
            class="flex-1"
        >
            <template #default="{ item, index, active }">
                <DynamicScrollerItem
                    :item="item"
                    :active="active"
                    :data-index="index"
                    :data-active="active"
                    class="kanban-board-item"
                >
                    <KanbanBoardItem :items="item"/>
                </DynamicScrollerItem>
            </template>
        </DynamicScroller>
    </div>
</template>

<script setup>
import KanbanBoardItem from '@/components/Kanban/KanbanBoardItem/index.vue';
import {faker} from '@faker-js/faker';

const generateMessage = () => {
    return {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. ',
        avatar: `https://picsum.photos/id/${Math.round(Math.random() * 100)}/200/200`,
    }
}
// const items = []
// for (let i = 0; i < 1; i++) {
//     items.push({
//         id: i,
//         ...generateMessage(),
//     })
// }

const items = Array.from({length: 20}, () => {
    return {
        id: faker.database.mongodbObjectId(),
        title: faker.lorem.sentence(),
        list: [
            ...Array.from({length: faker.number.int({min: 5, max: 8})}, () => {
                return {
                    id: faker.database.mongodbObjectId(),
                    title: faker.book.title(),
                    used: faker.datatype.boolean(),
                    tags: [
                        {
                            id: faker.database.mongodbObjectId(),
                            name: faker.animal.type(),
                            color: faker. color. rgb({ casing: 'lower' }),
                        }
                    ]
                }
            })
        ],
    }
})
console.log(items)
</script>

<style scoped>
.kanban-board {
    @apply relative flex flex-col overflow-x-auto overflow-y-hidden h-full z-20;
    scrollbar-color: #fff6 #00000026;
    scrollbar-width: auto;


    .kanban-board-item {
        @apply relative block shrink-0 whitespace-nowrap h-full;
    }

}
</style>