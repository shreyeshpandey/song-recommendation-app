import React from 'react';

function OutputSongs(props) {
  const { songs, keywords } = props;

  return (
    <div className="output-songs">
      <h2>Songs Suggestions for: {keywords}</h2>
      <div className="song-list">
        {songs.map((song, index) => (
          <div className="song" key={index}>
            <h3>{song.title}</h3>
            <p>Artist: {song.artist}</p>
            <p>Genre: {song.genre}</p>
            <p>Released: {song.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OutputSongs;
