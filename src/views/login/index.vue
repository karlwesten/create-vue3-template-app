<template>
  <div class="login">
    <t-form ref="form" :data="formData" :colon="true" :label-width="0" @reset="onReset" @submit="onSubmit">
      <t-form-item name="account">
        <t-input v-model="formData.account" clearable placeholder="请输入账户名">
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
import router from "@/router";
import { setCookie } from "@/utils/cookie";
import { defineComponent, ref } from "vue";
import { MessagePlugin } from "tdesign-vue-next";
import { DesktopIcon, LockOnIcon } from "tdesign-icons-vue-next";

const INITIAL_DATA = {
  account: "admin",
  password: "admin"
};

const formData = ref({ ...INITIAL_DATA });

const onReset = () => {
  MessagePlugin.success("重置成功");
};

const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    setCookie('12345');
    router.push('/home');
  } else {
    console.log("Validate Errors: ", firstError, validateResult);
    MessagePlugin.warning(firstError);
  }
};
</script>

<style scoped>
.login {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
