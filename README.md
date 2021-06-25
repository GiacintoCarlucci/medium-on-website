# Medium on Website

<p align="center"><img src="https://user-images.githubusercontent.com/37305243/122671739-669a8880-d1c8-11eb-858c-bc3f8b94be5f.png" width=450></p>

📕 The simplest and most customizable way to show Medium blog posts on your website (and that's responsive)

Medium.com does not have a quick way to have your stories on your personal website... **BUT** it gives you a rss feed.\
This means that your stories can be retrieved, parsed and restyled as you want.

Fortunately **medium-on-website** solves the problem in a quick way.

## How to use
It's so simple that you just need 3 steps:

- Set your [rss2json](https://rss2json.com/) account
- Change the API_URL in medium-on-website.js
- Load the script in the HTML file

### Set your rss2json account

- Sign up to [rss2json](https://rss2json.com/), then add your Medium rss link link in [/me/feeds/](https://rss2json.com/me/feeds) page. For example, mine is `https://medium.com/feed/@giacintocarlucci`.

<p align="center"><img src="https://user-images.githubusercontent.com/37305243/122592476-96c91680-d064-11eb-9426-ff0836ec33fe.png" width=700></p>


- Click on the little eye icon on the right and copy your API_URL.

<p align="center"><img src="https://user-images.githubusercontent.com/37305243/122592570-ba8c5c80-d064-11eb-992c-6e20b87a99ab.png" width=700></p>


**Extra:** you will have 10.000 requests per day with the free plan (which is a ton), but if you want to prevent unhautorized use you can add restriction within IP addresses or HTTP referrers in [/me/api_key/](https://rss2json.com/me/api_key) page.

<p align="center"><img src="https://user-images.githubusercontent.com/37305243/122592646-dbed4880-d064-11eb-9cf8-66b3084f8365.png" width=700></p>


### Change the API_URL

- Open the **medium-on-website.js** file and change the `API_URL` const with the one you just copied at the previous step.

### Load the script in the HTML file

If you are building the page from scratch, you can just use the **index.html** example file as starting point.\
If you want to add Medium blog posts in an existing page, you will at least need to:

- import the stylesheet and script in head section:

```html
<link rel="stylesheet" href="style.css"/>
<script type="text/javascript" src="./medium-on-website.js"></script>
```

- have one div in the body section with 'posts' id: 

```html
<div id="posts" data-theme="light"></div>
```

If you want, you can import Google fonts used in the stylesheet (or change them):

```html
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Palanquin:wght@700&family=Roboto&display=swap" rel="stylesheet"> 
```

## Customization

### Dark mode

To enable dark mode posts, just change the `<div id="posts" data-theme="light"></div>` to `<div id="posts" data-theme="dark"></div>`\
in your html file.

As the css file is very intuitive, you can also modify it to change the main colors of light and dark mode:

```css
/* light mode */
:root {
  --color-primary: #000;
  --color-background: #fff;
  --color-border: rgba(0, 0, 0, 0.1)
}

/* dark mode */
[data-theme="dark"] {
  --color-primary: #eee;
  --color-background: #292929;
  --color-border: #555555;
}
```

## TODO

- [x] more robust api calls
- [x] dark mode
- [ ] compact layout



<p align="right">icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
