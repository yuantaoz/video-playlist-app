import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getVideosOnPage, searchVideos } from '../../actions/videos';

const SearchBar = ({ setVideosList }) => {

    const { asPath } = useRouter();
    const pathArrays = asPath.split("/");
    const page = !pathArrays[2] ? "1" : pathArrays[2];

    const [input, setInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (input) {
            const videos = await searchVideos(page, String(input));

            setVideosList(videos);
        } else {
            const videos = await getVideosOnPage(page);

            setVideosList(videos);
        }
    }

    return (
        <div className='relative flex bg-white shadow-lg rounded-lg h-24 p-8'>
            <input 
                id="query"
                type='text'
                placeholder="Search"
                className='border rounded-sm w-full px-1'
                onInput={(e) => setInput(e.target.value)}
            />
            <button className="absolute top-10 right-10" onClick={handleSubmit} >
                <SearchButton />
            </button>
        </div>
    );
}

const SearchButton = (() => {
    return (
        <svg className="text-gray-600 h-4 w-4 fill-current" 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.966 56.966" 
            width="512px" 
            height="512px"
        >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
    );
});


export default SearchBar;