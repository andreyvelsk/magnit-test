<template>
  <label v-if="label" :for="'#' + id">
    {{ label }}
  </label>
  <textarea :id="id" v-model="value" />
</template>

<script>
import { getCurrentValue, getComponentId } from "./components";
export default {
  props: {
    store: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
  },

  setup(props) {
    return {
      id: getComponentId("textarea"),
      value: getCurrentValue(props.store, props.name),
    };
  },
};
</script>

<style></style>
