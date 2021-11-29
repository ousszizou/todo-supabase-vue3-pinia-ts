<script setup lang="ts">
import Todo from '../components/Todo.vue';
import router from '../router';
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

const logout = async () => {
  await userStore.logout();
  router.push("/");
};

</script>

<template>
  <nav>
    <h3>TODO-LIST</h3>
    <button @click="logout">
      logout
    </button>
  </nav>
  <Todo />
</template>

<style scoped>
  nav {
    background-color: #f5f5f5;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    font-size: 1.5em;
  }
  button {
    border: none;
    background-color: #cf6983;
    color: #fff;
    font-weight: 900;
    padding: 10px;
    font-size: 1em;
    cursor: pointer;
  }
</style>
