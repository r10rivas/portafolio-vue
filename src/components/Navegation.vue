<template>
  <div class="relative">
    <!-- Navbar -->
    <header class="flex justify-between items-center w-full py-6 px-8 bg-black">
      <div class="flex items-center w-32 h-20">
        <img class="w-full h-full" src="./../assets/images/logo.svg" alt="R10Rivas">
      </div>
      <nav class="text-2xl hidden text-primary sm:flex sm:justify-between">
        <ul class="flex mx-4 my-2">
          <li class="flex items-center cursor-pointer px-8 hover:text-white hover:bg-primary">
            About
          </li>
          <li class="flex items-center cursor-pointer px-8 hover:text-white hover:bg-primary">
            Experiences
          </li>
          <li class="flex items-center cursor-pointer px-8 hover:text-white hover:bg-primary">
            Skills
          </li>
        </ul>
        <button class="mx-4 my-2 py-4 px-8 text-center border rounded-sm border-primary hover:text-white">
          Resumen
        </button>
      </nav>
      <a
        class="flex flex-col items-center justify-center  w-16 h-16 p-2 sm:hidden active:border active:border-solid active:border-primary active:rounded-sm"
        href="#"
        @click.prevent="handleSidebar"
      >
        <i class="bg-primary button-sidebar-icon"></i>
        <i class="bg-primary button-sidebar-icon"></i>
        <i class="bg-primary button-sidebar-icon"></i>
      </a>
    </header>
    <!-- Navbar -->
    <transition name="fade">
      <div
        class="absolute top-0 w-full h-screen bg-gray-400 opacity-75 z-10 sm:hidden"
        v-if="sidebarShow"
        @click.prevent="handleSidebar"
      >
      </div>
    </transition>
    <transition name="fade">
    <!-- Sidebar -->
      <div
        class="absolute top-0 w-3/4 h-screen z-20 bg-black sm:hidden"
        v-if="sidebarShow"
      >
        <nav class="py-12 p-10 text-white text-2xl">
          <ul class="cursor-pointer">
            <li class="p-4 text-center hover:bg-primary">About</li>
            <li class="p-4 text-center hover:bg-primary">Experiences</li>
            <li class="p-4 text-center hover:bg-primary">Skills</li>
          </ul>
        </nav>
      </div>
    </transition>
    <!-- Sidebar -->
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

.button-sidebar-icon {
  border-radius: 2px;
  content: '';
  display: flex;
  width: 100%;
  height: 3px;
  margin: .4rem 0;
}
</style>
