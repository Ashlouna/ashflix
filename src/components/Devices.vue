<template lang="pug">
    section.devices-section
        .container
            div.devices-section__img-wrapper
                img(src="../assets/device-pile.png" class="devices-section__img")
                video(autoplay muted loop class="myVideo")
                    source(src="../assets/videos/widow.mp4" type="video/mp4")
            div.devices-section__content
                h2.devices-section__title 
                    span Ashflix         
                    |for all your devices
                p.devices-section__text Find our application on your Smart TV, tablet
                                        |or smartphone and watch TV & Movies wherever you want
                div.devices-section__app-icons
                    div.devices-section__app-icon
                        img(src="../assets/icons/app-gallery.webp")
                    div.devices-section__app-icon
                        img(src="../assets/icons/google-play.webp")
                    div.devices-section__app-icon_dark 
                        img(src="../assets/icons/app-store.webp")
                    div.devices-section__app-icon
                        img(src="../assets/icons/smart-tv.webp")
</template>

<script>
export default {
    name: "Devices"
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.devices-section {
    @include  adaptiv-css("padding-top", 100, 50);
    @include  adaptiv-css("padding-bottom", 100, 50);
    background-color: #000;
    position: relative;
    .container {
        max-width: 1170px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        @media screen and(max-width: 1200px){
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }
    }
    &__img-wrapper {
        width: 400px;
        height: 300px;
        position: relative;
        @media screen and(max-width: 576px){
             width: 320px;
        }
    }
    &__img {
        width: 100%;
        position: relative;
        z-index: 2;
    }
    .myVideo {
        width: 249px;
        position: absolute;
        z-index: 1;
        top: 37px;
        left: 72px;
        @media screen and(max-width: 576px){
             width: 200px;
             top: 21px;
             left: 61px;

        }
    }
    &__content {
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__title {
        @include  adaptiv-css("font-size", 45, 30);
        font-family: $main-font-face;
        color: #fff;
        text-align: center;
        span {
            color: $accent-color;
        }
    }
    &__text {
        font-family: $main-font-face;
        @include  adaptiv-css("font-size", 24, 18);
        color: #fff;
        margin-bottom: 40px;
        @media screen and(max-width: 1200px){
             width: 50%;
        }
        @media screen and(max-width: 768px){
             width: 100%;
             text-align: center;
        }
    }
    &__app-icons {
        display: grid;
        grid-template-columns: 170px 170px;
        grid-template-rows: auto auto;
        gap: 10px;
         @media screen and(max-width: 1200px){
            margin-bottom: 30px;
        }
        @media screen and(max-width: 576px){
            grid-template-columns: 100px 100px;
        }
    }
    &__app-icon {
        position: relative;
        &::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width:100%;
            height: 100%;
            transition: background-color 0.3s;
        }
        &:hover::before{
             background-color: rgba(111, 107, 107, 0.3);
        }
    }
    &__app-icon img{
        width: 100%;
        height: 100%;
    }
    &__app-icon_dark {
        position: relative;
        transition: background-color 0.3s;
        &::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width:100%;
            height: 100%;
            background-color: rgba(111, 107, 107, 0.3);
            transition: background-color 0.3s;
        }
        img {
            width: 100%;
        }
        &:hover::before {
           background-color: rgba(111, 107, 107, 0.5)
        }
    }
}
</style>