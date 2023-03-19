import React, { useState } from 'react';
import Header from './components/Header/Header';
import SongForm from './components/SongForm/SongForm';
import SongList from './components/SongList/SongList';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [suggestedSongs, setSuggestedSongs] = useState([]);

  const addSongHandler = (newSong) => {
    setSongs((prevSongs) => [...prevSongs, newSong]);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const submitHandler = async (keywords) => {
    setIsLoading(true);
    setError(null);
    setSuggestedSongs([]);

    try {
      const response = await fetch(`https://api.openai.com/v1/engines/davinci-codex/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          prompt: `suggest me 3 songs based on these keywords: ${keywords}`,
          max_tokens: 60,
          n: 1,
          stop: '.'
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSuggestedSongs(data.choices[0].text.trim().split('\n'));
        setShowModal(true);
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <SongForm onAddSong={addSongHandler} onSubmit={submitHandler} isLoading={isLoading} />
        {error && <p className='error-message'>{error}</p>}
        {songs.length > 0 && <SongList songs={songs} />}
        {showModal && (
          <Modal onClose={closeModalHandler}>
            <h2 className='modal-header'>Suggested Songs</h2>
            {suggestedSongs.map((song, index) => (
              <p key={index} className='modal-song'>{song}</p>
            ))}
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
