const axios = require('axios');


module.exports = async () => {

const result = await axios.get('https://dog.ceo/api/breeds/image/random');

const image = result.data.message;

return {
    layout: 'layout.liquid',
    tags: 'blog',
    dog: image
};
}