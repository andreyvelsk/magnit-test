<template>
  <label v-if="label" :for="'#' + id">
    {{ label }}
  </label>
  <select :id="id" v-model="value" class="form-control">
    <option v-for="(item, key) in source" :key="name + key" :value="key">
      {{ item }}
    </option>
  </select>
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
    source: {
      type: Object,
      required: true,
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
