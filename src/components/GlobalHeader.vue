<template>
  <a-row
    id="globalHeader"
    class="grid-demo"
    style="margin-bottom: 16px"
    align="center"
    :wrap="false"
  >
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/oj-logo.svg" />
            <div class="title">OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in routeArr" :key="item.path"
          >{{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "../router/routes";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import accessEnum from "@/access/accessEnum";

const store = useStore();
const loginUser = store.state.user?.loginUser;
const routeArr = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.isHide) {
      return false;
    }
    //权限校验
    return checkAccess(loginUser, item.meta?.role as string);
  });
});
//三秒后登录
setTimeout(() => {
  store.dispatch("user/getLoginUser", { userName: "zhao", role: "admin" });
}, 3000);
const router = useRouter();
//控制选中导航栏高亮显示
const doMenuClick = (key: string) => {
  router.push({ path: key });
};
const selectedKeys = ref(["/"]);
router.afterEach((to, form, failure) => {
  selectedKeys.value = [to.path];
});
</script>

<style setup scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
