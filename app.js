const express = require("express");
const fileupload = require("express-fileupload");
const mongoose = require("mongoose");

//calling router
const CURDrouter = require("./routers/CURDudemyRouter");

const app = express();

app.use(express.json());
// file upload
app.use(fileupload());
app.use("/", CURDrouter);

//db connection URl
const db_URL =
  "mongodb+srv://bugg:bugg@cluster0.aivwf.mongodb.net/test?retryWrites=true&w=majority";

// make asyn function to connect BD and server
const Dbconnection = async () => {
  try {
    await mongoose.connect(db_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db conected");
  } catch (error) {
    console.log(error);
  }
};
Dbconnection();

const PORT = 5000;
app.listen(PORT, console.log(`port run on ${PORT}`));
