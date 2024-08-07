import axios from 'axios';

export async function doFetch(query, page) {
  const API_KEY = '45213182-a2ebd71b41c91d92e61bbdb2a';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  });
  const { data } = await axios(`https://pixabay.com/api/?${params}`);
  return data;
}
