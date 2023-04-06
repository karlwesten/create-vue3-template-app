<template>
  <main class="error404">
    <a-result status="404" title="404" sub-title="抱歉，您访问的页面不存在。">
      <template #extra>
        <a-button type="primary" @click="$router.push('/')">回到首页</a-button>
      </template>
    </a-result>
  </main>
</template>

<style lang="less" scoped>
.error404 {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
