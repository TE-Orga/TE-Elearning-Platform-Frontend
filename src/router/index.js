import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/auth/Login.vue';
import VisitorLogin from '../views/auth/VisitorLogin.vue'
import ContractorLogin from '../views/auth/ContractorLogin.vue'
import Register from '../views/auth/Register.vue'
import VisitorRegister from '../views/auth/VisitorRegister.vue'
import ContractorRegister from '../views/auth/ContractorRegister.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component : About
    },
    {
        path: '/auth/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/auth/visitorlogin',
        name: 'VisitorLogin',
        component: VisitorLogin,
    },
    {
        path: '/auth/contractorlogin',
        name: 'ContractorLogin',
        component: ContractorLogin,
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/auth/visitorregister',
        name: 'VisitorRegister',
        component: VisitorRegister,
    },
    {
        path: '/auth/contractorgister',
        name: 'ContractorRegister',
        component: ContractorRegister,
    }
]
const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router 