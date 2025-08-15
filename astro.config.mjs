// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-astro': ['astro'],
            'vendor-utils': ['astro-font'],
          },
        },
      },
      minify: 'terser', // Terser para melhor minificação
      terserOptions: {
        compress: {
          drop_console: true,        // Remove console.log
          drop_debugger: true,       // Remove debugger
          pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
          passes: 2,                 // Múltiplas passadas para melhor otimização
          unsafe: true,              // Otimizações mais agressivas
          unsafe_comps: true,        // Comparações otimizadas
          unsafe_Function: true,     // Funções otimizadas
          unsafe_math: true,         // Matemática otimizada
          unsafe_proto: true,        // Protótipos otimizados
        },
        mangle: {
          toplevel: true,            // Mangle de nível superior
          safari10: true,            // Compatibilidade Safari
        },
        format: {
          comments: false,           // Remove comentários
        },
      },
      // Otimização de assets
      assetsInlineLimit: 4096, // 4KB
      chunkSizeWarningLimit: 1000,
    },
    css: {
      devSourcemap: false,
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
      exclude: ['astro-font'],
    },
    // Otimização de imagens
    assetsInclude: ['**/*.webp', '**/*.svg', '**/*.png', '**/*.jpg'],
  },

  // Otimizações de build
  build: {
    inlineStylesheets: 'auto',
  },

  // Otimizações de output
  output: 'static',
  trailingSlash: 'never',

  // Configurações de imagem
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    // Qualidade das imagens
    quality: 80,
    // Formatos suportados
    formats: ['webp', 'avif'],
    // Dimensões padrão
    widths: [400, 800, 1200],
    // Densidade de pixels
    densities: [1, 2],
  },

  // Configurações de servidor para resolver encoding
  server: {
    port: 4321,
    host: true,
  },
});
