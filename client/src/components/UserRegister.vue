<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <label>Email: </label>
        <input v-model="email" type="email" required>
        <label>Password: </label>
        <input v-model="password" type="password" required>
        <button type="submit">Register</button>
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
      register() {
        // Logic to register user
        console.log('User registered:', this.email);
        // You can replace this with actual registration logic
      }
    }
  };
  </script>
  