<template>
  <div class="container">
    <task-input @addTask="addTask" />
    <task-list :tasks="tasks" />
  </div>
</template>

<script>
import TaskInput from "../components/TaskInput.vue";
import TaskList from "../components/TaskList.vue";

export default {
  name: "PendingTaskView",
  components: { TaskInput, TaskList },

  data() {
    return {
      tasks: JSON.parse(localStorage.getItem("tasks") || "[]"), // učitaj postojeće zadatke iz Local Storage
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(this.tasks)); // ažuriraj Local Storage
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 750px;
  margin: 0 auto;
  color: #fafafa;
}
</style>
