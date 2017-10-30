/*
14. $.ajax() POST Requests III

refactor the code you wrote for the URL
shortener using the $.ajax() method.

*/


// --- On Codecademy ---

/*

1. change shortenURL to this:
function shortenUrl() {
	const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  $.ajax({
    url: urlWithKey,
  });

2. add property:
type: 'POST',

3. add property:
data: JSON.stringify({longUrl: urlToShorten}),

4. add property:
dataType: 'json',

5. add property:
contentType: 'application/json',

6. add success callback function:
success(response) {}, // leave empty for now

7. to function code block add:
$responseField.append(
'<p>Your shortened url is: </p><p>' +
response.id + '</p>');

8. add error callback function
error(jqXHR, status, errorThrown) {
      console.log(jqXHR);

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
  $.ajax({
    url: urlToExpand,
    type: 'GET',
    dataType: 'json',
    success(response) {
      $response.Field.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
    },
    error(jqXHR, status, errorThrown) {
      console.log(jqXHR);
    },
  });
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
