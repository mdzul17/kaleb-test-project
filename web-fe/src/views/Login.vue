<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <button @click.prevent="goToRegister">Register</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'Login',
    setup() {
      const store = useStore();
      const router = useRouter();
      const username = ref('');
      const password = ref('');
  
      const login = async () => {
        const response = await fetch('http://localhost:3000/api/v1/authentications/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: username.value, password: password.value }),
        });
  
        if (response.ok) {
          const user = await response.json();
          console.log(user.data.name)
          store.dispatch('login', user.data);
          router.push('/home');
        } else {
          alert('Invalid username or password!');
        }
      };
  
      const goToRegister = () => {
        router.push('/register');
      };
  
      return {
        username,
        password,
        login,
        goToRegister,
      };
    },
  });
  </script>
  