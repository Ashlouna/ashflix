<template>

  <v-footer
    dark
    padless
    id="footer"
  >
  
    <v-card
      flat
      tile
      class="grey darken-4 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong><a href="#">Ashflix</a></strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.v-footer {
    margin: 0 auto;
}
.v-icon:hover {
    color: rgb(84, 167, 206);
}
.white--text strong a{
    color: $accent-color;
}

</style>