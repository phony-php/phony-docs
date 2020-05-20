import hljs from 'highlight.js/lib/highlight';

window.docsearch = require('docsearch.js');

hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));

document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
});
