<template>
  <div :class="{ dark: appConfig.theme.dark }">
    <p
      class="bg-blue-300 dark:bg-slate-600 dark:text-slate-200"
      @click="appConfig.title = 'hello'"
    >
      appConfig: {{ appConfig.title }} runtimeConfig.public.apiBase:
      {{ runtimeConfig.public.apiBase }}
    </p>

    <label>
      dark mode: {{ appConfig.theme.dark }}
      <UToggle v-model="appConfig.theme.dark" />
    </label>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()//获取客户端运行时配置env
// console.log('runtimeConfig', runtimeConfig)

// 只在服务端才能输出
if (process.server) {
  // console.log('API secret:', runtimeConfig.apiSecret)
}
</script>
