<template lang="pug">

div(class="movie-block" @click.stop )
    div(class="movie-block__img-wrapper"  @click="[fetchCurrentMovie(movie.imdbID), openModal()]")
      img(class="movie-block__img" :src="movie.Poster !== 'N/A'?movie.Poster:require('../assets/no-img.png') ")
    div(class="movie-block__info")
        p(class="movie-block__title"
         @click="[fetchCurrentMovie(movie.imdbID), openModal()]" :title="movie.Title") {{movie.Title}}
        a(class="fas fa-heart" @click="changeColor" :style="{color: movie.isFavorite}")

</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["movie"],
  data() {
    return {};
  },
  computed: mapGetters(["getMovies", "showAllInfo"]),
  methods: {
    ...mapActions(["fetchCall", "fetchCurrentMovie"]),

    changeColor(e) {
      if (e.target.style.color !== "red") {
        e.target.style.color = "red";
        localStorage.setItem(this.movie.imdbID, this.movie.Title);
      } else if (e.target.style.color === "red") {
        e.target.style.color = "";
        localStorage.removeItem(this.movie.imdbID);
      }
    },
    openModal() {
      this.$emit("openModal");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.movie-block {
  width: 200px;
  display: inline-flex;
  flex-direction: column;
  background-color: #222121;
  margin-bottom: 20px;
  margin-left: 10px;
  transition: all 0.3s;
  @media screen and(max-width: 400px){
            margin-left: 0;
            width: 240px;
  }
  &__img-wrapper {
    flex-grow: 1;
  }
  &__img {
    width: 100%;
    max-height: 320px;
    height: auto;
    cursor: pointer;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
  &__info {
    position: relative;
    margin-top: auto;
    padding: 5px 10px 10px 10px;
    height: 80px;
  }
  &__title {
    font-family: $main-font-face;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
   -webkit-line-clamp: 2; 
    display: -webkit-box; 
    -webkit-box-orient: vertical; 
    overflow: hidden; 
  }
  .fa-heart {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: rgb(187, 182, 182);
  }
}
</style>
