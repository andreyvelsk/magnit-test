import DeleteModal from "@/components/DeleteModal.vue";
import { createConfirmDialog } from "vuejs-confirm-dialog";

export const onModalConfirm = () => {
  const { reveal, onConfirm } = createConfirmDialog(DeleteModal);

  return new Promise((resolve) => {
    reveal();

    onConfirm(() => {
      resolve();
    });
  });
};
