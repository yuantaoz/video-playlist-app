import React from 'react';
import { PlaylistPage } from '../../components';
import { fetchPlaylists, getPlaylistInfo } from '../../actions/playlists';

const PlaylistVideos = ({ playlist }) => {
    return (
        <PlaylistPage playlist={playlist} />
    )
}

export async function getServerSideProps({ params }) {

    const playlist = await getPlaylistInfo(params.id);

    return { props: { playlist }};
}

export default PlaylistVideos;
