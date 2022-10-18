<template>
  <div class="picker">
    <div class="form-control picker-input">Выбрать файл...</div>
    <label for="file-upload" class="btn btn-primary"> Выбрать </label>
    <input
      id="file-upload"
      type="file"
      @change="addFiles"
      ref="file"
      multiple
      hidden
    />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const tasksCurrent = computed(() => store.getters["tasks/getCurrent"]);
    const documents = tasksCurrent.value.documents;

    const addFiles = (evt) => {
      const files = Object.values(evt.target.files);
      files.forEach((file) => {
        //mock id
        const id = documents.length + 1;
        store.commit("tasks/addDocument", {
          name: file.name,
          id,
        });
      });
    };
    return {
      addFiles,
    };
  },
};
</script>
<style lang="scss" scoped>
.picker {
  display: flex;
  &-input {
    flex-grow: 1;
    color: #9fa2a5;
    margin-right: 4px;
  }
}
</style>
