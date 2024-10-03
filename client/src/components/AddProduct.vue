<template>
    <div>
        <h2>Add Product</h2>
        <form @submit.prevent="addProduct">
            <label>Product Name: </label>
            <input v-model="product.name" type="text" required />
            <label>Descripotion: </label>
            <input v-model="product.description" type="text" required />
            <label>Price: </label>
            <input v-model="product.price" type="text" required />
            <label>Stock: </label>
            <input v-model="product.stock" type="text" required />
            <button type="submit">Add Product</button>
        </form>
    </div>
</template>

<script>
import apiClient from '../api';
export default {
    data() {
        return {
            product: {
                name: '',
                description: '',
                price: '',
                stock: ''
            }
        }
    },
    methods: {
        async addProduct() {
            try {
                const response = await apiClient.post('/products', this.product);
                console.log(response);
            } catch (error) {
                console.error('Error adding user:', error.response.data);
            }
        }
    }
}
</script>