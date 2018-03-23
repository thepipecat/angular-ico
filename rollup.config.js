export default {
  input: 'lib/index.js',
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/common/http'
  ],
  output: {
    format: 'umd',
    file: 'lib/index.umd.js',
    name: 'AngularIco',
    sourcemap: true,
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
      '@angular/common/http': 'ng.common.http'
    }
  }
};
