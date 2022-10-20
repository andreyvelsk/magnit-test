<template>
  <div class="comments-wrapper">
    <div class="comments-main">
      <div v-if="comments.length" class="comments-container">
        <comment-component
          v-for="(comment, index) in comments"
          :key="'comment' + index"
          :comment="comment"
          :class="{ active: comment.id == current.id }"
        />
      </div>
    </div>
    <div class="comments-text">
      <textarea-component
        store="tasks/comments"
        name="comment"
        label="Комментарий к заданию"
        :rows="10"
      />
      <div class="comments-save">
        <button class="btn btn-primary" @click="addComment">
          {{ current.id ? "Изменить комментарий" : "Добавить комментарий" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TextareaComponent from "@/components/TextareaComponent.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import CommentComponent from "./CommentComponent.vue";
export default {
  components: {
    TextareaComponent,
    CommentComponent,
  },
  setup() {
    const store = useStore();

    const tasksCurrent = computed(() => store.getters["tasks/getCurrent"]);
    const comments = tasksCurrent.value.comments;

    const current = computed(() => store.getters["tasks/comments/getCurrent"]);

    const addComment = () => {
      //edit comment
      if (current.value.id) {
        store.commit("tasks/editComment", {
          comment: current.value.comment,
          id: current.value.id,
          date: new Date().toString(),
        });
      }
      //create new one
      else {
        //generate mock id
        const id = `${tasksCurrent.value.id}-${
          Object.keys(comments).length + 1
        }`;

        store.commit("tasks/addComment", {
          comment: current.value.comment,
          id,
          date: new Date().toString(),
        });
      }

      store.commit("tasks/comments/loadCurrent", {
        comment: null,
      });
    };

    return {
      addComment,
      comments,
      current,
    };
  },
};
</script>

<style lang="scss" scoped>
.comments {
  &-wrapper {
    display: flex;
  }
  &-main {
    flex: 0 0 65%;
    max-width: 65%;
    padding-right: 31px;
  }
  &-text {
    flex: 0 0 35%;
    max-width: 35%;
  }
  &-save {
    margin-top: 20px;
    text-align: end;
  }
  &-container {
    background-color: $light;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-radius: $border-radius;
  }
}
</style>
