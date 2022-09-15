import { createRouter, createWebHistory } from "vue-router";
import UsersIndex from "../components/users/UsersIndex.vue";
import UsersCreate from "../components/users/UsersCreate.vue";
import UsersEdit from "../components/users/UsersEdit.vue";

const routes = [
    {
        path: '/',
        name: 'users.index',
        component: UsersIndex,
    },

    {
        path: '/users/create',
        name: 'users.create',
        component: UsersCreate,
    },

    {
        path: '/users/:id/edit',
        name: 'users.edit',
        component: UsersEdit,
        props: true,
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
});