<template>
  <div class="wrapper">
    <router-link class="btn btn-primary" :to="{ name: 'create.index' }">
      + Новое задание
    </router-link>
    <table class="table tasks-table">
      <thead>
        <tr>
          <th>Название</th>
          <th>Дата</th>
          <th>Статус</th>
          <th></th>
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
          <td class="table-actions">
            <router-link
              class="fas fa-pen text-dark"
              :to="{ name: 'edit.index', params: { id: task.id } }"
            ></router-link>
            <i class="fas fa-trash"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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

<style lang="scss" scoped>
.wrapper {
  padding-top: 78px;
  .tasks-table {
    margin-top: 51px;
  }
}
</style>
