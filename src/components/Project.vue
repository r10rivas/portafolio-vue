<template>
  <div class="mb-8 p-6 text-app-black bg-white
              sm:p-10
              lg:flex lg:flex-row"
  >
    <div class="mb-6
                lg:w-1/3"
    >
      <h4 class="mb-6 text-3xl font-bold">{{ projectData.name }}</h4>

      <p class="mb-4 text-2xl
                lg:mb-6 lg:mr-4"
      >
        {{projectData.description}}
      </p>

      <div class=" mb-6 text-2xl">
        <span class="mr-2 font-oswald" v-for="technology in projectData.technologies" :key="technology">
          {{technology}}
        </span>
      </div>

      <div class="flex">
        <a :href="projectData.linkGitHub" target="_blank" rel="noopener noreferrer">
          <img class="w-12 h-12 pr-3" :src="GitHubIcon" alt="git-hub-logo"/>
        </a>
        <a :href="projectData.linkProject" target="_blank" rel="noopener noreferrer">
          <img class="w-12 h-12 pr-3" :src="ExternalLinkIcon" alt="git-hub-logo"/>
        </a>
      </div>
    </div>


    <div class="h-80
                sm:h-104
                md:h-112
                lg:w-2/3 lg:h-120"
    >
      <img class="w-full h-full" :src="projectData.image" alt="pokehack"/>
    </div>
  </div>
</template>

<script>
  import GitHubIcon from "./../assets/images/github-icon.svg";
  import ExternalLinkIcon from "./../assets/images/external-link-icon.svg";

  export default {
    name: "Project",
    data: function () {
      return {
        GitHubIcon,
        ExternalLinkIcon
      }
    },
    props: {
      projectData: Object,
    }
  }
</script>

<style lang="scss" scoped>

</style>