import React from 'react';
import Videos from './Videos';
import PlaylistsNav from '../Layout/PlaylistsNav';

const HomePage = ({ videos, playlists }) => {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 gap-12'>
                <div className='lg:col-span-9 md:col-span-9 col-span-1'>
                    <Videos videos={videos} playlists={playlists} />
                </div>
                <div className='lg:col-span-3 md:col-span-3 sm:col-span-1'>
                    <PlaylistsNav playlists={playlists} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;
