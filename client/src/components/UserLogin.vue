<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label>Email: </label>
        <input v-model="email" type="email" required>
        <label>Password: </label>
        <input v-model="password" type="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Logic to authenticate user
        this.$store.dispatch('login', { email: this.email, password: this.password });
      }
    }
  };
  </script>
  