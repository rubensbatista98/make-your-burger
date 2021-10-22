<template>
  <NavBar />
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
};
</script>
