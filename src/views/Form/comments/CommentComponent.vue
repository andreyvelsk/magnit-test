<template>
  <div class="comment">
    <div class="comment-main">
      <div class="comment-body">
        {{ comment.comment }}
      </div>
      <div class="comment-footer">
        <div class="comment-actions">
          <i
            class="fas fa-pen cursor-pointer"
            @click="setEditableComment(comment)"
          ></i>
          <i
            class="fas fa-trash cursor-pointer"
            @click="onBtnDeleteClick(comment)"
          ></i>
        </div>
        <div class="comment-datetime">
          <div class="comment-date">
            {{ formatDate(comment.date) }}
          </div>
          <div class="comment-time">
            {{ formatTime(comment.date) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onModalConfirm } from "@/components/modal";
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    const setEditableComment = (comment) => {
      store.commit("tasks/comments/loadCurrent", { ...comment });
    };

    const formatStringToDate = (date) => {
      const dateParsed = Date.parse(date);
      return new Date(dateParsed);
    };

    const formatDate = (date) => {
      const dateParsed = formatStringToDate(date);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return dateParsed.toLocaleDateString("default", options);
    };
    const formatTime = (date) => {
      const dateParsed = formatStringToDate(date);
      return dateParsed.toLocaleTimeString("default");
    };

    const onBtnDeleteClick = (document) => {
      onModalConfirm().then(() => {
        store.commit("tasks/deleteComment", { id: document.id });
      });
    };

    return {
      formatDate,
      formatTime,
      onBtnDeleteClick,
      setEditableComment,
    };
  },
};
</script>

<style lang="scss" scoped>
.comment {
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &-main {
    display: inline-block;
    padding: 12px;
    background-color: $white;

    border: 1px solid $border-color;
    border-radius: $border-radius;
    max-width: 100%;
  }
  &.active {
    .comment-main {
      border-color: $primary;
    }
  }

  &-body {
    white-space: pre-wrap;
    word-wrap: break-word;
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
  &-datetime {
    color: $gray;
    display: flex;
    justify-content: space-between;
  }
  &-date {
    margin-right: 20px;
  }
}
</style>
