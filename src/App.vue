<script setup lang="ts">
  import { onMounted } from "vue";
  import { supabase } from "./utils/supabase";

  onMounted(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log("Event: ", event);
      console.log("Session: ", session);
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
