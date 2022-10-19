const deleteFromCurrentArray = (state, payload) => {
  const { name, id } = payload;
  const index = state.current[name].findIndex((item) => item.id == id);
  if (index > -1) {
    state.current[name].splice(index, 1);
  }
};

export const addComment = (state, payload) => {
  state.current.comments.push(payload);
};
export const deleteComment = (state, payload) => {
  const { id } = payload;
  deleteFromCurrentArray(state, { name: "comments", id });
};
export const addDocument = (state, payload) => {
  state.current.documents.push(payload);
};
export const deleteDocument = (state, payload) => {
  const { id } = payload;
  deleteFromCurrentArray(state, { name: "documents", id });
};

export const editComment = (state, payload) => {
  const { id, comment } = payload;
  const { comments } = state.current;
  const index = comments.findIndex((item) => item.id == id);
  comments[index] == comment;
};
