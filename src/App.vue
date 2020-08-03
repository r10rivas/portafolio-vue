<template>
  <div>
    <Navegation @goTo="goTo"/>
    <Presentation/>
    <About ref="about"/>
    <WhereWorked ref="whereWorked"/>
    <Projects ref="projects"/>
  </div>
</template>

<script>
import Navegation from "./components/Navegation";
import Presentation from "./components/Presentation";
import About from "./components/About";
import WhereWorked from "./components/WhereWorked";
import Projects from "./components/Projects";

export default {
  name: "App",
  components: {
    Navegation,
    Presentation,
    About,
    WhereWorked,
    Projects,
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
