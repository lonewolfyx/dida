import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: 'workspace',
            component: () => import('@/layout/index.vue'),
            children:[
                {
                    path: 'workspace',
                    name: 'workspace',
                    component: () => import('@/views/index.vue')
                }
            ]
        },
    ],
});

export default router;
