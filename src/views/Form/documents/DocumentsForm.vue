<template>
  <div class="documents">
    <div class="documents-column">
      <draggable-documents />
      <documents-picker />
    </div>
    <div class="documents-column">
      <table v-if="documents.length" class="table">
        <thead>
          <tr>
            <th>Название</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="document in documents" :key="'document' + document.id">
            <td>
              {{ document.name }}
            </td>
            <td class="table-actions">
              <i class="fas fa-trash"> </i>
            </td>
          </tr>
        </tbody>
      </table>
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

<style lang="scss" scoped>
.documents {
  display: flex;
  margin: 0 -25px;
  &-column {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 25px;
  }
  &-table td {
    display: flex;
    justify-content: space-between;
  }
}
</style>
