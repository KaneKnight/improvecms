module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
        database: 'improve-db'
      },
      options: {
        ssl: true,
      },
    },
  },
});
