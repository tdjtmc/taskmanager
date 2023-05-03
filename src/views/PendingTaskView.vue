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
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
  },
};
</script>
<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
  color: #fafafa;
}
</style>
