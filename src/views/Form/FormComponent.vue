<template>
  <h1>Создание нового задания</h1>

  <div class="breadcrumbs">
    <router-link
      v-for="(breadcrumb, index) in breadcrumbs"
      :to="{
        name: `${routePrefix}.${breadcrumb.name}`,
        params: { id: route.params.id },
      }"
      :key="'breadcrumb' + index"
      class="breadcrumb-item"
    >
      {{ index + 1 }}. {{ breadcrumb.label }}
    </router-link>
  </div>

  <div class="actions">
    <router-link
      class="actions-item"
      :to="{ name: route.meta.nextRoute, params: { id: route.params.id } }"
    >
      Далее
    </router-link>

    <router-link :to="{ name: 'list' }" class="actions-item" @click="onBtnSave">
      Сохранить
    </router-link>
    <router-link class="actions-item" :to="{ name: 'list' }">
      Отмена
    </router-link>
  </div>

  <router-view></router-view>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const breadcrumbs = [
      { name: "index", label: "Основные настройки" },
      { name: "documents", label: "Документы" },
      { name: "comments", label: "Комментарии" },
    ];

    const route = useRoute();
    const store = useStore();
    const isNew = !route.params.id;
    const routePrefix = isNew ? "create" : "edit";

    const loadCurrent = () => {
      const taskId = route.params.id;
      const taskList = store.getters["tasks/getList"];
      if (taskId && taskList[taskId]) {
        store.commit("tasks/loadCurrent", taskList[taskId]);
      } else {
        store.commit("tasks/loadCurrent", {
          documents: [],
          comments: [],
        });
      }
    };

    loadCurrent();

    const onBtnSave = () => {
      console.log("save");
    };

    return {
      breadcrumbs,
      routePrefix,
      route,
      onBtnSave,
    };
  },
};
</script>

<style></style>
