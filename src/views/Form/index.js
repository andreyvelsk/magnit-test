import { useStore } from "vuex";
import { computed } from "vue";

export const isRequiredFieldsFilled = computed(() => {
  const store = useStore();
  const taskCurrent = computed(() => store.getters["tasks/getCurrent"]);

  return !!taskCurrent.value.name && !!taskCurrent.value.date;
});
