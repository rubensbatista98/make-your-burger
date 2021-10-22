<template>
  <NavBar :logoSrc="logoSrc" :logoAlt="logoAlt" />
  <router-view />
  <Footer />
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      logoSrc: "/img/logo.png",
      logoAlt: "Logo da faça seu hambúrguer",
    };
  },
};
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
