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
        :class="{ disabled: !isRequiredFieldsFilled }"
      >
        {{ index + 1 }}. {{ breadcrumb.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { isRequiredFieldsFilled } from "./index";
export default {
  setup() {
    const breadcrumbs = [
      { name: "index", label: "Основные настройки" },
      { name: "documents", label: "Документы" },
      { name: "comments", label: "Комментарии" },
    ];
    const route = useRoute();
    const isNew = !route.params.id;
    const routePrefix = isNew ? "create" : "edit";

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
    &_active {
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
