//import app from "./App";
const app = express();
const express = require("express");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

/*
app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
const port = process.env.PORT || 5000;
app.listen(port);



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

*/