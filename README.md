# Medium on Website

<p align="center"><img src="https://user-images.githubusercontent.com/37305243/125170279-85c87c80-e1ae-11eb-9048-101cbb4da07a.gif"></p>

📕 The simplest and most customizable way to show Medium blog posts on your website (and that's responsive)

Medium.com does not have a quick way to have your stories on your personal website... **BUT** it gives you a rss feed.\
This means that your stories can be retrieved, parsed and restyled as you want.

Fortunately **medium-on-website** solves the problem in a quick way.

## Table of contents
* [How to use](#how-to-use)
  * [Set your rss2json account](#set-your-rss2json-account)
  * [Change the API_URL](#change-the-api_url)
  * [Load the script in the HTML file](#load-the-script-in-the-html-file)
* [Customization](#customization)
  * [Themes](#themes)
  * [Templates](#templates)
* [Expand](#expand)
  * [Add new themes](#add-new-themes)
  * [Add new templates](#add-new-templates) 
* [TODO](#todo)

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
<div id="posts"></div>
```

If you want, you can import Google fonts used in the stylesheet (or change them):

```html
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Palanquin:wght@700&family=Roboto&display=swap" rel="stylesheet"> 
```

## Customization

### Themes

To change the post theme, just use the `data-theme` attribute in the main div of the **index.html** file.\
You can choose beween the following themes:

| theme  | background | text       | border     | link       |
| ------ | :--------: | :--------: | :--------: | :--------: |
| light  | ![#FFFFFF] | ![#000000] | ![#DDDDDD] | ![#0373B7] |
| dark   | ![#292929] | ![#EEEEEE] | ![#555555] | ![#46A7E1] |
| batman | ![#282E3C] | ![#FDFF00] | ![#242424] | ![#46A7E1] |

### Templates

To change the post layout, you can use the provided templates using the `data-template` attribute in the main div of the **index.html** file\
The available templates are the following:

- classic
- compact
- mini

## Expand 

### Add new Themes

As the css file is very intuitive, you can easily add your themes:

```css
/* light mode */
:root {
  --color-primary: #000000;
  --color-background: #ffffff;
  --color-border: #dddddd;
  --color-link: #0373b7;
}

/* dark mode */
[data-theme="dark"] {
  --color-primary: #eeeeee;
  --color-background: #292929;
  --color-border: #555555;
  --color-link: #46a7e1;
}

/* your custom theme */
[data-theme="custom"] {
  --color-primary: ???;
  --color-background: ???;
  --color-border: ???;
  --color-link: ???;
}

```

### Add new Templates

If you want to create your custom template just take in example one of the current templates and adjust the code accordingly, every template is an arrow function that returns an html string + the info passed with postData parameter:

```javascript
const getClassicPost = (postData) => {
  let template = 
  `
    <div id="post-container">
      <div id="post-header">
        <div id="post-author-image">
          <img src="${postData.authorImage}" alt="${postData.authorName}"/>
        </div>
        <div id="post-author-info">
          <div id="post-author">
            ${postData.authorName}
          </div>
          <div id="post-date">
            ${formatDate(postData.postDate)}
          </div>
        </div>
      </div>
      <img id="post-image" src="${postData.postImage}" alt="${postData.postTitle}"/>
      <div id="post-title">
        ${postData.postTitle}
      </div>
      <div id="post-content">
        ${trimContent(postData.postDescription)}...
        <p id="post-link">
          <a href="${postData.postLink}"> Continue reading... </a>
        </p>
      </div>
    </div>
  `
  return template;
}
```

Do not forget to add the new template name to the switch case in displayPosts function:

```javascript
/*...*/
switch(postTemplate){
      case "classic":
        HTMLPost = getClassicPost(postData)
        break;
      case "compact":
        HTMLPost = getCompactPost(postData)
        break;
      case "custom":
        /* calling your custom template function*/
        HTMLPost = getCustomPost(postData)
        break;
      default:
        HTMLPost = getClassicPost(postData)
    }
/*...*/
```

## TODO

- [x] 💪 more robust api calls
- [x] 🌗 light/dark theme
- [x] 🦇 batman theme
- [x] 👌 compact layout
- [x] 🤏 mini layout

<p align="right">icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>

[//]: # (Place the Hex color you want in the url below, returns a square 25x25 of the specified color)
[#FFFFFF]: https://via.placeholder.com/25/FFFFFF?text=+
[#000000]: https://via.placeholder.com/25/000000?text=+
[#DDDDDD]: https://via.placeholder.com/25/DDDDDD?text=+
[#0373B7]: https://via.placeholder.com/25/0373B7?text=+
[#292929]: https://via.placeholder.com/25/292929?text=+
[#EEEEEE]: https://via.placeholder.com/25/EEEEEE?text=+
[#555555]: https://via.placeholder.com/25/555555?text=+
[#46A7E1]: https://via.placeholder.com/25/46A7E1?text=+
[#282E3C]: https://via.placeholder.com/25/282E3C?text=+
[#FDFF00]: https://via.placeholder.com/25/FDFF00?text=+
[#242424]: https://via.placeholder.com/25/242424?text=+
