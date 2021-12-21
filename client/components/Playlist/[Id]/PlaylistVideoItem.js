import React from 'react';
import Link from 'next/link';

import { YOUTUBE_BASE_URL } from '../../../config';
import { removeVideo } from '../../../actions/playlists';


const PlaylistVideoItem = ({ playlistId, video, setVideoId }) => {

    const handleRemove = async (e) => {
        e.preventDefault();

        setVideoId(video.video_id);

        await removeVideo(playlistId, video.video_id);
    }

    return (
        <div className='flex bg-white shadow-lg rounded-lg'>
            <div className='flex-none flex items-center'>
                <ReorderIcon />
            </div>
            <div className='grid grid-cols-12 py-2'>
                <div className='col-span-2 md:col-span-2 flex items-center justify-center relative'>
                    <img 
                        src={video.thumbnail_url} 
                        alt={video.title} 
                        className='object-cover rounded-md cursor-pointer'
                    />
                </div>
                <div className='col-span-9 md:col-span-9 px-4 py-2'>
                    <Link href={`${YOUTUBE_BASE_URL}/${video.video_id}`} >
                        <h2 
                            className='transition duration-100 cursor-pointer hover:text-purple-700
                                    line-clamp-2 text-md font-sans font-semibold mb-1'
                        >
                            {video.title}
                        </h2>
                    </Link>
                    <p className="font-light text-xs mb-1">
                        {video.views ? video.views.toLocaleString() : "0"} views
                    </p>
                    <Link href={`${YOUTUBE_BASE_URL}/${video.video_id}`}>
                        <p className="transition duration-100 cursor-pointer hover:text-purple-700
                                    line-clamp-3 text-sm font-sans mb-2"
                        >
                            {video.description}
                        </p>
                    </Link>
                </div>
                <div className='col-span-1 flex items-center justify-center relative'>
                    <DeleteButton 
                        className="w-5 h-5 mr-2 text-violet-400" 
                        aria-hidden="true" 
                        onClick={handleRemove}
                    />
                </div>
            </div>
        </div>
    );
}

const ReorderIcon = (() => {
    return (
        <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16" />
        </svg>
    );
});

const DeleteButton = ((props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="5" y="6" width="10" height="10" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
      )
});

export default PlaylistVideoItem;
