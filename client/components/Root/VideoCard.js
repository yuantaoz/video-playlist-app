import React from 'react';
import Link from 'next/link';
import PopoverMenu from './PopoverMenu';
import { YOUTUBE_BASE_URL } from '../../config';


const VideoCard = ({ video, playlists }) => {

    return (
        <div className='bg-white shadow-lg rounded-lg p-4 sm:p-2 pb-8 sm:p-4'>
            <div className='container relative mb-2'>
                <img 
                    src={video.thumbnail_url}
                    alt={video.title}
                    className='object-cover w-full rounded-md' 
                />
                <a
                    className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                    href={`${YOUTUBE_BASE_URL}/${video.video_id}`}
                >
                    <PlayButton />
                </a>
            </div>
            <div className='grid grid-cols-7'>
                <div className='col-span-6'>
                    <Link href={`${YOUTUBE_BASE_URL}/${video.video_id}`} >
                        <h2 
                            className='transition duration-100 cursor-pointer hover:text-purple-700
                                        line-clamp-2 text-md font-sans font-semibold mb-1'
                        >
                            {video.title}
                        </h2>
                    </Link>
                </div>
                <div className='col-span-1 flex items-center justify-center'>
                    <PopoverMenu video={video} playlists={playlists} />
                </div>
            </div>
            <p className="font-light text-xs mb-2">
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
    );
}

const PlayButton = (() => {
    return (
        <svg 
            stroke="#A78BFA"
            fill="#EDE9FE" 
            strokeWidth="0" 
            viewBox="0 0 512 512" 
            className="h-20 w-20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path className="opacity-40 hover:opacity-60" strokeMiterlimit="10" strokeWidth="0" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" />
            <path fill="#EDE9FE" d="M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z" />
        </svg>
    );
});


export default VideoCard;
