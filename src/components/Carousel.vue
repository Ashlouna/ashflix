<template lang="pug">
v-carousel(
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    height="100%"
)
    v-carousel-item(
      v-for="(image, i) in images"
      :key="i"
    )
        v-sheet(
        color="black"
        height="100%"
      )
            v-row(
          class="fill-height"
          align="center"
          justify="center"
        )
                img(class="display-3" :src="image")
</template>
<script>
export default {
     data () {
      return {
        images: [
            require("../assets/slider-img/slider-1.jpg"),
            require("../assets/slider-img/slider-2.jpg"),
            require("../assets/slider-img/slider-3.jpg"),
            require("../assets/slider-img/slider-4.jpg"),
            require("../assets/slider-img/slider-5.jpg")
        ]
      }
    },
  }

</script>
<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.v-item-group{
    max-width: 1170px;
    margin: 0 auto;
}
.v-carousel {
   height: 200px;
   max-width: 1170px;
   max-height: 420px;
   width: 100%;
    @media screen and(max-width: 576px){
        height: 250px !important;
        }
    @media screen and(max-width: 400px){
        height: 200px !important;
    }
}
.v-carousel__controls {
    bottom: 10px !important;
}
.display-3 {
    max-width: 100%;
    margin-top: auto;
}
</style>