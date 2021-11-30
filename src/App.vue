<script setup lang="ts">
  import { onMounted } from "vue";
  import { supabase } from "./utils/supabase";
  import { useUserStore } from "./stores/user";

  const userStore = useUserStore();

  onMounted(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log("Event: ", event);
      console.log("Session: ", session);
      if (event === "SIGNED_IN") {
        userStore.$patch({
          user: session?.user
        });
      } else if (event === "SIGNED_OUT") {
        userStore.$patch({
          user: null
        });
      }
    });
  });
  
</script>

<template>
  <router-view></router-view>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
}
</style>
