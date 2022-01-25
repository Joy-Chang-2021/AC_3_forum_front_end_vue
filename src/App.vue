<template>
  <div id="restaurant-forum">
    <Navbar />
    <main role="main" class="mt-5 bg-white">
      <!-- 根據路由、抽換內容 -->
      <router-view/>
    </main> 
  </div>
</template>

<script>
import 'bootstrap' //載入 bootstrap 的 JS
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>


<style>
</style>
