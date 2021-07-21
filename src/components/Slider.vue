<template lang="pug">
    div.slider-section
        div.slider-section__body
            h2.slider-section__title What's new in the world of cinema
        Carousel    
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
    name: "Slider",
    components: {Carousel}
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.slider-section {
    @include  adaptiv-css("padding-top", 150, 50);
    @include  adaptiv-css("padding-bottom", 150, 50);
    border-bottom: 10px solid #222222;
    background-color: #000;
    &__body {
        width: 100%;
        padding: 0 10px 0 10px;
    }
    &__title {
    font-family: $main-font-face;
    @include  adaptiv-css("font-size", 45, 25);
    line-height: 1;
    color: #fff;
    background: #e6870c;
    padding: 10px 20px;
    border-radius: 15px;
    width: fit-content;
    margin: 0 auto 70px;
     @media screen and(max-width: 576px){
            margin: 0 auto 20px;
        }   
    }
}
</style>