const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21323
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 43214
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 12252
    },
        {
        name: "Andy Warhol",
        username: "warhol77",
        location: "Pittsburgh, USA",
        avatar: "images/avatar-warhol.jpg",
        post: "images/post-warhol.jpg",
        comment: "I would rather watch somebody buy their underwear than read a book they wrote.",
        likes: 13452
    },
        {
        name: "Edvard Munch",
        username: "EdMunch",
        location: "Ådalsbruk, Norway",
        avatar: "images/avatar-edvard.jpg",
        post: "images/post-edvard.jpg",
        comment: "I was walking along a path with two friends – the sun was setting – suddenly the sky turned blood red – I paused, feeling exhausted, and leaned on the fence – there was blood and tongues of fire above the blue-black fjord and the city – my friends walked on, and I stood there trembling with anxiety – and I sensed an infinite scream passing through nature.",
        likes: 15221
    }
]

const postsDagram = document.querySelector("#oldagram-posts")

for (let i = 0; i < posts.length; i++) {
    postsDagram.innerHTML += `
        <section>
            <div class="user-container">
                <img src="${posts[i].avatar}" alt="User avatar" class="user-avatar">
                <div class="user-wrapper">
                    <h4>${posts[i].name}</h4>
                    <p>${posts[i].location}</p>
                </div>
            </div>

            <img src="${posts[i].post}" class="post-img heart-icon" data-index="${i}">

            <div class="social-btn">
                <img src="/images/icon-heart.png" alt="Love this post" class="social-icon heart-icon" data-index="${i}">
                <img src="/images/icon-comment.png" alt="Comment this post" class="social-icon">
                <img src="images/icon-dm.png" alt="Share this post" class="social-icon">
            </div>

            <div class="likes-comments" id="likes-${i}">
                <h4>${posts[i].likes} likes</h4>
                <h4>${posts[i].username}<small>${posts[i].comment}</small></h4>
            </div>
        </section>
    `
}

document.querySelectorAll('.heart-icon').forEach(function(icon) {
    icon.addEventListener('dblclick', function() {
        const postIndex = this.getAttribute('data-index')
        posts[postIndex].likes += 1
        document.querySelector(`
            #likes-${postIndex} h4`).textContent = `${posts[postIndex].likes} likes
        `
    })
})