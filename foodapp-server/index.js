const express =require ('express');
var cors = require('cors')
const app=express();
const PORT=process.env.PORT || 3000;


// username: engshivanisoni2405
// password: dTYiQfDfjYOKPono

// middle ware for interaction cors
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world!");
})



app.listen(PORT,()=>{
    console.log(`App started on port: ${PORT}`)
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://engshivanisoni2405:dTYiQfDfjYOKPono@cluster0.lex8v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
