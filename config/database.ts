// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: { 
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      schema: env('DATABASE_SCHEMA'),
      ssl:env.bool("DATABASE_SSL",true) // Not required
      /*ssl: { //This code generate a error -> The server does not support SSL connections
        //  rejectUnauthorized: env.bool('DATABASE_SSL_SELF', true),
      },*/
    },
  },
});