const plugin = (mermaidConf) => (hook) => {

    hook.afterEach((html, next) => {
        // We load the HTML inside a DOM node to allow for manipulation
        const htmlElement = document.createElement('div');
        htmlElement.innerHTML = html;

        htmlElement.querySelectorAll('pre[data-lang=mermaid]').forEach((element) => {
            // Create a <div class="mermaid"> to replace the <pre> 
            const replacement = document.createElement('div');
            replacement.textContent = element.textContent;
            replacement.classList.add('mermaid');

            // Replace
            element.parentNode.replaceChild(replacement, element);
        });

        next(htmlElement.innerHTML);
    });

    hook.ready(() => mermaid.run(mermaidConf));

};

export default plugin;