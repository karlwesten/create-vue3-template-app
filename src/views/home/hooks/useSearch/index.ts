import { ref } from "vue";

export const searchData = ref({
  name: "搜索"
});

export function useSearch() {
  function setSearchData() {
    searchData.value.name = "修改后的搜索";
  }

  return { setSearchData };
}


