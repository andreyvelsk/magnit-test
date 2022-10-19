export const loadMore = (state, payload) => {
  for (const item of payload) {
    state.list[item.id] = item;
  }
};
export const loadSingle = (state, payload) => {
  const { id } = payload;
  state.list[id] = payload;
};

export const loadCurrent = (state, payload) => {
  state.current = payload;
};

export const updateCurrent = (state, payload) => {
  const { key, value } = payload;
  state.current[key] = value;
};

export const deleteFromList = (state, payload) => {
  const { id } = payload;
  if (state.list[id]) delete state.list[id];
};
