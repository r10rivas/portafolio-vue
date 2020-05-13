<template>
  <div>
    <Navegation/>
    <Presentation/>
  </div>
</template>

<script>
import Navegation from "./components/Navegation";
import Presentation from "./components/Presentation";

export default {
  name: "App",
  components: {
    Navegation,
    Presentation,
  }
}
</script>

<style lang="scss" scoped>
</style>
