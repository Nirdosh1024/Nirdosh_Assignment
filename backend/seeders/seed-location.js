module.exports = {
    up: async (queryInterface) => {
    try {
        const locationId = 1;
        await queryInterface.bulkInsert(
        "Locations",
        [
            {
                id: locationId,
                name: "Shree Retina Eye Care",
                address: "main road, Sector 1, Shankar Nagar, Raipur, Chhattisgarh 492007",
                latitude: "21.250809372167485",
                longitude: "81.6629225373324",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        {}
    );

    } catch (err) {
            console.error("Error in seeding: ", err);
        }
    },
    down: (queryInterface) => {
        const deleteLocation = queryInterface.bulkDelete(
            "Locations",
        null,
        {}
    );

    return Promise.all([
        deleteLocation
    ]);
},
};