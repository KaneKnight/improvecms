module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'http://localhost'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '293f76311d2747966964f89f9cdcedc2'),
    },
  },
});
