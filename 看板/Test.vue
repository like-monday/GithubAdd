<template>
  <div>
    测试页面
    <input type="text" v-model="name" />
    <input type="text" v-model="age" />
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      name: "",
      age: "",
    };
  },
  mounted() {
    this.$store.dispatch("reqUserInfo");
  },
  methods: {
    add() {
      let name = this.name;
      let age = this.age;
      console.log(name, age);
      this.$store.dispatch("addUserInfo", { name, age });
    },
  },
};
</script>

<style>
</style>