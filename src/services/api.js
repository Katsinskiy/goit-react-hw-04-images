
import axios from 'axios';

class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '28613912-2b9f86456f3c39b89c047be0c';

  constructor() {
    this.image_per_page = 12;
  }

  async getGallary(query, page) {
    const resolve = await axios.get(`?q=${query}&page=${page}`, {
      baseURL: this.#BASE_URL,
      params: {
        key: this.#API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: this.image_per_page,
      },
    });

    return resolve.data;
  }
}
export default new PixabayAPI();
