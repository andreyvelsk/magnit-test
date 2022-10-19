import tasks from "./tasks";
import constants from "./constants";
import { createStore } from "vuex";

export default createStore({
  modules: {
    tasks,
    constants,
  },
});
