<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      {{ task }}
      <div>
        <span
          class="pi pi-file-edit"
          @click="$emit('editTask', index, task)"
          title="Edit"
        ></span>
        <span
          class="pi pi-check-square"
          @click="doneTask(index)"
          title="Done"
        ></span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["tasks"],
  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  list-style: none;
  width: 65%;
  justify-content: space-between;
}

ul li {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  color: #2e1f1f;
  border-bottom: 1px solid #42361f;
}
.pi {
  display: inline-block;
  width: 3.5rem;
  cursor: pointer;
}
</style>
