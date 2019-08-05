<template>
  <div class="app">
  <el-col>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
    <h4>后台管理系统</h4>
      <el-submenu :index='item.title' v-for='item in datalist' :key="item.title" @click="aa">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.title}}</span>
        </template>
          <el-menu-item :index='item1.title' v-for="item1 in item.list" :key="item1.name">{{item1.title}}</el-menu-item>
      </el-submenu>
      
    </el-menu>
  </el-col>
  </div>
</template>

<script>
import Vue from "vue";
import { Col, Menu, MenuItem, Submenu, MenuItemGroup } from "element-ui";

Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);

export default {
  data(){
    return {
      datalist:[{
        title:'客户信息',
        list:[{
          title:'客户管理',
          path:'/client',
          name:'Home'
        },{
          title:'反馈信息',
          path:'/fankui',
          name:'FanKui'
        },{
           title:'消息管理',
          path:'/message',
          name:'Message'
        }]
      },{
          title:'订单信息',
          index:'2',
        list:[{
          title:'客户管理',
          path:'/client',
          name:'Home'
        },{
          title:'反馈信息',
          path:'/fankui',
          name:'FanKui'
        },{
           title:'消息管理',
          path:'/message',
          name:'Message'
        }]
      },{
        index:'3',
         title:'商品信息',
        list:[{
          title:'客户管理',
          path:'/client',
          name:'Home'
        },{
          title:'反馈信息',
          path:'/fankui',
          name:'FanKui'
        },{
           title:'消息管理',
          path:'/message',
          name:'Message'
        }]
      }]
    }
  },
  methods: {
   aa(){
     console.log(111)
   }
  }
};
</script>

<style lang="scss">
  .el-col{
    height: 100vh;
    width: 250px;
    background: #545c64;
    h4{
      text-align: center;
      color:#fff;
      font-size: 24px;
      height: 50px;
      line-height: 50px;
      margin: 10px 0;
    }
    
    
  }
</style>


