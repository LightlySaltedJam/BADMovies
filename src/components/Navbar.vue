<template>
  <div class="flex justify-between px-5 py-3 bg-gray-600 text-white shadow-lg">
    <router-link to="/">Home</router-link>
    <div>
      <button class="focus:outline-none" @click="toggleUserMenu">Hello, {{ user }}</button>

      <div class="flex flex-col absolute bg-gray-600 p-5 rounded shadow-md"
           v-if="userMenuVisible">
        <router-link to="/auth/login">Login</router-link>
        <router-link to="/auth/register">Register</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      userMenuVisible: false,
    };
  },
  computed: {
    user() {
      if (this.$store.getters['userModule/isLoggedIn']) {
        return this.store.getters['userModule/user'];
      }
      return 'guest';
    },
  },
  methods: {
    toggleUserMenu() {
      this.userMenuVisible = !this.userMenuVisible;
    },
  },
};
</script>

<style scoped>

</style>
