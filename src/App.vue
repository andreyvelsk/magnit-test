<template>
  <router-view />
</template>

<script>
import { generateTasksList } from "@/modules/mock";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    // generate initial mock data
    const tasks = generateTasksList();
    store.commit("tasks/loadMore", tasks);
  },
};
</script>
<style lang="scss">
@import "@/scss/main.scss";
</style>
