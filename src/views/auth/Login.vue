<template>
  <Card class="w-1/3 mt-10 bg-gray-600">
    <template v-slot:content>
      <Input
        type="text"
        id="username"
        v-model="user.username"
        :valid="valid"
        class="mb-2"
        placeholder="Username"
      />
      <Input
        type="password"
        id="password"
        v-model="user.password"
        :valid="valid"
        placeholder="Password"
        class="mb-2"
      />
    </template>

    <template v-slot:footer>
      <Button @click="loginUser" look="success">Login</Button>
    </template>
  </Card>
</template>

<script>
import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue';
import Input from '@/components/ui/Input.vue';

export default {
  name: 'Login',
  components: {
    Button,
    Card,
    Input,
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      valid: true,
    };
  },
  methods: {
    loginUser() {
      this.$store
        .dispatch('userModule/login', this.user)
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          if (error.response.status === 404) {
            this.valid = false;
          }
        });
    },
  },
};
</script>

<style scoped></style>
