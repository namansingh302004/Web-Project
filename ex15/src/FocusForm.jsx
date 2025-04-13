import React, { useRef } from "react";

const FocusForm = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-6 max-w-sm mx-auto border rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Focus Input Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        className="border px-3 py-2 rounded w-full mb-4"
      />
      <button
        onClick={handleFocus}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Focus the Input
      </button>
    </div>
  );
};

export default FocusForm;
