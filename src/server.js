//import app from "./App";
const app = express();
const path = require("path")

app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
const port = process.env.PORT || 5000;
app.listen(port);


const express = require("express");

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin:task4@task4.flmjrnj.mongodb.com/?retryWrites=true&w=majority";
app.use(express.static("public"));
app.get("/api/movie", async function (req, res) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db('users');
    const collection = database.collection('users');
    const query = { status: { $exists: true } };
    const cursor = await collection.aggregate([
      { $match: query },
      { $sample: { size: 1 } },
      { $project:
          {
            title: 1
            //fullplot: 1,
            //poster: 1
          }
      }
    ]);
    const movie = await cursor.next();
    return res.json(movie);
  }
  catch(err) {
    console.log(err);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

// start the server listening for requests
app.listen(process.env.PORT || 8000,
  () => console.log("Server is running..."));