/*
4. fetch() GET Requests III

Reconstruct the boilerplate code
necessary to create a GET request
using the fetch() function step-by-step.


*/


// --- On Codecademy ---

/*

1. Call the fetch function:
fetch("https://api-to-call.com/endpoint");

2. add the then() method:
.then(response => {})

3. Inside the response function do:
if (response.ok) {
    return response.json();
  }

4. Below curly braces do:
throw new Error('Request failed!');

5. Add the 2nd call back function
networkError, it takes just that
parameter

networkError => {
  console.log(networkError.message);
}

6. Chain another .then() for the
jsonresponse

.then(jsonResponse => jsonResponse);

*/

// ANSWER

fetch("https://api-to-call.com/endpoint").then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => jsonResponse);
