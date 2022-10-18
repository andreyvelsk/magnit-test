<template>
  <div class="comments-wrapper">
    <div class="comments-main">
      <div v-if="comments.length" class="comment-wrapper">
        <div
          v-for="(comment, index) in comments"
          :key="'comment' + index"
          class="comment"
        >
          <div class="comment-main">
            <div class="comment-body">
              {{ comment.comment }}
            </div>
            <div class="comment-footer">
              <div class="comment-actions">
                <i class="fas fa-pen"></i>
                <i class="fas fa-trash"></i>
              </div>
              <div class="comment-date">
                {{ comment.date }}
              </div>
            </div>
          </div>
        </div>
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
          Добавить комментарий
        </button>
      </div>
    </div>
  </div>
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

<style lang="scss" scoped>
@import "./src/scss/variables.scss";
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
}
.comment {
  &-wrapper {
    background-color: $light;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-radius: $border-radius;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &-main {
    display: inline-block;
    padding: 12px;
    background-color: $white;

    border: 1px solid $border-color;
    border-radius: $border-radius;
  }

  &-body {
    width: min-content;
  }
  &-footer {
    display: flex;
    align-items: center;
    margin-top: 16px;
    justify-content: space-between;
    i {
      margin-right: 21px;
    }
  }
}
</style>
