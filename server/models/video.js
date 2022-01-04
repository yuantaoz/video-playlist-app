import mongoose from 'mongoose';
import { videoSchema } from './videoSchema.js';

export default mongoose.model('Video', videoSchema);