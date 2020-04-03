/** REGUSTER OUR SERVICE WORKER HERE BECAUSE OUR INDEX.HTML USES THIS AS A SCRIPT - SAVES YOU PUTTING AN INLINE SCRIPT ACROSS ALL HTML **/

// navigator = browser --> 'if browser has the service worker object' then register 
// the code only executes if the browser of the user visiting the page has the sw object

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
      console.log('Service Worker Registered')
    })
}
