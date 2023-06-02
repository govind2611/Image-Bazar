const DisplayImages = ({ images }) => {
  return (
    <div className="img">
      {images.map((pic, index) => {
        return (
          <img
            key={index}
            className="image"
            src={pic.urls.small}
            alt={pic.alt_description}
          />
        );
      })}
    </div>
  );
};

export default DisplayImages;
