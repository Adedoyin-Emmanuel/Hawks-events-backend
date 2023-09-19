const express = require("express");
// const { PORT, } = require("./src/config/constants");
const app = express();
const userModel = require("./src/models/user");

// app.use(cors());
// these already do the work of bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(errorHandler);
// app.use(notFound);

const start = async () => {
  // bring in the database

  app.get("/", async (req, res) => {
    // example of creating a user
    try {
      let user = await userModel.create({
        name: "doe",
        email: "examplemail@gmail.com",
      });
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  });
  const server = app.listen(5000, () => {
    console.log(`App started at port: 5000`);
  });
};

start();
process.on("unhandledRejection", (err) => {
  server.close(() => process.exit(1));
});
