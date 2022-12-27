import VueRouter from "vue-router";
import Main from "@/Pages/Main.vue";
import Edit from "@/Pages/CountryEdit.vue";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: '/edit',
        name: 'Edit',
        component: Edit,
        props: true
    },
    {
        path: "/page-not-found",
        alias: '*',
        component: { render: (h) => h("div", ["404! Page Not Found!"]) },
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router