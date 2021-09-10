import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NewsItem extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    let { title, description , imageUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}