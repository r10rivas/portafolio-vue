<template>
  <div class="image-flame">
    <div class="image-flame__image">
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageFrame",
}
</script>

<style lang="scss" scoped>
  .image-flame {
    width: 20rem;
    height: 20rem;
    background-image: url("./../assets/images/profile.png");
    background-size: 20rem 20rem;
    position: relative;
    z-index: 1;

    &:after {
      content: '';
      position: absolute;
      width: 19rem;
      height:19rem;
      left: .5rem;
      top: .5rem;
      background-color: #1b1a1a;
    }

    &:hover > &__image {
      transform: translate(15px, -15px);
      transition: .5s cubic-bezier(.5,.03,.41,1);
    }

    &__image {
      position: absolute;
      width: 19rem;
      height: 19rem;
      left: .5rem;
      top: .5rem;
      background-image: url("./../assets/images/profile.png");
      background-size: 20rem 20rem;
      background-position: center center;
      z-index: 2;
      transition: .5s cubic-bezier(.5,.03,.41,1);
    }
  }
</style>
