import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


// https://vitejs.dev/config
export default defineConfig({
    root: 'src/renderer',  // Define o diretório raiz do Vite
    plugins: [vue()],
    build: {
      outDir: '../../out/renderer', // Diretório de saída para produção
    }
});
