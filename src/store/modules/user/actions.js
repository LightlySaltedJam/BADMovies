import authService from '@/services/auth.service';

export function login({ commit }, user) {
  return authService
    .login(user.username, user.password)
    .then((response) => {
      commit('setUser', response.data);
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

export function register() {
  return authService.register(this.user).catch((err) => {
    console.error(err);
  });
}
