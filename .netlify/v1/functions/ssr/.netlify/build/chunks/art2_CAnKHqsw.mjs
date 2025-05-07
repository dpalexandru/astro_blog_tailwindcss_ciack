import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D8DFWrpt.mjs';
import 'clsx';

const frontmatter = {
  "title": "Short Series You Can Binge in a Weekend",
  "description": "Perfect mini-series and short seasons for a quick, satisfying watch.",
  "pubDate": "2025-05-05T00:00:00.000Z",
  "category": "TV Shows",
  "heroImage": "/logo.png"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Got just two days off and don’t want to commit to a month-long series?", createVNode(_components.br, {}), "\nHere are the best mini-series and short seasons you can binge in a single weekend:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The End of the F"
        }), "*ing World** – Two seasons packed with dark humor and unforgettable characters."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Unorthodox"
        }), " – A powerful escape inspired by a true story."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Russian Doll"
        }), " – A time loop, sharp wit, and lots of personality."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "WandaVision"
        }), " – Superheroes meet sitcoms with a surprisingly emotional twist."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "When They See Us"
        }), " – Intense, moving, and absolutely essential."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Perfect with a blanket and tea… or a giant pizza."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/articles/art2.mdx";
const file = "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/content/articles/art2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/content/articles/art2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
