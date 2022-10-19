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
            <i
              class="fas fa-trash cursor-pointer"
              @click="onBtnDeleteClick(task)"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { onModalConfirm } from "@/components/modal";
import { saveToLS } from "@/views/index";

export default {
  setup() {
    const store = useStore();

    const onBtnDeleteClick = (task) => {
      onModalConfirm().then(() => {
        store.commit("tasks/deleteFromList", { id: task.id });
        saveToLS();
      });
    };

    return {
      // access a state in computed function
      tasksList: computed(() => store.getters["tasks/getList"]),
      onBtnDeleteClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.tasks-table {
  margin-top: 51px;
}
</style>
