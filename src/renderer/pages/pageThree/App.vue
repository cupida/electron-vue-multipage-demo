<template>
  <div id="app">
    <page-infomation v-bind:msg="msg"></page-infomation>
  </div>
</template>

<script>
  import PageInfomation from '@/components/PageInfomation'
  
  export default {
    data() {
      return {
        msg: 'This is page-3'
      }
    },
    components: {
      PageInfomation
    }
  }
</script>

<style>
  /* CSS */
</style>
