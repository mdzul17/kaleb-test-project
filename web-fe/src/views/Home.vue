<template>
    <div>
      <h1>Home</h1>
      <p>Welcome, {{ user.name }}!</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'Home',
    setup() {
      const store = useStore();
      const router = useRouter();
      const user = store.state.user;
  
      const logout = () => {
        store.dispatch('logout');
        router.push('/login');
      };
  
      return {
        user,
        logout,
      };
    },
  });
  </script>
  