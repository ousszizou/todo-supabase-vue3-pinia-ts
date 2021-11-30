import { User } from "@supabase/supabase-js";
import { defineStore } from "pinia";
import { Credentials, Todos } from "../types/global";
import { supabase } from "../utils/supabase";
import { createToast } from "mosha-vue-toastify";

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  todos: Todos[] | null;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => {
    return {
      user: null,
      isLoggedIn: false,
      isLoading: false,
      error: null,
      todos: [],
    };
  },
  getters: {
    getIsLoggedIn: (state) => state.isLoggedIn,
    getIsLoading: (state) => state.isLoading,
    getUser: (state) => state.user,
    getError: (state) => state.error,
    getTodos: (state) => state.todos,
  },
  actions: {
    async login(credentials: Credentials) {
      try {
        this.isLoading = true;
        const { error } = await supabase.auth.signIn(credentials, {
          redirectTo: "http://localhost:3000/home",
        });
        if (error) {
          this.error = error.message;
          createToast(this.error, {
            showIcon: true,
            position: "top-center",
            type: "danger",
            transition: "slide",
          });
        }
        createToast("Check your email for the login link!", {
          showIcon: true,
          position: "top-center",
          type: "success",
          transition: "slide",
        });
      } catch (err) {
        this.isLoading = false;
        this.error = (err as Error).message;
        createToast(this.error, {
          showIcon: true,
          position: "top-center",
          type: "danger",
          transition: "slide",
        });
      } finally {
        this.isLoading = false;
      }
    },
    async logout() {
      try {
        await supabase.auth.signOut();
        this.user = null;
        this.isLoggedIn = false;
        createToast("Logged out successfully!", {
          showIcon: true,
          position: "top-center",
          type: "success",
          transition: "slide",
          hideProgressBar: true,
        });
      } catch (err) {
        this.error = (err as Error).message;
        createToast(this.error, {
          showIcon: true,
          position: "top-center",
          type: "danger",
          transition: "slide",
        });
      }
    },
    async fetchTodos() {
      try {
        let { data: todos, error } = await supabase
          .from("todos")
          .select("id,is_complete,task");
        if (error) {
          console.log(error);
        }
        this.todos = todos;
      } catch (err) {
        this.error = (err as Error).message;
        console.log(this.error);
      }
    },
  },
});
