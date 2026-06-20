/* RUFHELD blog redesign — self-contained (CSS + enhancements). Runs on /blog/* only. Registered as a site footer script via Webflow Data API. Reversible: delete the registered script. */
(function(){
  if(!/\/blog\//.test(location.pathname)) return;
  if(window.__rhBlog) return; window.__rhBlog=1;

  // ---- fonts ----
  var lf=document.createElement('link'); lf.rel='stylesheet';
  lf.href='https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&display=swap';
  document.head.appendChild(lf);

  // ---- CSS (scoped to .blog-* — only bites on blog pages) ----
  var css = `
:root{--rh-green:#1AAA8E;--rh-blue:#005ca0;--rh-navy:#00277c;--rh-ink:#0b1c3a;--rh-ink-soft:#46566f;--rh-grad:linear-gradient(120deg,#1dc3a3 0%,#005ca0 60%,#00277c 100%);--rh-grad-green:linear-gradient(120deg,#1DC3A3 0%,#1AAA8E 100%);--rh-display:"Bricolage Grotesque",-apple-system,sans-serif;--rh-body:"Inter",-apple-system,Segoe UI,Roboto,sans-serif}
#rh-progress{position:fixed;top:0;left:0;height:3px;width:0;background:var(--rh-grad-green);z-index:9999}
.blog-details-wrapper{max-width:760px!important;margin-left:auto!important;margin-right:auto!important}
.blog-image-wrapper{display:none!important}
a[href*="unsplash.com"]{display:none!important}
.blog_darkoverly,.overlay-wrapper{display:none!important}
.top-top-image-heading-wrapper{position:static!important;background:transparent!important;padding:0!important;min-height:0!important;height:auto!important;margin-bottom:8px!important}
.top-top-image-heading-wrapper > *{background:transparent!important}
.custom-width._661{max-width:none!important;width:100%!important;padding:0!important}
.blog-heading-main{font-family:var(--rh-display)!important;font-weight:800!important;font-size:clamp(2rem,4.4vw,3rem)!important;line-height:1.07!important;letter-spacing:-.02em!important;color:var(--rh-ink)!important;background:transparent!important;text-align:left!important;text-shadow:none!important;text-transform:none!important;padding:0!important}
.heading-37{background:transparent!important;color:var(--rh-ink-soft)!important;font-family:var(--rh-body)!important;font-weight:400!important;font-size:1.18rem!important;line-height:1.55!important;letter-spacing:0!important;text-align:left!important;padding:0!important;margin:16px 0 0!important;text-transform:none!important;text-shadow:none!important;max-width:34em}
.rh-eyebrow{font-family:var(--rh-body);font-weight:700;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:var(--rh-blue);display:block;margin-bottom:14px}
.single-blog-date{font-family:var(--rh-body)!important;color:var(--rh-ink-soft)!important;font-weight:500!important;font-size:.95rem!important;text-align:left!important;margin:10px 0 26px!important}
.blog-body-text{font-family:var(--rh-body)!important;font-size:18px!important;line-height:1.72!important;color:#28354d!important}
.blog-body-text p{margin:0 0 1.35em!important;font-size:18px!important;line-height:1.72!important}
.blog-body-text h2{font-family:var(--rh-display)!important;font-weight:700!important;font-size:1.7rem!important;line-height:1.14!important;letter-spacing:-.02em!important;color:var(--rh-ink)!important;margin:2.1em 0 .6em!important;padding-left:18px!important;position:relative!important}
.blog-body-text h2::before{content:"";position:absolute;left:0;top:.18em;width:6px;height:.78em;border-radius:4px;background:var(--rh-grad-green)}
.blog-body-text h3{font-family:var(--rh-display)!important;font-weight:700!important;font-size:1.24rem!important;letter-spacing:-.01em!important;color:var(--rh-ink)!important;margin:1.6em 0 .5em!important}
.blog-body-text a:not(.button):not(.w-button){color:var(--rh-blue)!important;border-bottom:1.5px solid rgba(0,92,160,.28);font-weight:600}
.blog-body-text a.button,.blog-body-text a.w-button,.blog-body-text .button.w-button{color:#fff!important;background:var(--rh-grad-green)!important;background-color:transparent!important;border:0!important;border-bottom:0!important;border-radius:13px!important;padding:1rem 1.7rem!important;font-family:var(--rh-body)!important;font-weight:700!important;font-size:1.02rem!important;box-shadow:0 12px 28px -10px rgba(26,170,142,.7)!important;display:inline-block!important;text-decoration:none!important;text-align:center;transition:transform .18s,filter .2s}
.blog-body-text a.button:hover,.blog-body-text a.w-button:hover{transform:translateY(-2px);filter:saturate(1.08)}
.recent-blogs .rh-readmore{font-family:var(--rh-body)!important;font-weight:700!important;color:var(--rh-green-d,#15907a)!important;text-transform:none!important;letter-spacing:0!important}
.blog-body-text strong{color:var(--rh-ink)!important;font-weight:700}
.blog-body-text ul{list-style:none!important;padding-left:0!important;margin:0 0 1.4em!important}
.blog-body-text ul li{position:relative!important;padding-left:32px!important;margin-bottom:.55em!important}
.blog-body-text ul li::before{content:"";position:absolute;left:0;top:3px;width:21px;height:21px;border-radius:7px;background-color:rgba(29,195,163,.14);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2315907a' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center;background-size:13px}
.blog-body-text ol{padding-left:0!important;margin:0 0 1.4em!important;list-style:none!important;counter-reset:rhol}
.blog-body-text ol li{position:relative!important;padding-left:40px!important;margin-bottom:.65em!important;counter-increment:rhol}
.blog-body-text ol li::before{content:counter(rhol);position:absolute;left:0;top:1px;width:26px;height:26px;border-radius:8px;background:var(--rh-grad);color:#fff;font-family:var(--rh-display);font-weight:700;font-size:.85rem;display:flex;align-items:center;justify-content:center}
.blog-body-text blockquote{border-left:4px solid var(--rh-green)!important;padding:4px 0 4px 24px!important;margin:1.8em 0!important;font-family:var(--rh-display)!important;font-weight:600!important;font-size:1.35rem!important;line-height:1.32!important;color:var(--rh-ink)!important;font-style:normal!important;background:transparent!important}
#rh-endcta{margin:48px auto 8px;max-width:760px;background:var(--rh-navy);border-radius:22px;padding:40px 34px;color:#fff;position:relative;overflow:hidden}
#rh-endcta::before{content:"";position:absolute;inset:0;background:radial-gradient(55% 80% at 85% 15%,rgba(29,195,163,.32),transparent 60%),radial-gradient(50% 70% at 5% 95%,rgba(0,92,160,.5),transparent 60%)}
#rh-endcta .in{position:relative}
#rh-endcta .k{font-size:.76rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#7fe6d2}
#rh-endcta h3{font-family:var(--rh-display)!important;font-weight:800!important;color:#fff!important;font-size:1.7rem!important;line-height:1.1!important;margin:8px 0 8px!important;letter-spacing:-.02em}
#rh-endcta p{color:#c4d2ea!important;font-size:1.02rem!important;margin:0 0 22px!important;max-width:36em}
#rh-endcta a.btn{display:inline-flex;align-items:center;gap:.5em;background:var(--rh-grad-green);color:#fff;font-family:var(--rh-body);font-weight:700;font-size:1.04rem;padding:1rem 1.7rem;border-radius:13px;box-shadow:0 14px 30px -10px rgba(26,170,142,.7);transition:transform .18s,filter .2s}
#rh-endcta a.btn:hover{transform:translateY(-2px);filter:saturate(1.08)}
#rh-endcta .assure{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:18px;font-size:.84rem;color:#aebcd6}
#rh-endcta .assure span{display:inline-flex;align-items:center;gap:.4em}
/* === FONT CONSISTENCY: force Inter on all body text (high specificity to beat Webflow's Fustat !important p-rule), Bricolage only on headings === */
.blog-details-wrapper .blog-body-text.w-richtext :not(h2):not(h3):not(h4):not(blockquote){font-family:var(--rh-body)!important}
.blog-details-wrapper .blog-body-text.w-richtext h2,.blog-details-wrapper .blog-body-text.w-richtext h3,.blog-details-wrapper .blog-body-text.w-richtext h4{font-family:var(--rh-display)!important}
`;
  var st=document.createElement('style'); st.id='rh-blog-css'; st.textContent=css; document.head.appendChild(st);

  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded',fn); }
  ready(function(){
    // force body fonts inline (!important) — beats Webflow's high-specificity Fustat rule + any inline styles
    var bt=document.querySelector('.blog-body-text');
    if(bt){
      bt.querySelectorAll('p,li,span,a:not(.button):not(.w-button),strong,b,em,i,td,th,div,figcaption,small').forEach(function(el){
        el.style.setProperty('font-family','Inter,-apple-system,Segoe UI,Roboto,sans-serif','important');
      });
      bt.querySelectorAll('h1,h2,h3,h4,blockquote').forEach(function(el){
        el.style.setProperty('font-family','"Bricolage Grotesque",-apple-system,sans-serif','important');
      });
    }
    // progress bar
    if(!document.getElementById('rh-progress')){var bar=document.createElement('div');bar.id='rh-progress';document.body.appendChild(bar);
      addEventListener('scroll',function(){var h=document.documentElement;bar.style.width=((h.scrollTop/((h.scrollHeight-h.clientHeight)||1))*100)+'%';},{passive:true});}
    // German date
    var months={January:'Januar',February:'Februar',March:'März',April:'April',May:'Mai',June:'Juni',July:'Juli',August:'August',September:'September',October:'Oktober',November:'November',December:'Dezember'};
    document.querySelectorAll('.single-blog-date').forEach(function(d){var m=d.textContent.trim().match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/);if(m&&months[m[1]])d.textContent=parseInt(m[2],10)+'. '+months[m[1]]+' '+m[3];});
    // hide "Photo by ... on ..." credit remnant
    var hero=document.querySelector('.top-top-image-heading-wrapper');
    if(hero){[].forEach.call(hero.children,function(c){if(/^\s*Photo by/i.test(c.innerText||'')&&(c.querySelector&&(c.querySelector('a[href*="unsplash"]')||c.innerText.length<60)))c.style.display='none';});}
    // eyebrow
    var h1=document.querySelector('.blog-heading-main');
    if(h1&&!h1.parentNode.querySelector('.rh-eyebrow')){var eb=document.createElement('span');eb.className='rh-eyebrow';eb.textContent='Ratgeber · Google-Bewertungen';h1.parentNode.insertBefore(eb,h1);}
    // reading time
    var bodyEl=document.querySelector('.blog-body-text');var dateEl=document.querySelector('.single-blog-date');
    if(bodyEl&&dateEl&&!dateEl.dataset.rhRt){var wc=(bodyEl.innerText||'').trim().split(/\s+/).length;dateEl.textContent=dateEl.textContent+'  ·  '+Math.max(2,Math.round(wc/200))+' Min. Lesezeit';dateEl.dataset.rhRt='1';}
    // related "READ MORE" -> "Weiterlesen" + brand style (target leaf elements with exact text)
    document.querySelectorAll('.recent-blogs *').forEach(function(el){
      if(el.children.length===0 && /^\s*read\s*more\s*$/i.test(el.textContent||'')){el.textContent='Weiterlesen →';el.classList.add('rh-readmore');}
    });
    // end CTA — only if the post has no CTA button of its own (avoid double CTA)
    if(bodyEl&&!bodyEl.querySelector('a.button, a.w-button, .w-button')&&!document.getElementById('rh-endcta')){var cta=document.createElement('div');cta.id='rh-endcta';cta.innerHTML='<div class="in"><span class="k">Kostenlose Erstprüfung</span><h3>Lassen Sie Ihre Bewertung kostenlos prüfen</h3><p>Schicken Sie uns den Link – wir sagen Ihnen ehrlich, ob und wie eine Entfernung realistisch ist. Zahlung nur im Erfolgsfall.</p><a class="btn" href="/#analyse">Jetzt Bewertung prüfen lassen →</a><div class="assure"><span>★ 4,9 / 5</span><span>5.000+ Unternehmen</span><span>Antwort &lt; 1 Std.</span></div></div>';(bodyEl.parentNode||bodyEl).appendChild(cta);}
  });
})();
