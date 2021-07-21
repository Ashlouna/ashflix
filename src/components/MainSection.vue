<template lang="pug">
    section(class="main-section")
        h1(class="main-section__title") Join Us and #[br] Enjoy the Best Movies
        form(class="main-section__form form-main")
            input(type="mail" name="email" class="form-main__input" id="form-main-input" required)
            label(class="form-main__label" for="form-main-input") Email address
            v-btn(class="ma-0 form-main__btn" id="btn" tile) Get Started
</template>
<script>
export default {
    components: {}
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.main-section{
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0.3) 60%,rgba(0,0,0,.8) 100%), url("../assets/avengers-bg.jpg");
    background-color: rgba(0,0,0,.4);
    background-position-x: center;
    background-position-y: 90px;
    background-size: cover;
    background-repeat: no-repeat;
    &__title {
        @include  adaptiv-css("font-size", 46, 30);
        font-family: $main-font-face;
        color: #fff;
        text-align: center;
        margin-bottom: 10px;
    }
}
.form-main {
    @include  adaptiv-css("width", 600, 300);
    height: 60px;
    position: relative;
    display: flex;
    @media screen and(max-width: 576px){
             flex-direction: column;
             height: 85px;
        }
    &__input {
        font-family: $main-font-face;
        font-weight: 700; 
        flex-basis: 70%;
        border: none;
        outline: none;
        padding-left: 10px;
        background-color: #fff;
        border-bottom-left-radius: 0.5em;
        border-top-left-radius: 0.5em;
        @media screen and(max-width: 576px){
             flex-basis: 50%;
             border-bottom-left-radius: unset;
             border-top-right-radius: 0.5em;
        }
        &:focus + label {
            top: 10px;
            left: 10px;
            font-size: 12px;
            @media screen and(max-width: 576px){
            top: 5px;
            }
        }
    }
    &__label {
        font-family: $main-font-face;
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 14px;
        color: #94928e;
        transition: all 0.3s;
        @media screen and(max-width: 576px){
            top: 10px;
        }
    }
    .v-btn {
        @include adaptiv-css("font-size", 24, 18);
        height: 100%;
        text-transform: unset;
        font-family: Helvetica, sans-serif;
        background-color: $accent-color;
        flex-grow: 1;
        border: none;
        outline: none;
        color: #fff;
        border-bottom-right-radius: 0.5em;
        border-top-right-radius: 0.5em;
         @media screen and(max-width: 576px){
             border-top-right-radius: unset;
             border-bottom-left-radius: 0.5em;
             flex-basis: 50%;
        }
    }
    .v-application #btn {
        margin: 0 !important;
    }
}
</style>