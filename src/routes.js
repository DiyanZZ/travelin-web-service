const handlers = require('./handler');

const routes = [
    // Route untuk mendapatkan semua destinasi wisata
    {
        method: 'GET',
        path: '/destinations',
        handler: handlers.getAllDestinations,
    },
    // Route untuk mendapatkan destinasi berdasarkan ID
    {
        method: 'GET',
        path: '/destinations/{id}',
        handler: handlers.getDestinationById,
    },
    // Route untuk mendapatkan destinasi berdasarkan kategori
    {
        method: 'GET',
        path: '/categories/{category}',
        handler: handlers.getDestinationsByCategory,
    },
];

module.exports = routes;
