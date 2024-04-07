import express,{Express, Request, Response} from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb'
import CookieParser from 'cookie-parser';
import config from './config';
import cors from 'cors';
import router from './app/routes';

const app: Express = express();
const port = process.env.PORT || 3000;

// hq3tc2xMOanMr8eP

const uri = "mongodb+srv://kadiksalah03:hq3tc2xMOanMr8eP@user.ggmd0qn.mongodb.net/?retryWrites=true&w=majority&appName=user";

app.use(cors())
app.use(CookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
app.use('/api/v1', router)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});