function ImageGalleryItem({ article, handleLargeImage }) {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={article.webformatURL}
        alt={article.tags}
        data-largeimage={article.largeImageURL}
        onClick={handleLargeImage}
      />
    </li>
  );
}

export default ImageGalleryItem;
