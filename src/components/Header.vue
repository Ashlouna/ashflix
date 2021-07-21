<template lang="pug">
header.header
  div.container
    a(class='header__logo' href="#footer") Ashflix
    Nav
    v-btn(color="#e20813" class="ma-2 pa-4 white--text signup_btn") Sign Up
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
    name: "Header",
    components: {Nav},
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.header{
  position: absolute;
  width: 100%;
  background-color: rgb(0, 0, 0);
  .container {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 30px 2px 30px 10px;
  }
  &__logo {
    font-family: $logo-font-face;
    text-transform: uppercase;
    font-size: 40px;
    color: $accent-color;
    font-weight: 700;
    flex: 0 0 20%;
  }
  .v-btn:hover {
    transform: scale(1.1);
  }
  
}
</style>