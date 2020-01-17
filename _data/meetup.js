var axios   = require('axios');

module.exports = async function() {
  let url = `https://api.meetup.com/${process.env.MEETUP_URL }/events?photo-host=public&page=20&sig_id=${process.env.MEETUP_KEY}`;
  
  return axios.get(url)
      .then(function (response) {
          return response.data;
      })
      .catch(function(error) {
          console.log(error);
      });
}