/* RUFHELD blog loader/bootstrap — STABLE, do not add logic here.
   Loads blog-core.js from a COMMIT-PINNED (immutable) jsDelivr URL so it's
   never served stale (jsDelivr caches @main branch resolution ~12h; pinned
   @<sha> URLs are permanent + always fresh). Resolves the latest sha via the
   GitHub API (cached 5min in localStorage to limit calls); falls back to
   @main if the API is unavailable. This file rarely changes. */
(function(){
  if(!/\/blog\//.test(location.pathname)) return;
  var BASE='https://cdn.jsdelivr.net/gh/Rufheld/web-assets@';
  function load(url){var s=document.createElement('script');s.src=url;s.defer=true;document.head.appendChild(s);}
  function fallback(){load(BASE+'main/blog-core.js?v='+Date.now());}
  try{
    var c=JSON.parse(localStorage.getItem('rh_core_sha')||'null');
    if(c&&c.sha&&(Date.now()-c.t)<300000){ load(BASE+c.sha+'/blog-core.js'); return; }
  }catch(e){}
  fetch('https://api.github.com/repos/Rufheld/web-assets/commits/main',{cache:'no-store'})
    .then(function(r){return r.json();})
    .then(function(d){
      if(d&&d.sha){ try{localStorage.setItem('rh_core_sha',JSON.stringify({sha:d.sha,t:Date.now()}));}catch(e){} load(BASE+d.sha+'/blog-core.js'); }
      else fallback();
    })
    .catch(fallback);
})();
