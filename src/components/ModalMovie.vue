<template lang="pug">
  
    article.modal-movie
        div.modal-movie__img-wrapper
            img(:src="showAllInfo.Poster !== 'N/A'?showAllInfo.Poster:require('../assets/no-img.png') " class="modal-movie__img")
        div.modal-movie__info
            h3.modal-movie__title {{showAllInfo.Title}}
            p 
                span Category:   
                |{{showAllInfo.Type}}   
            p 
                span Year: 
                |{{showAllInfo.Year}}
            p 
                span Genre: 
                |{{showAllInfo.Genre}}
            p 
                span Country: 
                |{{showAllInfo.Country}}
            hr
            p 
                span Director: 
                |{{showAllInfo.Director}}
            p 
                span Actors: 
                |{{showAllInfo.Actors}}
            hr
            p {{showAllInfo.Plot}}
        button(class="modal-movie__close" @click="[closeWindow(), closeModal()]")
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["active"],
  data() {
    return {
      
    }
  },
  computed: mapGetters(["getMovies", "showAllInfo"]),
  methods: {
    ...mapActions(["closeModal"]),

    closeWindow() {
      this.$emit("closeWindow");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.modal-movie {
  display: flex;
  justify-content: space-between;
  padding: 50px 15px 15px 15px;
  transition: all 0.4s;
  position: fixed;
  z-index: 3;
  top: calc(50% - 300px);
  left: calc(50% - 400px);
  width: 800px;
  height: 600px;
  box-shadow: 0px 0px 12px 4px #000;
  background-color: rgb(31, 28, 28);
        @media screen and(max-width: 992px){
            width: 700px; 
            height: auto;
            top: calc(50% - 300px);
            left: calc(50% - 350px);
        }
        @media screen and(max-width: 768px){
            width: 100vw; 
            height: 100vh;
            top: 0;
            left: 0;
        }
        @media screen and(max-width: 576px){
            flex-direction: column;
            overflow: scroll;
        }
  &__img-wrapper {
    flex-basis: 45%;
    @media screen and(max-width: 768px){
            flex-basis: 60%;
            text-align: center;
        }
  }
  &__img {
    max-width: 300px;
    width: 100%;
    height: auto;
    @media screen and(max-width: 576px){
            height: auto;
        }
  }
  &__info {
    flex-basis: 50%;
    font-family: $main-font-face;
    display: flex;
    flex-direction: column;
  }
  &__title {
    color: rgb(247, 233, 233);
    margin-bottom: 15px;
  }
  p {
    color: rgb(247, 233, 233);
    margin-bottom: 10px;
    line-height: 1.3;
  }
  span {
    font-weight: 700;
  }
  hr {
    height: 1px;
    background-color: rgb(129, 127, 127);
    border: none;
    margin-bottom: 10px;
  }
  &__close {
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 12px;
      left: 3px;
      width: 25px;
      height: 1px;
      transform: rotateZ(45deg);
      background-color: #fff;
    }
    &::after {
      transform: rotateZ(-45deg);
    }
  }
}
.show-leave-to,
.show-enter {
  opacity: 0;
  transform: translateY(30px);
}
.show-leave-active,
.show-enter-active {
  transition: all 0.5s ease;
}
.show-leave,
.show-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
