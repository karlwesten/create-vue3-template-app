<template>
  <span>{{ searchData.name }}</span>
  <button @click="setSearchData">设置修改后的搜索</button>
  <span>{{ tableData.name }}</span>
  <button @click="setTableData">设置修改后的表格</button>
  <button @click="$router.push('/404')">去404页面</button>
  <button @click="onSignOut">退出登录</button>
</template>

<script lang="ts" setup>
import router from "@/router";
import { useUserStore } from "@/stores";
import { MessagePlugin } from "tdesign-vue-next";
import { tableData, useTable } from "./hooks/useTable";
import { searchData, useSearch } from "./hooks/useSearch";

const { setSearchData } = useSearch();
const { setTableData } = useTable();
const { signOut } = useUserStore();

function onSignOut(): void {
  signOut();
  MessagePlugin.success("退出成功");
  router.push("/login");
}
</script>

<style scoped>

</style>
