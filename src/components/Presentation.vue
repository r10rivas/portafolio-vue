<template>
  <section class="section p-12 flex items-center justify-center bg-app-primary-darked
              sm:px-20
              lg:p-0"
  >
    <div class="lg:w-4/5">
      <H1 class="mb-8 text-2xl text-app-yellow
                 md:text-3xl
                 lg:text-4xl">
        Hi, my name is
      </H1>
      <h2 class="text-app-white text-5xl font-bold md:text-6xl lg:text-7xl">
        Roberto Rivas.
      </h2>
      <h3 class="mb-4 text-5xl font-bold text-app-white-darked
                 md:text-6xl
                 lg:text-7xl"
      >
        I build things for the web.
      </h3>
      <p class="mt-10 text-3xl text-app-white-darked
                md:text-4xl
                lg:w-1/2 lg:text-5xl"
      >
        I'm a web developer residing in Venezuela. I always like to be learning and build application scalable and maintainable. Lover of good practices.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Presentation",
}
</script>

<style lang="scss" scoped>
// todo: class global?
.section {
  min-height: calc(100vh - 8rem);
}
</style>