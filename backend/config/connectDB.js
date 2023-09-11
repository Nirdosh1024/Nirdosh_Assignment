const sequelize = require("./sequelize");
const { success, error } = require("consola");

(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        success({ "message": 'Connection has been established successfully.', badge: true });
    } catch (err) {
        error({ "message": `Unable to connect to the database: ${err} `, badge: true });
    }
})();