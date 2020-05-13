<template>
  <div class="section p-12 flex items-center bg-app-primary-darked sm:px-20">
    <div>
      <H1 class="mb-8 text-2xl text-app-yellow lg:text-3xl">
        Hi, my name is
      </H1>
      <h2 class="text-app-white text-6xl font-bold lg:text-7xl">
        Roberto Rivas.
      </h2>
      <h3 class="mb-4 text-6xl font-bold text-app-white-darked lg:text-7xl">
        I build things for the web.
      </h3>
      <p class="mt-10 text-3xl text-app-white-darked lg:w-1/2 lg:text-4xl">
        I'm a web developer residing in Venezuela, specializing in building exceptional applications, and everything in between.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Presentation",
}
</script>

<style lang="scss" scoped>
.section {
  height: calc(100vh - 8rem);
}
</style>