import React from 'react';

import './SongList.css';

function SongList(props) {
  return (
    <div className='song-list'>
      <h2 className='song-list-header'>My Songs</h2>
      <ul>
        {props.songs.map((song, index) => (
          <li key={index}>
            <span className='song-title'>{song.title}</span> by{' '}
            <span className='song-artist'>{song.artist}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
