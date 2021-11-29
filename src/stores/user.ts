import { User } from "@supabase/supabase-js";
import { defineStore } from "pinia";
import { Credentials } from "../types/global";
import { supabase } from "../utils/supabase";
import { createToast } from "mosha-vue-toastify";

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => {
    return {
      user: null,
      isLoggedIn: false,
      isLoading: false,
      error: null,
    };
  },
  getters: {
    getIsLoggedIn: (state) => state.isLoggedIn,
    getIsLoading: (state) => state.isLoading,
    getUser: (state) => state.user,
    getError: (state) => state.error,
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
  },
});
