<template lang="pug">
div(id="app")
  v-app
    Header
    MainSection
    SearchMovieSection(@openModal="openModal")
    VideoSection
    Slider
    Devices
    Footer
    transition(name="show" )
      ModalMovie(
        v-if="active" 
        :showAllInfo="showAllInfo"  
        :active="active"
        @closeWindow="closeWindow"
        )
    div(class="shadow-layout" v-show="active" @click="[closeWindow(), closeModal()]")
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Header from "@/components/Header.vue"
import MainSection from "@/components/MainSection.vue"
import ModalMovie from "@/components/ModalMovie.vue"
import SearchMovieSection from "@/components/SearchMovieSection.vue"
import VideoSection from "@/components/VideoSection.vue"
import Slider from "@/components/Slider.vue"
import Devices from "@/components/Devices.vue"
import Footer from "@/components/Footer.vue"



export default {
  name: "App",
  components: { Header, MainSection, SearchMovieSection, VideoSection, Slider, Devices, Footer, ModalMovie },
  data() {
    return {
      pages: 4,
      active: false
    };
  },
  computed: mapGetters(["getMovies", "showAllInfo"]),
  methods: {
    ...mapActions(["fetchCall", "fetchCurrentMovie", "closeModal"]),
    closeWindow() {
      this.active = false;
    },
    openModal() {
      this.active = true;
    },
  },
  async mounted() {},
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  position: relative;
}
.shadow-layout {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
</style>
