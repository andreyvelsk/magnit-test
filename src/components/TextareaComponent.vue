<template>
  <label v-if="label" :for="'#' + id">
    {{ label }}
  </label>
  <textarea :id="id" v-model="value" class="form-control" :rows="rows" />
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
    rows: {
      type: Number,
      default: 5,
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

<style lang="scss" scoped>
textarea {
  resize: none;
}
</style>
