<template>
  <div class="latestReleases">
    <h1>Latest releases:</h1>
    <div class="latestReleases-container">
      <Movie v-for="movie in storedMovies" :key="movie.id" v-bind="movie"></Movie>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Movie from './Movie.vue';

export default {
  name: 'LatestReleases',
  components: {
    Movie,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      storedMovies: 'movieModule/movies',
    }),
  },
  // called when component is instantiated but not attached to the dom
  created() {
    this.$store.dispatch('movieModule/getMovies');
  },
};
</script>

<style scoped>
.latestReleases {
  width: 100%;
}
.latestReleases-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin-top: 40px;
  font-size: 2rem;
  font-weight: bold;
}
</style>
