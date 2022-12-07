<template>
  <div>about</div>
  <button @click="gotoHome">点击去home页面</button>
</template>

<script lang='ts' setup>
import {onMounted} from 'vue';
import {useRouter} from "vue-router";

const router = useRouter()
const gotoHome = () => {
  router.push('/home')
}
onMounted(() => {
})
</script>

<style lang='scss' scoped>

</style>
