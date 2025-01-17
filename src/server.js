const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
      port: 5674,
      host: '0.0.0.0',
      routes: {
          cors: {
            origin: ['*'],
          },
      },
  });

    // Daftarkan semua routes
    server.route(routes);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();
