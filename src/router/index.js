import { createRouter, createWebHistory } from "vue-router";
import TasksList from "../views/TasksList.vue";

const routes = [
  {
    path: "/",
    name: "list",
    component: TasksList,
  },

  {
    path: "/create",
    component: () => import("@/views/Form/FormComponent.vue"),
    children: [
      {
        path: "",
        name: "create.index",
        component: () => import("@/views/Form/MainForm.vue"),
        meta: { nextRoute: "create.documents" },
      },
      {
        path: "documents",
        name: "create.documents",
        component: () => import("@/views/Form/documents/DocumentsForm.vue"),
        meta: { nextRoute: "create.comments" },
      },
      {
        path: "comments",
        name: "create.comments",
        component: () => import("@/views/Form/CommentsForm.vue"),
        meta: { nextRoute: null },
      },
    ],
  },
  {
    path: "/edit/:id",
    component: () => import("@/views/Form/FormComponent.vue"),
    children: [
      {
        path: "",
        name: "edit.index",
        component: () => import("@/views/Form/MainForm.vue"),
        meta: { nextRoute: "edit.documents" },
      },
      {
        path: "documents",
        name: "edit.documents",
        component: () => import("@/views/Form/documents/DocumentsForm.vue"),
        meta: { nextRoute: "edit.comments" },
      },
      {
        path: "comments",
        name: "edit.comments",
        component: () => import("@/views/Form/CommentsForm.vue"),
        meta: { nextRoute: null },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
