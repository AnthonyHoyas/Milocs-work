//Selecteurs


//Variables



//Fonctions


//Evenements

window.addEventListener('load', function () {
    fetch("https://api.realworld.io/api/articles")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let article of data.articles) {
            document.querySelector("#article_list").innerHTML += `                    <div class="article-preview">
            <div class="article-meta">
                <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
                <div class="info">
                    <a href="" class="author">Eric Simons</a>
                    <span class="date">January 20th</span>
                </div>
                <button class="btn btn-outline-primary btn-sm pull-xs-right">
                    <i class="ion-heart"></i> ${article.favoritesCount}
                </button>
            </div>
            <a href="" class="preview-link">
                <h1>${article.title}</h1>
                <p>${article.description}</p>
                <span>Read more...</span>
            </a>
        </div>`
            }
        })
})

