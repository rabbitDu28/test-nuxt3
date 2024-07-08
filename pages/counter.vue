<template>
  <div class="p-4">
    count: {{ count }} Counter: {{ counter }} counterRef: {{ counterRef }}
    <div class="mt-2">
      <UButton
        @click="
          counter++;
          counterRef++;
        "
        >+</UButton
      >
      -
      <UButton
        @click="
          counter--;
          counterRef--;
        "
        >-</UButton
      >
    </div>
    <Counter></Counter>
    <Counter></Counter>
  </div>
</template>

<script setup lang="ts">
// 测试
// 局部状态
const counterRef = ref(Math.round(Math.random() * 1000))
const counter = useState('counter', () => Math.round(Math.random() * 1000))
// 全局状态
// const count = useCounter()
const store = useCounter()
const { value: count } = storeToRefs(store)
</script>
