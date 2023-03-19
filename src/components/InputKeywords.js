import React, { useState } from 'react';

function InputKeywords(props) {
  const [inputKeywords, setInputKeywords] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(inputKeywords);
  };

  const handleChange = (e) => {
    setInputKeywords(e.target.value);
  };

  return (
    <div className="input-keywords">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter up to 5 keywords"
          value={inputKeywords}
          onChange={handleChange}
        />
        <button type="submit">Get Suggestions</button>
      </form>
    </div>
  );
}

export default InputKeywords;
