

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',  // Allow connections from any device on the local network
    port: 3000,        // Optional: specify the port, default is 3000
  },
});
