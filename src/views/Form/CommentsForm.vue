<template>
  <div class="comments">
    <div v-for="(comment, index) in comments" :key="'comment' + index">
      <div class="comment-body">
        {{ comment.comment }}
      </div>
      <div class="comment-footer">
        <div class="comment-date">
          {{ comment.date }}
        </div>
      </div>
    </div>
  </div>
  <textarea-component
    store="tasks/comments"
    name="comment"
    label="Комментарий к заданию"
  />
  <button class="btn" @click="addComment">Добавить комментарий</button>
</template>

<script>
import TextareaComponent from "@/components/TextareaComponent.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    TextareaComponent,
  },
  setup() {
    const store = useStore();

    const tasksCurrent = computed(() => store.getters["tasks/getCurrent"]);
    const comments = tasksCurrent.value.comments;

    const current = computed(() => store.getters["tasks/comments/getCurrent"]);

    const addComment = () => {
      //generate mock id
      const id = `${tasksCurrent.value.id}-${Object.keys(comments).length + 1}`;

      store.commit("tasks/addComment", {
        comment: current.value.comment,
        id,
        date: new Date(),
      });

      store.commit("tasks/comments/loadCurrent", {
        comment: null,
      });
    };

    return {
      addComment,
      comments,
    };
  },
};
</script>

<style></style>
