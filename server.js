require("dotenv").config();
const express = require('express');
const { listenerCount } = require('process');
// module.exports 
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const port = 8080;




app.listen(port);


