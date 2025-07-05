import React, { useState } from 'react';

const AddElem = ({ onAdd }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSave = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    onAdd(trimmed); // przekazanie zadania do rodzica
    setInputValue('');
    setIsAdding(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
  };

  return (
    <div className="mt-2 space-x-2">
      {!isAdding && (
        <button
          onClick={() => setIsAdding(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      )}

      {isAdding && (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border px-2 py-1 rounded"
            placeholder="Wpisz zadanie"
            autoFocus
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition"
          >
            Save
          </button>
        </>
      )}
    </div>
  );
};

export default AddElem;
