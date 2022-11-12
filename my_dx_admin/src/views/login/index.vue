<template>
  <div class="login">
    <div class="from">
      <div class="title">SIGNIN FORM</div>
      <div class="inputs">
        <div class="form-control">
          <input
            ref="account"
            type="value"
            v-model="fromdata.account"
            required=""
          />
          <label>
            <span style="transition-delay: 0ms">U</span
            ><span style="transition-delay: 50ms">s</span
            ><span style="transition-delay: 100ms">e</span
            ><span style="transition-delay: 150ms">r</span
            ><span style="transition-delay: 200ms">n</span>
            <span style="transition-delay: 250ms">a</span>
            <span style="transition-delay: 300ms">m</span>
            <span style="transition-delay: 350ms">e</span></label
          >
        </div>

        <div class="form-password">
          <input
            ref="password"
            type="value"
            v-model="fromdata.password"
            required=""
          />
          <label>
            <span style="transition-delay: 0ms">P</span
            ><span style="transition-delay: 50ms">a</span
            ><span style="transition-delay: 100ms">s</span
            ><span style="transition-delay: 150ms">s</span
            ><span style="transition-delay: 200ms">w</span>
            <span style="transition-delay: 250ms">o</span>
            <span style="transition-delay: 300ms">r</span>
            <span style="transition-delay: 350ms">d</span></label
          >
        </div>
      </div>
      <div class="remember">
        <label class="container">
          <input type="checkbox" v-model="checked" @change="Checkbox" />
          <div class="checkmark"></div>
        </label>
        <span class="rm">Remember me</span>
        <span class="fp">Forgot password?</span>
      </div>
      <div class="bt">
        <div class="left"></div>
        <div class="right"></div>
        <div class="login_bt" @click="Login">SIGN IN</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      checked: false,
      fromdata: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    // 登录
    Login () {
      console.log('点击了登录按钮');
      console.log('当前登录账号:', this.fromdata.account);
      console.log('当前登录密码:', this.fromdata.password);
    },
    // 勾选记住密码
    Checkbox () {
      console.log(this.checked);
    }
  }
}
</script>

<style scoped lang="less">
.login {
  width: 100vw;
  height: 100vh;
  background-color: #142335;
  overflow: hidden;
  .from {
    // background: rgba(255, 255, 255, 0.1);
    // -webkit-backdrop-filter: blur(8px);
    // backdrop-filter: blur(8px);
    // border-radius: 25px;
    // box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);

    position: relative;
    margin: 200px auto;
    width: 500px;
    height: 400px;

    .title {
      width: 100%;
      height: 50px;
      background-color: #02a299;
      color: #fff;
      line-height: 50px;
      text-align: center;
      letter-spacing: 8px;
    }

    .inputs {
      .form-control {
        position: relative;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
      }

      .form-password {
        position: relative;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
      }

      input:focus,
      input:valid {
        outline: 0;
        border-bottom-color: lightblue;
      }

      label {
        position: absolute;
        top: 15px;
        left: 0;
        pointer-events: none;
      }

      label span {
        display: inline-block;
        font-size: 18px;
        min-width: 5px;
        color: #fff;
        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      input:focus + label span,
      input:valid + label span {
        color: lightblue;
        transform: translateY(-30px);
      }

      input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px #fff solid;
        display: block;
        width: 100%;
        padding: 15px 0;
        font-size: 18px;
        color: #fff;
      }
    }

    .remember {
      position: relative;
      top: 120px;
      left: 10%;

      .rm {
        position: absolute;
        top: 2px;
        left: 30px;
        color: #fff;
      }

      .fp {
        position: absolute;
        cursor: pointer;
        top: 2px;
        left: 280px;
        color: #fff;
      }
      /* Hide the default checkbox */
      .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      .container {
        display: inline-block;
        position: relative;
        cursor: pointer;
        font-size: 20px;
        user-select: none;
      }

      /* Create a custom checkbox */
      .checkmark {
        position: relative;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #ccc;
        transition: all 0.3s;
        border-radius: 5px;
      }

      /* When the checkbox is checked, add a blue background */
      .container input:checked ~ .checkmark {
        background-color: #47da99;
        animation: pop 0.5s;
        animation-direction: alternate;
      }

      /* Create the checkmark/indicator (hidden when not checked) */
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      /* Show the checkmark when checked */
      .container input:checked ~ .checkmark:after {
        display: block;
      }

      /* Style the checkmark/indicator */
      .container .checkmark:after {
        left: 7px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 0.15em 0.15em 0;
        transform: rotate(45deg);
      }

      @keyframes pop {
        0% {
          transform: scale(1);
        }

        50% {
          transform: scale(0.9);
        }

        100% {
          transform: scale(1);
        }
      }
    }

    .bt {
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 108%;
      height: 60px;
      background-color: #fff;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      line-height: 60px;
      cursor: pointer;

      .left {
        position: absolute;
        top: -20px;
        left: 0;
        width: 0;
        height: 0;
        border-bottom: 20px solid rgb(255, 255, 255);
        border-left: 20px solid transparent;
      }

      .right {
        position: absolute;
        top: -20px;
        right: 0;
        width: 0;
        height: 0;
        border-bottom: 20px solid rgb(255, 255, 255);
        border-right: 20px solid transparent;
      }

      .login_bt {
        font-size: 20px;
        color: #02a299;
      }
    }
  }
}
</style>
