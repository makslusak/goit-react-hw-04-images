import axios from 'axios';
const API_LINK = 'https://pixabay.com/api/';

export async function getDataApi(searchParam, page) {
  const { data } = await axios.get(
    `${API_LINK}?q=${searchParam}&page=${page}&key=30103797-b372b085155e032bf027815af&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
}
// const imageApi = axios.create({
//   baseURL: 'https://pixabay.com/api/',
//   params: {
//     per_page: 12,
//     orientation: 'horizontal',
//     image_type: 'photo',
//     key: '30103797-b372b085155e032bf027815af',
//     page: 1,
//     q: '',
//   },
// });

// export async function getDataApi(params) {
//   const { data } = await imageApi.get({ params });
//   return data;
// }
