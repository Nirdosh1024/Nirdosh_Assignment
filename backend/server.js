const app = require("./app");
const success = require("consola").success;

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    success({"message": `Server started at Port ${PORT}`, badge: true});
})