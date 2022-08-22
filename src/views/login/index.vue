<template>
  <div class="login">
    <t-form ref="form" :data="formData" :colon="true" :label-width="0" @reset="onReset" @submit="onSubmit">
      <t-form-item name="username">
        <t-input v-model="formData.username" clearable placeholder="请输入账户名">
          <template #prefix-icon>
            <desktop-icon />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="password">
        <t-input v-model="formData.password" type="password" clearable placeholder="请输入密码">
          <template #prefix-icon>
            <lock-on-icon />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item style="padding-top: 8px">
        <t-button theme="primary" type="submit" block>登录</t-button>
      </t-form-item>
    </t-form>
  </div>
</template>

<script lang="ts" setup>
import { useLogin } from "./index"
import { DesktopIcon, LockOnIcon } from "tdesign-icons-vue-next"

const { formData, onReset, onSubmit } = useLogin()
</script>

<style scoped>
.login {
  width: 300px;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style>
