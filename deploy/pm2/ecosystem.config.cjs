module.exports = {
  apps: [
    {
      name: 'alterera-api',
      script: 'dist/main.js',
      cwd: '/var/www/api.alterera.net',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
      },
      env_file: '/var/www/api.alterera.net/.env',
    },
  ],
};
