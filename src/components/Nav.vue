<template lang="pug">
nav(class='header__nav nav')
    ul(class='nav__list')
        li(class='nav__item')
        a(class='nav__link' href='#') 
        li(class='nav__item')
        a(class='nav__link' href='#')
        li(class='nav__item')
        a(class='nav__link' href="#")
    
</template>
<script>

export default {
   name: "Nav", 
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.nav {
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  &__list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__item {
    list-style: none;
    color: #fff;
  }
  &__link {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
  }
  
}
</style>