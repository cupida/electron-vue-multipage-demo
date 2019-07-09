<template>
    <el-button @click="showMessage">Show Message</el-button>
</template>

<script>
    export default {
        props: ['msg'],
        methods: {
            showMessage() {
                this.$message.success(this.msg);
            }
        }
    }
</script>

<style>
</style>
