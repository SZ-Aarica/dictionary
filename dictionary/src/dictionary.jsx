import React, { useRef, useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import Result from "./Result";
function dictionary() {
  const [keyWord, setKeyWord] = useState("");
  const [defenition, setDefenition] = useState(null);
  const ShowWord = useRef(null);
  const [photos, setPhotos] = useState(null);

  function searching(event) {
    ShowWord.current = keyWord;
    function handleResponse(response) {
      setDefenition(response.data);
    }
    function handlePexelResponse(response) {
      setPhotos(response.data.photos);
      //console.log(response.data.photos);
    }
    event.preventDefault();

    if (keyWord.trim() !== "") {
      const apiKey = "c1f9c61a43fbf0460to00d7010dfa109";
      const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
      //-------
      const API_ENDPOINT = "https://api.pexels.com/v1";
      const Pexel_API =
        "7sZPV9DuV558dOaAQFWRKGyPqJrgYKEtxUItdXgjtCuC8HiPwwMBxEJd";
      const pexelUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=1`;
      axios
        .get(`${API_ENDPOINT}/search?query=${keyWord}`, {
          headers: {
            Authorization: `${Pexel_API}`,
          },
        })
        .then(handlePexelResponse);
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
      <Photos photos={photos} />
      <footer className="text-center">coded by Saba Zahedi</footer>
    </div>
  );
}
export default dictionary;
