import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// GitHub Pages: https://<username>.github.io/<repository-name>/
// Change these if your username or repository name differs.
const REPOSITORY_NAME = 'Minecraft-records';
const GITHUB_USERNAME = 'Aeroptot';
const BASE = `/${REPOSITORY_NAME}/`;

/** Prepends the site base path to root-relative image and link URLs in Markdown. */
function rehypeBasePath() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img' && node.properties?.src?.startsWith('/')) {
        node.properties.src = `${BASE}${node.properties.src.slice(1)}`;
      }
      if (node.tagName === 'a' && node.properties?.href?.startsWith('/') && !node.properties.href.startsWith('//')) {
        node.properties.href = `${BASE}${node.properties.href.slice(1)}`;
      }
    });
  };
}

function visit(node, type, callback) {
  if (node.type === type) callback(node);
  if (node.children) node.children.forEach((child) => visit(child, type, callback));
}

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: BASE,
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
    rehypePlugins: [rehypeBasePath],
  },
});
