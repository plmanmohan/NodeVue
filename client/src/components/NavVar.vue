<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/add-product">Add Product</router-link></li>
            <li><router-link to="/add-user">Add User</router-link></li>
            <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
            <li v-if="!isAuthenticated"><router-link to="/register">Register</router-link></li>
            <li v-if="isAuthenticated" @click="logout">Logout</li>
            <li v-if="isAuthenticated"><router-link to="/profile">Profile</router-link></li>

        </ul>
    </nav>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default{
    computed: {
        ...mapState(['isAuthenticated'])
    },
    methods: {
        ...mapActions(['logout'])
    }
}
</script>