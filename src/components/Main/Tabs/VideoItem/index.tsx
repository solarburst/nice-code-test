import React from 'react'
import { IVideo } from '../../../../mock/mock';

interface IVideoItem {
    video: IVideo;
}

const VideoItem = ({ video }: IVideoItem) => {
  return (
    <div className="video">
        <img src={video.photo} alt="Фотография" />
        <div className="video__info">
            <p className="video__info-name">{video.name}</p>
            <p className="video__info-author">{video.author}
                <span className="video__info-date">{video.date}</span>
            </p>
        </div>
    </div>
  )
}

export default VideoItem;
