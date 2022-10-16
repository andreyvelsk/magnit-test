<template>
  <label v-if="label" :for="'#' + id">
    {{ label }}
  </label>
  <input :type="type" :id="id" v-model="value" />
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
    type: {
      type: String,
      default: "text",
      validator(value) {
        return ["text", "date"].indexOf(value) !== -1;
      },
    },
  },

  setup(props) {
    return {
      id: getComponentId("input"),
      value: getCurrentValue(props.store, props.name),
    };
  },
};
</script>

<style></style>
