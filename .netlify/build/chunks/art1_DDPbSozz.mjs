import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D8DFWrpt.mjs';
import 'clsx';

const frontmatter = {
  "title": "5 Perfect Movies for a Cozy Night with Your Partner",
  "pubDate": "2025-05-05T00:00:00.000Z",
  "description": "The ultimate movie list for a romantic night in.",
  "category": "Romance",
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
      children: ["You’ve turned on the TV, opened Netflix, and now comes the classic dilemma: ", createVNode(_components.em, {
        children: "“What should we watch tonight?”"
      }), createVNode(_components.br, {}), "\nDon’t worry—we’ve got you covered. Here are 5 perfect films for a cozy evening with your significant other:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "La La Land"
        }), " – A dreamy musical for those who love bittersweet love stories."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "About Time"
        }), " – Laugh, cry, and fall in love with life all over again."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "A Star is Born"
        }), " – Passion, music, and an intense emotional journey."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Midnight in Paris"
        }), " – A magical trip through art, literature, and time."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "P.S. I Love You"
        }), " – A heartfelt classic that’s perfect for cuddling up."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Snacks ready? ❤️"
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

const url = "src/content/articles/art1.mdx";
const file = "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/content/articles/art1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/alexpoian/Desktop/Blog open/blog_astro_/src/content/articles/art1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
