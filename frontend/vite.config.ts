import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Configuration Vite pour l'application PWA
// Documentation : https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",

      pwaAssets: {
        disabled: false,
        config: "auto",
      },

      manifest: {
        name: "appli-mobile",
        short_name: "appli-mobile",
        description: "appli-mobile",
        theme_color: "#E41513",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico,ttf}"],
        runtimeCaching: [
          {
            urlPattern: /^http:\/\/localhost:3000\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 300,
              },
              networkTimeoutSeconds: 5,
            },
          }
        ]
      },

      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});
