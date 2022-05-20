<template>
  <span>{{ searchData.name }}</span>
  <button @click="setSearchData">设置修改后的搜索</button>
  <span>{{ tableData.name }}</span>
  <button @click="setTableData">设置修改后的表格</button>
  <button @click="$router.push('/404')">去404页面</button>
</template>

<script lang="ts" setup>
import { tableData, useTable } from "./hooks/useTable";
import { searchData, useSearch } from "./hooks/useSearch";

const { setSearchData } = useSearch();
const { setTableData } = useTable();
</script>

<style scoped>

</style>
