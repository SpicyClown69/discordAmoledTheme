//Paste this into the discord console
var e = document.documentElement;
var observer = new MutationObserver(function (event) {
  document.documentElement.classList.replace("theme-dark","theme-amoled");
  if (document.querySelector("[aria-labelledby='uid_14']")) {
    document.querySelector("[aria-labelledby='uid_14']").children[0].children[0].children[1].children[0].innerText = "Amoled";
  }
});

observer.observe(e, {
  attributes: true, 
  attributeFilter: ['class'],
  childList: false, 
  characterData: false
});




/* Spoiler fix */document.body.insertAdjacentHTML("beforeend",`<style>.theme-amoled .spoilerText-27bIiA {background-color: hsla(0, calc(var(--saturation-factor, 1)*0%), 100%, .1)}.theme-amoled .spoilerText-27bIiA.hidden-3B-Rum {background-color: hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%)}.theme-amoled .spoilerText-27bIiA.hidden-3B-Rum:hover {background-color: hsla(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%, .8)}.theme-amoled .spoilerWarning-8ovW0v {color: hsl(210, calc(var(--saturation-factor, 1)*2.9%), 86.7%);background-color: hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, .6)}.theme-amoled .spoilerContainer-3wsC0k:hover .spoilerWarning-8ovW0v {color: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);background-color: hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, .9)}.theme-amoled .spoilerContainer-3wsC0k.hidden-3B-Rum:not(:focus) {-webkit-box-shadow: .5px .5px 1px 1px hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, .1);box-shadow: .5px .5px 1px 1px hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, .1)}</style>`) ;
/* Register better code font */document.body.insertAdjacentHTML("beforeend",`<style>/* cyrillic-ext */@font-face {  font-family: 'JetBrains Mono';  font-style: normal;  font-weight: 400;  font-display: swap;  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2) format('woff2');  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}/* cyrillic */@font-face {  font-family: 'JetBrains Mono';  font-style: normal;  font-weight: 400;  font-display: swap;  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTPlOVgaY.woff2) format('woff2');  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}/* greek */@font-face {  font-family: 'JetBrains Mono';  font-style: normal;  font-weight: 400;  font-display: swap;  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOVOVgaY.woff2) format('woff2');  unicode-range: U+0370-03FF;}/* vietnamese */@font-face {  font-family: 'JetBrains Mono';  font-style: normal;  font-weight: 400;  font-display: swap;  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTNVOVgaY.woff2) format('woff2');  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}/* latin-ext */@font-face {  font-family: 'JetBrains Mono';  font-style: normal;  font-weight: 400;  font-display: swap;  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTNFOVgaY.woff2) format('woff2');  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}/* latin */@font-face {  font-family: 'JetBrains Mono';  font-style: normal;  font-weight: 400;  font-display: swap;  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOlOV.woff2) format('woff2');  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>`);
/* Better hljs and apply font change */document.body.insertAdjacentHTML("beforeend",`<style> .theme-amoled code, .theme-amoled .codeLine-2C-9aH, .theme-amoled .inlineCode-ERyvy_ { font-family: 'JetBrains Mono' !important } .theme-amoled .hljs{display:block;overflow-x:auto;padding:1em}.theme-amoled .hljs{padding:3px 5px}.theme-amoled .hljs{color:#abb2bf;background:#282c34 !important}.theme-amoled .hljs-comment,.theme-amoled .hljs-quote{color:#5c6370;font-style:italic}.theme-amoled .hljs-doctag,.theme-amoled .hljs-formula,.theme-amoled .hljs-keyword{color:#c678dd}.theme-amoled .hljs-deletion,.theme-amoled .hljs-name,.theme-amoled .hljs-section,.theme-amoled .hljs-selector-tag,.theme-amoled .hljs-subst{color:#e06c75}.theme-amoled .hljs-literal{color:#56b6c2}.theme-amoled .hljs-addition,.theme-amoled .hljs-attribute,.theme-amoled .hljs-meta .theme-amoled .hljs-string,.theme-amoled .hljs-regexp,.theme-amoled .hljs-string{color:#98c379}.theme-amoled .hljs-attr,.theme-amoled .hljs-number,.theme-amoled .hljs-selector-attr,.theme-amoled .hljs-selector-class,.theme-amoled .hljs-selector-pseudo,.theme-amoled .hljs-template-variable,.theme-amoled .hljs-type,.theme-amoled .hljs-variable{color:#d19a66}.theme-amoled .hljs-bullet,.theme-amoled .hljs-link,.theme-amoled .hljs-meta,.theme-amoled .hljs-selector-id,.theme-amoled .hljs-symbol,.theme-amoled .hljs-title{color:#61aeee}.theme-amoled .hljs-built_in,.theme-amoled .hljs-class .theme-amoled .hljs-title,.theme-amoled .hljs-title.class_{color:#e6c07b}.theme-amoled .hljs-emphasis{font-style:italic}.theme-amoled .hljs-strong{font-weight:700}.theme-amoled .hljs-link{text-decoration:underline} </style>`);
/* autocomplete fix */document.body.insertAdjacentHTML("beforeend",`<style> .autocomplete-3jLKbj {background-color:var(--background-secondary)}</style>`);
