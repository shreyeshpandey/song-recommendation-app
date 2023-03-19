import React, { useState } from 'react';

import './SongForm.css';

const SongForm = (props) => {
  const [songName, setSongName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [keywords, setKeywords] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const newSong = {
      id: Math.random().toString(),
      songName: songName,
      artistName: artistName,
      songUrl: songUrl,
    };
    props.onAddSong(newSong);
    setSongName('');
    setArtistName('');
    setSongUrl('');
    setKeywords('');
  };

  const keywordChangeHandler = (event) => {
    setKeywords(event.target.value);
  };

  const songNameChangeHandler = (event) => {
    setSongName(event.target.value);
  };

  const artistNameChangeHandler = (event) => {
    setArtistName(event.target.value);
  };

  const songUrlChangeHandler = (event) => {
    setSongUrl(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Song Name</label>
        <input type="text" value={songName} onChange={songNameChangeHandler} />
      </div>
      <div className="form-control">
        <label>Artist Name</label>
        <input type="text" value={artistName} onChange={artistNameChangeHandler} />
      </div>
      <div className="form-control">
        <label>Song URL</label>
        <input type="text" value={songUrl} onChange={songUrlChangeHandler} />
      </div>
      <div className="form-control">
        <label>Keywords</label>
        <input type="text" value={keywords} onChange={keywordChangeHandler} />
      </div>
      <button type="submit" disabled={props.isLoading}>
        {props.isLoading ? 'Loading...' : 'Add Song'}
      </button>
    </form>
  );
};

export default SongForm;
