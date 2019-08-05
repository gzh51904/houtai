<template>
  <el-container>
    <el-aside width="250px">
      <MenuList></MenuList>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>
<script>
import Vue from "vue";
import { Header, Container, Aside, Main } from "element-ui";
import MenuList from "../components/aside"

Vue.use(Header);
Vue.use(Aside);
Vue.use(Container);
Vue.use(Main);
export default {
  name: "app",
  components: {
    MenuList
  }
};
</script>

<style lang="scss">
</style>


