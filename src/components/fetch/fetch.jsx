import axios from 'axios';

export async function fetch(searchName, page) {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchName}&page=${page}&key=28369554-8a41aa323918ac947077e13c4&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
}
