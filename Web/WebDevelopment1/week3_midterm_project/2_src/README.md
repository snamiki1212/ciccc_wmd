## Overview

Cloned for below site.

- [ CSS-Tricks ](https://css-tricks.com/)

## Pages

- [index.html](index.html)
- [article.html](article.html)
- [profile.html](profile.html)

## TIL

### share

- Clipping
  - `css: {clip-path: polygon(<param>)}`
  - Create a clipping region easily.
  - https://bennettfeely.com/clippy/
- Shadow
  1. filter
  - `css: {filter: drop-shadow(<x-param>, <y-param>, <blur-radius>, color)}`
  - https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow()
  2. box-shadow
- Pesudo class: before/after
  - if we want to put something design item, it's better to use `after/before` pesudo class.
  - ex: <body:before> => background
  - ex: <div:after> => design item
  - ex: <img > => not working on img tag
    - https://stackoverflow.com/a/5843078/8842333
- Hover and change color
  - css: `a:hover {opacity: .6}`
- Beautiful Img
  - `mix-blend-mode`
  - Awesome decoration and beautifull img!!
  - Simple img on css:`div:after { background: linear-gradient(<params>)}`
  - https://codepen.io/snamiki1212/pen/xxEewjy

### etc

- DevTool: `hover`
  - Active hover propery and we can check :hover property or another pesudo class like :hover, :active, :focus and etc...
  - https://stackoverflow.com/questions/4515124/see-hover-state-in-chrome-developer-tools
- Label
  - Display 1px label even if this is not visible because it's too smal.
  - the reason is maybe for SEO?
- Default top font-size on html for rem
  - 16px
  - https://stackoverflow.com/a/24542625/8842333
