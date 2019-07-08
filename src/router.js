import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from './views/Admin.vue'
import Insights from './views/Insights.vue'
/* import TestInput from '../src/components/sections/TestInput.vue'; */
import Product from './views/Product.vue'
import Profile from './views/Profile.vue'
import { fb } from './firebase'

Vue.use(Router);
const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/admin",
            name: "admin",
            component: Admin,
            meta: { requiresAuth: true },
            children: [

                {
                    path: "insights",
                    name: "Insights",
                    component: Insights
                },
                {
                    path: "products",
                    name: "Product",
                    component: Product
                },

                {
                    path: "profile",
                    name: "Profile",
                    component: Profile
                },


            ]
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/checkout",
            name: "checkout",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/Checkout.vue")
        }
    ]
});

router.beforeEach((to, from, next) => {

    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = fb.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
});

export default router;