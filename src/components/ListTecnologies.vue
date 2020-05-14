<template>
  <ul class="flex flex-wrap text-2xl
             lg:text-3xl"
  >
    <ItemTecnology v-for="tecnology in tecnologies" :key="tecnology" v-bind:tecnology="tecnology"/>
  </ul>
</template>
<script>
  import ItemTecnology from "./ItemTecnology";

  export default {
    name: 'ListTecnologies',
    props: {
      tecnologies: Array
    },
    components: {
      ItemTecnology
    }
  }
</script>
