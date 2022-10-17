<template>
  <div @drop.prevent="onDrop" class="draggable-documents">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted, onUnmounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const tasksCurrent = computed(() => store.getters["tasks/getCurrent"]);
    const documents = tasksCurrent.value.documents;
    const onDrop = (e) => {
      const files = Object.values(e.dataTransfer.files);

      files.forEach((file) => {
        //mock id
        const id = documents.length + 1;
        store.commit("tasks/addDocument", {
          name: file.name,
          id,
        });
      });
    };

    const events = ["dragenter", "dragover", "dragleave", "drop"];

    function preventDefaults(e) {
      e.preventDefault();
    }

    onMounted(() => {
      events.forEach((eventName) => {
        document.body.addEventListener(eventName, preventDefaults);
      });
    });

    onUnmounted(() => {
      events.forEach((eventName) => {
        document.body.removeEventListener(eventName, preventDefaults);
      });
    });

    return {
      onDrop,
    };
  },
};
</script>

<style lang="scss" scoped>
.draggable-documents {
  background-color: #ececec;
  padding: 5rem;
}
</style>
