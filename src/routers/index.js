import Vue from 'vue'
//1、引入vue-router
import Router from 'vue-router'

import Home from '../pages/Home.vue'
//2、使用vue-router插件
Vue.use(Router)

//3、实例化router并配置参数
let router = new Router({
    routes: [{
        name:'Home',
        path:'/home',
        component:Home,
        // children:[{
        //     name:''
        // }]
    },{
        path:'/',
        redirect:{name:'Home'}
    }]
})



export default router
//4、把router实例注入到vue实例中

//5\使用VueRouter
//在任意组件中通过this.$router使用