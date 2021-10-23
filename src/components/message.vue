<template>
  <div class="message-container">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: String,
  },
};
</script>

<style scoped>
.message-container {
  max-width: 400px;

  color: #004085;
  background-color: #cce5ff;

  border: 2px solid #b8daff;
  border-radius: 5px;

  padding: 10px;
  margin: 30px auto;
}
</style>
