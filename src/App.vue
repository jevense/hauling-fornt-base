<script setup lang="ts">
import {ref} from 'vue';
import {Menu as IconMenu, Message, Setting} from '@element-plus/icons-vue'
import {$post} from './api/request'

async function login() {
  console.log('=======');
  // await $post({
  //   url: '/authHub/loginV2',
  //   data: {
  //     "username": "18816290151",
  //     "password": "f84eb6727be858ecdf1004625fe575ab"
  //   }
  // });
  const {data: {token}} = await $post<{ data: any }>({
    url: '/authHub/loginByClient',
    data: {
      "userId": "1161",
      "client": "10000005",
      "deviceCode": "Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/107.0.0.0Safari/537.36"
    }
  });
  sessionStorage.setItem("token", token);
  console.log(token);
}

</script>

<template>
  <el-container class="layout-container-demo" style="height: 100vh;">
    <el-aside width="200px" style="height: 100vh; background: gray;">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item index="2">
            <el-icon>
              <icon-menu/>
            </el-icon>
            <router-link to="/home">首页</router-link>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <icon-menu/>
              </el-icon>
              销售提成
            </template>
            <el-menu-item index="2-1">
              <router-link to="/sub-report-admin/subreport/demo">demo</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/sub-report-admin/subreport/commissionNewPlanList">提成方案列表</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link to="/sub-report-admin/subreport/commissionStatistics">提成统计</router-link>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-button style="margin-top: 1em;" type="danger" @click="login">登陆</el-button>
        </div>
      </el-header>
      <el-main>
        <el-scrollbar>
          <router-view></router-view>
          <div id="container"></div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>

</template>

<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
