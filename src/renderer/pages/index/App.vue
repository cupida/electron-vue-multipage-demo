<template>
    <el-container id="app">
        <el-header>
          <el-breadcrumb>
            <!-- 页面内路由跳转 -->
            <el-breadcrumb-item :to="{ path: '/one' }">Component One</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/two' }">Component Two</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
            <router-view></router-view>
            <hr>
            <!-- 页面之间相互跳转 -->
            <el-button type="primary" @click="openPageTwo">Open Page Two</el-button>
            <el-link type="primary" href="./pageThree.html" target="_blank">Open Page Three</el-link>
        </el-main>
    </el-container>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      openPageTwo() {
        // 页面之间相互跳转
        // 使用绝对路径，production模式下无法正确跳转
        window.open('/pageTwo.html');
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
