const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://league-of-legends-esports.p.rapidapi.com/teams',
  params: {id: 'lng-esports'},
  headers: {
    'X-RapidAPI-Key': 'fee309d327mshd7eb0a5869f4fb0p1c2a86jsn91fa36ef9812',
    'X-RapidAPI-Host': 'league-of-legends-esports.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}