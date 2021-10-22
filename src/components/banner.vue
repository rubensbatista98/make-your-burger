<template>
  <div class="banner">
    <h1 class="title">Make your burger</h1>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner {
  height: 500px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-image: url("/img/burger.jpg");
  background-position: 0 -250px;
  background-size: cover;
}

.banner .title {
  font-size: 60px;
  text-align: center;
  color: #fff;
  background-color: #222;
  padding: 16px 32px;
}
</style>
