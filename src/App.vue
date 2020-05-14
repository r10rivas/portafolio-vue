<template>
  <div>
    <Navegation @goTo="goTo"/>
    <Presentation/>
    <About ref="about"/>
  </div>
</template>

<script>
import Navegation from "./components/Navegation";
import Presentation from "./components/Presentation";
import About from "./components/About";

export default {
  name: "App",
  components: {
    Navegation,
    Presentation,
    About,
  },
  methods: {
    goTo (refName) {
      const element = this.$refs[refName];
      const top = element.$el.offsetTop;
      window.scrollTo(0, top);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
