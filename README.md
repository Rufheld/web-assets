# Rufheld web-assets

`blog-enhance.js` — restyles + enhances Rufheld blog posts (rufheld.de/blog/*).
Loaded on the live site via a one-line loader in Webflow Footer Code:

    <script src="https://cdn.jsdelivr.net/gh/Rufheld/web-assets@main/blog-enhance.js" defer></script>

## To update the blog design (no Webflow access needed)
1. Edit `blog-enhance.js`
2. `git push origin main`
3. Purge the CDN: `curl https://purge.jsdelivr.net/gh/Rufheld/web-assets@main/blog-enhance.js`
4. Hard-reload a blog post to verify.

Scoped to `.blog-*` classes + guarded by `/blog/` path → never affects non-blog pages.
Source of truth: /Documents/Rufheld/Marketing/Organic/blog-template/blog-enhance.js
