import { a as createComponent, b as renderTemplate, m as maybeRenderHead, e as createAstro, d as addAttribute, f as renderHead, r as renderComponent, g as renderSlot } from './astro/server_D8DFWrpt.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer } from './Footer_BUl1kEe2.mjs';
/* empty css                          */
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CookieBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<script type="module">
  window.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const button = document.getElementById('accept-cookies');

    if (localStorage.getItem('cookie-consent') === 'true' && banner) {
      banner.style.display = 'none';
    }

    button?.addEventListener('click', () => {
      localStorage.setItem('cookie-consent', 'true');
      banner.style.display = 'none';
    });
  });
<\/script> `, '<div id="cookie-banner" class="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 p-4 shadow z-50"> <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4"> <p class="text-sm text-gray-700">\nUtilizziamo i cookie per analisi e pubblicit\xE0. Continuando a navigare, accetti il loro utilizzo.\n<a href="/privacy-policy" class="underline text-blue-600 ml-1">Scopri di pi\xF9</a>.\n</p> <button id="accept-cookies" class="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition" type="button">\nAccetta\n</button> </div> </div>'])), maybeRenderHead());
}, "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/components/CookieBanner.astro", void 0);

const $$Astro = createAstro("https://dogcityguide.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="it"> <head><link rel="icon" type="image/png" href="/favicon.png"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Titolo dinamico --><title>${title} | AstroBlog</title><meta name="description"${addAttribute(description, "content")}><!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:image" content="/images/og-default.jpg"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image" content="/images/og-default.jpg">${renderHead()}</head> <body class="bg-white text-gray-800 leading-relaxed"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "CookieBanner", $$CookieBanner, {})} </body></html>`;
}, "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
