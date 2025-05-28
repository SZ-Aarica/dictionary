function sysnonym(probs) {
  return (
    <div>
      <div>
        <div className="ms-4">
          {probs.Sysnonym && probs.Sysnonym.length > 0 ? (
            probs.Sysnonym.map((synonym, index) => (
              <li key={index}>{synonym}</li>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}
export default sysnonym;
