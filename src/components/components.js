import { useStore } from "vuex";
import { getCurrentInstance, computed } from "vue";

export const getCurrentValue = (store, name) => {
  const $store = useStore();

  return computed({
    get() {
      const current = $store.getters[`${store}/getCurrent`];
      return current[name];
    },
    set(value) {
      $store.commit(`${store}/updateCurrent`, {
        key: name,
        value,
      });
    },
  });
};

export const getComponentId = (name) => {
  return name + getCurrentInstance().uid;
};
