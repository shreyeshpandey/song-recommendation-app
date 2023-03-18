import React, { useState } from 'react';
import Header from './components/Header';
import InputKeywords from './components/InputKeywords';
import OutputSongs from './components/OutputSongs';

function App() {
  const [keywords, setKeywords] = useState([]);
  const [songs, setSongs] = useState([]);

  const handleKeywordsSubmit = (inputKeywords) => {
    setKeywords(inputKeywords);
    fetch(`/suggestions?keywords=${inputKeywords}`)
      .then(res => res.json())
      .then(data => setSongs(data));
  };

  return (
    <div className="app">
      <Header />
      <InputKeywords onSubmit={handleKeywordsSubmit} />
      {songs.length > 0 &&
        <OutputSongs songs={songs} keywords={keywords} />
      }
    </div>
  );
}

export default App;
