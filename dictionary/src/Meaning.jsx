import Sysnonym from "./Synonym";
function Meaning(probs) {
  //console.log(probs);
  if (probs.meaning !== null) {
    return (
      <div className="meaning">
        <div className="partOfSpeech">
          {" "}
          <strong> {probs.meaning.partOfSpeech}</strong>
          _______________________________________________________
        </div>
        <div className="defenition">
          {probs.meaning.definition !== null ? (
            <strong>Defenition: </strong>
          ) : (
            ""
          )}
          {probs.meaning.definition}
          <div>
            {probs.meaning.example !== null ? <strong>Example: </strong> : ""}{" "}
            {probs.meaning.example}{" "}
          </div>
          {probs.meaning.synonyms !== null && (
            <>
              {probs.meaning.synonyms && probs.meaning.synonyms.length > 0 && (
                <div className="sysnonym-box ms-4 mt-1 ps-2">
                  <strong>synonyms:</strong>
                  <br />
                  <Sysnonym Sysnonym={probs.meaning.synonyms} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}
export default Meaning;
