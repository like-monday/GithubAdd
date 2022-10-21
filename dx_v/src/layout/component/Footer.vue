<template>
  <div class="footer">
    <div class="w">
      <div class="logo">
        <span>DX-CXY</span>
        <div class="logo_icon">
          <img src="../../assets/images/favicon.ico" alt="">
          <span>等下,程序员</span>
        </div>
        <span>我们不开发网页，我们只是网址的搬运工</span>
      </div>
      <div class="info">
        <span>关于</span>
        <span>DX-CXY 致力于提供方便的一站式网址导航。</span>
        <span>本站仅为网址导航，网站来源于网络，对其内容不负任何责任，若有问题，请联系我。</span>
        <span>声明</span>
        <span>网站上的服务均为第三方提供，与CXY521无关。请用户注意甄别服务质量，避免上当受骗。</span>
      </div>
      <div class="contact">
        <img src="../../assets/images/联系方式.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { } from 'vue'

</script>

<style lang = "less" scoped>
.footer {
  margin-top: 600px;
  display: flex;
  width: 100%;
  height: 240px;
  background-color: #fff;
  box-shadow: 0 -7px 18px rgba(0, 119, 247, 0.22);

  .w {
    height: 100%;
    width: 1440px;
    margin: 0 auto;
    display: flex;
    .logo {
      flex: 3;
      height: 100%;
      text-align: center;

      span {
        display: block;
        font-size: 12px;
      }

      span:nth-child(1) {
        color: #0077f7;
        font-weight: 600;
        // font-style: italic;
        font-size: 50px;
        margin: 20px 0 0 0;
      }

      .logo_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 10px 0;

        img {
          margin-right: 3px;
          width: 19px;
          height: 19px;
        }

        span {
          font-size: 17px;
        }
      }

    }

    .info {
      flex: 5;
      height: 100%;
      // box-sizing: border-box;
      // padding: 0 0 0 50px;

      span {
        display: block;
      }

      span:nth-child(1) {
        margin: 30px 0 0 0;
        font-size: 20px;
      }

      span:nth-child(2),
      span:nth-child(3) {
        font-size: 15px;
        margin: 10px 0 0 0;
      }


      span:nth-child(4) {
        font-size: 20px;
        margin: 30px 0 0 0;
      }

      span:nth-child(5) {
        font-size: 12px;
        margin: 7px 0 0 0;
      }
    }

    .contact {
      flex: 2;
      height: 100%;
      box-sizing: border-box;
      padding: 30px 0 0 0;
      text-align: center;

      img {
        width: 100px;
      }
    }
  }
}
</style>
