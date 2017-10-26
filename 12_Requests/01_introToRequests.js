/*
1. INTRO TO REQUESTS

There are numerous reasons why JavaScript is
the preferred language of the web. Amongst
the most important reasons are JavaScript's
non-blocking properties, or that it is an
asynchronous language.

Imagine that you navigate to a web page that
has a large image file as its background.
Would you want the entire page to freeze
while the image is retrieved from the source,
or would you want to continue interacting with
other parts of the site?

Most websites have to make multiple requests
to work fully. The way JavaScript handles
multiple requests is called its event loop.
Messages that will be sent to other websites
containing code are added to a queue as
certain events occur. Each message is run
completely before moving on to the next one,
which might cause the user to wait a long
time between actions.

To prevent this, long messages are broken
into smaller messages that are added to the
queue when they are ready to be run. In the
case of requesting information from another
site, we separate the request (asking another
website for information) from what we want to
do with the response (the information the
website returns to us). We can do this using
a system of technologies called Asynchronous J
avaScript and XML, or AJAX.

Before continuing with this lesson, you should
visit the Google URL Shortener API
documentation and follow the instructions
in this article to create an API Key.


*/


// --- On Codecademy ---

/*

1. Create API Key
here's the link:

2. Follow these intructions if you have issues:


3. Look at the code in the code editor very
carefully. Predict the order in which you
think the three messages will be logged to
the console. When you run the code, see if
you were correct!

*/

// ANSWER

function fun() {
  console.log('hi');
  setTimeout(() => {
    console.log('how are you');
  }, 2500);
  console.log('hi 2');
}

fun();
