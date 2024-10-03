import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Create the Vue app
const app = createApp(App);

// Use the router and store
app.use(router);
app.use(store);

// Mount the app
app.mount('#app');
