/* Determin the environment */
if (process.env.NODE_ENV === "production") {
    /* return the production keys */
    module.exports = require("./keys.prod");
} else {
    /* return the dev keys */
    module.exports = require("./keys.dev");
}
