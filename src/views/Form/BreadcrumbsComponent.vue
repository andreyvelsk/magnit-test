<template>
  <div class="d-flex">
    <div class="breadcrumbs">
      <router-link
        v-for="(breadcrumb, index) in breadcrumbs"
        :to="{
          name: `${routePrefix}.${breadcrumb.name}`,
          params: { id: route.params.id },
        }"
        :key="'breadcrumbs' + index"
        class="breadcrumbs-item"
        :class="{
          disabled: !isRequiredFieldsFilled,
          'breadcrumbs-item_filled': breadcrumb.is_filled,
        }"
      >
        {{ index + 1 }}. {{ breadcrumb.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { isRequiredFieldsFilled } from "@/views/index";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const taskCurrent = computed(() => store.getters["tasks/getCurrent"]);
    const isNew = !route.params.id;
    const routePrefix = isNew ? "create" : "edit";

    const breadcrumbs = computed(() => [
      {
        name: "index",
        label: "Основные настройки",
        is_filled: isRequiredFieldsFilled.value,
      },
      {
        name: "documents",
        label: "Документы",
        is_filled:
          taskCurrent.value.documents && taskCurrent.value.documents.length,
      },
      {
        name: "comments",
        label: "Комментарии",
        is_filled:
          taskCurrent.value.comments && taskCurrent.value.comments.length,
      },
    ]);

    return {
      breadcrumbs,
      route,
      routePrefix,
      isRequiredFieldsFilled,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/scss/variables.scss";

.breadcrumbs {
  margin-bottom: 30px;
  display: flex;
  flex: 0 0 80%;
  max-width: 80%;
  &-item {
    flex-grow: 1;
    color: $dark;
    background-color: $light;
    padding: 18px 24px;
    display: inline-block;
    border-radius: 10px 0px 0px 0px;
    &:not(:last-child) {
      margin-right: 10px;
    }
    &.router-link-exact-active {
      background-color: #0c2747;
      color: $white;
    }
    &_filled {
      background-color: #304e71;
      color: $white;
    }
  }
}
</style>
