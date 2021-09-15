import React, { Component } from "react";


export default class NewsItem extends Component {
  
  
  render() {
    let { title, description , imageUrl,newsUrl} = this.props;
    return (
      
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://images.hindustantimes.com/img/2021/09/15/1600x900/468b16e2-fdb8-11eb-8b67-82884559fd4c_1631710925079_1631710939960.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More 
            </a>
          </div>
        </div>
       
      </div>
    );
  }
  
}
