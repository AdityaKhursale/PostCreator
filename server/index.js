const express = require('express')
const app = express();
app.use(express.json());

const db = require('./models');
const port = 3001;

// Routers
const postRouter = require("./routes/posts")
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Server is running on port", port);
    });    
});
 
