export const compilerOptions = () => ({
  moduleResolution: 'node',
  target: 'es2015',
  baseUrl: '.',
  experimentalDecorators: true,
  paths: {
    '@ngrx/store': ['./modules/store'],
  },
});
