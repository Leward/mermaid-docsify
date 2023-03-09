import plugin from './plugin';

if (!window.$docsify) {
    window.$docsify = {}
}

const props = window.$docsify.mermaidConfig || { querySelector: ".mermaid" };

window.$docsify.plugins = (window.$docsify.plugins || []).concat(plugin(props));