<template>
  <NavBar></NavBar>
  <div class="w">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script setup>
import  NavBar from './component/NavBar.vue'
import  Footer from './component/Footer.vue'
import {  } from 'vue'
    
</script>
 
<style  scoped>
  .w{
    max-width: 1440px;
    margin: 0 auto;
  }
</style>