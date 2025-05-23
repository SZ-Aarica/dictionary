import Meaning from "./Meaning";

function Result(probs) {
  if (probs.defenition !== null) {
    return (
      <div className="result">
        <h2>/{probs.defenition.phonetic}/</h2>
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
