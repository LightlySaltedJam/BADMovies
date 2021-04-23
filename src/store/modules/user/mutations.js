/* eslint-disable camelcase */
export function setUser(state, userPayload) {
  const { access_token, ...user } = userPayload;
  state.token = access_token;
  state.user = user;
  localStorage.setItem('access_token', user.access_token);
}
