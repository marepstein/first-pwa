/** Service Workers only work on HTTPS requests because they have a lot of power
 * you can intercept any request so, need to make sure this is served on a secure hosted **/

/* SW's are always running in the background and are all about handling events */

// Fired whenever a new service worker is installed
self.addEventListener('install', function(event) {
  console.log('[Service worker] Installing Service Worker...', event)
})

// Fired whenever a service worker is activated
self.addEventListener('activate', function(event) {
  console.log('[Service worker] Activating Service Worker...', event)
  return self.clients.claim()
  // return statement ensures that the service workers are activated correctly
})

/*** ACTIVATING MAY REQUIRE CLOSING AND REOPENING THE TAB AS IT TRIES TO COMMUNICATE WITH THE OLD SERVICE WORKER - can use update on reload dev tools ***/

// Triggered when our application fetches something e.g. HTML pages load scripts, CSS code loading, images loading etc
self.addEventListener('fetch', function(event) {
  console.log('[Service worker Fetching something...', event)
  event.respondWith(fetch(event.request))
  // this means return the fetch request (a promise), which will use the response of the promise automatically
})