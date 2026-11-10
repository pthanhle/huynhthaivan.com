module.exports = {
  apps: [
    {
      name: 'huynhthaivan.com-portfolio-2026',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3005',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3005,
        NEXT_PUBLIC_SITE_URL: 'https://huynhthaivan.com',
      },
    },
  ],
};
