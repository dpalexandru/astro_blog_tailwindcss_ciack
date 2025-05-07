import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D8DFWrpt.mjs';
import 'clsx';

const frontmatter = {
  "title": "If You Loved Breaking Bad, Watch These Next",
  "pubDate": "2025-05-05T00:00:00.000Z",
  "description": "Five gripping series that hit just as hard as Breaking Bad.",
  "category": "TV Shows",
  "heroImage": "/logo.png"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Finished ", createVNode(_components.em, {
        children: "Breaking Bad"
      }), " and feeling a little lost?", createVNode(_components.br, {}), "\nHere are 5 shows that deliver the same gut-punch intensity—and will keep you binging for hours:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Better Call Saul"
        }), " – The spin-off that turned into a masterpiece in its own right."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Ozark"
        }), " – A seemingly normal family… until everything unravels."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Narcos"
        }), " – Crime, power, and a reality stranger than fiction."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Peaky Blinders"
        }), " – Gangs, charisma, and ruthless twists."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The Americans"
        }), " – Espionage, tension, and double lives in the Cold War era."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Get ready to fall into another deep, dark rabbit hole."
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

const url = "src/content/articles/art3.mdx";
const file = "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/content/articles/art3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/content/articles/art3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
