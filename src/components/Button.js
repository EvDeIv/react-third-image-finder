function Button({ fetchNewImages }) {
  return (
    <button className="Button" onClick={fetchNewImages}>
      Load more
    </button>
  );
}

export default Button;
