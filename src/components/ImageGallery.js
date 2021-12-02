import ImageGalleryItem from "./ImageGalleryItem";

function ImageGallery({ articles, handleLargeImage }) {
  return (
    <ul className="ImageGallery">
      {articles.map((article) => (
        <ImageGalleryItem
          key={article.id}
          article={article}
          handleLargeImage={handleLargeImage}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
