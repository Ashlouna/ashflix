<template lang="pug">

div.search-section
    .container
        h3.search-section__title Let's find the movie you want
        form.search-section__form
            input.search-section__input(id="searchInput" v-model.trim="input" required)
            label(class="search-section__label" for="searchInput") Write for search
            select.search-section__select(v-model="select")
                option(value="Movie") Movie
                option(value="Series") Series
                option(value="Episode") Episode
            v-btn(type="button" class="search-section__btn ma-0" @click="[clearMovies(), fetchCall([pages, input, select]), clearForm()]") Search
        transition-group(name="list" tag="div" class="movies-wrapper")
            MovieBlock(
            :movie="movie" 
            v-for="movie in getMovies" 
            :key="movie.imdbID" 
            @openModal="openModal"
            class="list-item")
        transition(name="list")
            v-btn(type="button" class="search-section__pagination-btn ma-0" v-if="getMovies.length > 0" @click="fetchCall([++pages, moreTitle, select])") More
</template>

<script>
import { mapGetters, mapActions} from "vuex";
import MovieBlock from "./MovieBlock.vue";

export default {
    name: "SearchMovieSection",
    components: {MovieBlock},
    data(){
        return {
            pages: 1,
            select: "Movies",
            input: "",
            moreTitle: "",
            isPagination: false
        }
    },
    computed: mapGetters(["getMovies", "showAllInfo"]),
    methods: {
        ...mapActions(["fetchCall"]),
        openModal(){
            this.$emit("openModal")
        },
        clearForm(){
            this.moreTitle = this.input;
            this.input = "";
        },
        clearMovies(){
           this.pages = 1,
           this.isPagination = true;
           this.$store.commit('clearMovies');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.container {
    max-width: 1170px;
    margin: 0 auto;
     @media screen and(max-width: 576px){
        display: flex;
        flex-direction: column;
        align-items: center;
        }
}
.search-section{
    @include adaptiv-css("padding-top", 100, 50);
    @include adaptiv-css("padding-bottom", 100, 50);
    border-top: 10px solid #222222;
    border-bottom: 10px solid #222222;
    background-color: #0a0a0c;;
    background-image: url("../assets/deadpul.jpg");
    background-position-x: 30vw;
    background-repeat: no-repeat;
        @media screen and(max-width: 992px){
                background-position-x: 10vw;
        }
        @media screen and(max-width: 576px){
        background-position-x: 50vw;
    }
    &__title {
        font-family: $main-font-face;
        color: #fff;
        font-size: 30px;
        margin-bottom: 20px;
    }
    &__form {
        @include adaptiv-css("width", 500, 300);
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 40px;
        @media screen and(max-width: 576px){
            width: 100%;
        }
    }
    &__input {
        font-family: $main-font-face;
        height: 40px;
        border: none;
        outline: none;
        padding-left: 10px;
        margin-bottom: 15px;
        border-radius: .5em;
        font-size: 16px; 
        font-weight: 700; 
        color: #444; 
        background-color: #fff;
        &:focus + label {
            top: 5px;
            left: 5px;
            font-size: 10px;
        }
    }
    &__label {
        font-family: $main-font-face;
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 14px;
        color: #94928e;
        transition: all 0.3s;
    }
    &__select{
        display: block; 
        outline: none;
        font-size: 16px; 
        font-family: sans-serif; 
        font-weight: 700; 
        color: #444; 
        line-height: 1.3; 
        padding: .6em 1.4em .5em .8em;
        width: 100%; 
        max-width: 100%; 
        box-sizing: border-box; 
        margin-bottom: 15px; 
        border: 1px solid #aaa;
        box-shadow: 0 1px 0 1px rgba(0,0,0,.04); 
        border-radius: .5em;
        appearance: none;
        background-color: #fff; 
        background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
          linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%); 
        background-repeat: no-repeat, repeat;
        background-position: right .7em top 50%, 0 0;
        background-size: .65em auto, 100%; 
         &:hover { 
            border-color: #888;
            } 
         &:focus { 
            border-color: #aaa; 
            color: #222;
            outline: none; 
            } 
         & option {
            font-weight:normal;
            
            } 
    } 
    &__pagination-btn,
    .v-btn {
        font-family: $main-font-face;
        @include  adaptiv-css("font-size", 24, 18);
        text-transform: unset;
        height: 50px;
        padding: 10px 20px;
        background-color: $accent-color;
        color: #fff;
        outline: none;
        border: none;
        border-radius: .5em;
        width: 170px;
    }
    .v-btn {
        @media screen and(max-width: 576px){
            width: unset;
         }  
    }
     &__pagination-btn{
        @media screen and(max-width: 576px){
                display: block;
                margin: 0 auto;
        }   
         
    }
}
 

.movies-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: -10px;
  @media screen and(max-width: 576px){
            justify-content: center;
            margin-left: 0;
        }
}
.list-item {
  transition: all 0.8s ease;
}
.list-enter {
  opacity: 0;
  transform: translateY(30px);
}
.list-enter-active {
  transition: all 1s ease;
}

.list-enter-to {
  opacity: 1;
  transform: translateY(0);
}

</style>