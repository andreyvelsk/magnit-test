<template>
  <draggable-documents />
  <documents-picker />
  <div class="documents">
    <div
      class="document"
      v-for="document in documents"
      :key="'document' + document.id"
    >
      {{ document }}
    </div>
  </div>
</template>

<script>
import DraggableDocuments from "./DraggableDocuments.vue";
import DocumentsPicker from "./DocumentsPicker.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    DraggableDocuments,
    DocumentsPicker,
  },
  setup() {
    const store = useStore();
    const tasksCurrent = computed(() => store.getters["tasks/getCurrent"]);
    const documents = tasksCurrent.value.documents;

    return {
      documents,
    };
  },
};
</script>

<style></style>
