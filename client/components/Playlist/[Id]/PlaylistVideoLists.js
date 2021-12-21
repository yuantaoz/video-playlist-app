import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PlaylistVideoItem from './PlaylistVideoItem';

import { reorderVideos } from '../../../actions/playlists';

const PlaylistVideoLists = ({ playlist }) => {

    const [videoList, setVideoList] = useState(playlist.videos);

    const [videoId, setVideoId] = useState("");

    useEffect(() => {
        setVideoList(videoList.filter((video) => video.video_id !== videoId));
    }, [videoId]);

    const handleOnDragEnd = async (result) => {
        const items = Array.from(videoList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setVideoList(items);

        await reorderVideos(playlist._id, items);
    }

    return (
        <div>
            <h2 className='text-4xl text-white mb-8'>
                {playlist.name}
            </h2>

            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="video">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {videoList.map((video, index) => (
                                <Draggable key={video.video_id} draggableId={video.video_id} index={index} >
                                    {(provided) => (
                                        <div className='mb-4' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <PlaylistVideoItem playlistId={playlist._id} video={video} setVideoId={setVideoId} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

        </div>
    )
}

export default PlaylistVideoLists;
