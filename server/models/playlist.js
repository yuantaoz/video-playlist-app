import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
    video_id: { type: String, required: true },
    title: { type: String },
    views: { type: Number },
    thumbnail_url: { type: String },
    description: { type: String },
});

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