<template>
  <Banner />
  <section class="container">
    <h1>Monte o seu Burguer:</h1>
    <BurgerForm />
  </section>
</template>

<script>
import Banner from "@/components/banner.vue";
import BurgerForm from "@/components/burger-form.vue";

export default {
  name: "Home",
  components: {
    Banner,
    BurgerForm,
  },
};
</script>
