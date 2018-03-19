$(document).ready(function (){



});

function searchRepositories() {
  let searchTerm = document.getElementById('searchTerms')
  let url = `https://api.github.com/search/repositories?q=${searchTerm}`
  $.get(url).done()
}


//https:\/\/api.github.com\/search\/repositories\?q=
