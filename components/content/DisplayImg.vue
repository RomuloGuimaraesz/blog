<script>
export default {
  name: 'DisplayImg',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  computed: {
    imgSrc () {
      return require(`~/assets/${this.src}`)
    }
  }
}
</script>

<template>
  <picture class="image">
    <img
      :src="imgSrc"
      :alt="alt"
      draggable="false"
    >
  </picture>
</template>

<style lang="scss" scoped>
picture {
  width: 300px;
  height: 300px;
  margin: 0;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    margin: auto;
    object-fit: contain;
  }
}
</style>
