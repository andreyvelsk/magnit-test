<template>
  <div class="actions">
    <div class="actions-buttons">
      <router-link
        v-if="route.meta.previousRoute"
        class="btn btn-white"
        :to="{
          name: route.meta.previousRoute,
          params: { id: route.params.id },
        }"
      >
        Назад
      </router-link>

      <router-link
        v-if="route.meta.nextRoute"
        class="btn btn-white"
        :class="{ disabled: !isRequiredFieldsFilled }"
        :to="{ name: route.meta.nextRoute, params: { id: route.params.id } }"
      >
        Далее
      </router-link>
    </div>

    <div class="actions-buttons">
      <router-link
        :to="{ name: 'list' }"
        class="btn btn-white"
        :class="{ disabled: !isRequiredFieldsFilled }"
        @click="onBtnSave"
      >
        Сохранить
      </router-link>
      <router-link class="btn btn-white" :to="{ name: 'list' }">
        Отмена
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
import { isRequiredFieldsFilled } from "./index";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();

    const isNew = !route.params.id;
    const taskList = computed(() => store.getters["tasks/getList"]);

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
      route,
      onBtnSave,
      isRequiredFieldsFilled,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/scss/variables.scss";
.actions {
  background-color: $secondary;
  padding: 20px 30px;
  display: flex;
  border-top: 2px dashed $border-color;
  border-bottom: 2px dashed $border-color;
  margin-bottom: 30px;
  margin-right: 70px;

  &-buttons {
    &:first-child {
      padding-right: 20px;
      border-right: 1px solid #bbc0c5;
      margin-right: 30px;
    }
    .btn {
      margin-right: 10px;
    }
  }
}
</style>
