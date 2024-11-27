document.addEventListener("DOMContentLoaded", () => {
    const commentsContainer = document.getElementById("comments-container");
    const preloader = document.getElementById("comments-preloader");

    async function loadComments() {
        try {
            preloader.style.display = "block";

            const postId = Math.floor(Math.random() * 100) + 1;
            const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}&_limit=3`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`error code: ${response.status}`);
            }

            const comments = await response.json();

            commentsContainer.innerHTML = "";
            preloader.style.display = "none";

            comments.forEach(comment => {
                const commentElement = document.createElement("div");
                commentElement.classList.add("comment");

                commentElement.innerHTML = `
                    <article>
                        <h3>${comment.name}</h3>
                        <p><strong>email:</strong> ${comment.email}</p>
                        <p>${comment.body}</p>
                    </article>
                `;

                commentsContainer.appendChild(commentElement);
            });
        } catch (error) {
            preloader.style.display = "none";
            commentsContainer.innerHTML = `<div class="error">что-то не так =(</div>`;
        }
    }

    loadComments();
});