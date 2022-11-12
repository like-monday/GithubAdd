<template>
  <div class="layout">
    <div class="leftmenu">
      <LeftMenu :isCollapse="isCollapse" />
    </div>
    <div class="navbar">
      <NavBar @Collapse="getCollapse" />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
import LeftMenu from './LeftMenu'
export default {
  name: 'layout',
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    NavBar,
    LeftMenu
  },
  methods: {
    getCollapse (isCollapse) {
      this.isCollapse = isCollapse
    }
  }
}
</script>

<style scoped lang='less'>
.layout {
  display: flex;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  .leftmenu {
    z-index: 3;
  }

  .navbar {
    position: fixed;
  }

  .content {
    width: 100vw;
    margin-top: 50px;
    overflow: auto;
  }
}
</style>
