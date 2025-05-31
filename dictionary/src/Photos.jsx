function Photos(probs) {
  console.log(probs.photos);
  if (probs.photos) {
    return (
      <div className="photos">
        {probs.photos.slice(0, 6).map(function (photo, index) {
          return (
            <div key={index}>
              <a href={photo.src.original} target="_blank">
                {" "}
                <img width="270" src={photo.src.landscape} />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
export default Photos;
