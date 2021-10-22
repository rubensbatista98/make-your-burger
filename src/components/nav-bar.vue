<template>
  <nav class="nav-bar">
    <router-link to="/" class="logo">
      <img :src="logoSrc" :alt="logoAlt" />
    </router-link>

    <router-link to="/">Home</router-link>
    <router-link to="/pedidos">Pedidos</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: ["logoSrc", "logoAlt"],
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;

  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
}

.nav-bar > a {
  text-decoration: none;
  color: #fcba03;

  padding: 4px;
}
.nav-bar > a:hover {
  color: #fff;
}

.logo {
  width: 40px;
  height: 40px;

  margin-right: auto;
}

.logo > img {
  width: 100%;
}
</style>
