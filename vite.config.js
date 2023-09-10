export default {
  // Other configuration options...
  build: {
    rollupOptions: {
      // Add the JSX loader configuration
      jsx: {
        factory: 'React.createElement',
        pragma: 'React',
        fragment: 'React.Fragment',
        // ...
      },
    },
  },
};