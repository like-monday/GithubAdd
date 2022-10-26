<template>
  <div class="about">
    <el-form
      ref="loginForm"
      :rules="rules"
      :model="loginForm"
      class="LoginContainer"
    >
      <h3 class="LoginTitle">登录系统</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          auto-complete="false"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          v-model="loginForm.code"
          placeholder="点击图片更换验证码"
          style="width: 250px"
        ></el-input>
        <img :src="captchaUrl" alt="" />
      </el-form-item>
      <el-checkbox v-model="checked" class="LoginRemember"
        >记住密码</el-checkbox
      >
      <el-button type="primary" @click="submitLogin" style="width: 100%"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      captchaUrl: "",
      loginForm: {
        username: "",
        password: "",
        code: "",
      },
      checked: true,
      rules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$router.push("/home");
        } else {
          this.$message.error("请按要求输入");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.LoginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.LoginTitle {
  margin: 0 auto 40px auto;
  text-align: center;
}
.LoginRemember {
  text-align: left;
  margin: 0px 0px 15px 0px;
}
</style>>