import store from "@/store";
import { computed } from "vue";

export const isRequiredFieldsFilled = computed(() => {
  const taskCurrent = computed(() => store.getters["tasks/getCurrent"]);
  return !!taskCurrent.value.name && !!taskCurrent.value.date;
});

export const saveToLS = () => {
  const taskList = store.getters["tasks/getList"];
  localStorage.setItem("tasks", JSON.stringify(Object.values(taskList)));
};
