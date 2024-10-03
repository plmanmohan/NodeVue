<template>
    <div>
      <h1>Your Profile</h1>
      <p>Email: {{ user.email }}</p>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['user'])
    }
  };
  </script>
  