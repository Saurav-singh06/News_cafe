import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger" style ={{left:'90%',zIndex:'1'}}>
            
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img
            src={
              !imageUrl
                ? "https://images.hindustantimes.com/img/2021/09/15/1600x900/468b16e2-fdb8-11eb-8b67-82884559fd4c_1631710925079_1631710939960.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toDateString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
