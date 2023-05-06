const express = require('express');
const cors = require('cors')

const PORT = 5000;
let Validator = require('validatorjs');
const app = express();


app.use(express.json());
app.use(cors());




app.get("/",(req,res) => {
    res.json({
        message:"welcome to this server"
    });
});







app.listen(PORT, () => {
    console.log(`Server is running on 5000`)
  });