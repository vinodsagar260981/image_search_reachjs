import axios from 'axios';

export default axios.create({

 baseURL:'https://api.unsplash.com',
 headers:{
        Authorization: 'Client-ID dgCyHH4756rRVDKyg07TWigSGR4d0HE8NkSquYGnwhg' 
  }
});