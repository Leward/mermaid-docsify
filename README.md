mermaid-docsify is a docsify plugin which allows to render mermaid diagrams in docsify.

## How to use

Add Mermaid and the plugin:

```html
<script src="//unpkg.com/mermaid/dist/mermaid.js"></script>
<script src="//unpkg.com/docsify-mermaid@latest/dist/docsify-mermaid.js"> 
<script>mermaid.initialize({ startOnLoad: true });</script>
```

Now you can include mermaid diagrams in your docsify docs:

    ```mermaid
    graph LR
        A --- B
        B-->C[fa:fa-ban forbidden]
        B-->D(fa:fa-spinner);
    ```

![Docsify with mermaid Screenshot](screenshot.png)