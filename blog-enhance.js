/* RUFHELD blog loader/bootstrap — STABLE, do not add logic here.
   Loads blog-core.js with a per-load cache-buster so any push to blog-core.js
   is visible on the next page load (no stale browser cache). The heavy logic
   lives in blog-core.js; this bootstrap stays constant (so its own 7-day CDN
   cache is fine — a one-time hard refresh picks up this file as a page
   subresource, then it always fetches the freshest core). */
(function(){
  if(!/\/blog\//.test(location.pathname)) return;
  var s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/gh/Rufheld/web-assets@main/blog-core.js?v=' + Date.now();
  s.defer=true;
  document.head.appendChild(s);
})();
