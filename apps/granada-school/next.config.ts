import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  poweredByHeader: false,
  transpilePackages: ['@granada/ui'],
  outputFileTracingRoot: path.join(__dirname, '../../'),
};

export default nextConfig;
