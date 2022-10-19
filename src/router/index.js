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
        meta: {
          previousRoute: "create.index",
          nextRoute: "create.comments",
        },
      },
      {
        path: "comments",
        name: "create.comments",
        component: () => import("@/views/Form/comments/CommentsForm.vue"),
        meta: { previousRoute: "create.documents" },
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
        meta: {
          previousRoute: "edit.index",
          nextRoute: "edit.comments",
        },
      },
      {
        path: "comments",
        name: "edit.comments",
        component: () => import("@/views/Form/comments/CommentsForm.vue"),
        meta: { previousRoute: "edit.documents" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
