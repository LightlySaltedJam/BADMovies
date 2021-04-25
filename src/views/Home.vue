<template>
  <div className=''>
    <LatestReleases></LatestReleases>
    <!--    <LatestReleases></LatestReleases>-->
    <!--    <LatestReleases></LatestReleases>-->
  </div>
</template>

<script>
// @ is an alias to /src
import LatestReleases from '@/components/movies/LatestReleases.vue';

export default {
  name: 'Home',
  components: {
    LatestReleases,
  },
  data() {
    return {};
  },
};
</script>
