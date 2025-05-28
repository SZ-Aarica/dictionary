import Meaning from "./Meaning";

function Result(probs) {
  if (probs.defenition !== null) {
    return (
      <div className="result">
        <div className="phonetic">
          {" "}
          <h2>{probs.keyWord}</h2>
          <h2 className="ms-3">/{probs.defenition.phonetic}/</h2>
        </div>

        {probs.defenition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default Result;
