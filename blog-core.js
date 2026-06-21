/* RUFHELD blog redesign — self-contained (CSS + enhancements). Runs on /blog/* only. Registered as a site footer script via Webflow Data API. Reversible: delete the registered script. */
(function(){
  if(!/\/blog\//.test(location.pathname)) return;
  if(window.__rhBlog) return; window.__rhBlog=1;

  // ---- fonts ----
  var lf=document.createElement('link'); lf.rel='stylesheet';
  lf.href='https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700&display=swap';
  document.head.appendChild(lf);

  // ---- CSS (scoped to .blog-* — only bites on blog pages) ----
  var css = `
:root{--rh-green:#1AAA8E;--rh-blue:#005ca0;--rh-navy:#00277c;--rh-ink:#0b1c3a;--rh-ink-soft:#46566f;--rh-grad:linear-gradient(120deg,#1dc3a3 0%,#005ca0 60%,#00277c 100%);--rh-grad-green:linear-gradient(120deg,#1DC3A3 0%,#1AAA8E 100%);--rh-display:"Bricolage Grotesque",-apple-system,sans-serif;--rh-body:"Inter",-apple-system,Segoe UI,Roboto,sans-serif}
#rh-progress{position:fixed;top:0;left:0;height:3px;width:0;background:var(--rh-grad-green);z-index:9999}
.blog-details-wrapper{max-width:760px!important;margin-left:auto!important;margin-right:auto!important}
.blog-image-wrapper{display:none!important}
a[href*="unsplash.com"]{display:none!important}
.blog_darkoverly,.overlay-wrapper{display:none!important}
.top-top-image-heading-wrapper{display:block!important;position:static!important;background:transparent!important;padding:0!important;min-height:0!important;height:auto!important;margin-bottom:8px!important;text-align:left!important}
.top-top-image-heading-wrapper > *{background:transparent!important;float:none!important}
.custom-width._661{display:block!important;max-width:none!important;width:100%!important;margin:0!important;padding:0!important;text-align:left!important}
.blog-heading-main{font-family:var(--rh-display)!important;font-weight:700!important;font-size:clamp(1.85rem,3.6vw,2.6rem)!important;line-height:1.1!important;letter-spacing:-.02em!important;color:var(--rh-ink)!important;background:transparent!important;text-align:left!important;text-shadow:none!important;text-transform:none!important;padding:0!important;width:100%!important;max-width:none!important;align-self:stretch!important;box-sizing:border-box!important}
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
/* ===== RELATED ARTICLES (.recent-blogs) — clean editorial cards matching /landing ===== */
.recent-blogs{background:#f6faf9!important;padding:62px 0 74px!important;border-top:1px solid #e7eef0!important}
.recent-blogs .recent-blogs-top-wrapper{margin-bottom:32px!important;text-align:center!important}
.recent-blogs h2.heading-style-h2{font-family:var(--rh-display)!important;font-weight:800!important;font-size:clamp(1.65rem,3vw,2.15rem)!important;letter-spacing:-.02em!important;line-height:1.1!important;color:var(--rh-ink)!important;text-transform:none!important}
.rh-related-eyebrow{display:block;text-align:center;font-family:"Montserrat",var(--rh-body);font-weight:700;font-size:.76rem;letter-spacing:.14em;text-transform:uppercase;color:var(--rh-blue);margin-bottom:9px}
.recent-blogs .blog-cards-wrapper,.recent-blogs .blogs-collection.w-dyn-items{gap:22px!important}
.recent-blogs .blog-main-card-wrapper{display:flex!important;flex-direction:column!important;height:100%!important;background:#fff!important;border:1px solid #e6edf2!important;border-radius:18px!important;padding:26px 24px 22px!important;box-shadow:0 4px 18px -12px rgba(11,28,58,.18)!important;transition:transform .2s,box-shadow .2s,border-color .2s!important;text-decoration:none!important}
.recent-blogs .blog-main-card-wrapper:hover{transform:translateY(-4px)!important;box-shadow:0 22px 42px -22px rgba(11,28,58,.34)!important;border-color:rgba(26,170,142,.5)!important}
.recent-blogs .text-block-11{font-family:"Montserrat",var(--rh-body)!important;font-weight:600!important;font-size:.73rem!important;letter-spacing:.1em!important;text-transform:uppercase!important;color:var(--rh-blue)!important;margin:0 0 11px!important}
.recent-blogs .blog-name{font-family:var(--rh-display)!important;font-weight:700!important;font-size:1.2rem!important;line-height:1.18!important;letter-spacing:-.01em!important;color:var(--rh-ink)!important;margin:0 0 10px!important;transition:color .18s!important;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.recent-blogs .blog-main-card-wrapper:hover .blog-name{color:var(--rh-blue)!important}
.recent-blogs .text-size-small-2{font-family:"Montserrat",var(--rh-body)!important;font-size:.95rem!important;line-height:1.55!important;color:var(--rh-ink-soft)!important;margin:0 0 18px!important;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.recent-blogs .read-more-text.rh-readmore{margin-top:auto!important;font-family:"Montserrat",var(--rh-body)!important;font-weight:700!important;font-size:.95rem!important;color:#15907a!important;display:inline-flex!important;align-items:center;gap:.45em;text-transform:none!important;letter-spacing:0!important}
.recent-blogs .rh-readmore .rh-arrow{transition:transform .2s}
.recent-blogs .blog-main-card-wrapper:hover .rh-arrow{transform:translateX(4px)}
/* ===== CONVERSION FORM — /landing white-card form ported in (same Webflow→Zoho pipeline + full attribution) ===== */
.section_wir{background:#f6faf9!important}
.section_wir .wir_form-box{background:transparent!important;padding:0!important}
.section_wir .formcard{position:relative;z-index:3;background:#fff;border:1px solid #e4ebf2;border-radius:22px;box-shadow:0 30px 70px -30px rgba(0,39,124,.45);padding:30px 28px 26px;max-width:480px;margin:0 auto}
.section_wir .fc-head{display:flex!important;align-items:center;gap:12px;margin-bottom:4px}
.section_wir .fc-badge{flex:none;width:46px;height:46px;border-radius:13px;background:var(--rh-grad);display:grid;place-items:center;color:#fff}
.section_wir .fc-badge svg{width:24px;height:24px}
.section_wir .formcard h2{font-family:var(--rh-display)!important;font-size:1.34rem!important;font-weight:700!important;letter-spacing:-.02em!important;line-height:1.15!important;color:var(--rh-ink)!important;margin:0!important;text-transform:none!important;text-align:left!important}
.section_wir .fc-sub{font-family:var(--rh-body)!important;font-size:.92rem!important;line-height:1.5!important;color:var(--rh-ink-soft)!important;margin:6px 0 22px!important;text-align:left!important}
.section_wir .formcard .field{position:relative!important;margin-bottom:12px!important;display:block!important}
.section_wir .formcard .field label{display:block!important;font-family:var(--rh-body)!important;font-size:.8rem!important;font-weight:600!important;color:var(--rh-ink-soft)!important;margin-bottom:6px!important;text-align:left!important;text-transform:none!important}
.section_wir .formcard .field .ic{position:absolute!important;left:14px!important;top:36px!important;width:18px!important;height:18px!important;color:#9fb0c4!important;pointer-events:none}
.section_wir .formcard input[type=text],.section_wir .formcard input[type=email],.section_wir .formcard input[type=number]{width:100%!important;font-family:var(--rh-body)!important;font-size:1rem!important;font-weight:400!important;color:var(--rh-ink)!important;padding:.92rem 1rem .92rem 2.6rem!important;border:1.5px solid #e4ebf2!important;border-radius:12px!important;background:#fbfdfe!important;box-shadow:none!important;transition:border-color .15s,box-shadow .15s}
.section_wir .formcard input::placeholder{color:#9fb0c4!important}
.section_wir .formcard input:focus{outline:0!important;border-color:#1dc3a3!important;box-shadow:0 0 0 4px rgba(29,195,163,.16)!important;background:#fff!important}
.section_wir .formcard .hiddenfield{position:absolute!important;left:-9999px!important;top:auto!important;width:1px!important;height:1px!important;opacity:0!important;padding:0!important;border:0!important;margin:0!important}
.section_wir .formcard input[type=submit],.section_wir .formcard .submit-button-form{width:100%!important;margin-top:8px!important;background:var(--rh-grad-green)!important;background-color:transparent!important;color:#fff!important;font-family:var(--rh-body)!important;font-weight:700!important;font-size:1.06rem!important;border:0!important;border-radius:13px!important;padding:1.08rem!important;cursor:pointer;box-shadow:0 12px 28px -10px rgba(26,170,142,.7)!important;transition:transform .18s,box-shadow .18s,filter .2s;text-transform:none!important}
.section_wir .formcard input[type=submit]:hover{transform:translateY(-2px);filter:saturate(1.08)}
.section_wir .form-assure{display:flex!important;flex-wrap:wrap;gap:6px 16px;justify-content:center;margin-top:14px!important}
.section_wir .form-assure span{display:inline-flex!important;align-items:center;gap:.4em;font-family:var(--rh-body)!important;font-size:.82rem!important;color:var(--rh-ink-soft)!important;font-weight:500!important}
.section_wir .form-assure svg{width:15px;height:15px;color:var(--rh-green)}
.section_wir .wa-alt{text-align:center!important;margin-top:14px!important;font-family:var(--rh-body)!important;font-size:.88rem!important;color:var(--rh-ink-soft)!important}
.section_wir .wa-alt a{color:#1fa15a!important;font-weight:700!important;border:0!important;text-decoration:none!important}
.section_wir .success-msg,.section_wir .error-msg{display:none;padding:18px;border-radius:12px;font-family:var(--rh-body)!important;font-weight:600;margin-top:14px}
.section_wir .success-msg{background:#e8f8ef;color:#15907a;border:1px solid #b9e8cd}
.section_wir .error-msg{background:#fdecec;color:#c0392b}
/* section_wir → 2-col hero like /landing (benefit column | white form card) */
.section_wir .wir_content-wrapper{display:grid!important;grid-template-columns:1.05fr .95fr!important;gap:50px!important;align-items:center!important;max-width:1120px!important;margin:0 auto!important;padding:66px 0!important}
.rh-wir-left{text-align:left}
.rh-wir-left h2{font-family:var(--rh-display)!important;font-weight:800!important;font-size:clamp(1.9rem,3.4vw,2.7rem)!important;line-height:1.08!important;letter-spacing:-.02em!important;color:var(--rh-ink)!important;margin:0 0 16px!important;text-transform:none!important}
.rh-wir-left h2 .g{background:var(--rh-grad-green);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.rh-wir-left .sub{font-family:var(--rh-body)!important;font-size:1.08rem!important;line-height:1.55!important;color:var(--rh-ink-soft)!important;margin:0 0 22px!important;max-width:30em}
.rh-wir-left ul{list-style:none!important;padding:0!important;margin:0 0 20px!important}
.rh-wir-left li{position:relative;padding-left:30px;margin-bottom:11px;font-family:var(--rh-body);font-weight:600;font-size:1rem;color:var(--rh-ink)}
.rh-wir-left li::before{content:"";position:absolute;left:0;top:2px;width:20px;height:20px;border-radius:6px;background-color:rgba(29,195,163,.15);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2315907a' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center;background-size:12px}
.rh-wir-left .rating{display:flex;align-items:center;gap:10px;font-family:var(--rh-body);font-size:.95rem;color:var(--rh-ink-soft)}
.rh-wir-left .rating b{color:var(--rh-ink)}
.rh-wir-left .stars{color:#f5a623;letter-spacing:1px}
@media(max-width:860px){.section_wir .wir_content-wrapper{grid-template-columns:1fr!important;gap:28px!important;padding:46px 0!important}.rh-wir-left{text-align:center}.rh-wir-left .sub,.rh-wir-left ul{margin-left:auto;margin-right:auto}.rh-wir-left .rating{justify-content:center}.rh-wir-left li{display:inline-block;text-align:left}}
/* redundant Finsweet load-more button (sits before the article list; all posts already shown) — remove it + the gap it left */
.read-more-btn{display:none!important}
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
      if(el.children.length===0 && /^\s*read\s*more\s*$/i.test(el.textContent||'')){el.innerHTML='Weiterlesen <span class="rh-arrow">→</span>';el.classList.add('rh-readmore');}
    });
    // translate related-articles section heading "Recent Blogs" -> German + eyebrow
    var relH=document.querySelector('.recent-blogs h2');
    if(relH && /recent\s*blogs/i.test(relH.textContent||'')){relH.textContent='Das könnte Sie auch interessieren';}
    var relTop=document.querySelector('.recent-blogs .recent-blogs-top-wrapper');
    if(relTop && relH && !relTop.querySelector('.rh-related-eyebrow')){var reb=document.createElement('span');reb.className='rh-related-eyebrow';reb.textContent='Ratgeber · Google-Bewertungen';relTop.insertBefore(reb,relH);}
    // germanize related-card dates (e.g. "January 16, 2026" -> "16. Januar 2026")
    document.querySelectorAll('.recent-blogs .text-block-11').forEach(function(d){var m=(d.textContent||'').trim().match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/);if(m&&months[m[1]])d.textContent=parseInt(m[2],10)+'. '+months[m[1]]+' '+m[3];});
    // end CTA — only if the post has no CTA button of its own (avoid double CTA)
    if(bodyEl&&!bodyEl.querySelector('a.button, a.w-button, .w-button')&&!document.getElementById('rh-endcta')){var cta=document.createElement('div');cta.id='rh-endcta';cta.innerHTML='<div class="in"><span class="k">Kostenlose Erstprüfung</span><h3>Lassen Sie Ihre Bewertung kostenlos prüfen</h3><p>Schicken Sie uns den Link – wir sagen Ihnen ehrlich, ob und wie eine Entfernung realistisch ist. Zahlung nur im Erfolgsfall.</p><a class="btn" href="#analyse">Jetzt Bewertung prüfen lassen →</a><div class="assure"><span>★ 4,9 / 5</span><span>5.000+ Unternehmen</span><span>Antwort &lt; 1 Std.</span></div></div>';(bodyEl.parentNode||bodyEl).appendChild(cta);}
    // ===== swap blog form for /landing white-card form (identical Webflow Forms API -> Zoho pipeline + full attribution) =====
    (function(){
      var wirBox=document.querySelector('.section_wir .wir_form-box');
      if(!wirBox || wirBox.dataset.rhCard) return;
      wirBox.dataset.rhCard='1';
      var wirWrap=wirBox.parentNode;
      if(wirWrap && !wirWrap.querySelector('.rh-wir-left')){
        var left=document.createElement('div');left.className='rh-wir-left';
        left.innerHTML='<h2>Eine ungerechtfertigte Bewertung kostet Sie täglich <span class="g">Kunden</span>.</h2><p class="sub">Wir prüfen kostenlos, welche Bewertungen gegen die Google-Richtlinien verstoßen – und sorgen für ihre Entfernung. Zahlung nur im Erfolgsfall.</p><ul><li>Zahlung nur bei Erfolg</li><li>Erste Einschätzung in 1 Stunde</li><li>5.000+ geprüfte Unternehmen</li></ul><div class="rating"><span class="stars">★★★★★</span> <b>4,9 / 5</b> · 98 % Weiterempfehlung</div>';
        wirWrap.insertBefore(left,wirBox);
      }
      wirBox.innerHTML='<div class="formcard" id="rh-pruefen-card"><div class="fc-head"><div class="fc-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div><h2>Kostenlose Erstprüfung</h2></div><p class="fc-sub">Innerhalb einer Stunde erhalten Sie eine ehrliche Einschätzung, welche Bewertungen entfernt werden können – unverbindlich.</p><form id="wf-form-Form-Hero" name="wf-form-Form-Hero" data-name="Form Hero" method="get" class="form" data-rh-form=""><div class="field"><label for="search_input">Unternehmen bei Google</label><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M9 22V12h6v10"></path></svg><input class="search_input text-field-3 w-input pac-target-input" maxlength="256" name="field" data-name="Field" placeholder="Unternehmensname eingeben…" type="text" id="search_input" autocomplete="off" required=""></div><input class="location_name w-input hiddenfield" maxlength="256" name="Location-Name" data-name="Location Name" placeholder="Location Name" type="text" id="Location-Name" tabindex="-1" aria-hidden="true"><input class="place-id w-input hiddenfield" maxlength="256" name="Place-id" data-name="Place id" placeholder="Place id" type="text" id="Place-id" tabindex="-1" aria-hidden="true"><div class="field"><label for="Ihr-Name">Ihr Name</label><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><input class="name text-field-3 w-input" maxlength="256" name="Ihr-Name" data-name="Ihr Name" placeholder="Vor- und Nachname" type="text" id="Ihr-Name" required=""></div><div class="field"><label for="E-Mail">E-Mail</label><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg><input class="email text-field-3 w-input" maxlength="256" name="E-Mail" data-name="E Mail" placeholder="ihre@email.de" type="email" id="E-Mail" required=""></div><div class="field"><label for="Telefon">Telefon</label><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><input class="phone text-field-3 w-input" maxlength="256" name="Telefon" data-name="Telefon" placeholder="Für kurze Rückfragen" type="number" id="Telefon" required=""></div><input class="hiddenfield" name="ref_id" type="text" id="ref_id" tabindex="-1" aria-hidden="true"><input class="hiddenfield" name="gclid" type="text" id="gclid" tabindex="-1" aria-hidden="true"><input class="hiddenfield" name="utm_source" type="text" id="utm_source" tabindex="-1" aria-hidden="true"><input class="hiddenfield" name="utm_medium" type="text" id="utm_medium" tabindex="-1" aria-hidden="true"><input class="hiddenfield" name="utm_campaign" type="text" id="utm_campaign" tabindex="-1" aria-hidden="true"><input class="hiddenfield" name="page" type="text" id="page" tabindex="-1" aria-hidden="true"><input class="hiddenfield" name="timestamp" type="text" id="timestamp" tabindex="-1" aria-hidden="true"><input class="hiddenfield" name="lead_source" type="text" id="lead_source" tabindex="-1" aria-hidden="true"><input type="submit" data-wait="Wird geprüft…" class="submit-button-form w-button" value="Jetzt kostenlos prüfen lassen"><div class="form-assure"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg> 100 % unverbindlich</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg> Keine Vorabkosten</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg> DSGVO-konform</span></div></form><div class="success-msg" id="rh-success">✓ Vielen Dank! Wir prüfen Ihre Bewertungen und melden uns innerhalb von 24 Stunden.</div><div class="error-msg" id="rh-error">Es ist ein Fehler aufgetreten. Bitte rufen Sie uns an: +49 800 0009533.</div><p class="wa-alt">Lieber sofort schreiben? <a href="https://wa.me/4915129658221" data-wa="">WhatsApp-Chat starten →</a></p></div>';
      var q=new URLSearchParams(location.search);
      var gclid=q.get('gclid')||'',gad=q.get('gad_source')||'',us=q.get('utm_source')||'',um=q.get('utm_medium')||'',uc=q.get('utm_campaign')||'',fbclid=q.get('fbclid')||'',msclkid=q.get('msclkid')||'';
      var leadSource='Website';
      if(gclid||gad)leadSource='Google Ads';
      else if(fbclid||['facebook','instagram','meta','fb','ig'].indexOf(us)>-1)leadSource=(um==='social')?'Meta Organic':'Meta Ads';
      else if(msclkid)leadSource='Bing Ads';
      var now=new Date();
      var ts=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')+'T'+String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0')+':'+String(now.getSeconds()).padStart(2,'0')+'+01:00';
      var refId='R'+Math.floor(100000+Math.random()*900000);
      function setv(id,v){var el=document.getElementById(id);if(el)el.value=v;}
      setv('ref_id',refId);setv('gclid',gclid);setv('utm_source',us);setv('utm_medium',um);setv('utm_campaign',uc);
      setv('page',location.pathname);setv('timestamp',ts);setv('lead_source',leadSource);
      wirBox.querySelectorAll('a[data-wa]').forEach(function(a){var base=(a.getAttribute('href')||'').split('?')[0];a.setAttribute('href',base+'?text='+encodeURIComponent('Hallo Rufheld, ich interessiere mich für die Bewertungsprüfung. (Ref: '+refId+')'));});
      var RH_WF_ENDPOINT='https://webflow.com/api/v1/form/66e9bed574500384950cc91e';
      var RH_WF={name:'Form Hero',pageId:'6822e0c13a97f3d2d6ca38b2',elementId:'55b6ba7e-bbf7-d741-6111-9859ca09c1d4',domain:'www.rufheld.de'};
      wirBox.querySelectorAll('[data-rh-form]').forEach(function(form){
        form.addEventListener('submit',function(e){
          e.preventDefault();
          var card=form.closest('.formcard');
          var btn=form.querySelector('input[type=submit]');
          var ok=card.querySelector('#rh-success'),err=card.querySelector('#rh-error');
          if(err)err.style.display='none';
          if(btn){btn.dataset._v=btn.value;btn.value=btn.getAttribute('data-wait')||'Wird geprüft…';btn.disabled=true;}
          function v(id){var el=document.getElementById(id);return el?el.value:'';}
          var pp=new URLSearchParams();
          pp.append('name',RH_WF.name);pp.append('pageId',RH_WF.pageId);pp.append('elementId',RH_WF.elementId);pp.append('domain',RH_WF.domain);
          pp.append('source',location.href);pp.append('test','false');
          pp.append('fields[Field]',v('search_input'));pp.append('fields[Location Name]',v('Location-Name'));pp.append('fields[Place id]',v('Place-id'));
          pp.append('fields[Ihr Name]',v('Ihr-Name'));pp.append('fields[E Mail]',v('E-Mail'));pp.append('fields[Telefon]',v('Telefon'));
          pp.append('fields[gclid]',v('gclid'));pp.append('fields[utm_source]',v('utm_source'));pp.append('fields[utm_medium]',v('utm_medium'));pp.append('fields[utm_campaign]',v('utm_campaign'));
          pp.append('fields[lead_source]',v('lead_source'));pp.append('fields[ref_id]',v('ref_id'));pp.append('dolphin','false');
          fetch(RH_WF_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8','Accept':'application/json'},body:pp.toString()})
            .then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.json().catch(function(){return{};});})
            .then(function(){form.style.display='none';if(ok)ok.style.display='block';
              if(window.gtag)gtag('event','generate_lead',{event_category:'form',event_label:'blog'});
              if(window.dataLayer)dataLayer.push({event:'lead_submit',form:'Form Hero'});})
            .catch(function(){if(err)err.style.display='block';if(btn){btn.value=btn.dataset._v;btn.disabled=false;}});
        });
      });
    })();
  });
})();
