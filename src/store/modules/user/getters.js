export function isLoggedIn(state) {
  return !!state.token;
}

export function user(state) {
  return state.user.username;
}
