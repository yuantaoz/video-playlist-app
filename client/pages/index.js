import { HomePage } from '../components/';

import { getVideos } from '../actions/videos';
import { fetchPlaylists } from '../actions/playlists';


export default function Home({ videos, playlists }) {
  return (
    <HomePage videos={videos} playlists={playlists} />
  )
}

export async function getStaticProps() {
  const videos = (await getVideos()) || [];

  const playlists = (await fetchPlaylists()) || [];

  return {
    props: { videos, playlists }
  }
}