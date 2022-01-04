import mongoose from 'mongoose';
import { videoSchema } from './videoSchema.js';

const playlistSchema = mongoose.Schema({
    name: {
        type: String,
    },
    created_at: { 
        type: Date, 
        default: new Date() 
    },
    videos: {
        type: [ videoSchema ],
        id: Number
    },
});

export default mongoose.model('Playlist', playlistSchema);