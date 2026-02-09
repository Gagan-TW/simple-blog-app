const storedPosts = localStorage.getItem("posts");
const posts = storedPosts ? JSON.parse(storedPosts) : [];

const titleInput = document.getElementById("titleInput");
const contentInput = document.getElementById("contentInput");
const addPostBtn = document.getElementById("addPostBtn");
const updateIdInput = document.getElementById("updateIdInput");
const updateTitleInput = document.getElementById("updateTitleInput");
const updateContentInput = document.getElementById("updateContentInput");
const updatePostBtn = document.getElementById("updatePostBtn");
const postsContainer = document.getElementById("posts");

function renderPosts() {
	postsContainer.innerHTML = "";

	for (let i = 0; i < posts.length; i += 1) {
		const post = posts[i];
		const postEl = document.createElement("article");
		const titleEl = document.createElement("h2");
		const contentEl = document.createElement("p");
		const deleteBtn = document.createElement("button");

		titleEl.textContent = post.title;
		contentEl.textContent = post.content;
		deleteBtn.textContent = "Delete";
		deleteBtn.type = "button";
		deleteBtn.addEventListener("click", () => deletePost(post.id));

		postEl.appendChild(titleEl);
		postEl.appendChild(contentEl);
		postEl.appendChild(deleteBtn);
		postsContainer.appendChild(postEl);
	}
}

function deletePost(id) {
	if (!posts.length) {
		alert("No posts exist.");
		return;
	}

	const originalLength = posts.length;
	const filteredPosts = posts.filter((post) => post.id !== id);

	if (filteredPosts.length === originalLength) {
		alert("Post with this ID does not exist.");
		return;
	}

	posts.length = 0;
	posts.push(...filteredPosts);
	localStorage.setItem("posts", JSON.stringify(posts));
	renderPosts();
}

function createPost() {
	const title = titleInput.value.trim();
	const content = contentInput.value.trim();

	if (!title || !content) {
		alert("Please fill in both the title and content.");
		return;
	}

	let newId = 1;
	if (posts.length) {
		let maxId = posts[0].id;
		for (let i = 1; i < posts.length; i += 1) {
			if (posts[i].id > maxId) {
				maxId = posts[i].id;
			}
		}
		newId = maxId + 1;
	}

	const newPost = {
		id: newId,
		title,
		content
	};

	posts.push(newPost);
	localStorage.setItem("posts", JSON.stringify(posts));
	renderPosts();

	titleInput.value = "";
	contentInput.value = "";
}

function updatePost() {
	if (!posts.length) {
		alert("No posts exist.");
		return;
	}

	const idValue = Number(updateIdInput.value);
	const newTitle = updateTitleInput.value.trim();
	const newContent = updateContentInput.value.trim();

	if (!idValue) {
		alert("Please enter a valid post ID.");
		return;
	}

	// if (!newTitle || !newContent) {
	// 	alert("Please fill in both the new title and new content.");
	// 	return;
	// }

	let foundIndex = -1;
	for (let i = 0; i < posts.length; i += 1) {
		if (posts[i].id === idValue) {
			foundIndex = i;
			break;
		}
	}

	if (foundIndex === -1) {
		alert("Post with this ID does not exist.");
		return;
	}

	posts[foundIndex].title = newTitle;
	posts[foundIndex].content = newContent;
	localStorage.setItem("posts", JSON.stringify(posts));
	renderPosts();

	updateIdInput.value = "";
	updateTitleInput.value = "";
	updateContentInput.value = "";
}

addPostBtn.addEventListener("click", createPost);
updatePostBtn.addEventListener("click", updatePost);

renderPosts();

