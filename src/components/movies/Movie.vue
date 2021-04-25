<template>
  <div style="margin: 40px;">
    <div class="movieCard flex flex-col shadow" style="max-width: 30rem;" @click="goToMovie">
      <div class="flex justify-center">
        <img :src="thumbnail" style="width: 20rem" />
      </div>
      <div class="flex flex-row items-stretch justify-evenly">
        <div class="flex flex-col flex-1 p-2">
          <span class="text-xl font-bold">{{ name }}</span>
          <span class="text-sm">Available {{ formatDate() }} {{ releaseDate.getDate() }}</span>
        </div>
        <div class="buyButton flex-1">
          <Button type="button" look="success" class="h-full">Order Ticket</Button>
        </div>
      </div>
    </div>
    <div>Directed by: {{ director }}</div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button.vue';

export default {
  name: 'Movie',
  components: {
    Button,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
  },
  methods: {
    goToMovie() {
      this.$router.push(`/movies/${this.id}`);
    },
    formatDate() {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      return months[this.releaseDate.getMonth()];
    },
  },
};
</script>

<style scoped>
/*img {*/
/*  border-radius: 8px;*/
/*  max-height: fit-content;*/
/*}*/

/*table {*/
/*  border-collapse: collapse;*/
/*  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
/*  margin: 1rem auto;*/
/*  border-radius: 10px;*/
/*}*/

/*th img {*/
/*  display: block;*/
/*  margin-left: auto;*/
/*  margin-right: auto;*/
/*}*/

/*td:first-child {*/
/*  border-right: 3px solid rgba(0, 0, 0, 0.26);*/
/*}*/

/*td:last-child {*/
/*  color: white;*/
/*  height: 100%;*/
/*}*/

/*#tableMovieName {*/
/*  font-size: 1.2rem;*/
/*  font-weight: bold;*/
/*}*/

/*#tableMovieRelease {*/
/*  font-size: 0.9rem;*/
/*}*/

/*#tableOrderButton {*/
/*  display:inline-block;*/
/*  background-color: #ff0077;*/
/*  width: 100%;*/
/*  height: 60px*/
/*}*/

/*#tableOrderButton button:hover,*/
/*#tableOrderButton button:active {*/
/*  background-color: #ec3169;*/
/*  border-color: #ec3169;*/
/*  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);*/
/*}*/
</style>
