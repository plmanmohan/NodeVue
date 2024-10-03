<template>
  <div>
    <h2>Add User</h2>
    <form @submit.prevent="addUser">
      <label>User Name: </label>
      <input v-model="user.name" type="text" required>
      <label>City Name: </label>
      <input v-model="user.city" type="text" required>
      <label>User Email: </label>
      <input v-model="user.email" type="email" required>
      <button type="submit">Add User</button>
    </form>
  </div>
</template>

<script>
import apiClient from '../api';
// import axios from 'axios';
export default {
  data() {
    return {
      user: {
        name: '',
        city: '',
        email: '',
      }
    };
  },
  methods: {
    async addUser() {
      try {
        const response = await apiClient.post('/user', this.user);
        console.log(response);
      } catch (error) {
        console.error('Error adding user:', error.response.data);
      }
    }
  }
};
</script>