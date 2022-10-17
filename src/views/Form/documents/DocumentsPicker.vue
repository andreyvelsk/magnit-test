<template>
  <input type="file" @change="addFiles" ref="file" multiple />
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

<style></style>
