import React from 'react';
import { PlaylistPage } from '../../components';
import { fetchPlaylists, getPlaylistInfo } from '../../actions/playlists';

const PlaylistVideos = ({ playlist }) => {
    return (
        <PlaylistPage playlist={playlist} />
    )
}

export async function getStaticPaths() {
    const playlists = await fetchPlaylists();

    const paths = playlists.map((playlist) => ({
        params: { 
            id: playlist._id
        },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const playlist = await getPlaylistInfo(params.id);

    return { props: { playlist }};
}

export default PlaylistVideos;
