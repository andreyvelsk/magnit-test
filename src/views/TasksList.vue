<template>
  <router-link class="btn" :to="{ name: 'create.index' }">
    + Новое задание
  </router-link>
  <table>
    <thead>
      <tr>
        <th>Название</th>
        <th>Дата</th>
        <th>Статус</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasksList" :key="'task' + task.id">
        <td>
          {{ task.name }}
        </td>
        <td>
          {{ task.date }}
        </td>
        <td>
          {{ task.status }}
        </td>
        <td>
          <router-link
            class="fas fa-pen"
            :to="{ name: 'edit.index', params: { id: task.id } }"
          >
            {{ task.id }}
          </router-link>
          <i class="fas fa-trash"></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      // access a state in computed function
      tasksList: computed(() => store.getters["tasks/getList"]),
    };
  },
};
</script>
