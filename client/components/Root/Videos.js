import React from 'react';
import VideoCard from './VideoCard';

const Videos = ({ videos, playlists }) => {

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4'>
            {videos.map((video) => (
                <VideoCard video={video} playlists={playlists} key={video.video_id} />
            ))}
        </div>
    )
}

export default Videos;
