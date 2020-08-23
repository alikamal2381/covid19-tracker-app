console.log("registered");

/* let cacheData = "appv1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((data) => {
      data.addAll([
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "index.html",
        "https://api.covid19api.com/summary",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        console.log("result", result);
        if (result) {
          return result;
        }
      })
    );
  }
}); */
