import mongoose from 'mongoose';

export const videoSchema = mongoose.Schema({
    video_id: { type: String, required: true },
    title: { type: String },
    views: { type: Number },
    thumbnail_url: { type: String },
    description: { type: String },
    page: { type: Number },
});