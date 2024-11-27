const db = require('./firestore');

// Handler untuk mendapatkan semua destinasi wisata
const getAllDestinations = async (request, h) => {
    try {
        const snapshot = await db.collection('destinations').get();
        const destinations = snapshot.docs.map(doc => doc.data());
        return { destinations };
    } catch (err) {
        console.error(err);
        return h.response({ error: 'Failed to fetch destinations' }).code(500);
    }
};

// Handler untuk mendapatkan destinasi berdasarkan ID
const getDestinationById = async (request, h) => {
    const { id } = request.params;
    try {
        const doc = await db.collection('destinations').doc(id).get();
        if (!doc.exists) {
            return h.response({ error: 'Destination not found' }).code(404);
        }
        return { destination: doc.data() };
    } catch (err) {
        console.error(err);
        return h.response({ error: 'Failed to fetch destination details' }).code(500);
    }
};

// Handler untuk mendapatkan destinasi berdasarkan kategori
const getDestinationsByCategory = async (request, h) => {
    const { category } = request.params;
    try {
        const snapshot = await db.collection('destinations')
            .where('Category', '==', category)
            .get();
        const destinations = snapshot.docs.map(doc => doc.data());
        return { destinations };
    } catch (err) {
        console.error(err);
        return h.response({ error: 'Failed to fetch destinations by category' }).code(500);
    }
};

module.exports = {
    getAllDestinations,
    getDestinationById,
    getDestinationsByCategory,
};
