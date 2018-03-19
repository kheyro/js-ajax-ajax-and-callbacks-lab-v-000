$(document).ready(function (){



});

function searchRepositories() {
  let searchTerm = document.getElementById('searchTerms')
  let url = `https://api.github.com/search/repositories?q=${searchTerm}`
  $.get(url).done(function(data) {
    console.log(data);
  }).fail(function(error) {
    // This is called when an error occurs
    console.log('Something went wrong: ' + error);
  });
}


//https:\/\/api.github.com\/search\/repositories\?q=
