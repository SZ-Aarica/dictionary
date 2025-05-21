import React, { useState } from "react";
function dictionary() {
  const [keyWord, setKeyWord] = useState("");
  function searching(event) {
    event.preventDefault();
    alert(keyWord);
  }
  function handleKeyWord(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={searching}>
        <input type="search" onChange={handleKeyWord} />
      </form>
    </div>
  );
}
export default dictionary;
