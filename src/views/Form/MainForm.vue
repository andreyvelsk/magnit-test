<template>
  <input-component store="tasks" name="name" label="Название задания" />
  <input-component
    store="tasks"
    name="date"
    type="date"
    label="Дата завершения"
  />
  <textarea-component
    store="tasks"
    name="description"
    label="Описание задания"
  />
  <select-component
    store="tasks"
    name="status"
    label="Описание задания"
    :source="taskStatus"
  />
</template>

<script>
import InputComponent from "@/components/InputComponent.vue";
import TextareaComponent from "@/components/TextareaComponent.vue";
import SelectComponent from "@/components/SelectComponent.vue";
import { useStore } from "vuex";
export default {
  components: {
    InputComponent,
    TextareaComponent,
    SelectComponent,
  },
  setup() {
    const store = useStore();

    return {
      taskStatus: store.state.constants.task.status,
    };
  },
};
</script>

<style></style>
