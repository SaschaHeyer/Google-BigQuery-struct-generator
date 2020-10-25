const express = require('express')

const structsRoute = require("./Routes/Structs");
const app = express()


app.use("/structs", structsRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))