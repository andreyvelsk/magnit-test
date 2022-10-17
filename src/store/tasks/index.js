import state from "./state";
import * as mutations from "./mutations";
import * as getters from "@/store/_default/getters";
import * as mutationsDefault from "@/store/_default/mutations";
import comments from "./comments";
import documents from "./documents";
export default {
  namespaced: true,
  state,
  getters,
  mutations: {
    ...mutations,
    ...mutationsDefault,
  },
  modules: {
    comments,
    documents,
  },
};
