<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (s) => {
    return s ? `${s} - 兔子的技术空间` : '兔子的技术空间'
  },
})
</script>
