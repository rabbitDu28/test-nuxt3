<template>
  <div>
    <NavBar></NavBar>
    <!-- nav/Bar.vue注册名称将会是NavBar用起来将会像下面这样 -->
    <slot />
  </div>
</template>
<style scoped>
.avatar {
  width: 50px;
  height: 50px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 50%;
}
</style>
