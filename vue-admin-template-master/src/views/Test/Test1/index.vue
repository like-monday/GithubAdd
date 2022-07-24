<template>
  <div>
      <el-button type="primary" v-show="$store.state.use.buttons.indexOf('btn.Add1')!=-1">添加按钮</el-button>
      <el-button type="primary" v-show="$store.state.use.buttons.indexOf('btn.Add2')!=-1">添加按钮</el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>