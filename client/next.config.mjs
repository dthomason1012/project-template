/** @type {import('next').NextConfig} */
import { config } from 'dotenv';
const { parsed: myEnv } = config({ path: '../.env' });
const nextConfig = {
  env: myEnv,
};

export default nextConfig;
