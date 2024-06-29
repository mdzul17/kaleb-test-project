<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'Register',
    setup() {
      const router = useRouter();
      const username = ref('');
      const password = ref('');
      const name = ref('');
  
      const register = async () => {
        // Here, you would call your backend to register the user.
        // This is a dummy implementation.
        const response = await fetch('http://localhost:3000/api/v1/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: username.value, password: password.value, name: name.value }),
        });
  
        if (response.ok) {
          alert('Registration success')
          router.push('/login');
        } else {
          alert('Registration failed');
        }
      };
  
      return {
        username,
        password,
        name,
        register,
      };
    },
  });
  </script>
  