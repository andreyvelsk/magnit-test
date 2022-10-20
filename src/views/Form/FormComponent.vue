<template>
  <h1>
    {{ isEdit ? "Редактироварие задания" : "Создание нового задания" }}
  </h1>

  <breadcrumbs-component />

  <actions-component />

  <router-view></router-view>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
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
    const router = useRouter();
    const store = useStore();
    const taskList = computed(() => store.getters["tasks/getList"]);

    //load existed task or create new one
    const taskId = route.params.id;

    //no id existed
    if (taskId && !taskList.value[taskId]) {
      router.push({ name: "list" });
    }
    const isEdit = taskId && taskList.value[taskId];
    if (isEdit) {
      const task = JSON.parse(JSON.stringify(taskList.value[taskId]));
      store.commit("tasks/loadCurrent", task);
    } else {
      store.commit("tasks/loadCurrent", {
        documents: [],
        comments: [],
      });
    }

    return {
      isEdit,
    };
  },
};
</script>
