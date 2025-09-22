// import type { NextConfig } from "next";
// import path from "node:path";

// const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

// const nextConfig: NextConfig = {
//   turbopack: {
//     rules: {
//       "*.{jsx,tsx}": {
//         loaders: [LOADER]
//       }
//     }
//   }
// };

// export default nextConfig;
// // Orchids restart: 1758266372805
import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER],
      },
    },
  },
  images: {
    domains: ["picsum.photos"], // ← allow external images from Picsum
  },
};

export default nextConfig;
