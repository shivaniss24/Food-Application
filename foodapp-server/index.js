const express=require('express');
const app=express();
const cors=require("cors");
const PORT = process.env.PORT || 3001;
require('dotenv').config();
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);



// username- engshivanisoni2405
// password-tjZcJK3VUVlPHmLR


// middleware for interaction
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://shivanisoni:Shivanipassword1@shivani.bvehk.mongodb.net/?retryWrites=true&w=majority&appName=shivani";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    // useUnifiedTopology:true,
    // useNewUrlParser: true,
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

 // database and collections
 const menuCollections = client.db("Database-Food").collection("menu");
 const cartCollections = client.db("Database-Food").collection("cartItems");


  // all menu items 
  app.use("/menu",async(req,res)=>{
   console.log("reached to menu route");
   const result= await menuCollections.find().toArray();
   res.send(result);
   // const database = client.db("sample_mflix");
   // const movies = database.collection("movies");
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
    // await client.connect();
  }
}
run().catch(console.dir);


app.get("/",(req,res)=>{
  res.send("hello world");
})


// log all registered routes
console.log("Registered Routes:",app._router.stack);

app.listen(PORT,()=>{
  console.log(`App started on port: ${PORT}`)
})













