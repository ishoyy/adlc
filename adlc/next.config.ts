// Source - https://stackoverflow.com/a/79844648
// Posted by ashisdutta, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-30, License - CC BY-SA 4.0

import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    // We set the root to the directory where next.config.ts is located (__dirname)
    root: path.join(__dirname),
  },
}
export default nextConfig;
