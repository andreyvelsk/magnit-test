<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-title">Удалить выбранное ?</div>
      <div class="modal-body">
        Выбранные вами объекты удалятся без возможности восстановления.
      </div>
      <div class="modal-footer">
        <button @click="$emit('cancel')" class="btn btn-white">Отмена</button>
        <button @click="$emit('confirm')" class="btn btn-primary btn-confirm">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["confirm", "cancel"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.modal {
  background-color: $white;
  border-radius: $border-radius;
  padding: 40px;
  &-backdrop {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($dark, 0.3);
    z-index: 1000;
  }
  &-title {
    font-size: 18px;
    font-weight: $bold;
  }
  &-body {
    padding: 20px 0;
  }
  &-footer {
    display: flex;
    justify-content: flex-end;
    .btn-confirm {
      margin-left: 10px;
    }
  }
}
</style>
