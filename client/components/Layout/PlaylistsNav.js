import React, { useState } from 'react';
import Link from 'next/link';
import { createPlaylist } from '../../actions/playlists';


const PlaylistsNav = ({ playlists, setPlaylists }) => {

    // const [playlists, setPlaylists] = useState(props.playlists);

    const [inputOpen, setInputOpen] = useState(false);

    const handleCreate = (e) => {
        e.preventDefault();

        setInputOpen(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        if (name) {
            const { data } = await createPlaylist(name);

            setPlaylists([...playlists, data]);
        }

        setInputOpen(false);
    }

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8' >
            <h2 className='text-center text-lg font-semibold border-b pb-4'>
                Playlists
            </h2>
            <div className='relative py-4' >
                {playlists.map((playlist) => (
                    <Link href={`/playlist/${playlist._id}`} key={playlist._id} >
                        <span 
                            className="bg-gray-100 rounded block p-1 h-8
                                    transition duration-500 cursor-pointer hover:text-lg hover:text-purple-700
                                    text-md mb-2"
                        >
                            {playlist.name}
                        </span>
                    </Link>
                ))}
            </div>
            {!inputOpen ? (
                <button
                    className='bg-green-500 rounded-lg justify-center w-full 
                            transition duration-500 transform cursor-pointer hover:-translate-y-1
                            text-lg text-white text-center px-6 py-2'
                    onClick={handleCreate}
                >
                    Create Playlist
                </button>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input 
                        id="name"
                        type='text'
                        placeholder="Name"
                        className='border w-full px-1 mb-2'  
                    />
                    <div className='flex justify-center space-x-4 px-4'>
                        <button 
                            type='submit'
                            className='text-purple-500 rounded-lg hover:text-purple-700 px-2' 
                        >
                            Create
                        </button>
                        <button 
                            onClick={() => setInputOpen(false)}
                            className='text-gray-400 rounded-lg hover:text-gray-400 px-2' 
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default PlaylistsNav;
