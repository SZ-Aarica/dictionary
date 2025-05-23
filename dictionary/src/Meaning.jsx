function Meaning(probs) {
  console.log(probs);
  if (probs.meaning !== null) {
    return (
      <div className="meaning">
        <div className="partOfSpeech">
          {" "}
          <strong> {probs.meaning.partOfSpeech}</strong>
          _______________________________________________
        </div>
        <div className="defenition">
          {probs.meaning.definition}
          <div className="synonym">
            <strong>
              synonyms:
              <br />
            </strong>
            <div className="synonym">
              {probs.meaning.synonyms && probs.meaning.synonyms.length > 0 ? (
                probs.meaning.synonyms.map((synonym, index) => (
                  <span key={index}>{synonym}, </span>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Meaning;
