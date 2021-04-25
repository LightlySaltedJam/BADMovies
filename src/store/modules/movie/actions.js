import movieService from '@/services/movie.service';

export async function getMovies(context) {
  const { isLoading } = context.rootGetters;
  const alreadyHaveMovies = context.getters.movies.length;
  if (!alreadyHaveMovies && !isLoading) {
    context.commit('setLoading', true, { root: true });
    console.log('already have movies', alreadyHaveMovies, isLoading);
    const moviesResult = await movieService.getMovies();
    context.commit('setMovies', moviesResult);
    context.commit('setLoading', false, { root: true });
  }
}
