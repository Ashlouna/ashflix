<template lang="pug">
div.video-section
    div.video-section__video
    video(autoplay muted loop id="myVideo")
        source(src="../assets/videos/dunkerk.mp4" type="video/mp4")
    div.video-section__content 
        div.video-section__body
            h2.video-section__title What do you get?
            p.video-section__text High quality video on your screen #[br] wherever you are
</template>

<script>
export default {
    name: 'VideoSection'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

#myVideo{
    width: 100%;
}
.video-section {
    position: relative;
    background-color: #000;
    border-bottom: 10px solid #222222;
    @media screen and(max-width: 576px){
        display: flex;
        flex-direction: column-reverse;
        padding: 50px 10px;
        }
    &::before {
        content: "";
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        background-image: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.2));
        @media screen and(max-width: 576px){
            background-color: #000;
            z-index: -1;
        }
    }
    &__content {
        width: 100%;
        height: 100%;
        max-width: 1170px;
        padding: 10px;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        align-items: center;
        @media screen and(max-width: 576px){
             justify-content: center;
             position: static;
             transform: translateX(0);
             left: 0;
        }
    }
    &__title {
        font-family: $main-font-face;
        @include adaptiv-css("font-size", 45, 25);
        color: #fff;
        background: #570d85;
        padding: 10px 20px;
        border-radius: 15px;
        margin-bottom: 20px;
        @media screen and(max-width: 576px){
          line-height: 1;
        }
    }
    &__text {
        font-family: $main-font-face;
        @include adaptiv-css("font-size", 27, 16);
        background: #343333;
        padding: 10px;
        border-radius: 15px;
        text-align: center;
        color: #fff;
    }
}
</style>