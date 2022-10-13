let taskId = 0;
export const generateId = () => {
  taskId += 1;
  return taskId;
};

const generateTask = (id, name) => ({
  id,
  name,
  date: new Date(),
  status: 0,
  description: "Задание такое-то",
  documents: [],
  comments: [],
});

export const generateTasksList = () => {
  const tasksCount = 6;
  const list = [];
  for (let i = 1; i < tasksCount; i++) {
    const id = generateId();
    const item = generateTask(id, `Задание ${id}`);
    list.push(item);
  }

  return list;
};
