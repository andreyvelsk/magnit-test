export const loadMore = (state, payload) => {
  for (const item of payload) {
    state.list[item.id] = item;
  }
};

export const loadCurrent = (state, payload) => {
  state.current = payload;
};

export const updateCurrent = (state, payload) => {
  const { key, value } = payload;
  state.current[key] = value;
};
