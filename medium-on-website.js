const API_URL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40giacintocarlucci&api_key=kgpvqeytkvzw21wkppfr58bfc5arfamrrfqep6ai";
const AUTHOR_THUMBNAIL = "https://cdn-images-1.medium.com/fit/c/48/48/1*dtPbC22wRpXa0HDha3pGeA.jpeg"
var feedData = {}

const formatDate = (date) => {
	// Date formatting options
	var options = {year: 'numeric', month: 'long', day: 'numeric' };
	var dateFormatted = new Date(date);
	// Format: monthname daynumber, year
	dateFormatted = dateFormatted.toLocaleDateString('en', options);
	dateFormatted = dateFormatted.toString();
	return dateFormatted;
}

const trimContent = (content) => {
	// removes images from content
	let plainText = content.replace(/<img[^>]*>/g, "");
	// max content length
	let maxLength = 400
	let trimmedString = plainText.substr(0, maxLength);
	trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
	return trimmedString;
}

const displayHeader = (data) => {
	let title = data.feed.title;
	let header = document.getElementById("header");
	header.innerHTML = title;
}

const displayPosts = (data) => {
	let postsArray = data.items;
	let postsContainer = document.getElementById("posts");

	postsArray.map((post) => {

		let HTMLPost = 
		`
			<div id="post-container">
				<div id="post-header">
					<div id="post-author-image">
						<img src="${AUTHOR_THUMBNAIL}" alt="${post.author}"/>
					</div>
					<div id="post-author-info">
						<div id="post-author">
							${post.author}
						</div>
						<div id="post-date">
							${formatDate(post.pubDate)}
						</div>
					</div>
				</div>
				<img id="post-image" src="${post.thumbnail}" alt="${post.title}"/>
				<div id="post-title">
					${post.title}
				</div>
				<div id="post-content">
					${trimContent(post.description)}...
					<p id="post-link">
						<a href="${post.link}"> Continue reading... </a>
					</p>
				</div>
			</div>
		`
		postsContainer.innerHTML += HTMLPost;
	})
}

fetch(API_URL)
	.then(response => response.json())
	.then(data => {
		displayHeader(data);
		displayPosts(data);
	})
