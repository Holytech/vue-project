<template>
  <NavBar />
  <router-view />
  <Footer />
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style>
.bg-color {
  background-color: #4fc08d;
}
.txt-color-light {
  color: #4fc08d;
}
.txt-color-dark {
  color: #6799b2;
}
</style>
