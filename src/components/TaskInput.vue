<template>
  <div class="container">
    <div v-if="!isEditing">
      <input
        type="text"
        placeholder="New task"
        v-model.trim="task"
        @keyup.enter="addTask"
      />
      <span class="pi pi-plus" title="Add to list" @click="addTask"></span>
    </div>
    <div v-else>
      <input type="text" />
      <span class="pi pi-sync" title="Update"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskInput",
  emits: ["addTask"],

  data() {
    return {
      isEditing: false,
      task: "",
    };
  },
  methods: {
    addTask() {
      if (this.task != "") {
        this.$emit("addTask", this.task);
      } else {
        alert("The input field can not be empty");
      }
      this.task = "";
    },
  },
};
</script>

<style scoped>
input[type="text"] {
  width: 50%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  text-align: center;
  padding-top: 25px;
  font-size: 1rem;
  background-color: #c3ad82;
}
.pi {
  color: #333;
  cursor: pointer;
  margin-left: 20px;
}
</style>
