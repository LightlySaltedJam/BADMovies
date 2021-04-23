<template>
  <div class="registerComponent">
    <label for="firstName">First Name:
      <input type="text" class="" id="firstName" v-model="user.firstName"/>
    </label>

    <br/>

    <label for="lastName">Last Name:
      <input type="text" class="" id="lastName" v-model="user.lastName"/>
    </label>

    <br/>

    <label for="email">Email:
      <input type="email" class="" id="email" v-model="user.email"/>
    </label>

    <br/>

    <label for="username">Username:
      <input type="text" class="" id="username" v-model="user.username"/>
    </label>

    <br/>

    <div v-bind:class="{ error: !arePasswordsMatching}">
      <label for="password">Password:
        <input type="password" class="" id="password" v-model="user.password"/>
      </label>

      <br/>

      <label for="confirmPassword">Confirm Password:
        <input type="password" class="" id="confirmPassword" v-model="user.confirmPassword"/>
      </label>
    </div>

    <br/>

    <button @click="registerUser">SignUp</button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  borderColor: '',
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  computed: {
    arePasswordsMatching() {
      return this.user.confirmPassword === this.user.password;
    },
  },
  methods: {
    registerUser() {
      if (this.arePasswordsMatching) {
        this.$store.dispatch('userModule/register').then(() => {
          this.$router.push('/auth/login');
        });
      } else {
        // alert("Passwords don't match!!");
      }
    },
  },
};
</script>

<style scoped>

.error {
  border-style: solid;
  border-color: coral;
}

</style>
