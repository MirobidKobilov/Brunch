import { createApp } from "vue/dist/vue.esm-bundler";
import router from "./router";
import UsersIndex from "./components/users/UsersIndex.vue";

createApp({
    components: {
        UsersIndex,
    }
}).use(router).mount('#app');