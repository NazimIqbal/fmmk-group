// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@fortawesome': '/node_modules/@fortawesome',
//       '@coreui/react': '/node_modules/@coreui/react',
//     },
//   },
//   build: {
//     outDir: 'dist'
//   }
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@fortawesome': '/node_modules/@fortawesome',
//       '@coreui/react': '/node_modules/@coreui/react',
//     },
//   },
//   build: {
//     rollupOptions: {
//       external: ['bootstrap'],
//     },
//     outDir: 'dist',
//   },
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: []
    }
  }
});

