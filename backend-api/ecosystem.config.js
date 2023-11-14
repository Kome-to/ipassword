module.exports = {
  apps: [
    {
      name: 'dan-education-production',
      script: 'dist/src/index.js',
      instances: 'max',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      output: '/dev/null',
      error: '/dev/null',
    },
  ],
};
