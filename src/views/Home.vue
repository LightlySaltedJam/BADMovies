<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div>Who does this? Answer: {{ name }} - {{ age }}</div>
    <div>Output of input: {{ output }}</div>
    <input type="text" v-model="output" />

    <button @click="onClickButton">Click me</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      name: 'Radu',
      age: 29,
      output: '',
    };
  },
  created() {
    setTimeout(() => {
      this.name = 'Andrei';
      this.age = 21;
    }, 3000);
  },

  methods: {
    onClickButton() {
      console.log('User clicked button');
    },
  },
};
</script>
