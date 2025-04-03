import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config
export default defineConfig({
  root: "src/renderer", // Define o diretório raiz do Vite
  plugins: [vue(), tailwindcss()],
  build: {
    outDir: "../../out/renderer", // Diretório de saída para produção
  },
});
