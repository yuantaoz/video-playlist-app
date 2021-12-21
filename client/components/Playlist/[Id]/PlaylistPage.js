import React from 'react';
import PlaylistVideoLists from './PlaylistVideoLists';

const PlaylistPage = ({ playlist }) => {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 gap-12'>
                <div className='lg:col-span-9 md:col-span-9 col-span-1'>
                    <PlaylistVideoLists playlist={playlist} />
                </div>
                {/* TODO: add component here */}
            </div>
        </div>
    );
}

export default PlaylistPage;
