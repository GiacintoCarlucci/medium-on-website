# medium-on-website
📕 The simplest and most customizable way to show Medium blog posts on your website (and that's responsive)

Medium.com does not have a quick way to have your stories on your personal website... **BUT** it gives you a rss feed.\
This means that your stories can be retrieved, parsed and restyled as you want.

Fortunately **medium-on-website** solves the problem in a quick way.

## How to use
It's so simple that you just need 3 steps:

1. Set your [rss2json](https://rss2json.com/) account
2. Change the API_URL in medium-on-website.js
3. Load the script in the HTML file

### Set your rss2json account

- Sign up to [rss2json](https://rss2json.com/), then add your Medium rss link link in [/me/feeds/](https://rss2json.com/me/feeds) page. For example, mine is `https://medium.com/feed/@giacintocarlucci`.
- Click on the little eye icon on the right and copy your API_URL.

**Extra:** you will have 10.000 requests per day with the free plan (which is a ton), but if you want to prevent unhautorized use you can add restriction within IP addresses or HTTP referrers in [/me/api_key/](https://rss2json.com/me/api_key) page.

### Change the API_URL

- Open the **medium-on-website.js** file and change the `API_URL` const with the one you just copied at the previous step.

### Load the script in the HTML file

If you are building the page from scratch, you can just use the **index.html** example file as starting point.\
If you want to add Medium blog posts in an existing page, you will at least need to:

- import the stylesheet in the head section: `<link rel="stylesheet" href="style.css"/>`
- import the script in the head section: `<script type="text/javascript" src="./medium-on-website.js"></script>`
- have two divs in the body section: `<div id="header"></div>` and `<div id="posts"></div>`

If you want, you can import Google fonts used in the stylesheet (or change them):

```
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Palanquin:wght@700&family=Roboto&display=swap" rel="stylesheet"> 
```

## Customization

You can easily customize the HTML post layout and css without any effort, just make your changes to **medium-on-website.js** and **style.css** accordingly.

## TODO

- [ ] more robust api calls
- [ ] dark mode
- [ ] compact layout
