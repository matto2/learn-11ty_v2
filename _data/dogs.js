const fetch = require("node-fetch");

module.exports = async function() {
  console.log( "Fetching new github stargazers count…" );

  // GitHub API: https://dog.ceo/api/breeds/image/random

  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // node-fetch option to transform to json
    .then(json => {
      // prune the data to return only what we want
      return {
        dogs: json.dogs
      };
    });
};