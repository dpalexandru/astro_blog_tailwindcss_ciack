import { e as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_D8DFWrpt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Coxl9DCG.mjs';
import { g as getCollection } from '../chunks/_astro_content_BiYjXz4b.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://dogcityguide.com");
const prerender = false;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const url = new URL(Astro2.request.url);
  const query = url.searchParams.get("q")?.toLowerCase() ?? "";
  const articles = (await getCollection("articles")).filter(
    (article) => article.data.title.toLowerCase().includes(query) || article.data.description.toLowerCase().includes(query)
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Search results for "${query}"`, "description": "Search results for articles" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-6xl mx-auto px-4 pt-24 pb-16"> <h1 class="text-2xl font-bold mb-6 text-center">Search results for “${query}”</h1> ${articles.length === 0 ? renderTemplate`<p class="text-center text-gray-600">No results found.</p>` : renderTemplate`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ${articles.map((article) => renderTemplate`<a${addAttribute(`/articles/${article.id}`, "href")} class="block overflow-hidden rounded-lg shadow hover:shadow-md transition bg-white"> ${article.data.heroImage && renderTemplate`<img${addAttribute(article.data.heroImage, "src")}${addAttribute(article.data.title, "alt")} class="w-full h-36 object-cover" loading="lazy">`} <div class="p-3"> <h2 class="text-lg font-semibold text-blue-700 mb-1">${article.data.title}</h2> <p class="text-gray-600 text-sm">${article.data.description}</p> </div> </a>`)} </div>`} </section> ` })}`;
}, "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/pages/search.astro", void 0);

const $$file = "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
