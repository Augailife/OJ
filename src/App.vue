<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
router.beforeEach((to, from, next) => {
  if (to.meta?.role === "adminRole") {
    if (store.state.user.loginUser?.role !== "admin") {
      next("/noPower");
      return;
    }
  }
  next();
});
</script>
<style>
#app {
}
</style>
