import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './components/Home'
import Login from './components/Login'


let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    }    
]

const router = new Router({
    routes
})

export default router