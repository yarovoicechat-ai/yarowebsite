import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/app-release.apk',
        destination: 'https://github.com/bajpeyigroupdev/management_Panel/raw/main/public/releases/MeethiChat-v1.8.3.apk',
        permanent: false,
      },
      {
        source: '/api/v1/app-releases/download',
        destination: 'https://github.com/bajpeyigroupdev/management_Panel/raw/main/public/releases/MeethiChat-v1.8.3.apk',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
