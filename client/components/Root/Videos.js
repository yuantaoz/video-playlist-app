import React from 'react';
import VideoCard from './VideoCard';
import Pagination from './Pagination';

const Videos = ({ videos, playlists }) => {

    return (
        <>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 mb-8' >
                {videos.map((video) => (
                    <VideoCard video={video} playlists={playlists} key={video.video_id} />
                ))}
            </div>
            <Pagination />
        </>
        
    )
}

export default Videos;
