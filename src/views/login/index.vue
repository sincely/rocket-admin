<template>
  <a-tabs>
    <!-- 账号登录 -->
    <a-tab-pane key="account" tab="账号登录">
      <a-form ref="formRef" :model="formData" :rules="formRules">
        <a-form-item name="username">
          <a-input v-model:value="formData.username" size="large">
            <template #prefix>
              <user-outlined></user-outlined>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input v-model:value="formData.password" size="large" type="password" @pressEnter="handleLogin">
            <template #prefix>
              <lock-outlined></lock-outlined>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" size="large" block :loading="loading" @click="handleLogin">登录</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
    <!-- 手机号登录 -->
    <a-tab-pane key="phone" tab="手机号登录">
      <a-form ref="formRef" :model="formData" :rules="formRules">
        <a-form-item name="username">
          <a-input v-model:value="formData.phone" size="large" placeholder="手机号码">
            <template #prefix>
              <mobile-outlined></mobile-outlined>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="msgCode">
          <a-input v-model:value="formData.password" size="large" placeholder="短信验证码" @pressEnter="handleLogin">
            <template #prefix>
              <lock-outlined></lock-outlined>
            </template>
            <template #suffix>
              <x-send-code ref="sendCodeRef" v-model:seconds="seconds">
                <template #default="{ seconds, running }">
                  <template v-if="running">{{ seconds }}s 后重新获取</template>
                  <template v-else>
                    <a @click="handleGetCode">获取验证码</a>
                  </template>
                </template>
              </x-send-code>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" size="large" block :loading="loading" @click="handleLogin">登录</a-button>
        </a-form-item>
      </a-form>
    </a-tab-pane>
    <!-- 二维码登录 -->
    <a-tab-pane key="qrcode" tab="二维码登录">
      <x-qr-code class="mx-auto" value="https://github.com/sincely/rocket-admin.git/" :size="200"></x-qr-code>
      <a-divider plain>
        <div class="color-secondary">扫码后点击"确认"，即可完成登录</div>
      </a-divider>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
import { message } from 'ant-design-vue'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons-vue'
import { config } from '@/config'
import { useForm } from '@/hooks'
import { useUserStore } from '@/store'

defineOptions({
  name: 'Login'
})

const { formData, formRef, formRules } = useForm()
const userStore = useUserStore()
const route = useRoute()
const loading = ref(false)
const seconds = ref()
const sendCodeRef = ref()
const redirect = computed(() => decodeURIComponent(route.query?.redirect ?? ''))

formRules.value = {
  username: { required: true, message: '请输入用户名' },
  phone: { required: true, message: '请输入手机号' },
  password: { required: true, message: '请输入密码' }
}

onMounted(() => {
  formData.value = {
    username: 'admin',
    password: '123456',
    phone: 18800000000,
    code: 1234
  }
  // 清理登录信息
  userStore.logout()
})

/**
 * 登录
 * @return {Promise<void>}
 */
async function handleLogin() {
  formRef.value.validate().then(async (values) => {
    loading.value = true
    const { code } = await userStore
      .login({
        ...values
      })
      .catch(() => {
        loading.value = false
        message.error('登录失败')
      })
    loading.value = false
    if (config('http.code.success') === code) {
      userStore.goIndex({ redirect: redirect.value })
    }
  })
}

/**
 * 发送验证码
 */
function handleGetCode() {
  formRef.value.validate(['phone']).then(async () => {
    sendCodeRef.value.start()
  })
}
</script>

<style lang="less" scoped>
:deep(.ant-tabs-tab) {
  font-size: 15px;
}
</style>
