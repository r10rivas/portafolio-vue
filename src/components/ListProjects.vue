<template>
  <div class="flex flex-col">
    <Project v-for="project in projectsData" :key="project.name" v-bind:projectData="project"/>
  </div>
</template>

<script>
  import Project from "./Project";

  export default {
    name: "ListProject",
    components: {
      Project,
    },
    props: {
      projectsData: Array,
    }
  }
</script>

<style lang="scss" scoped>

</style>
