import React, { useRef, useState } from "react";
import axios from "axios";
import Result from "./Result";
function dictionary() {
  const [keyWord, setKeyWord] = useState("");
  const [defenition, setDefenition] = useState(null);
  const ShowWord = useRef(null);

  function searching(event) {
    ShowWord.current = keyWord;
    function handleResponse(response) {
      setDefenition(response.data);
    }
    event.preventDefault();

    if (keyWord.trim() !== "") {
      const apiKey = "c1f9c61a43fbf0460to00d7010dfa109";
      const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
    } else {
      setDefinition(null);
    }
  }
  function handleKeyWord(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={searching}>
        <input
          type="search"
          onChange={handleKeyWord}
          placeholder="search for a word"
        />
      </form>

      <Result defenition={defenition} keyWord={ShowWord.current} />
      <footer className="text-center">coded by Saba Zahedi</footer>
    </div>
  );
}
export default dictionary;
