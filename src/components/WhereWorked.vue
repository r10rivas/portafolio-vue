<template>
  <section class="min-h-screen p-12 flex flex-col text-app-black bg-app-white
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
        Where I've Worked
      </h1>

      <div class="timeline">
        <div class="timeline__container timeline__container--left">
          <div class="timeline__content">
            <h4 class="timeline__title">May. 2019 – Feb. 2020</h4>
            <p class="timeline__description">
              I was a web development bootcamp mentor. Among the responsibilities was to teach 12 hours of weekly classes and the evaluation of projects.
              <br>
              <br>

              I taught people who had no previous experience in the programming world. The topics of the classes ranged from pseudocodigo, basic algorithms, introduction to programming language, object-oriented programming, data disign and modeling, SQL, API building, front-end development with HTML/CSS/JS and application of philosophies like first mobile and methodologies like BEM.
              <br>
              <br>

              Although i could teach almost any class of the program, i focused more on class that were related to back-end development.
            </p>
          </div>
        </div>
        <div class="timeline__container timeline__container--right">
          <div class="timeline__content">
            <h4 class="timeline__title">Mar. 2018 – Jan. 2020</h4>
            <p class="timeline__description">
              During the time I worked at the Academia Hack - Factory, participé como desarrolladores en proyectos, which allowed me to acquire and solidify knowledge and skills such as the following:
              <br>
              <br>
              - Develop applications in Ruby on Rails, planning and implementation of web projects mainly in MVC architectures ranging from administrative systems and e-commerce to landing pages or web presences.
              <br>
              <br>
              - Development of user interfaces following proposed designs, with technologies like StimulusJS, TailwindCSS, SCSS, React.
              <br>
              <br>
              - Work with multidisciplinary teams under the focus of agile methodologies (SCRUM).
              <br>
              <br>
              - Management and construction of advanced relational database models using MySQL y PostgreSQL.
              <br>
              <br>
              - Version control management with GIT
            </p>
          </div>
        </div>
        <div class="timeline__container timeline__container--left">
          <div class="timeline__content">
            <h4 class="timeline__title">Aug. 2017 – Mar. 2018</h4>
            <p class="timeline__description">
              Integrate part of the systems and technology team of this company, which operates in the area of transportation by sea.
              <br>
              <br>
              Among the responsibilities I had stand out, the development of features and bug fixes in the different software of the company, construction of custom reports via SQL.
              <br>
              <br>
              This work allowed me to solidify basic concepts and principles in web development, participate in the construction of ideas to automate processes and then their development, in addition to acquiring some expertise in interacting with databases through pure SQL.
              <br>
              <br>
              Some of the techologies used to carry out these projects include Ruby on Rails, Bootstrap, Postgresql, Jquery.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "WhereWorked",
  }
</script>

<style lang="scss" scoped>
  .timeline {
    @apply relative;

    &::after {
      @apply absolute top-0 bottom-0 left-0;
      @apply bg-app-primary;
      content: '';
      width: .5rem;
    }

    &__container {
      @apply py-6 px-12 ;
      @apply relative;

      &--left, &--right {
        @apply left-0;
      }

      &::before {
        content: " ";
        height: 0;
        position: absolute;
        width: 0;
        z-index: 1;
        top: 33px;
        left: 2rem;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
        // right: 20px;
        // border: medium solid white;
        // border-width: 10px 0 10px 10px;
        // border-color: transparent transparent transparent white;
      }

      &::after {
        @apply absolute;
        @apply bg-app-yellow;
        content: '';
        width: 25px;
        height: 25px;
        left: -1rem;
        border: 4px solid #811D35;
        top: 3rem;
        border-radius: 50%;
        z-index: 1;
      }
    }

    &__content {
      @apply p-6;
      @apply bg-white;
    }

    &__title {
      @apply mb-6;
      @apply text-3xl font-bold;
    }

    &__description {
      @apply text-2xl;
    }
  }

  @screen sm {
    .timeline {

      &::after {
        left: 50%;
      }

      &__container {
        @apply w-1/2;

        &--left {
          &::before {
            left: auto;
            right: 20px;
            border: medium solid white;
            border-width: 10px 0 10px 10px;
            border-color: transparent transparent transparent white;
          }

          &::after {
            right: -1.5rem;
            left: auto;
          }
        }

        &--right {
          left: 50%
        }
      }
    }
  }
</style>
