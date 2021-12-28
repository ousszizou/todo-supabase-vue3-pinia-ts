import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "mosha-vue-toastify/dist/style.css";

createApp(App)
  .use(router)
  .use(createPinia())
  .directive("todo-focus", (el, binding) => {
    if (binding.value) {
      el.focus();
    }
  })
  .mount("#app");
