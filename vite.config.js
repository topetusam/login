import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "https://ealexandergarcia.github.io/login/", // Git page
  root: 'client',
  server: {
    port: 3000,
  },
});
