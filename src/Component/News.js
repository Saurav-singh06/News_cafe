import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "8",
    category: "general",
  };

  PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  // articles= [

  // ]

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - Newz_Cafe`;
  }

  async updateNews() {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da07ee5053bb4cc2b6f61dba3daa5ea1&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData)
    // this.setState({articles: parsedData.articles,
    // totalResults: parsedData.totalResults,
    // loading :false
    // })
    this.updateNews();
  }

  handlerPrevClick = async () => {
    console.log("prev");

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da07ee5053bb4cc2b6f61dba3daa5ea1&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData)

    // this.setState({
    //     page : this.state.page - 1,
    //     articles: parsedData.articles,
    //     loading :false
    // })
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handlerNextClick = async () => {
    console.log("Next");
    //     if(!(this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize))){

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da07ee5053bb4cc2b6f61dba3daa5ea1&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json()

    //     this.setState({
    //         page : this.state.page +1,
    //         articles: parsedData.articles,
    //         loading:false
    //     })
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h3>News -{this.capitalizeFirstLetter(this.props.category)}</h3>
        {/* {this.state.loading && <Spinner/>} */}
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.le !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row ">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>

      // {/* <div className="container d-flex justify-content-end my-5">
      //     <button
      //       disabled={this.state.page <= 1}
      //       type="button"
      //       className="btn btn-dark"
      //       onClick={this.handlerPrevClick}
      //     >
      //       &larr; Previous
      //     </button>
      //     <button
      //       disabled={
      //         this.state.page + 1 >
      //         Math.ceil(this.state.totalResults / this.props.pageSize)
      //       }
      //       type="button"
      //       className="btn btn-dark mx-3"
      //       onClick={this.handlerNextClick}
      //     >
      //       Next &rarr;
      //     </button>
      //   </div> */}
    );
  }
}
