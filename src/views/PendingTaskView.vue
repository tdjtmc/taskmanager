<template>
  <task-input />
  <task-list />
</template>

<script>
// @ is an alias to /src
import TaskInput from "../components/TaskInput.vue";
import TaskList from "../components/TaskList.vue";
export default {
  name: "PendingTaskView",
  components: { TaskInput, TaskList },
};
</script>
