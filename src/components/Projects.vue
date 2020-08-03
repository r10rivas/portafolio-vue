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
        Projects
      </h1>

      <ListProjects :projectsData="projects"/>

    </div>
  </section>
</template>

<script>
  import GitHubIcon from "./../assets/images/github-icon.svg";
  import ExternalLinkIcon from "./../assets/images/external-link-icon.svg";
  import Pokehack from "./../assets/images/projects/pokehack.gif";

  import ListProjects from "./ListProjects";

  export default {
    name: "Projects",
    data: function () {
      return {
        GitHubIcon: GitHubIcon,
        ExternalLinkIcon: ExternalLinkIcon,
        Pokehack: Pokehack,

        projects: [
          {
            name: "Pokehack",
            description: "A simple SPA that allows you to view a list of pokemons, view pokemon features, save your favorite pokemon.",
            technologies: ['Vuejs, TailwindCSS'],
            linkGitHub: "https://github.com/r10rivas/pokehack-vue",
            linkProject: "https://pokehack.netlify.app/",
            image: Pokehack,
          },
        ]
      }
    },
    components: {
      ListProjects
    },
  }
</script>

<style lang="scss" scoped>

</style>
