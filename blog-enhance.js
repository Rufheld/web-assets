/* RUFHELD blog loader/bootstrap — STABLE, do not add logic here.
   Loads blog-core.js with an hourly cache-buster so pushes to blog-core.js
   reach all visitors within ~1h (jsDelivr browser cache is 7d, so the heavy
   logic must live in a cache-busted file; this bootstrap stays constant). */
(function(){
  if(!/\/blog\//.test(location.pathname)) return;
  var d=new Date();
  var bucket=d.getUTCFullYear()+'-'+(d.getUTCMonth()+1)+'-'+d.getUTCDate()+'-'+d.getUTCHours();
  var s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/gh/Rufheld/web-assets@main/blog-core.js?h='+bucket;
  s.defer=true;
  document.head.appendChild(s);
})();
