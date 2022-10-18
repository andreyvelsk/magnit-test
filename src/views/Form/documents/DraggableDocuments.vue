<template>
  <div @drop.prevent="onDrop" class="draggable">
    <div class="draggable-title">Загрузить файл</div>
    <div class="draggable-subtitle">
      Выберите или перетащите один или несколько файлов
    </div>
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
@import "./src/scss/variables.scss";
.draggable {
  background-color: $secondary;
  color: $gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 84px;
  border: 2px dashed $border-color;
  border-radius: $border-radius;
  margin-bottom: 10px;
  &-title {
    font-weight: $bold;
    margin-bottom: 6px;
  }
}
</style>
