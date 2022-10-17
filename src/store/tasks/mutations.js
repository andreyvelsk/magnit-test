export const addComment = (state, payload) => {
  state.current.comments.push(payload);
};
export const addDocument = (state, payload) => {
  state.current.documents.push(payload);
};
export const editComment = (state, payload) => {
  const { id, comment } = payload;
  const { comments } = state.current;
  const index = comments.findIndex((item) => item.id == id);
  comments[index] == comment;
};
