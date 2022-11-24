import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};



















// 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA'















// const BASE_URL = "https://youtube-v31.p.rapidapi.com/captions";

// const options = {
//     url: BASE_URL,
//     params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
//     headers: {
//       'X-RapidAPI-Key': '921a3a663dmsh3353e8a65feeff1p12dc7ajsn6c3a5389e07d',
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });







//   const options = {
//     method: 'GET',
//     url: 'https://youtube-v31.p.rapidapi.com/captions',
//     params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
//     headers: {
//       'X-RapidAPI-Key': '921a3a663dmsh3353e8a65feeff1p12dc7ajsn6c3a5389e07d',
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });