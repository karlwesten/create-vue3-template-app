import { ref } from "vue";

export const tableData = ref({
  name: "搜索"
});

export function useTable() {
  function setTableData() {
    tableData.value.name = "修改后的搜索";
  }

  return { setTableData };
}

