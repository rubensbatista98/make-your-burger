<template>
  <Banner />
  <section class="container">
    <h2>Home</h2>
    <BurguerForm />
  </section>
</template>

<script>
import Banner from "@/components/banner.vue";
import BurguerForm from "@/components/burguer-form.vue";

export default {
  name: "Home",
  components: {
    Banner,
    BurguerForm,
  },
};
</script>
