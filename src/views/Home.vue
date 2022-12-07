<!-- home -->
<template>
  <div>home页面</div>
  <div v-for="(item, index) in items" :key="index">
    <div>id:{{ item.id }}</div>
    <div>name:{{ item.name }}</div>
    <div>age:{{ item.age }}</div>
  </div>
  <div>{{ showData }}</div>
</template>
<script lang="ts">
export default {
  name: "home"
}
</script>
<script setup lang='ts'>
import {ref, defineComponent, reactive, onMounted, getCurrentInstance} from 'vue';
import {createOrgRes} from '../api/ucOrg/type';
import $api from '../api';
import {Todo} from '../types';

const items = ref([] as Todo[])
const showData = ref<createOrgRes>({})
onMounted(() => {
  // 标准请求案例，没有服务，只看代码
  // @ts-ignore
  // const { ctx } = getCurrentInstance() 鼠标移动到结果上感受一下ts的魅力
  $api.UcCreateOrg({
    name: '',
    parentId: 0,
    remark: '',
    status: 0
  }).then(res => {
    console.log(res)
    showData.value = res
  })
})

</script>

<style lang='scss' scoped>
</style>
