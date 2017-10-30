/*
17. AJAX Requests with $.getJSON()

There are other helper methods that
can reduce the amount of boilerplate
code necessary.

If you know, for example, that you
 want your data type to be JSON,
 you can use the $.getJSON() method
 in place of the $.get() method.



*/


// --- On Codecademy ---

/*

1. in expandUrl() function, change
$.get() to $.getJSON() and

2. delete 'json' argument

*/

// ANSWER
// Include data for accessing Google APIs

const apiKey = 'AIzaSyAEg6VniWfaOQBpLKkBJ5Db9VPyP9gxJOM';
const url = 'https://www.googleapis.com/urlshortener/v1/url';
const projection = 'FULL';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
	const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
  $.getJSON(urlToExpand, response => {
    $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
  });
}

function shortenUrl() {
	const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  $.post({
    url: urlWithKey,
    data: JSON.stringify({longUrl: urlToShorten}),
    dataType: 'json',
    contentType: 'application/json',
    success(response) {
      $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    },
    error(jqXHR, status, errorThrown) {
      console.log(jqXHR);
    }
  });


}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}


// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);
