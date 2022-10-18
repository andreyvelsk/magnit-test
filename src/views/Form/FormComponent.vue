<template>
  <div class="wrapper">
    <h1>Создание нового задания</h1>

    <breadcrumbs-component />

    <actions-component />

    <router-view></router-view>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
import BreadcrumbsComponent from "./BreadcrumbsComponent.vue";
import ActionsComponent from "./ActionsComponent.vue";
export default {
  components: {
    BreadcrumbsComponent,
    ActionsComponent,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const taskList = computed(() => store.getters["tasks/getList"]);

    //load existed task or create new one
    const taskId = route.params.id;
    if (taskId && taskList.value[taskId]) {
      const task = JSON.parse(JSON.stringify(taskList.value[taskId]));
      store.commit("tasks/loadCurrent", task);
    } else {
      store.commit("tasks/loadCurrent", {
        documents: [],
        comments: [],
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 78px;
}
</style>
