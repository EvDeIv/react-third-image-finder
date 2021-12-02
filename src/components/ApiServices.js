import axios from "axios";

function fetchImageDatabyQuery(query = "cat", page = 1) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=17873748-3f7eaecfe33175e69c7f70038&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
}

const articlesApi = { fetchImageDatabyQuery };
export default articlesApi;
