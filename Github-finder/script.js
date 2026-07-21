const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");
const profile = document.getElementById("profile");

searchBtn.addEventListener("click", () => {
    getProfile(usernameInput.value);
});

usernameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getProfile(usernameInput.value);
    }
});

async function getProfile(username) {

    if (username.trim() === "") {
        profile.innerHTML = "<p>Please enter a username.</p>";
        return;
    }

    try {

        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        if (!response.ok) {
            profile.innerHTML = "<p>User not found.</p>";
            return;
        }

        profile.innerHTML = `
            <img src="${data.avatar_url}" alt="${data.login}">
            <h2>${data.name || data.login}</h2>
            <p>${data.bio || "No bio available"}</p>

            <br>

            <p>📍 ${data.location || "Unknown"}</p>
            <p>👥 Followers: ${data.followers}</p>
            <p>👤 Following: ${data.following}</p>
            <p>📚 Public Repositories: ${data.public_repos}</p>

            <br>

            <a href="${data.html_url}" target="_blank">
                View GitHub Profile
            </a>
        `;

    } catch (error) {
        profile.innerHTML = "<p>Something went wrong.</p>";
    }

}