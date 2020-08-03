<template>
  <li class="item-tecnology">{{tecnology}}</li>
</template>

<script>
export default {
  name: 'ItemTecnology',
  props:{
    tecnology: String,
  }
}
</script>

<style lang="scss" scoped>
  .item-tecnology {
    @apply w-1/2;
    @apply mb-4 pl-8;
    @apply relative;
    @apply font-oswald;

    &::before {
      content: "▹";
      @apply absolute left-0;
      @apply text-app-yellow;
      font-size: 18px;
      line-height: 10px;
      // font-size: 16px;
      // line-height: 12px;
    }
  }
</style>