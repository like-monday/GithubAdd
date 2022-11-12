<template>
  <div class="leftMenu">
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      text-color="rgb(191, 203, 217)"
      background-color="#304156"
      :collapse="isCollapse"
      router
      @select="handleSelect"
    >
      <div v-if="!isCollapse" class="title">
        <span></span>
        <span>DX后台管理系统</span>
      </div>
      <div v-for="(item, index) in routerInfo" :key="index">
        <el-menu-item :index="item.path">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import routerlist from '../../router/index'
export default {
  data () {
    return {
    };
  },
  props: ['isCollapse'],
  created () {
    this.getRouterInfo()
  },
  methods: {
    // 获取路由字段信息
    getRouterInfo () {
      this.routerInfo = routerlist.options.routes[0].children
    },
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    },
    // 接收到路由路径
    handleSelect (key, keyPath) {
    },
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
  height: 100vh;
  background-color: #304156;
}
.el-menu--collapse {
  height: 100vh;
}
</style>

<style scoped lang='less'>
.leftMenu {
  //   width: 210px;
  //   height: 100vh;
  //   background-color: #304156;
  overflow: hidden;
  .title {
    width: 210px;
    text-align: center;
    padding: 20px 0;
    // color: #0077f7;
    color: #fff;
    font-weight: 600;
    font-size: 22px;
    background-color: #293a4f;
  }
}
</style>
