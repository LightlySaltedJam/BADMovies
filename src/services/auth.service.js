import { http } from '../api/api.service';

class AuthService {
  // eslint-disable-next-line class-methods-use-this
  login(username, password) {
    return http.post('/auth/login', {
      username,
      password,
    });
  }

  // ToDo: register()
  // eslint-disable-next-line class-methods-use-this
  register(user) {
    return http.post('/auth/register', {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
