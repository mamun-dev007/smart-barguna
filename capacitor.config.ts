import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Smart Barguna',
  webDir: 'apps/mobile/dist',
  plugins: {
    SystemBars: {
      style: 'DARK',
      hidden: false,
      insetsHandling: 'css',
      initialViewportFitValueHint: 'cover',
    },
    Keyboard: {
      resizeOnFullScreen: false,
    },
  },
};

export default config;
