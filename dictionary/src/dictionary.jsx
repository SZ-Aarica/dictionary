import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
function dictionary() {
  const [keyWord, setKeyWord] = useState("");
  const [defenition, setDefenition] = useState(null);
  function searching(event) {
    function handleResponse(response) {
      setDefenition(response.data);
    }
    event.preventDefault();
    alert(keyWord);
    let key = "c1f9c61a43fbf0460to00d7010dfa109";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);
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
      <Result defenition={defenition} />
      <footer className="text-center">coded by Saba Zahedi</footer>
    </div>
  );
}
export default dictionary;
