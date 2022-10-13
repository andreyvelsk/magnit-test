import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import Store from "@/store";
import router from "./router";

// Create a new store instance.
const store = createStore(Store);

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
