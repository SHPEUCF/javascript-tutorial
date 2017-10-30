/*
15. AJAX requests with $.get()

The jQuery library provides other
methods that allow us to write fewer
lines of code to accomplish the same
goals.

use the $.get() method to write a GET
request. However, we've gone from
nearly a dozen lines of code at the
beginning of this lesson to one or two.

*/
$.get('https://api-to-call.com/endpoint', response => {...}, 'json');

// --- On Codecademy ---

/*

1. deletel $.ajax() method call
add:
$.get();

2. pass argument urlToExpand

3. as second argument pass arrow function
response => {
    $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
  }

4. as third argument pass:
'json'

You can try using app by expanding
https://goo.gl/JjAsZ5



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
  $.get(urlToExpand, response => {
    $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
  }, 'json');
}

function shortenUrl() {
	const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  $.ajax({
    url: urlWithKey,
    type: 'POST',
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
