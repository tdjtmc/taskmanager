import { createRouter, createWebHistory } from "vue-router";
import PendingTaskView from "../views/PendingTaskView.vue";
import CompletedTaskView from "../views/CompletedTaskView";
const routes = [
  {
    path: "/",
    name: "pending",
    component: PendingTaskView,
  },
  {
    path: "/completed",
    name: "completed",
    component: CompletedTaskView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
