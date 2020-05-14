<template>
  <section class="min-h-screen p-12 flex flex-col text-app-white bg-app-black
                  sm:px-20
                  lg:p0 lg:items-center lg:justify-center"
  >
    <div class="w-full
                lg:w-4/5"
    >
      <h1 class="mt-8 mb-20 text-3xl text-center font-bold
                 md:text-4xl
                 lg:text-5xl"
      >
        About Me
      </h1>
      <div class="flex flex-col
                  lg:flex-row"
      >
        <div class="flex flex-col
                    lg:w-1/2"
        >
          <p class="mb-6 text-2xl
                    md:text-3xl
                    lg:text-4xl"
          >
            Hello! I'm Roberto, a developer web.
          </p>
          <p class="mb-6 text-2xl
                    md:text-3xl
                    lg:text-4xl"
          >
            I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
          </p>
          <p class="mb-8 text-2xl
                    md:text-3xl
                    lg:text-4xl"
          >
            Here are a few technologies I've been working with recently:
          </p>
          <ListTecnologies v-bind:tecnologies="tecnologies"/>
        </div>
        <div class="mt-12 flex justify-center lg:w-1/2">
          <div class="w-3/4 flex justify-center">
            <a href="https://github.com/r10rivas/" target="_blank">
              <ImageFrame/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import ImageFrame from "./ImageFrame";
  import ListTecnologies from "./ListTecnologies";

  export default {
    name: 'About',
    data() {
      return {
        tecnologies: ["Ruby", "Ruby On Rails", "JavaScript", "Vue", "React", "HTML & (S)CSS"]
      }
    },
    components: {
      ListTecnologies,
      ImageFrame,
    }
  }
</script>
