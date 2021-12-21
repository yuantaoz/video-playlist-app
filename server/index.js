import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// import router from './routes/router.js';
import videoRoutes from './routes/videos.js';
import playlistRoutes from './routes/playlists.js';


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/', videoRoutes);
app.use('/playlists', playlistRoutes);


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));