/*
1. NAME

Let's do the GET request ourselves

*/


// --- On Codecademy ---

/*

1. first create the XMLHttpRequest
const xhr = new XMLHttpRequest();

2. const url = 'https://api-to-call.com/endpoint';

3. Set the responseType property of the xhr object
to equal 'json'.

xhr.responseType = 'json';

4. xhr.onreadystatechange = function() {};

5. In the function add:
if (xhr.readyState === XMLHttpRequest.DONE) {

  }

6. console.log(xhr.response);

7. below the function call:
xhr.open('GET', url);

8. right below it add:
 xhr.send();

 We have now created a AJAX GET request.
 We'll use this later

*/

// ANSWER
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
 };

xhr.open('GET', url);
xhr.send();
