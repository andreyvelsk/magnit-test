<template>
  <div class="container">
    <router-view />

    <!-- vuejs-confirm-dialog -->
    <dialogs-wrapper />
  </div>
</template>

<script>
import { generateTasksList } from "@/modules/mock";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    let tasks = localStorage.getItem("tasks");

    try {
      if (!tasks) tasks = generateTasksList();
      else tasks = JSON.parse(tasks);
    } catch {
      tasks = generateTasksList();
    }
    store.commit("tasks/loadMore", tasks);
  },
};
</script>
<style lang="scss">
@import "@/scss/main.scss";
</style>
