import React, { useContext } from 'react'
import NewsContext from '../Context/Context';

const NewsCard = ({Allnews}) => {

  const { dispatch} = useContext(NewsContext);
  const {title, description , url , urlToImage ,publishedAt , author} = Allnews ; 

  return (
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
            <img src= {urlToImage} className="img-fluid rounded-start" style={{height:"100%" , objectfit : "cover"}} alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">{author}</small></p>
                <p className="card-text">
                <small className="text-body-secondary">
                <span>
                  Date : {new Date(publishedAt).toDateString("en-in")}
                  <br />
                  Time : {new Date(publishedAt).toLocaleTimeString("en-in")}
                </span>
                </small>
                </p>
                <a target='_blank' href={url} className="btn btn-primary btn-sm">Read More</a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default NewsCard
