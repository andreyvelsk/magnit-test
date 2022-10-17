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
import { computed } from "vue";
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
    const taskList = computed(() => store.getters["tasks/getList"]);

    const loadCurrent = () => {
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
    };

    loadCurrent();

    const onBtnSave = () => {
      let task = store.getters["tasks/getCurrent"];
      //generate mock id
      if (isNew) {
        const id = Object.keys(taskList.value).length + 1;
        task = {
          ...task,
          id,
        };
      }
      store.commit("tasks/loadSingle", task);
      localStorage.setItem(
        "tasks",
        JSON.stringify(Object.values(taskList.value))
      );
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
