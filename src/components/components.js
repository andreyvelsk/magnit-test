import store from "@/store";
import { getCurrentInstance, computed } from "vue";

export const getCurrentValue = (storeName, name) => {
  return computed({
    get() {
      const current = store.getters[`${storeName}/getCurrent`];
      return current[name];
    },
    set(value) {
      store.commit(`${storeName}/updateCurrent`, {
        key: name,
        value,
      });
    },
  });
};

export const getComponentId = (name) => {
  return name + getCurrentInstance().uid;
};
