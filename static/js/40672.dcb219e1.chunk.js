(self.webpackChunklocal_client=self.webpackChunklocal_client||[]).push([[40672],{40672:()=>{!function(e){var a="(?:"+[/[a-zA-Z_\x80-\uFFFF][\w\x80-\uFFFF]*/.source,/-?(?:\.\d+|\d+(?:\.\d*)?)/.source,/"[^"\\]*(?:\\[\s\S][^"\\]*)*"/.source,/<(?:[^<>]|(?!<!--)<(?:[^<>"']|"[^"]*"|'[^']*')+>|<!--(?:[^-]|-(?!->))*-->)*>/.source].join("|")+")",n={markup:{pattern:/(^<)[\s\S]+(?=>$)/,lookbehind:!0,alias:["language-markup","language-html","language-xml"],inside:e.languages.markup}};function r(e,n){return RegExp(e.replace(/<ID>/g,(function(){return a})),n)}e.languages.dot={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m,greedy:!0},"graph-name":{pattern:r(/(\b(?:digraph|graph|subgraph)[ \t\r\n]+)<ID>/.source,"i"),lookbehind:!0,greedy:!0,alias:"class-name",inside:n},"attr-value":{pattern:r(/(=[ \t\r\n]*)<ID>/.source),lookbehind:!0,greedy:!0,inside:n},"attr-name":{pattern:r(/([\[;, \t\r\n])<ID>(?=[ \t\r\n]*=)/.source),lookbehind:!0,greedy:!0,inside:n},keyword:/\b(?:digraph|edge|graph|node|strict|subgraph)\b/i,"compass-point":{pattern:/(:[ \t\r\n]*)(?:[ns][ew]?|[ewc_])(?![\w\x80-\uFFFF])/,lookbehind:!0,alias:"builtin"},node:{pattern:r(/(^|[^-.\w\x80-\uFFFF\\])<ID>/.source),lookbehind:!0,greedy:!0,inside:n},operator:/[=:]|-[->]/,punctuation:/[\[\]{};,]/},e.languages.gv=e.languages.dot}(Prism)}}]);
//# sourceMappingURL=40672.dcb219e1.chunk.js.map