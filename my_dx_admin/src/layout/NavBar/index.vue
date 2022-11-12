<template>
  <div class="navbarmax">
    <div
      v-if="!isCollapse"
      id="iconmax"
      class="el-icon-s-fold"
      @click="Collapse"
    ></div>
    <div v-else id="iconmin" class="el-icon-s-unfold" @click="Collapse"></div>
    <div id="right">
      <div class="el-icon-bell"></div>
      <div class="userinfo">
        <i class="el-icon-user-solid"></i>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            admin<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>超级管理员</el-dropdown-item>
            <el-dropdown-item command="Logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
    }
  },
  methods: {
    // 点击了伸缩按钮
    Collapse () {
      this.isCollapse = !this.isCollapse
      this.$emit('Collapse', this.isCollapse)
    },
    // 判断下拉框点击类型
    handleCommand (command) {
      if (command == 'Logout') {
        console.log('退出登录');
      }
    }
  }
}
</script>

<style scoped lang='less'>
.navbarmax {
  display: flex;
  overflow: hidden;
  width: 100vw;
  height: 50px;
  background-color: #eff1f6;
  align-items: center;
  justify-content: space-between;
  // #313f54
  // #1c2939

  #iconmax {
    margin-left: 220px;
    font-size: 25px;
    height: 25px;
    width: 25px;
    color: #404040;
  }

  #iconmin {
    margin-left: 76px;
    font-size: 25px;
    height: 25px;
    width: 25px;
    color: #404040;
  }

  #right {
    display: flex;

    .userinfo {
      i {
        margin-right: 10px;
      }
      margin-left: 100px;
      margin-right: 20px;
    }
  }
}
</style>
