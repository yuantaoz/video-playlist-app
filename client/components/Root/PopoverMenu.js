import React, { useState, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Message from './Message';
import { VIDEO_ALREADY_EXISTS } from '../../config';
import { addVideo } from '../../actions/playlists';


// Reference: HeadlessUI docs


const PopoverMenu = ({ video, playlists }) => {

    const [videoExists, setVideoExists] = useState(false);

    const handleAdd = async (id) => {

        const data = await addVideo(id, video);

        if (data === VIDEO_ALREADY_EXISTS) {
            setVideoExists(true);
        }
    }

    return (
        <Popover className="relative">
            <Popover.Button>
                <AddButton />
            </Popover.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel static className="absolute z-10 w-max max-w-sm px-2 transform -translate-x-1/2 left-1/2 sm:px-0">
                    {({ close }) => (
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className='bg-gray-50 px-4 py-2'>
                                <span className="text-sm font-medium text-gray-900">
                                    Add To Playlist
                                </span>
                            </div>
                            <div className="relative bg-white gap-4 px-2 pt-1 pb-2">
                                {playlists.map((item) => (
                                    <a
                                        key={item._id}
                                        onClick={() => { handleAdd(item._id); close(); }}
                                        className="flex items-center rounded-lg p-2 w-full
                                                transition duration-150 ease-in-out cursor-pointer hover:bg-gray-50 
                                                focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                        <p className="text-sm font-medium text-gray-900">
                                            {item.name}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </Popover.Panel>
            </Transition>

            {videoExists && (
                <Message setVideoExists={setVideoExists} />
            )}

        </Popover>
    )
}

const AddButton = (() => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none"
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
});

export default PopoverMenu;
