const server = require("./src/server");
const dbCon = require('./src/config/dbCon');

dbCon().then(
    (res) => {
        
        server.listen(3000, () => {
            console.log("Server listening on port 3000");
        });
        
    }
)