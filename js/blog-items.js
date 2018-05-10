const blogData = [
  { href: "articles.html", src: "img/articles/1.jpg", title: "Titre de l'article", intro: " Les quelques premières ligne de l'artcile en tant qu'intro [...]"},
  { href: "articles.html", src: "img/articles/2.jpg", title: "Titre de l'article", intro: " Les quelques premières ligne de l'artcile en tant qu'intro [...]"},
  { href: "articles.html", src: "img/articles/3.jpg", title: "Titre de l'article", intro: " Les quelques premières ligne de l'artcile en tant qu'intro [...]"},
  { href: "articles.html", src: "img/articles/4.jpg", title: "Titre de l'article", intro: " Les quelques premières ligne de l'artcile en tant qu'intro [...]"},
  { href: "articles.html", src: "img/articles/5.jpg", title: "Titre de l'article", intro: " Les quelques premières ligne de l'artcile en tant qu'intro [...]"},
  { href: "articles.html", src: "img/articles/6.jpg", title: "Titre de l'article", intro: " Les quelques premières ligne de l'artcile en tant qu'intro [...]"},
  { href: "articles.html", src: "img/articles/7.jpg", title: "Titre de l'article", intro: " Les quelques premières ligne de l'artcile en tant qu'intro [...]"},
  { href: "articles.html", src: "img/articles/8.jpg", title: "Titre de l'article", intro: " Les quelques premières ligne de l'artcile en tant qu'intro [...]"},
  { href: "articles.html", src: "img/articles/9.jpg", title: "Titre de l'article", intro: " Les quelques premières ligne de l'artcile en tant qu'intro [...]"},
  { href: "articles.html", src: "img/articles/10.jpg", title: "Titre de l'article", intro: " Les quelques premières ligne de l'artcile en tant qu'intro [...]"},
]

//creation du template html
const createItems = blog => {

  return `<div class="col-sm-12 col-md-6 col-lg-4">
            <a href="${blog.href}">
              <div class="thumbnail">
                <img src="${blog.src}" alt="...">
                <div class="caption">
                  <h3>${blog.title}</h3>
                  <p>${blog.intro}
                  </p>
                </div>
              </div>
            </a>
          </div>`

}

const createdItems = blogData.map(createItems).join("")

const blogContainer = document.querySelector("#blog")
blogContainer.innerHTML = createdItems
