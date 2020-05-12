<template>
  <div class="relative">
    <header class="flex justify-between items-center w-full py-6 px-8 bg-black">
      <div class="flex items-center w-32 h-20">
        <img class="w-full h-full" src="./../assets/images/logo.svg" alt="R10Rivas">
      </div>
      <nav class="text-white text-2xl hidden header__nav">
        <ul class="flex mx-4 my-2">
          <li class="flex items-center cursor-pointer px-8 hover:text-white hover:bg-primary">
            About
          </li>
          <li class="flex items-center cursor-pointer px-8 hover:text-white hover:bg-primary">
            About
          </li>
        </ul>
        <button class="mx-4 my-2 py-4 px-8 text-center header__button-resumen hover:text-white">
          Resumen
        </button>
      </nav>
      <a
        class="flex flex-col items-center justify-center  w-16 h-16 p-2 sm:hidden header__button-sidebar"
        href="#"
        @click.prevent="handleSidebar"
      >
        <i class="bg-primary header__icon"></i>
        <i class="bg-primary header__icon"></i>
        <i class="bg-primary header__icon"></i>
      </a>
    </header>
    <div
      class="absolute top-0 w-full h-screen bg-gray-400 opacity-75 z-10 hidden sm:hidden"
      v-bind:class="{sidebarShow: sidebarShow}"
      @click.prevent="handleSidebar"
    >
    </div>
    <div
      class="absolute top-0 w-3/4 h-screen z-20 bg-black hidden sm:hidden"
      v-bind:class="{sidebarShow: sidebarShow}"
    >
      <nav class="py-12 p-10 text-white text-2xl">
        <ul class="cursor-pointer">
          <li class="p-4 text-center hover-bg-primary">About</li>
          <li class="p-4 text-center hover-bg-primary">About</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navegation",
  data () {
    return {
      sidebarShow: false,
    }
  },
  methods: {
    handleSidebar () {
      this.sidebarShow = !this.sidebarShow;
    }
  }
}
</script>

<style lang="scss" scoped>
  // Move tailwindcss
  .hover-bg-primary {
    &:hover {
      background-color: #802435;
    }
  }

  .text-primary {
    color: #802435;
  }

  // This is hack :(
  .sidebarShow {
    @apply block;

    @screen sm {
      @apply hidden;
    }
  }


  .header {
    // @apply flex justify-between items-center;
    // @apply w-full py-6 px-8;
    // // @apply bg-red-400;
    // @apply bg-black;

    // &__wrapper-logo {
    //   @apply flex items-center;
    //   @apply w-32 h-20;
    // }

    // &__logo {
    //   @apply w-full h-full;
    // }

    &__nav {
      // @apply hidden;
      // @apply text-white text-2xl;
      color: #812435;
      // @apply bg-purple-500;
    }

    // &__list {
      // @apply flex;
      // @apply mx-4 my-2;

    //   &__item {
    //     @apply flex items-center;
    //     @apply cursor-pointer;
    //     @apply px-8;

    //     &:hover {
    //       @apply text-white;
    //     }
    //   }
    // }

    &__button-resumen {
      // @apply mx-4 my-2 py-4 px-8;
      // @apply text-center;
      border-radius: 5%;
      border: 1px solid #812435;

      // &:hover {
      //   @apply text-white;
      // }
    }

    &__button-sidebar {
      // @apply flex flex-col items-center justify-center;
      // @apply w-16 h-16;
      // @apply p-2;

      &:active {
        border: 1px solid #802435;
        border-radius: 5%;
      }
    }

    &__icon {
      // background-color: #812435;
      border-radius: 2px;
      content: '';
      // display: block;
      display: flex;
      width: 100%;
      height: 3px;
      margin: .4rem 0;
    }
  }

  @screen sm {
    .header {
      &__nav {
        @apply flex justify-between;
      }
      // &__button-sidebar {
      //   @apply hidden;
      // }
    }
  }
</style>
