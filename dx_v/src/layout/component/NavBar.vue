<template>
  <div class="navbar">
    <div class="w">
      <div class="logo">
      DX-CXY
    </div>
    <ul id="navbar">
      <li class="li_active">首页</li>
      <li>前端</li>
      <li>后端</li>
      <li>迭代日志</li>
    </ul>
    <ul class="date_weather">
      <li>2022年10月10日</li>
      <li>星期五</li>
      <li>19℃</li>
      <li>深圳</li>
      <li>☀</li>
      <li>良</li>
    </ul>
    </div>
  </div>
</template>

<script setup>
import {  } from 'vue'
    
</script>
 
<style lang = "less" scoped>
  .navbar{
    box-sizing: border-box;
    padding: 0 50px;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow:0px 9px 9px 0px rgba(42, 130, 228, 0.2);

    .w {
      max-width: 1440px;
      margin: 0 auto;
      height: 100%;
      .logo{
      float: left;
      height: 100%;
      line-height: 60px;
      font-style: italic;
      font-weight: 600;
      font-size: 35px;
      color: #0077f7;
    }

    #navbar {
      float: left;
      margin-left: 50px;
      height: 100%;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      li{
        color: #505050;
        margin: 0 20px;
        font-size: 16px;
        line-height: 27px;
        height: 27px;
        padding: 0 10px;
        border-radius: 7px;
        cursor: pointer;
      }

      .li_active{
        color: #fff;
        background-color: #0077f7;
      }
    }

    .date_weather{
      float: right;
      height: 100%;
      li{
        float: left;
        height: 60px;
        line-height: 60px;
      }
      li:nth-child(1){
        margin: 0 10px;
      }
      li:nth-child(2){
        margin: 0 40px 0 10px;
      }
      li:nth-child(n+3){
        margin: 0 7px;
      }
      li:nth-child(5){
        color: #ffc300;
      }
    }
    }
  }
</style>