import React from 'react'

const NewsCardsLayout = (props) => {

    return (
        props.news.map(newsitem => {
           return (
            <div class="col mb-4">
              <div class="card">
              <a href={newsitem.url}>
               <img src={newsitem.urlToImage} class="card-img-top"></img>
              </a>
                <div class="card-body">
                    <h5 class="card-title">{newsitem.title}</h5>
                    <p class="card-text">{newsitem.description}</p>
                    <p className="card-text"><small className="text-muted">{newsitem.author} {newsitem.publishedAt}</small></p>
                    <a href={newsitem.url}>more info</a>
                </div>
            </div>
            </div>
           )
        }
    )
)
}

export default NewsCardsLayout