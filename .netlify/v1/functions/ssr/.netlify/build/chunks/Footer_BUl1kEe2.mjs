import { e as createAstro, a as createComponent, m as maybeRenderHead, h as renderScript, b as renderTemplate } from './astro/server_D8DFWrpt.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro("https://dogcityguide.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="bg-gradient-to-r from-slate-900 to-indigo-900 shadow-lg fixed w-full z-50 top-0"> <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"> <!-- Mobile: Logo + Search + Hamburger --> <div class="flex items-center justify-between w-full md:hidden"> <a href="/" class="text-lg font-bold text-indigo-300 tracking-wide">AstroBlog</a> <div class="flex items-center gap-2"> <form action="/search" method="GET" class="w-28"> <input type="text" name="q" placeholder="Search..." class="w-full border border-slate-700 bg-slate-800 text-slate-100 rounded px-2 py-1 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"> </form> <button class="text-2xl text-slate-100" onclick="toggleMenu(true)" aria-label="Open menu">
☰
</button> </div> </div> <!-- Desktop: Logo + nav + search --> <div class="hidden md:flex items-center justify-between w-full"> <a href="/" class="text-xl font-bold text-indigo-300 tracking-wide">AstroBlog</a> <nav class="flex space-x-6 ml-8"> <a href="/" class="text-slate-200 hover:text-indigo-300 transition">Home</a> <a href="/articles" class="text-slate-200 hover:text-indigo-300 transition">Articles</a> <a href="/about" class="text-slate-200 hover:text-indigo-300 transition">About</a> <a href="/contact" class="text-slate-200 hover:text-indigo-300 transition">Contact</a> </nav> <form action="/search" method="GET" class="relative ml-8"> <input type="text" name="q" placeholder="Search..." class="bg-slate-800 border border-slate-600 text-slate-100 rounded-md px-3 py-1 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"> <button type="submit" class="absolute right-1 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-300 text-sm">
🔍
</button> </form> </div> </div> <!-- Overlay --> <div class="overlay fixed inset-0 bg-opacity-50 z-40 hidden" onclick="toggleMenu(false)"></div> <!-- Mobile nav --> <nav class="mobile-nav fixed top-0 right-0 h-full w-64 bg-slate-800 z-50 p-6 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden flex flex-col gap-4 shadow-2xl"> <button class="text-2xl text-slate-200 self-end" onclick="toggleMenu(false)" aria-label="Close menu">✕</button> <a href="/" class="text-slate-200 hover:text-indigo-300">Home</a> <a href="/articles" class="text-slate-200 hover:text-indigo-300">Articles</a> <a href="/about" class="text-slate-200 hover:text-indigo-300">About</a> <a href="/contact" class="text-slate-200 hover:text-indigo-300">Contact</a> </nav> </header> ${renderScript($$result, "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://dogcityguide.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Astro Blog</p> <div class="footer-links" data-astro-cid-sz7xmlte> <a href="/privacy-policy" data-astro-cid-sz7xmlte>Privacy Policy</a> <span data-astro-cid-sz7xmlte>|</span> <a href="/cookie-consent" data-astro-cid-sz7xmlte>Cookie Consent</a> </div> </div>  </footer>`;
}, "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
