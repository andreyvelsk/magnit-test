<template>
  <div class="d-flex">
    <div class="form-components">
      <div class="form-row">
        <div class="form-name">
          <input-component store="tasks" name="name" label="Название задания" />
        </div>
        <div class="form-date">
          <input-component
            store="tasks"
            name="date"
            type="date"
            label="Дата завершения"
          />
        </div>
      </div>

      <textarea-component
        store="tasks"
        name="description"
        label="Описание задания"
      />

      <hr />

      <select-component
        store="tasks"
        name="status"
        label="Описание задания"
        :source="taskStatus"
      />
    </div>
  </div>
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

<style lang="scss" scoped>
.form {
  &-components {
    flex: 0 0 65%;
    max-width: 65%;
  }
  &-row {
    display: flex;
    margin-bottom: 30px;
  }
  &-name {
    flex: 0 0 65%;
    max-width: 65%;
    padding-right: 20px;
  }
  &-date {
    flex: 0 0 35%;
    max-width: 35%;
  }
}
hr {
  margin-right: -15px;
}
</style>
