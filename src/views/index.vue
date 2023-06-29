<script lang="ts" setup>
import { useCount } from '@/composables/useCount'

const { count, setCount } = useCount()
</script>

<template>
  <main class="index">
    <h1>Hello, Vue3!</h1>
    <h2 @click="setCount">👋 {{ count }}</h2>
  </main>
</template>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');

.index {
  height: 100vh;
  display: flex;
  font-weight: 500;
  align-items: center;
  font-family: 'Rubik';
  flex-direction: column;
  justify-content: center;
  background-color: rgb(30, 58, 138);

  h1 {
    color: #fff;
    line-height: 1;
    font-size: 4.5em;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h2 {
    cursor: pointer;
    font-size: 2.5em;
    margin-top: 6rem;
    color: rgb(253, 224, 71);

    &::selection {
      background-color: transparent;
    }
  }
}
</style>
