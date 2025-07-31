import express from 'express';
import NotesRouter from "./NotesRoute/NotesRoute.js";
import { connectionDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


// Middleware
app.use(express.json()); // parses json body

app.use(cors({
  origin: "http://localhost:5173",
}));

// ratelimiter
app.use(rateLimiter);

/*custom middleware 
app.use((req, res, next) =>{
  console.log(`Req method is : ${req.method} & Req URL is : ${req.url}`);
  next();
});
*/

// Routes
app.use("/api/notes", NotesRouter);

// Connect to MongoDB
connectionDB().then(() => {
// Start server only is connected
app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
});
});


/*
Since the following can content may lines of code we create diff file for handling requests
app.post('/api/notes', (req, res) => {
  res.status(201).json({message:"Note created sucessfully"});
});

app.post('/api/notes', (req, res) => {
  res.status(201).json({message:"Note created sucessfully"});
});

app.put('/api/notes/:id', (req, res) => {
  res.status(200).json({message:"Note updated sucessfully"});
});

app.delete('/api/notes/:id', (req, res) => {
  res.status(200).json({message:"Note deleted sucessfully"});
});

*/

