<template>
  <div class="container">
    <ul>
      <li>Learn CSS</li>
      <li>Learn HTML</li>
      <li>Go to shopping</li>
      <li>Sleep</li>
      <li>Buy salt</li>
    </ul>
  </div>
</template>
<style scoped>
.container {
  max-width: 750px;
  margin: 0 auto;
  color: #fafafa;
}
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
</style>
