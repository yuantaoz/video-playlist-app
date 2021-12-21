import React from 'react';
import { HomePage } from '../../components';
import { pageNumbers } from '../../config';

import { getVideosOnPage } from '../../actions/videos';
import { fetchPlaylists } from '../../actions/playlists';

const PlaylistVideos = ({ videos, playlists }) => {
    return (
        <HomePage videos={videos} playlists={playlists} />
    )
}

export async function getStaticPaths() {

    const paths = pageNumbers.map((pageNumber) => ({
        params: { 
            page: pageNumber.toString()
        },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

    const videos = (await getVideosOnPage(params.page)) || [];

    const playlists = (await fetchPlaylists()) || [];

    return { props: { videos, playlists }};
}

export default PlaylistVideos;
