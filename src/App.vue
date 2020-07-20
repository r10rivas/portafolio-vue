<template>
  <div>
    <Navegation @goTo="goTo"/>
    <Presentation/>
    <About ref="about"/>
    <WhereWorked ref="whereWorked"/>
  </div>
</template>

<script>
import Navegation from "./components/Navegation";
import Presentation from "./components/Presentation";
import About from "./components/About";
import WhereWorked from "./components/WhereWorked";

export default {
  name: "App",
  components: {
    Navegation,
    Presentation,
    About,
    WhereWorked,
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
