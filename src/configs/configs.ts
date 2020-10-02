export const configs = {
  PORT: process.env.PORT || 5000,
  HOST: process.env.PORT || 'http://localhost',

  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:4200;http://localhost:3000',

  serverRateLimits: {
    period: 15 * 60 * 1000, // 15 minutes
    maxRequests: 10000
  },
  DB_NAME: process.env.DB_NAME || 'bike_stolen',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASS: process.env.DB_PASS || '119256',
  DB_HOST: process.env.DB_HOST || 'localhost',

  ROOT_EMAIL_SERVICE: process.env.ROOT_EMAIL_SERVICE || 'gmail',
  ROOT_EMAIL: process.env.ROOT_EMAIL || 'EMAIL',
  ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || 'PASSWORD'
};

